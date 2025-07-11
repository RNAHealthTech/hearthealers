import { notFound } from "next/navigation";
// import { services } from "@/data/services";
import Doctor, {drjayData, dranupamData} from "@/data/doctors";
import Services from '@/app/components/doctor/Services';

// function to get doctor data by ID 

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
    const {doctorId} = await params;
    const doctor = getDoctorById(doctorId);
    
    if (!doctor) {
      return {
        title: 'Doctor Not Found',
      };
    }
  
    return {
      title: `Service - ${doctor.personalDetails.name}`,
      description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
      openGraph: {
        title: `Service - ${doctor.personalDetails.name}`,
        description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
        images: [doctor.personalDetails.imageUrl],
      },
    };
  }
  
  export default async function ServicesPage({ params }: Props) {
    const {doctorId} = await params;
    const doctor = getDoctorById(doctorId);
    
    if (!doctor) {
      notFound();
    }
  
    
    return <Services />;
  }