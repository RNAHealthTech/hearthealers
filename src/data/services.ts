export interface Service {
  id: string;
  slug: string;
  subdomain: "drjay" | "dranupam";
  title: string;
  description: string;
  image: string; // Path to image or icon
  symptoms?: string[]; // Only for services, not procedures
  procedureInfo?: string; // Only for procedures
  phone: string;
}

export const services: Service[] = [
  // drjay services
  {
    id: "jay1",
    slug: "congenital-heart-defects",
    subdomain: "drjay",
    title: "Congenital Heart Defects",
    description:
      "Specialized treatment for shunts, valvular/vascular obstructions, and cyanotic diseases.",
    image: "https://hearthealers.in/images/services/heart-defects.jpg",
    symptoms: [
      "Cyanosis (bluish skin)",
      "Shortness of breath",
      "Fatigue during activity",
      "Swelling in legs or abdomen",
      "Irregular heartbeats",
    ],
    phone: "+91-9868700886",
  },
  {
    id: "jay2",
    slug: "acquired-heart-diseases",
    subdomain: "drjay",
    title: "Acquired Heart Diseases",
    description:
      "Expert care for rheumatic heart disease and cardiomyopathies.",
    image: "https://hearthealers.in/images/services/acquired-heart.jpg",
    symptoms: [
      "Chest pain",
      "Fatigue",
      "Swelling in ankles or feet",
      "Irregular heart rhythm",
      "Shortness of breath",
    ],
    phone: "+91-9868700886",
  },
  {
    id: "jay3",
    slug: "pulmonary-hypertension",
    subdomain: "drjay",
    title: "Pulmonary Hypertension",
    description:
      "Specialized care for conditions affecting pulmonary circulation.",
    image:
      "https://hearthealers.in/images/services/pulmonary-hypertension.jpeg",
    symptoms: [
      "Shortness of breath",
      "Chest pressure or pain",
      "Dizziness or fainting",
      "Fatigue",
      "Swelling in ankles or legs",
    ],
    phone: "+91-9868700886",
  },
  {
    id: "jay4",
    slug: "systemic-hypertension",
    subdomain: "drjay",
    title: "Systemic Hypertension",
    description: "Comprehensive management of high blood pressure.",
    image: "https://hearthealers.in/images/services/systemic-hypertension.jpeg",
    symptoms: [
      "Headaches",
      "Nosebleeds",
      "Shortness of breath",
      "Chest pain",
      "Dizziness",
    ],
    phone: "+91-9868700886",
  },
  {
    id: "jay5",
    slug: "cardiac-arrhythmias",
    subdomain: "drjay",
    title: "Cardiac Arrhythmias",
    description: "Advanced treatment for heart rhythm disorders.",
    image: "https://hearthealers.in/images/services/arrhythmias.jpg",
    symptoms: [
      "Palpitations",
      "Dizziness or lightheadedness",
      "Fainting",
      "Chest discomfort",
      "Shortness of breath",
    ],
    phone: "+91-9868700886",
  },

  {
    id: "jay11",
    slug: "fetal-cardiology",
    subdomain: "drjay",
    title: "Fetal Cardiology",
    description:
      "Specialized prenatal cardiac care including fetal arrhythmia treatment, cardiac tumor management, and counselling for abnormal fetal echo.",
    image: "https://hearthealers.in/images/services/fetal-cardiology.jpg",
    symptoms: [
      "Abnormal fetal heart rate detected during pregnancy",
      "Fetal cardiac tumors (rhabdomyomas) on ultrasound",
      "Irregular fetal heart rhythm",
      "Abnormal fetal echocardiogram findings",
      "Family history of congenital heart disease",
    ],
    phone: "+91-9868700886",
  },

  //  Procedures
  {
    id: "jay6",
    slug: "device-closures",
    subdomain: "drjay",
    title: "Device Closures",
    description:
      "Minimally invasive procedures for ASD, VSD, PDA, and AP window closures.",
    image: "https://hearthealers.in/images/services/device-closures.png",
    procedureInfo:
      "Contact Dr. Jay for more information about device closure procedures.",
    phone: "+91-9868700886",
  },
  {
    id: "jay7",
    slug: "balloon-valvuloplasty",
    subdomain: "drjay",
    title: "Balloon Valvuloplasty",
    description:
      "Non-surgical treatment for pulmonary and aortic valve conditions.",
    image: "https://hearthealers.in/images/services/balloon-valvuloplasty.jpg",
    procedureInfo:
      "Contact Dr. Jay for more information about balloon valvuloplasty procedures.",
    phone: "+91-9868700886",
  },
  {
    id: "jay8",
    slug: "coarctation-treatment",
    subdomain: "drjay",
    title: "Coarctation Treatment",
    description: "Balloon dilation procedures for aortic coarctation.",
    image: "https://hearthealers.in/images/services/coarctation-treatment.png",
    procedureInfo:
      "Contact Dr. Anupam for more information about coarctation treatment.",
    phone: "+91-9868700886",
  },
  {
    id: "jay9",
    slug: "pediatric-stenting",
    subdomain: "drjay",
    title: "Pediatric Stenting",
    description:
      "Advanced stenting procedures for neonatal and pediatric patients.",
    image: "https://hearthealers.in/images/services/pediatric-stenting.webp",
    procedureInfo:
      "Contact Dr. Jay for more information about pediatric stenting procedures.",
    phone: "+91-9868700886",
  },
  {
    id: "jay10",
    slug: "diagnostic-procedures",
    subdomain: "drjay",
    title: "Diagnostic Procedures",
    description:
      "Angiography and cardiac catheterization for accurate diagnosis.",
    image: "https://hearthealers.in/images/services/diagnostic-procedures.jpg",
    procedureInfo:
      "Contact Dr. Jay for more information about diagnostic procedures.",
    phone: "+91-9868700886",
  },

  // Dr. Anupam Services
  {
    id: "anupam1",
    slug: "coronary-artery-bypass-grafting",
    subdomain: "dranupam",
    title: "Coronary Artery Bypass Grafting",
    description:
      "Both off-pump and on-pump CABG, with total arterial revascularization (LIMA, RIMA, and radial artery harvesting).",
    image: "https://hearthealers.in/images/services/cabg.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Coronary Artery Bypass Grafting procedures.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam2",
    slug: "valve-repair",
    subdomain: "dranupam",
    title: "Valve Repair",
    description:
      "Mitral valve repair/replacements (MVR), aortic valve replacement (AVR), tricuspid valve repair, double valve replacement (DVR).",
    image: "https://hearthealers.in/images/services/valve-repair.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Valve Repair/Replacement procedures.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam3",
    slug: "minimally-invasive-cardiac-surgeries",
    subdomain: "dranupam",
    title: "Minimally Invasive Cardiac Surgeries",
    description:
      "Keyhole surgeries including MICS MVR, MICS AVR, MIDCAB, MICS ASD Closure, MICS VSD Closure.",
    image: "https://hearthealers.in/images/services/mics.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Minimally Invasive Cardiac Surgeries.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam4",
    slug: "adult-pediatric-congenital-heart-surgeries",
    subdomain: "dranupam",
    title: "Adult and Pediatric Congenital Heart Surgeries",
    description:
      "Procedures for ASD, VSD, AVSD, Tetralogy of Fallot, BT shunt, TAPVC repair, single ventricle repair (BD Glenn or Fontan), Ebstein’s repair, repair for transposition of great arteries (arterial switch), PDA ligation, Coarctation repair, valve repairs and replacements, AP window/RSOV repairs, redo surgeries, pulmonary valve surgeries.",
    image:
      "https://hearthealers.in/images/services/congenital-heart-surgery.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Adult and Pediatric Congenital Heart Surgeries.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam5",
    slug: "aortic-surgeries",
    subdomain: "dranupam",
    title: "Aortic Surgeries",
    description:
      "Bentall operation, Wheat procedure, hemiarch or total arch replacement, TEVAR/EVAR (endovascular stent grafting of aorta) for aortic aneurysms and aortic dissections.",
    image: "https://hearthealers.in/images/services/aortic-surgery.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Aortic Surgeries.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam6",
    slug: "vascular-surgeries",
    subdomain: "dranupam",
    title: "Vascular Surgeries",
    description:
      "Aortobifemoral bypass, femoro-femoral bypass, femoropopliteal bypass, axillofemoral bypass, thoraco-femoral bypass, embolectomies, vascular repairs, arteriovenous fistulas for hemodialysis.",
    image: "https://hearthealers.in/images/services/vascular-surgery.jpg", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Vascular Surgeries.",
    phone: "+91-9899094465",
  },
  {
    id: "anupam7",
    slug: "heart-failure-mechanical-circulatory-support",
    subdomain: "dranupam",
    title: "Heart Failure and Mechanical Circulatory Support",
    description:
      "Heart failure treatment, ECMO (venoarterial and venovenous), LVADs, IABP, heart transplantation.",
    image: "https://hearthealers.in/images/services/heart-failure.png", // Placeholder image, replace with actual
    procedureInfo:
      "Contact Dr. Anupam for more information about Heart Failure and Mechanical Circulatory Support.",
    phone: "+91-9899094465",
  },
];

// Utility functions for filtering services
export const getServicesBySubdomain = (
  subdomain: "drjay" | "dranupam"
): Service[] => {
  return services.filter((service) => service.subdomain === subdomain);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
