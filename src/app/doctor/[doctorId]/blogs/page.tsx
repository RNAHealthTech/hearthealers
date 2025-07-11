import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors';
import Blogs from '@/app/components/doctor/Blogs';

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

// Function to get blogs by subdomain
function getBlogsBySubdomain(subdomain: 'drjay' | 'dranupam') {
  return blogs.filter(blog => blog.subdomain === subdomain);
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
  const  { doctorId } = await params;
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
  const {doctorId} = await params;
  const doctor = getDoctorById(doctorId);
  
  if (!doctor) {
    notFound();
  }

  const doctorBlogs = getBlogsBySubdomain(doctorId as 'drjay' | 'dranupam');
  
  return <Blogs blogs={doctorBlogs} />;
}