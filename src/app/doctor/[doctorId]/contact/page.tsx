import { notFound } from "next/navigation";
import Doctor ,{ drjayData, dranupamData } from "@/data/doctors";
import Contact from '@/app/components/doctor/Contact';
 


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
    params : { doctorId: string };
}

export async function generateStaticParams(){
    return [
        {doctorId: 'drjay'}, 
        {doctorId: 'dranupam'}, 
    ];
}

export async function generateMetadata({ params }: Props) {
    const doctor = getDoctorById(params.doctorId);

    if (!doctor){
        return {
            title: 'Doctor Not Found', 
        };
    }

    return {
        title: `Best ${doctor.personalDetails.speciality} in Delhi NCR`, 
        description: `Contact ${doctor.personalDetails.name} for any heart related diseases in your infants and babies. Call us now on ${doctor.contactDetails.phone}`, 
        openGraph: {
            title: `Best ${doctor.personalDetails.speciality} in Delhi NCR`, 
            description: `Contact ${doctor.personalDetails.name} for any heart related diseases in your infants and babies. Call us now on ${doctor.contactDetails.phone}`, 
            images: [doctor.personalDetails.imageUrl]
        }, 
    };
}

export default function DoctorContactPage({ params }: Props){
    const doctor = getDoctorById(params.doctorId);

    if (!doctor){
        notFound();
    }

    return <Contact doctor={doctor} />
} 