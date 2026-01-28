import { notFound } from 'next/navigation';
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors';
import Home from '@/app/components/doctor/Home';
import JsonLd from '@/app/components/utilities/JsonLd';

// Function to get doctor data by ID
function getDoctorById(id: string): Doctor | null {
  switch (id) {
    case 'drjay':
      return drjayData;
    case 'dranupam':
      return dranupamData;
    default:
      return null;
  }
}

interface Props {
  params: Promise<{ doctorId: string }>;
}

export async function generateStaticParams() {
  return [
    { doctorId: 'drjay' },
    { doctorId: 'dranupam' },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { doctorId } = await params;
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: `${doctor.personalDetails.name} - ${doctor.personalDetails.speciality}`,
    description: `Consult with ${doctor.personalDetails.name}, an expert ${doctor.personalDetails.speciality} with ${doctor.totalExp} years of experience. ${doctor.bio.substring(0, 150)}...`,
    alternates: {
      canonical: `/doctor/${doctorId}`,
    },
    openGraph: {
      title: `${doctor.personalDetails.name} - ${doctor.personalDetails.speciality} | HeartHealers`,
      description: `Consult with ${doctor.personalDetails.name}, an expert ${doctor.personalDetails.speciality}. Book an appointment today.`,
      url: `https://hearthealers.in/doctor/${doctorId}`,
      siteName: 'HeartHealers',
      images: [
        {
          url: doctor.personalDetails.imageUrl,
          width: 800,
          height: 600,
          alt: doctor.personalDetails.name,
        },
      ],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doctor.personalDetails.name} | HeartHealers`,
      description: `Consult with ${doctor.personalDetails.name}, an expert ${doctor.personalDetails.speciality}.`,
      images: [doctor.personalDetails.imageUrl],
    },
  };
}

export default async function DoctorHomePage({ params }: Props) {
  const { doctorId } = await params;
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    notFound();
  }

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.personalDetails.name,
    "image": doctor.personalDetails.imageUrl,
    "description": doctor.personalDetails.description,
    "medicalSpecialty": doctor.personalDetails.speciality,
    "url": `https://hearthealers.in/doctor/${doctorId}`,
    "telephone": doctor.contactDetails.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": doctor.contactDetails.address,
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "knowsAbout": doctor.skills,
    "memberOf": [
      {
        "@type": "Organization",
        "name": "HeartHealers"
      }
    ]
  };

  return (
    <>
      <JsonLd data={physicianSchema} />
      <Home doctor={doctor} />
    </>
  );
}