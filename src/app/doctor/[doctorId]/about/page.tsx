import { notFound } from "next/navigation";
import Doctor, { drjayData, dranupamData } from "@/data/doctors";
import About from "@/app/components/doctor/About";

// Utility function to get doctor data by ID
function getDoctorById(id: string): Doctor | null {
  switch (id) {
    case "drjay":
      return drjayData;
    case "dranupam":
      return dranupamData;
    default:
      return null;
  }
}

// Define Props with params as a Promise
interface Props {
  params: Promise<{ doctorId: string }>;
}

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  return [
    { doctorId: "drjay" },
    { doctorId: "dranupam" },
  ];
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props) {
  const { doctorId } = await params; // Await params to resolve doctorId
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    return {
      title: "Doctor not Found",
    };
  }

  return {
    title: `${doctor.personalDetails.name} - Best Heart Doctor Near you`,
    description: `Meet ${doctor.personalDetails.name} with ${doctor.totalExp} years experience`,
    openGraph: {
      title: `${doctor.personalDetails.name} - Best Heart Doctor Near you`,
      description: `Meet ${doctor.personalDetails.name} with ${doctor.totalExp} years experience`,
      images: [doctor.personalDetails.imageUrl],
    },
  };
}

// Page component
export default async function DoctorAboutPage({ params }: Props) {
  const { doctorId } = await params; // Await params to resolve doctorId
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    notFound();
  }

  return <About doctor={doctor} />;
}