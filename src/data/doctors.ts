// src/data/doctors.ts
export interface Education {
  degree: string;
  institution: string;
  duration: {
    start: string;
    end: string;
  };
}

export interface Experience {
  role: string;
  department?: string;
  organization: string;
  duration: {
    start: string;
    end: string;
  };
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
  authors?: string[];
  doi?: string;
}

export interface Research {
  
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
  category?: string;
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
  socialLinks: {
    linkedin?: string;
    instagram?: string;
  };
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
    description:
      "Pediatric Cardiologist with extensive experience in congenital heart diseases, fetal echocardiography, and pediatric cardiac interventions.",
    imageUrl: "https://hearthealers.in/images/drjay.jpg",
    imageUrl2: "", // To be added
    imageUrl3: "", // To be added
    backgroundImageUrl: "https://hearthealers.in/images/bg1.jpg", // To be added
    age: 35, // Estimated based on graduation timeline
    gender: "Male",
  },
  subdomain: "drjay",
  totalExp: "10+",
  bgVideo: "https://hearthealers.in/images/drjay-bg.mp4",
  bio: "Dr. Jay Relan is a highly accomplished Pediatric Cardiologist with specialized training from AIIMS, New Delhi. He has completed his DM in Pediatric Cardiology (Gold Medalist), MD in Pediatrics (Gold Medalist), and MBBS (Gold Medalist). With over 31 published research articles and multiple national awards, Dr. Relan brings extensive expertise in managing complex congenital heart diseases, fetal cardiac screening, and pediatric cardiac interventions. He has completed advanced fellowships in fetal echocardiography and holds certifications from the Fetal Medicine Foundation, UK.",
  h1: "Best Care for Your Baby's Heart",
  span: "Dedicated Pediatric Cardiologist in Delhi NCR Dr Jay Relan",
  education: [
    {
      degree: "DM - Pediatric Cardiology",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      duration: {
        start: "2016",
        end: "2019",
      },
    },
    {
      degree: "MD - Pediatrics",
      institution: "Maulana Azad Medical College (MAMC), Delhi",
      duration: {
        start: "2013",
        end: "2016",
      },
    },
    {
      degree: "MBBS",
      institution:
        "University College of Medical Sciences & GTB Hospital, Delhi",
      duration: {
        start: "2007",
        end: "2012",
      },
    },
  ],
  pastExperience: [
    {
      role: "Associate Consultant",
      department: "Pediatric Cardiac Sciences",
      organization: "Sir Ganga Ram Hospital, New Delhi",
      duration: {
        start: "2022-02",
        end: "2025-05",
      },
    },

    {
      role: "Senior Resident",
      department: "Pediatrics",
      organization:
        "Super Speciality Paediatric Hospital & Post Graduate Teaching Institute, Noida",
      duration: {
        start: "2016-07",
        end: "2016-12",
      },
    },
    {
      role: "Senior Resident",
      department: "Cardiology",
      organization:
        "All India Institute of Medical Sciences (AIIMS), New Delhi",
      duration: {
        start: "2020-02",
        end: "2020-10",
      },
    },
    {
      role: "Assistant Professor",
      department: "Cardiology",
      organization:
        "All India Institute of Medical Sciences (AIIMS), New Delhi",
      duration: {
        start: "2020-10",
        end: "2022-02",
      },
    },
  ],
  currentWorkExperience: [
    {
      role: "Senior Consultant",
      department: "Paediatric Cardiology & Congenital Heart Disease",
      organization: "Sarvodaya Hospital, Sector 8, Faridabad",
      duration: {
        start: "2025-06",
        end: "",
      },
    },
  ],
  research: [
    {
         publications: [
        {
          title:
            "Right superior caval vein to the left atrium in a child with vein of Galen malformation",
          journal: "Echocardiography",
          year: 2018,
          authors: ["Relan J", "Gupta SK", "Saxena A"],
        },
        {
          title:
            "Guidelines for the management of common congenital heart diseases in India: A consensus statement",
          journal: "Indian Heart Journal",
          year: 2019,
          authors: ["Saxena A", "Relan J", "Agarwal R", "Awasthy N"],
        },
        {
          title:
            "Long QT syndrome with AV Wenckebaching & bundle branch block in a neonate",
          journal: "Indian Pacing and Electrophysiology Journal",
          year: 2020,
          authors: ["Relan J", "Gujral JS", "Reddy SS", "Parakh N"],
        },
        {
          title: "Clarifying the anatomy of the superior sinus venosus defect",
          journal: "Heart",
          year: 2021,
          authors: ["Relan J", "Gupta SK", "Rajagopal R", "Ramakrishnan S"],
        },
        {
          title:
            "Prenatal Pericardiocentesis and Postnatal Sirolimus for a Giant Inoperable Cardiac Rhabdomyoma",
          journal: "JACC: Case Reports",
          year: 2021,
          authors: ["Relan J", "Swami M", "Rana A", "Chaudhary P"],
        },
        {
          title:
            "Eisenmenger's syndrome: Management and workup for heart–lung transplant",
          journal: "Journal of the Practice of Cardiovascular Sciences",
          year: 2019,
          authors: ["Relan J", "Sachdeva S", "Awasthy N", "Ramakrishnan S"],
        },
        {
          title:
            "Operable ventricular septal defect despite severe pulmonary hypertension and cyanosis!",
          journal: "Cardiology in the Young",
          year: 2019,
          authors: ["Kothari SS", "Relan J", "Devagourou V"],
        },
        {
          title:
            "Severe thrombocytopenia in tetralogy of Fallot patients: A contraindication for corrective surgery?",
          journal: "Annals of Pediatric Cardiology",
          year: 2019,
          authors: ["Patil S", "Relan J", "Hote M", "Kothari SS"],
        },
        {
          title:
            "Indian guidelines for indications and timing of intervention for common congenital heart diseases: Revised and updated consensus statement of the Working group on management of congenital heart diseases",
          journal: "Annals of Pediatric Cardiology",
          year: 2019,
          authors: ["Saxena A", "Relan J", "Agarwal R", "Awasthy N"],
        },
        {
          title:
            "Congenital Junctional Ectopic Tachycardia: A Case Report of Two Siblings",
          journal: "Austin Pediatr",
          year: 2019,
          authors: ["Sekhar JC", "Relan J", "Meena P"],
        },
        {
          title:
            "‘‘Treat and repair’’ strategy for shunt lesions: a critical review",
          journal: "Pulmonary Circulation",
          year: 2020,
          authors: ["Arvind B", "Relan J", "Kothari SS"],
        },
        {
          title: "The DeepScience of NeuroCardiology",
          journal: "Ann Psychiatr Clin Neurosci",
          year: 2020,
          authors: ["Mukhopadhyay AK", "Relan J"],
        },
        {
          title: "Author's reply",
          journal: "Ann Pediatr Card",
          year: 2020,
          authors: ["Saxena A", "Relan J"],
        },
        {
          title: "An unusual cause of changing QRS morphology",
          journal: "Journal of Electrocardiology",
          year: 2020,
          authors: ["Gujral JS", "Relan J", "Naik N"],
        },
        {
          title: "Authors’ reply",
          journal: "Ann Pediatr Card",
          year: 2020,
          authors: ["Saxena A", "Relan J"],
        },
        {
          title:
            "Supracardiac total anomalous pulmonary venous connection with cor triatriatum sinister: A rare diagnosis confirmed by saline contrast echocardiography",
          journal: "Echocardiography",
          year: 2020,
          authors: ["Relan J", "Choubey M", "Kothari SS"],
        },
        {
          title: "Neonatal pacemaker gone haywire: What is the mechanism?",
          journal: "Pacing and Clinical Electrophysiology",
          year: 2021,
          authors: ["Relan J", "Gujral JS", "Parakh N", "Juneja R"],
        },
        {
          title: "Clippings",
          journal: "Indian Pediatrics",
          year: 2021,
          authors: ["Relan J"],
        },
        {
          title:
            "Is left ventricular superior to right ventricular pacing in children with congenital or postoperative complete heart block?",
          journal: "Interact Cardiov Th",
          year: 2021,
          authors: ["Siddharth CB", "Relan J"],
        },
        {
          title:
            "A rare pediatric case of bilateral bronchopulmonary vascular malformations and right isomerism",
          journal: "Journal of Cardiac Surgery",
          year: 2021,
          authors: ["Verma M", "Khurana R", "Malhi AS", "Relan J"],
        },
        {
          title:
            "Knowledge, attitude and practice of health care professionals on laboratory diagnosis of COVID-19",
          journal: "J Family Med Prim Care",
          year: 2021,
          authors: ["Mukhopadhyay T", "Relan J", "Subramanian A", "Lathwal A"],
        },
        {
          title: "Dextroversion due to giant left atrium in a child",
          journal: "Echocardiography",
          year: 2021,
          authors: ["Relan J", "Kadiyani L", "Hote MP", "Ramakrishnan S"],
        },
        {
          title:
            "Atrial septoplasty through internal jugular venous access in an infant with transposition of great arteries: technical challenges and solutions",
          journal: "Cardiol Young",
          year: 2021,
          authors: ["Relan J", "Arvind B", "Ramakrishnan S"],
        },
        {
          title:
            "Heart Failure in a Child: Multimodality Approach Leading to an Unusual Cause",
          journal: "JACC: Case Reports",
          year: 2021,
          authors: ["Karuru U", "Relan J", "Verma M", "Kumar S"],
        },
        {
          title:
            "Severe tracheal stenosis secondary to brachiocephalic artery compression syndrome",
          journal: "J Cardiovasc Comput Tomogr",
          year: 2022,
          authors: ["Verma M", "Pandey NN", "Relan J", "Jagia P"],
        },
        {
          title: "Pregnancy with congenital heart disease",
          journal: "Vessel Plus",
          year: 2022,
          authors: ["Saxena A", "Relan J"],
        },
        {
          title:
            "Infective endocarditis-induced complete closure of a ventricular septal defect and complete heart block in a child",
          journal: "Ann Ped Cardiol",
          year: 2021,
          authors: [
            "Karuru U",
            "Relan J",
            "Kothari SS",
            "Gupta SK",
            "Talwar S",
          ],
        },
        {
          title:
            "Vascular neoplasia masquerading as cellulitis and persistent hemorrhagic pericardial effusion",
          journal: "Ann Ped Cardiol",
          year: 2022,
          authors: [
            "Thangaraju S",
            "Relan J",
            "Sinha A",
            "Arava SK",
            "Khanna N",
            "Raju SN",
          ],
        },
        {
          title:
            "Pediatric cardiology in India – In search of a holistic solution",
          journal: "Ann Ped Cardiol",
          year: 2024,
          authors: [
            "Tharakan J",
            "Sharma R",
            "Subramanyan R",
            "Saxena A",
            "Kulkarni S",
            "Relan J",
            "Ramakrishnan S",
          ],
        },
        {
          title:
            "Comparison of Levosimendan Versus Milrinone After the Arterial Switch Operation for Infants≤ 3 kg",
          journal: "World J Pediatr Congenit Heart Surg",
          year: 2024,
          authors: [
            "Joshi RK",
            "Joshi R",
            "Aggarwal N",
            "Agarwal M",
            "Siddartha CR",
            "Relan J",
            "Kumar A",
            "Modi M",
            "Chug P",
          ],
        },
        {
          title:
            "Mitral annular disjunction with atrial septal defect in children: An intriguing association",
          journal: "Ann Ped Cardiol",
          year: 2024,
          authors: ["Agarwal M", "Relan J", "Aggarwal N", "Joshi R"],
        },
      
      ],
    },
  ],
  awards: [
    {
      title: "Dr. Jagdish Lal Kapila Medal-2019 in Cardiology",
      year: "2020",
      category: "After Graduation",
    },
    {
      title: "Dr. Savitri Srivastav Imaging Award 2019",
      year: "2019",
      category: "After Graduation",
    },
    {
      title:
        "1st Position in Cardiology Quiz at 26th Annual conference of Indian College of Cardiology",
      year: "2019",
      category: "After Graduation",
    },
    {
      title: "Dr. Manoj Kapoor Memorial Medal Best PG student in Pediatrics",
      year: "2016",
      category: "After Graduation",
    },
    {
      title: "Pediatrics Torrent Young Scholar Award (National Round)",
      year: "2015",
      category: "After Graduation",
    },
    {
      title: "Gold Medal in DM Pediatric Cardiology",
      year: "2019",
      category: "Graduation",
    },
    {
      title: "Gold Medal in MD Pediatrics",
      year: "2016",
      category: "Graduation",
    },
    {
      title: "Gold Medal in MBBS",
      year: "2012",
      category: "Graduation",
    },
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
    
  ],
  contactDetails: {
    address:
      "1071, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, YMCA Rd, near Escorts Mujesar Metro Station, Faridabad, Haryana 121006",
    phone: "+91 9868700886",  
    email: "jay.relan@gmail.com", 
  },
  socialLinks: {
    linkedin: "", // Not provided in CV
    instagram: "", // Not provided in CV
  },
  offline: [
    {
      hospital:
        "1071, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, Faridabad, Haryana 121006",
      schedules: [
        {
          day: "Monday to Saturday",
          timing: "10:00 AM - 4:00 PM",
        },
      ],
    },
   
  ],
  onlineTiming: "10:00 AM - 4:00 PM",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

