// src/data/doctors.ts
export interface Education {
    degree: string;
    institution: string;
    duration: {
        start: string;
        end: string
    }
}

export interface Experience {
    role: string;
    department?: string;
    organization: string;
    duration: {
        start: string;
        end: string;
    }
}


export interface CurrentWorkExperience {
    role: string;
    department: string;
    organization: string;
    duration: {
        start: string;
        end: string;

    };

}

 
export interface Publication {
    title: string;
    journal: string;
    year?: number;
    authors? : string[];
    doi? : string;
}

export interface Research {
    title: string;
    description: string;
    publications: Publication[];
    
}

export interface PersonalDetails {
    name: string;
    speciality: string;
    description: string;
    imageUrl: string;
    imageUrl2: string;
    imageUrl3: string;
    backgroundImageUrl: string;
    age: number;
    gender: "Male" | "Female";
}

export interface ContactDetails {
    address?: string;
    phone?: string;
    email?: string;    
}

export interface Award {
    title: string; 
    year: string;
    category? : string;
}


export default interface Doctor {
    id: string;
    personalDetails: PersonalDetails;
    subdomain: string;
    h1: string;
    span: string;
    bio: string;
    bgVideo: string;
    education: Education[];
    pastExperience: Experience[];
    currentWorkExperience: CurrentWorkExperience[];
    research: Research[];
    awards: Award[];
    skills: string[];
    totalExp: string;
    contactDetails: ContactDetails;
    socialLinks : {
        linkedin? : string;
        instagram? : string;
    }
    offline: {
        hospital: string;
        schedules: {
            day: string;
            timing: string;
        }[];
    }[];
    onlineTiming: string;
    days: string[];
}
 
