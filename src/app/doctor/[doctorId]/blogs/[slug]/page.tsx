import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { drjayData, dranupamData } from '@/data/doctors';
import Doctor from '@/data/doctors';
import BlogTemplate from '@/app/components/doctor/BlogTemplate';

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
function getBlogBySubdomainAndSlug(subdomain: 'drjay' | 'dranupam', slug: string) {
  return blogs.find(blog => blog.subdomain === subdomain && blog.slug === slug);
}

interface Props {
  params: { 
    doctorId: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const params = [];
  
  // Generate all possible combinations of doctorId and slug
  for (const blog of blogs) {
    params.push({
      doctorId: blog.subdomain,
      slug: blog.slug
    });
  }
  
  return params;
}

export async function generateMetadata({ params }: Props) {
  const doctor = getDoctorById(params.doctorId);
  const blog = getBlogBySubdomainAndSlug(params.doctorId as 'drjay' | 'dranupam', params.slug);
  
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
      images: [blog.imageUrl],
    },
  };
}

export default function BlogPage({ params }: Props) {
  const doctor = getDoctorById(params.doctorId);
  const blog = getBlogBySubdomainAndSlug(params.doctorId as 'drjay' | 'dranupam', params.slug);
  
  if (!doctor || !blog) {
    notFound();
  }
  
  return <BlogTemplate blog={blog}  />;
}