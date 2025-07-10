import { notFound } from "next/navigation";
import { services } from "@/data/services";
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
  
  // Function to get blogs by subdomain
  function getBlogsBySubdomain(subdomain: 'drjay' | 'dranupam') {
    return services.filter(service => service.subdomain === subdomain);
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
      title: `Service - ${doctor.personalDetails.name}`,
      description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
      openGraph: {
        title: `Service - ${doctor.personalDetails.name}`,
        description: `Read latest medical insights and articles by ${doctor.personalDetails.name}`,
        images: [doctor.personalDetails.imageUrl],
      },
    };
  }
  
  export default function ServicesPage({ params }: Props) {
    const doctor = getDoctorById(params.doctorId);
    
    if (!doctor) {
      notFound();
    }
  
    
    return <Services />;
  }