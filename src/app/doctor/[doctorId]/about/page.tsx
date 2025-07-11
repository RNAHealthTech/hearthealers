import { notFound } from "next/navigation";
import Doctor ,{ drjayData, dranupamData } from "@/data/doctors";
import About from "@/app/components/doctor/About";


function getDoctorById(id: string): Doctor | null {
    switch(id){
        case 'drjay':
            return drjayData;
        case 'dranupam':
            return dranupamData;
        default:
            return null;
    }
}

interface Props {
    params: {doctorId: string};
}

export async function generateStaticParams(){
    return [
        {doctorId: 'drjay'}, 
        {doctorId: 'dranupam'}, 
    ];
}

export async function generateMetadata({ params }: Props){
    const { doctorId } = await params;
    const doctor = getDoctorById(doctorId);

    if (!doctor){
        return {
            title: 'Doctor not Found', 
        };
    }

    return {
        title:  `${doctor.personalDetails.name} -  Best Heart Doctor Near you`, 
        description: `Meet ${doctor.personalDetails.name} with  with ${doctor.totalExp} years experience`, 
        openGraph: {
            title:  `${doctor.personalDetails.name} -  Best Heart Doctor Near you`, 
            description: `Meet ${doctor.personalDetails.name} with  with ${doctor.totalExp} years experience`, 
            images: [doctor.personalDetails.imageUrl]
        }
       
    };
}

export default async function DoctorAboutPage({ params }: Props) {
    const { doctorId } = await params;
    const doctor = getDoctorById(doctorId);

    if (!doctor){
        notFound();
    }

    return <About doctor={doctor} />
}