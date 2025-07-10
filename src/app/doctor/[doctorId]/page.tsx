import { notFound } from 'next/navigation';
import { drjayData, dranupamData  } from '@/data/doctors';
import Doctor  from '@/data/doctors';
import Home from '@/app/components/doctor/Home';

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
  params: { doctorId: string };
}

export async function generateStaticParams() {
  return [
    { doctorId: 'drjay' },
    { doctorId: 'dranupam' },
  ];
}

export async function generateMetadata({ params }: Props) {
  const doctor = getDoctorById(params.doctorId);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: `${doctor.personalDetails.name} - ${doctor.personalDetails.speciality}`,
    description: ``,
    openGraph: {
      title: `${doctor.personalDetails.name} - ${doctor.personalDetails.speciality}`,
      description: ``,
      images: [doctor.personalDetails.imageUrl],
    },
  };
}

export default function DoctorHomePage({ params }: Props) {
  const doctor = getDoctorById(params.doctorId);
  
  if (!doctor) {
    notFound();
  }
  
  return <Home doctor={doctor} />;
}