// subdomain's layout here

import { notFound } from 'next/navigation';
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors';
import Header from './header';
import Footer from './footer';

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
  children: React.ReactNode;
  params: Promise<{ doctorId: string }>;
}

export default async function DoctorLayout({ children, params }: Props) {
  const { doctorId } = await params;
  const doctor = getDoctorById(doctorId);


  if (!doctor) {
    notFound();
  }

  return (
    <div className={`min-h-screen doctor-theme-${doctorId}`}>
      <Header doctorId={doctorId} />
      <main className='flex-grow'>
        {children}
      </main>
      <Footer doctorId={doctorId} />
    </div>
  );
}