import { notFound } from 'next/navigation';
import  { services }  from '@/data/services';
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors';
import ServiceTemplate from '@/app/components/doctor/ServiceTemplate';

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

// Function to get blog by subdomain and slug
function getServiceBySubdomainAndSlug(subdomain: 'drjay' | 'dranupam', slug: string) {
  return services.find(service => service.subdomain === subdomain && service.slug === slug);
}

interface Props {
  params: Promise<{ 
    doctorId: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  
  // Generate all possible combinations of doctorId and slug
  for (const service of services) {
    params.push({
      doctorId: service.subdomain,
      slug: service.slug
    });
  }
  
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { doctorId, slug } = await params;
  const doctor = getDoctorById(doctorId);
  const blog = getServiceBySubdomainAndSlug(doctorId as 'drjay' | 'dranupam', slug);
  
  if (!doctor || !blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} - ${doctor.personalDetails.name}`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} - ${doctor.personalDetails.name}`,
      description: blog.description,
       
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { doctorId, slug } = await params;
  const doctor = getDoctorById(doctorId);
  const blog = getServiceBySubdomainAndSlug(doctorId as 'drjay' | 'dranupam', slug);
  
  if (!doctor || !blog) {
    notFound();
  }
  
  return <ServiceTemplate  />;
}