export const drjayData: Doctor = {
    id: "drjay",
    personalDetails: {
        name: "Dr. Jay Relan",
        speciality: "Pediatric Cardiologist",
        description: "Pediatric Cardiologist with extensive experience in congenital heart diseases, fetal echocardiography, and pediatric cardiac interventions. Gold medalist with 31 published research articles.",
        imageUrl: 'https://hearthealers.in/images/drjay.jpg',  
        imageUrl2: "", // To be added
        imageUrl3: "", // To be added
        backgroundImageUrl: "https://hearthealers.in/images/bg1.jpg", // To be added
        age: 35, // Estimated based on graduation timeline
        gender: "Male"
    },
    subdomain: "drjay",
    totalExp: '10+', 
    bgVideo: 'https://hearthealers.in/images/drjay-bg.mp4', 
    bio: "Dr. Jay Relan is a highly accomplished Pediatric Cardiologist with specialized training from AIIMS, New Delhi. He has completed his DM in Pediatric Cardiology (Gold Medalist), MD in Pediatrics (Gold Medalist), and MBBS (Gold Medalist). With over 31 published research articles and multiple national awards, Dr. Relan brings extensive expertise in managing complex congenital heart diseases, fetal cardiac screening, and pediatric cardiac interventions. He has completed advanced fellowships in fetal echocardiography and holds certifications from the Fetal Medicine Foundation, UK.",
    h1: "Best Care for Your Baby's Heart",
    span: "Leading Pediatric Cardiologist in Delhi NCR Dr Jay Relan",  
    education: [
        {
            degree: "DM - Pediatric Cardiology",
            institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
            duration: {
                start: "2016",
                end: "2019"
            }
        },
        {
            degree: "MD - Pediatrics",
            institution: "Maulana Azad Medical College (MAMC), Delhi",
            duration: {
                start: "2013",
                end: "2016"
            }
        },
        {
            degree: "MBBS",
            institution: "University College of Medical Sciences & GTB Hospital, Delhi",
            duration: {
                start: "2007",
                end: "2012"
            }
        }
    ],
    pastExperience: [
        {
            role: "Junior Resident",
            department: "Burns & Plastic Surgery",
            organization: "Guru Teg Bahadur Hospital, Delhi",
            duration: {
                start: "2013-01",
                end: "2013-03"
            }
        },
        {
            role: "Senior Resident",
            department: "Pediatrics",
            organization: "Super Speciality Paediatric Hospital & Post Graduate Teaching Institute, Noida",
            duration: {
                start: "2016-07",
                end: "2016-12"
            }
        },
        {
            role: "Senior Resident",
            department: "Cardiology",
            organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
            duration: {
                start: "2020-02",
                end: "2020-10"
            }
        },
        {
            role: "Assistant Professor",
            department: "Cardiology",
            organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
            duration: {
                start: "2020-10",
                end: "2022-02"
            }
        }
    ],
    currentWorkExperience: [
        {
            role: "Associate Consultant",
            department: "Pediatric Cardiac Sciences",
            organization: "Sir Ganga Ram Hospital, New Delhi",
            duration: {
                start: "2022-02",
                end: "2025-05"
            }
        }
    ],
    research: [
        {
            title: "Congenital Heart Disease Research",
            description: "Extensive research in pediatric cardiology including superior sinus venosus defects, congenital heart diseases management, fetal echocardiography, and cardiac interventions in children.",
            publications: [
                {
                    title: "Right superior caval vein to the left atrium in a child with vein of Galen malformation",
                    journal: "Echocardiography",
                    year: 2018,
                    authors: ["Relan J", "Gupta SK", "Saxena A"]
                },
                {
                    title: "Guidelines for the management of common congenital heart diseases in India: A consensus statement",
                    journal: "Indian Heart Journal",
                    year: 2019,
                    authors: ["Saxena A", "Relan J", "Agarwal R", "Awasthy N"]
                },
                {
                    title: "Long QT syndrome with AV Wenckebaching & bundle branch block in a neonate",
                    journal: "Indian Pacing and Electrophysiology Journal",
                    year: 2020,
                    authors: ["Relan J", "Gujral JS", "Reddy SS", "Parakh N"]
                },
                {
                    title: "Clarifying the anatomy of the superior sinus venosus defect",
                    journal: "Heart",
                    year: 2021,
                    authors: ["Relan J", "Gupta SK", "Rajagopal R", "Ramakrishnan S"]
                },
                {
                    title: "Prenatal Pericardiocentesis and Postnatal Sirolimus for a Giant Inoperable Cardiac Rhabdomyoma",
                    journal: "JACC: Case Reports", 
                    year: 2021,
                    authors: ["Relan J", "Swami M", "Rana A", "Chaudhary P"]
                }
            ]
        }
    ],
    awards: [
        {
            title: "Dr. Jagdish Lal Kapila Medal-2019 in Cardiology",
            year: "2020",
            category: "After Graduation"
        },
        {
            title: "Dr. Savitri Srivastav Imaging Award 2019",
            year: "2019",
            category: "After Graduation"
        },
        {
            title: "1st Position in Cardiology Quiz at 26th Annual conference of Indian College of Cardiology",
            year: "2019",
            category: "After Graduation"
        },
        {
            title: "Dr. Manoj Kapoor Memorial Medal Best PG student in Pediatrics",
            year: "2016",
            category: "After Graduation"
        },
        {
            title: "Pediatrics Torrent Young Scholar Award (National Round)",
            year: "2015",
            category: "After Graduation"
        },
        {
            title: "Gold Medal in DM Pediatric Cardiology",
            year: "2019",
            category: "Graduation"
        },
        {
            title: "Gold Medal in MD Pediatrics",
            year: "2016", 
            category: "Graduation"
        },
        {
            title: "Gold Medal in MBBS",
            year: "2012",
            category: "Graduation"
        }
    ],
    skills: [
        "Pediatric Cardiology",
        "Congenital Heart Disease Management",
        "Fetal Echocardiography",
        "Cardiac Interventions",
        "Pediatric Cardiac Surgery Planning",
        "Echocardiography",
        "Cardiac Catheterization",
        "Heart Failure Management",
        "Electrophysiology",
        "Research and Publications",
        "Medical Education"
    ],
    contactDetails: {
        address: "1071, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, YMCA Rd, near Escorts Mujesar Metro Station, Faridabad, Haryana 121006",
        phone: "+91 9868700886", // Not provided in CV
        email: "jay.relan@gmail.com" // Not provided in CV, as per instruction to not add multiple emails
    },
    socialLinks: {
        linkedin: "", // Not provided in CV
        instagram: "" // Not provided in CV
    },
    offline: [
        {
            hospital: "1071, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, YMCA Rd, near Escorts Mujesar Metro Station, Faridabad, Haryana 121006",
            schedules: [
                {
                    day: "Monday to Saturday",
                    timing: "10:00 AM - 4:00 PM"
                }
            ]
        }
    ],
    onlineTiming: "10:00 AM - 4:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
};

// Dr. Anupam Das data structured according to Doctor interface

