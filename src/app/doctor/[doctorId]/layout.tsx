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
  params: { doctorId: string };
}

export default function DoctorLayout({ children, params }: Props) {
  const doctor = getDoctorById(params.doctorId);
   
  
  if (!doctor) {
    notFound();
  }

  return (
    <div className={`min-h-screen doctor-theme-${params.doctorId}`}>
       <Header doctorId={params.doctorId} />
       <main className='flex-grow'>
        {children}
       </main>
      <Footer doctorId={params.doctorId} />
    </div>
  );
}