// Dr. Anupam Das data structured according to Doctor interface

export const dranupamData: Doctor = {
  id: "dranupam",
  personalDetails: {
    name: "Dr. Anupam Das",
    speciality: "Cardiothoracic & Vascular Surgeon",
    description:
      "Senior Consultant & Head of Cardiothoracic & Vascular Surgery with expertise in adult and congenital heart surgeries, minimally invasive cardiac procedures, and complex aortic surgeries.",
    imageUrl: "https://hearthealers.in/images/dranupam.jpg", // To be provided
    imageUrl2: "", // To be provided
    imageUrl3: "", // To be provided
    backgroundImageUrl: "https://hearthealers.in/images/bg1.jpg", // To be provided
    age: 39,
    gender: "Male",
  },
  subdomain: "dranupam",
  totalExp: "15+",
  bgVideo: "https://hearthealers.in/images/dranupam-bg.mp4",
  bio: "Dr. Anupam Das is a highly accomplished Cardiothoracic & Vascular Surgeon with extensive qualifications including MBBS, MS (General Surgery), MRCS (Edinburgh), MCh from AIIMS - New Delhi, FRCS from Royal College of Surgeons- Edinburgh, Fellowship- American College of Surgeons. He has pioneered complex congenital heart surgery programs and minimally invasive cardiac surgery techniques. With over 2000 adult and congenital heart surgeries to his credit, Dr. Das specializes in advanced cardiac procedures, transplantation, and mechanical circulatory support systems.",
  h1: "Best Cardiothoracic Surgeon in Delhi NCR",
  span: "Minimally Invasive Cardiac Surgery Expert Dr Anupam Das",
  education: [
    {
      degree: "MBBS",
      institution:
        "Vardhman Mahavir Medical College, Safdarjung Hospital, New Delhi",
      duration: {
        start: "2004",
        end: "2009",
      },
    },
    {
      degree: "MRCS (Edinburgh, UK)",
      institution: "Royal College of Surgeons, Edinburgh",
      duration: {
        start: "2012",
        end: "2012",
      },
    },
    {
      degree: "MS (General Surgery)",
      institution:
        "Vardhman Mahavir Medical College, Safdarjung Hospital, New Delhi",
      duration: {
        start: "2010",
        end: "2013",
      },
    },
    {
      degree: "MCh. Cardiothoracic Vascular Surgery",
      institution: "All India Institute of Medical Sciences, New Delhi",
      duration: {
        start: "2014",
        end: "2017",
      },
    },
    {
      degree: "DNB (Cardiothoracic Surgery)",
      institution: "National Board of Examinations",
      duration: {
        start: "2018",
        end: "2018",
      },
    },
    {
      degree: "MEBCTS (Adult & Congenital Cardiac Surgery)",
      institution: "European Board of Cardiothoracic Surgery",
      duration: {
        start: "2020",
        end: "2020",
      },
    },
    {
      degree: "FRCS (Cardiothoracic Surgery)",
      institution: "Royal College of Surgeons, Edinburgh, UK",
      duration: {
        start: "2022",
        end: "2022",
      },
    },
    {
      degree: "FACS",
      institution: "American College of Surgeons",
      duration: {
        start: "2023",
        end: "2023",
      },
    },
    {
      degree: "FCCE",
      institution:
        "Indian College of Anaesthesiologists & Indian Association of Cardiovascular-Thoracic Surgeons",
      duration: {
        start: "2024",
        end: "2024",
      },
    },
  ],
  pastExperience: [
    {
      role: "Internship",
      department: " ",
      organization:
        "Vardhman Mahavir Medical College- Safdarjung Hospital, New Delhi",
      duration: {
        start: "February 15, 2008",
        end: "February 14, 2009",
      },
    },

    {
      role: "House Surgeon",
      department: "General Surgery",
      organization:
        "Vardhman Mahavir Medical College- Safdarjung Hospital, New Delhi",
      duration: {
        start: "June 2, 2010",
        end: "June 1, 2013",
      },
    },
    {
      role: "Senior Registrar",
      department: "Cardiothoracic Vascular Surgery",
      organization: "All India Institute of Medical Sciences, New Delhi",
      duration: {
        start: "July 1, 2014",
        end: "June 30, 2017",
      },
    },
    {
      role: "Associate Consultant",
      department: "Cardiothoracic Vascular Surgery",
      organization: "BLK MAX Superspeciality Hospital, New Delhi",
      duration: {
        start: "August 21, 2017",
        end: "January 31, 2020",
      },
    },
    {
      role: "Assistant Professor",
      department: "Cardiothoracic Vascular Surgery",
      organization:
        "All India Institute of Medical Sciences, Jodhpur, Rajasthan",
      duration: {
        start: "December 21, 2020",
        end: "June 30, 2024",
      },
    },
    {
      role: "Associate Professor",
      department: "Cardiothoracic Vascular Surgery",
      organization:
        "All India Institute of Medical Sciences, Jodhpur, Rajasthan",
      duration: {
        start: "July 1, 2024",
        end: "May 27, 2025",
      },
    },
  ],
  currentWorkExperience: [
    {
      role: "Senior Consultant & Head",
      department: "Cardiothoracic & Vascular Surgery",
      organization: "Sarvodaya Hospital & Research Centre, Faridabad, NCR",
      duration: {
        start: "June 2, 2025",
        end: "Present",
      },
    },
  ],
  research: [
    {
       publications: [
        {
          title:
            "Reviving Duran's Approach to Pericardial Valve Reconstruction in the Pulmonary Position Within the Right Ventricle-to-Pulmonary Artery Conduit: A Compelling Case Report",
          journal: "Braz J Cardiovasc Surg",
          year: 2025,
          authors: ["Das A", "Sharma AK", "Mathur A"],
          doi: "e20240123",
        },
        {
          title:
            "An Alternative Non-Conduit Repair Strategy for Tetralogy of Fallot With Short Segment Pulmonary Atresia",
          journal: "Cureus",
          year: 2024,
          authors: ["Das A", "Rajagopal R", "Rajashekar P"],
          doi: "10.7759/cureus.63241",
        },
        {
          title:
            "Acute Cerebellitis and Obstructive Hydrocephalus: An Unseen Neurological Complication After Surgical Repair for Tetralogy of Fallot",
          journal: "Cureus",
          year: 2024,
          authors: ["Das A"],
          doi: "10.7759/cureus.62355",
        },
        {
          title:
            "Scimitar Syndrome: Variations in anatomy and challenges in surgical repairs",
          journal: "IOSR Journal of Dental and Medical Sciences",
          year: 2024,
          authors: ["Das A", "Rajashekar P"],
        },
        {
          title:
            "Persistent left superior vena cava-An alternative feasible technique during Senning procedure",
          journal: "J Card Surg",
          year: 2022,
          authors: ["Das A", "Agrawal G", "Mathur A"],
          doi: "10.1111/jocs.16409",
        },
        {
          title:
            "Attitude and Practices Among Cardiac Surgical Patients Towards Coronavirus Disease",
          journal: ". IOSR Journal of Dental and Medical Science",
          year: 2023,
          authors: [
            "Meena D",
            "Patel S",
            "Chandolia P",
            "Das A",
            "Sharma PP",
            "Katti M",
          ],
          doi: "",
        },
        {
          title: `"Dual" drainage in cardiac partial anomalous pulmonary venous return.`,
          journal: "J Card Surg",
          year: 2022,
          authors: ["Sharma S", "Das A", "Deora S", "Rajagopal R"],
          doi: "",
        },
        {
          title:
            "Successful open surgical repair of large ilio-caval fistula presenting with congestive heart failure.",
          journal: "Indian J Thorac Cardiovasc Surg",
          year: 2022,
          authors: ["Patel S.", "Das A.", "Rajagopal R."],
          doi: "https://doi.org/10.1007/s12055-021-01268-0",
        },
        {
          title: `A ‘Masked’ Anomalous Left Coronary Artery From Pulmonary Artery`,
          journal: "Utility of Endoluminal Views. Pediatr Cardiol",
          year: 2021,
          authors: ["Rajagopal R.", "Chawla S.", "Kaushal N."],
          doi: "ttps://doi.org/10.1007/s00246-021-02714-x",
        },
        {
          title:
            "Primary abdomen closure (using sheath relaxation) versus staged closure (using modified Bogota) following laparotomy in secondary peritonitis",
          journal: "Int Surg J",
          year: 2021,
          authors: ["Das A", "Singh K A"],
          doi: "",
        },
        {
          title:
            "An unusual case of uninterrupted inferior vena cava with the accessory hemizygous channel: An incidental finding in a child.",
          journal: "Ann Card Anaesth",
          year: 2020,
          authors: ["Agrawal G", "Das A", "Gupta G."],
        },
        {
          title:
            "A single stage approach to ascending aortic aneurysm and coarctation: Feasibility and challenges",
          journal: "J Card Surg",
          year: 2019,
          authors: ["Das A", "Kaul A", "Khanuja JS"],
        },
        {
          title:
            "Cardiopulmonary Bypass Before Anesthesia Induction in a Case of Ruptured Ascending Aortic Aneurysm",
          journal: "Ann Thorac Surg",
          year: 2019,
          authors: [
            "Srivastava S",
            "Das A",
            "Khanuja JS",
            "Pendharkar A",
            "Ganesan PK",
          ],
        },
        {
          title:
            "Tetralogy of Fallot With Interatrial Communication of the Inferior Sinus Venosus Type: A Rare Association Causing Post-Operative Desaturation",
          journal: "World J Pediatr Congenit Heart Surg.",
          year: 2019,
          authors: ["Agrawal G", "Das A"],
        },
        {
          title:
            "A prospective study of risk factors associated with persistent pleural effusion after total cavopulmonary connection with special reference to serum cortisol level.",
          journal: "Indian J Thorac Cardiovasc Surg",
          year: 2017,
          authors: ["alwar S", "Das A", "Khadgawat R"],
          doi: "https://doi.org/10.1007/s12055-017-0617-8",
        },
        {
          title:
            "Arrhythmias in Children in Early Postoperative Period After Cardiac Surgery.",
          journal: "World J Pediatr Congenit Heart Surg",
          year: 2018,
          authors: [
            "Sahu MK",
            "Das A",
            "Siddharth B",
            "Talwar S",
            "Singh SP",
            "Abraham A",
            "Choudhury A.",
          ],
        },
        {
          title:
            "Predictors of intra-aortic balloon pumpinsertion in different spectrum of patients undergoing elective coronary artery bypass grafting.",
          journal: "Indian J Thorac Cardiovasc Surg",
          year: 2017,
          authors: ["Sahu M.K.", "Das A.", "Hote M.P."],
        },
        {
          title:
            "Comparison of levosimendan and nitroglycerine in patients undergoing coronary y artery bypass graft surgery",
          journal: "Ann Card Anaesth",
          year: 2016,
          authors: [
            "Sahu MK",
            "Das A",
            "Malik V",
            "Subramanian A",
            "Singh SP",
            "Hote M",
          ],
        },
        {
          title:
            "Patch materials for right ventricular outflow reconstruction: past, present, and future.",
          journal: "Indian J Thorac Cardiovasc Surg",
          year: 2018,
          authors: ["Talwar S.", "Das A.", "Siddarth B."],
          doi: "https://doi.org/10.1007/s12055- 017-0621-z",
        },
        {
          title:
            "Diaphragmatic Fenestration for Resistant Pleural Effusions After Univentricular Palliation.",
          journal: "World J Pediatr Congenit Heart Surg",
          year: 2016,
          authors: ["Talwar S", "Das A", "Choudhary SK", "Airan B"],
        },
        {
          title:
            "Quadricuspid aortic valve: A rare intraoperative diagnosis by transesophageal echocardiography.",
          journal: "Ann Card Anaesth",
          year: 2018,
          authors: ["Das A", "Singh U", "Rajashekar P."],
        },
        {
          title:
            "High blood tacrolimus and hyperkalemia in a heart transplant patient.",
          journal: "Ann Card Anaesth",
          year: 2017,
          authors: ["Sahu MK", "Singh SP", "Das A", "Abraham A", "Airan B"],
        },
        {
          title:
            "A rare presentation of hepatic and splenic cystic malignant fibrous histiocytoma: A case report and literature review",
          journal: "Int J Surg Case Rep",
          year: 2013,
          authors: ["Das A", "Arya SV", "Soni N", "Gowda GG", "Kalwaniya DS"],
        },
        {
          title:
            "A rare presentation of midgut malrotation as an acute intestinal obstruction in an adult: Two case reports and literature review.",
          journal: "Int J Surg Case Rep",
          year: 2013,
          authors: ["Singh S", "Das A", "Chawla AS", "Arya SV", "Chaggar J."],
        },
        {
          title:
            "Colocolic intussusception in an older child: a rare case report and a literature review",
          journal: "Case Rep Surg",
          year: 2013,
          authors: [
            "Das A",
            "Ralte L",
            "Chawla AS",
            "Arya SV",
            "Kumar A",
            "Saroha R",
            "Kalwaniya DS.",
          ],
        },
        {
          title:
            "Technical difficulties and its remedies in laparoscopic cholecystectomy in situs inversus totalis: A rare case report.",
          journal: "Int J Surg Case Rep",
          year: 2013,
          authors: [
            "Arya SV",
            "Das A",
            "Singh S",
            "Kalwaniya DS",
            "Sharma A",
            "Thukral BB",
          ],
        },
      ],
    },
  ],
  awards: [
    {
      title: "Certificate of Merit under National Scholarship Scheme",
      year: "2001",
      category: "Academic Excellence",
    },
    {
      title:
        "Award of Honor for Poster Presentation on Depressive Psychosis & its correlation with response to Neo-adjuvant chemotherapy in patients with Breast Cancer",
      year: "2007",
      category: "Research Presentation",
    },
    {
      title: "Second Prize in Surgical Quiz",
      year: "2012",
      category: "Clinical Knowledge",
    },
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
    "TAVI Procedures",
  ],
  contactDetails: {
    address:
      "1069, Mother & Child Care Center, Sarvodaya Hospital, Sector-8, YMCA Rd, near Escorts Mujesar Metro Station, Faridabad, Haryana 121006",
    phone: "+91-9899094465",
    email: "dranupamdas86@gmail.com",
  },
  socialLinks: {
    linkedin: "",
    instagram: "",
  },
  offline: [
    {
      hospital: "Sarvodaya Hospital & Research Centre, Faridabad, NCR",
      schedules: [
        {
          day: "Monday to Friday",
          timing: "10:00 AM - 4:00 PM",
        },
      ],
    },
  ],
  onlineTiming: "10:00 PM - 4:00 PM",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};
