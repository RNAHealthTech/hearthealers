// app/doctor/[doctorId]/blogs/page.tsx

import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs'; // Import ALL blogs
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors'; // Assuming this is your Doctor interface
import Blogs from '@/app/components/doctor/Blogs'; // Import your Blogs component

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

// REMOVE getBlogsBySubdomain from here, as Blogs component will do the filtering

interface Props {
  params: Promise<{ doctorId: string }>; // params is an object, not a Promise in page.tsx for direct access
}

export async function generateStaticParams() {
  return [
    { doctorId: 'drjay' },
    { doctorId: 'dranupam' },
  ];
}

export async function generateMetadata({ params }: Props) {
  // Access doctorId directly from params, not await
  const { doctorId } = await params;
  const doctor = getDoctorById(doctorId);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: `Blog - ${doctor.personalDetails.name}`,
    description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
    openGraph: {
      title: `Blog - ${doctor.personalDetails.name}`,
      description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
      images: [doctor.personalDetails.imageUrl],
    },
  };
}

export default async function BlogsPage({ params }: Props) {
  // Access doctorId directly from params, not await
  const {doctorId} = await params;
  const doctor = getDoctorById(doctorId);
  
  if (!doctor) {
    notFound();
  }

  // Pass ALL blogs and the specific doctorId to the Blogs component
  return <Blogs blogs={blogs} doctor={doctorId as 'drjay' | 'dranupam'} />;
}
 