export const dranupamData: Doctor = {
    id: "dranupam",
    personalDetails: {
        name: "Dr. Anupam Das",
        speciality: "Cardiothoracic & Vascular Surgeon",
        description: "Senior Consultant & Head of Cardiothoracic & Vascular Surgery with expertise in adult and congenital heart surgeries, minimally invasive cardiac procedures, and complex aortic surgeries.",
        imageUrl: "https://hearthealers.in/images/dranupam.jpg", // To be provided
        imageUrl2: "", // To be provided
        imageUrl3: "", // To be provided
        backgroundImageUrl: "https://hearthealers.in/images/bg1.jpg", // To be provided
        age: 39, 
        gender: "Male"
    },
    subdomain: "dranupam",
    totalExp: '15+', 
    bgVideo: 'https://hearthealers.in/images/dranupam-bg.mp4', 
    bio: "Dr. Anupam Das is a highly accomplished Cardiothoracic & Vascular Surgeon with extensive qualifications including MBBS, MS (General Surgery), MRCS (Edinburgh), MCh. CTVS (AIIMS), DNB (Cardiothoracic Surgery), MEBCTS, FRCS CTh. (Edinburgh), FACS, and FCCE. He has pioneered complex congenital heart surgery programs and minimally invasive cardiac surgery techniques. With over 2000 adult and congenital heart surgeries to his credit, Dr. Das specializes in advanced cardiac procedures, transplantation, and mechanical circulatory support systems.",
    h1: "Best Cardiothoracic Surgeon in Delhi NCR", 
    span: "Minimally Invasive Cardiac Surgery Expert Dr Anupam Das", 
    education: [
        {
            degree: "MBBS",
            institution: "Vardhman Mahavir Medical College, Safdarjung Hospital, New Delhi",
            duration: {
                start: "2004",
                end: "2009"
            }
        },
        {
            degree: "MRCS (Edinburgh, UK)",
            institution: "Royal College of Surgeons, Edinburgh",
            duration: {
                start: "2012",
                end: "2012"
            }
        },
        {
            degree: "MS (General Surgery)",
            institution: "Vardhman Mahavir Medical College, Safdarjung Hospital, New Delhi",
            duration: {
                start: "2010",
                end: "2013"
            }
        },
        {
            degree: "MCh. Cardiothoracic Vascular Surgery",
            institution: "All India Institute of Medical Sciences, New Delhi",
            duration: {
                start: "2014",
                end: "2017"
            }
        },
        {
            degree: "DNB (Cardiothoracic Surgery)",
            institution: "National Board of Examinations",
            duration: {
                start: "2018",
                end: "2018"
            }
        },
        {
            degree: "MEBCTS (Adult & Congenital Cardiac Surgery)",
            institution: "European Board of Cardiothoracic Surgery",
            duration: {
                start: "2020",
                end: "2020"
            }
        },
        {
            degree: "FRCS (Cardiothoracic Surgery)",
            institution: "Royal College of Surgeons, Edinburgh, UK",
            duration: {
                start: "2022",
                end: "2022"
            }
        },
        {
            degree: "FACS",
            institution: "American College of Surgeons",
            duration: {
                start: "2023",
                end: "2023"
            }
        },
        {
            degree: "FCCE",
            institution: "Indian College of Anaesthesiologists & Indian Association of Cardiovascular-Thoracic Surgeons",
            duration: {
                start: "2024",
                end: "2024"
            }
        }
    ],
    pastExperience: [
        {
            role: "Internship",
            department: "General Medicine",
            organization: "Vardhman Mahavir Medical College- Safdarjung Hospital, New Delhi",
            duration: {
                start: "February 15, 2008",
                end: "February 14, 2009"
            }
        },
        {
            role: "House Surgeon",
            department: "General Surgery",
            organization: "Vardhman Mahavir Medical College- Safdarjung Hospital, New Delhi",
            duration: {
                start: "June 2, 2010",
                end: "June 1, 2013"
            }
        },
        {
            role: "Senior Registrar",
            department: "Cardiothoracic Vascular Surgery",
            organization: "All India Institute of Medical Sciences, New Delhi",
            duration: {
                start: "July 1, 2014",
                end: "June 30, 2017"
            }
        },
        {
            role: "Associate Consultant",
            department: "Cardiothoracic Vascular Surgery",
            organization: "BLK MAX Superspeciality Hospital, New Delhi",
            duration: {
                start: "August 21, 2017",
                end: "January 31, 2020"
            }
        },
        {
            role: "Assistant Professor",
            department: "Cardiothoracic Vascular Surgery",
            organization: "All India Institute of Medical Sciences, Jodhpur, Rajasthan",
            duration: {
                start: "December 21, 2020",
                end: "June 30, 2024"
            }
        },
        {
            role: "Associate Professor",
            department: "Cardiothoracic Vascular Surgery",
            organization: "All India Institute of Medical Sciences, Jodhpur, Rajasthan",
            duration: {
                start: "July 1, 2024",
                end: "May 27, 2025"
            }
        }
    ],
    currentWorkExperience: [
        {
            role: "Senior Consultant & Head",
            department: "Cardiothoracic & Vascular Surgery",
            organization: "Sarvodaya Hospital & Research Centre, Faridabad, NCR",
            duration: {
                start: "June 2, 2025",
                end: "Present"
            }
        }
    ],
    research: [
        {
            title: "Cardiac Surgery and Congenital Heart Disease Research",
            description: "Extensive research in cardiothoracic surgery, congenital heart diseases, minimally invasive cardiac procedures, and innovative surgical techniques.",
            publications: [
                {
                    title: "Reviving Duran's Approach to Pericardial Valve Reconstruction in the Pulmonary Position Within the Right Ventricle-to-Pulmonary Artery Conduit: A Compelling Case Report",
                    journal: "Braz J Cardiovasc Surg",
                    year: 2025,
                    authors: ["Das A", "Sharma AK", "Mathur A"],
                    doi: "e20240123"
                },
                {
                    title: "An Alternative Non-Conduit Repair Strategy for Tetralogy of Fallot With Short Segment Pulmonary Atresia",
                    journal: "Cureus",
                    year: 2024,
                    authors: ["Das A", "Rajagopal R", "Rajashekar P"],
                    doi: "10.7759/cureus.63241"
                },
                {
                    title: "Acute Cerebellitis and Obstructive Hydrocephalus: An Unseen Neurological Complication After Surgical Repair for Tetralogy of Fallot",
                    journal: "Cureus",
                    year: 2024,
                    authors: ["Das A"],
                    doi: "10.7759/cureus.62355"
                },
                {
                    title: "Scimitar Syndrome: Variations in anatomy and challenges in surgical repairs",
                    journal: "IOSR Journal of Dental and Medical Sciences",
                    year: 2024,
                    authors: ["Das A", "Rajashekar P"]
                },
                {
                    title: "Persistent left superior vena cava-An alternative feasible technique during Senning procedure",
                    journal: "J Card Surg",
                    year: 2022,
                    authors: ["Das A", "Agrawal G", "Mathur A"],
                    doi: "10.1111/jocs.16409"
                }
            ]
        }
    ],
    awards: [
        {
            title: "Certificate of Merit under National Scholarship Scheme",
            year: "2001",
            category: "Academic Excellence"
        },
        {
            title: "Award of Honor for Poster Presentation on Depressive Psychosis & its correlation with response to Neo-adjuvant chemotherapy in patients with Breast Cancer",
            year: "2007",
            category: "Research Presentation"
        },
        {
            title: "Second Prize in Surgical Quiz",
            year: "2012",
            category: "Clinical Knowledge"
        }
    ],
    skills: [
        "Adult Cardiac Surgery",
        "Congenital Heart Surgery",
        "Minimally Invasive Cardiac Surgery",
        "Coronary Artery Bypass Surgery",
        "Aortic Surgery",
        "Valve Repair and Replacement",
        "Heart Transplantation",
        "ECMO and LVAD Programs",
        "Endovascular Procedures",
        "Pediatric Cardiac Surgery",
        "Complex Aortic Repairs",
        "Mechanical Circulatory Support",
        "Total Arterial Revascularization",
        "TEVAR and EVAR Procedures",
        "TAVI Procedures"
    ],
    contactDetails: {
        address: "1069, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, YMCA Rd, near Escorts Mujesar Metro Station, Faridabad, Haryana 121006",
        phone: "+91-9899094465",
        email: "dranupamdas86@gmail.com"
    },
    socialLinks: {
        linkedin: "",
        instagram: ""
    },
    offline: [
        {
            hospital: "Sarvodaya Hospital & Research Centre, Faridabad, NCR",
            schedules: [
                {
                    day: "Monday to Friday",
                    timing: "10:00 AM - 4:00 PM"
                }
            ]
        }
    ],
    onlineTiming: "10:00 PM - 4:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};

 