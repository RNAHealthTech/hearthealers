// services.ts

export interface Service {
   id: string
    slug: string;
    subdomain: 'drjay' | 'dranupam';
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
      id: 'jay1',
      slug: 'congenital-heart-defects',
      subdomain: 'drjay',
      title: 'Congenital Heart Defects',
      description: 'Specialized treatment for shunts, valvular/vascular obstructions, and cyanotic diseases.',
      image: 'https://hearthealers.in/images/services/heart-defects.png',
      symptoms: [
        'Cyanosis (bluish skin)',
        'Shortness of breath',
        'Fatigue during activity',
        'Swelling in legs or abdomen',
        'Irregular heartbeats'
      ],
      phone: '+91-9868700886'
    },
    {
      id: 'jay2',
      slug: 'acquired-heart-diseases',
      subdomain: 'drjay',
      title: 'Acquired Heart Diseases',
      description: 'Expert care for rheumatic heart disease and cardiomyopathies.',
      image: 'https://hearthealers.in/images/services/acquired-heart.png',
      symptoms: [
        'Chest pain',
        'Fatigue',
        'Swelling in ankles or feet',
        'Irregular heart rhythm',
        'Shortness of breath'
      ], 
       phone: '+91-9868700886'
    },
    {
      id: 'jay3',
      slug: 'pulmonary-hypertension',
      subdomain: 'drjay',
      title: 'Pulmonary Hypertension',
      description: 'Specialized care for conditions affecting pulmonary circulation.',
      image: 'https://hearthealers.in/images/services/pulmonary-hypertension.png',
      symptoms: [
        'Shortness of breath',
        'Chest pressure or pain',
        'Dizziness or fainting',
        'Fatigue',
        'Swelling in ankles or legs'
      ], 
       phone: '+91-9868700886'
    },
    {
      id: 'jay4',
      slug: 'systemic-hypertension',
      subdomain: 'drjay',
      title: 'Systemic Hypertension',
      description: 'Comprehensive management of high blood pressure.',
      image: 'https://hearthealers.in/images/services/systemic-hypertension.png',
      symptoms: [
        'Headaches',
        'Nosebleeds',
        'Shortness of breath',
        'Chest pain',
        'Dizziness'
      ], 
       phone: '+91-9868700886'
    },
    {
      id: 'jay5',
      slug: 'cardiac-arrhythmias',
      subdomain: 'drjay',
      title: 'Cardiac Arrhythmias',
      description: 'Advanced treatment for heart rhythm disorders.',
      image: 'https://hearthealers.in/images/services/arrhythmias.png',
      symptoms: [
        'Palpitations',
        'Dizziness or lightheadedness',
        'Fainting',
        'Chest discomfort',
        'Shortness of breath'
      ], 
       phone: '+91-9868700886'
    },
  
    // Dr. Anupam's Procedures
    {
      id: 'anupam1',
      slug: 'device-closures',
      subdomain: 'dranupam',
      title: 'Device Closures',
      description: 'Minimally invasive procedures for ASD, VSD, PDA, and AP window closures.',
      image: 'https://hearthealers.in/images/services/device-closures.png',
      procedureInfo: 'Contact Dr. Anupam for more information about device closure procedures.', 
      phone: '+91-9899094465'
    },
    {
      id: 'anupam2',
      slug: 'balloon-valvuloplasty',
      subdomain: 'dranupam',
      title: 'Balloon Valvuloplasty',
      description: 'Non-surgical treatment for pulmonary and aortic valve conditions.',
      image: 'https://hearthealers.in/images/services/balloon-valvuloplasty.jpg',
      procedureInfo: 'Contact Dr. Anupam for more information about balloon valvuloplasty procedures.', 
            phone: '+91-9899094465'
    },
    {
      id: 'anupam3',
      slug: 'coarctation-treatment',
      subdomain: 'dranupam',
      title: 'Coarctation Treatment',
      description: 'Balloon dilation procedures for aortic coarctation.',
      image: 'https://hearthealers.in/images/services/coarctation-treatment.png',
      procedureInfo: 'Contact Dr. Anupam for more information about coarctation treatment.', 
            phone: '+91-9899094465'
    },
    {
      id: 'anupam4',
      slug: 'pediatric-stenting',
      subdomain: 'dranupam',
      title: 'Pediatric Stenting',
      description: 'Advanced stenting procedures for neonatal and pediatric patients.',
      image: 'https://hearthealers.in/images/services/pediatric-stenting.webp',
      procedureInfo: 'Contact Dr. Anupam for more information about pediatric stenting procedures.', 
            phone: '+91-9899094465'
    },
    {
      id: 'anupam5',
      slug: 'diagnostic-procedures',
      subdomain: 'dranupam',
      title: 'Diagnostic Procedures',
      description: 'Angiography and cardiac catheterization for accurate diagnosis.',
      image: 'https://hearthealers.in/images/services/diagnostic-procedures.jpg',
      procedureInfo: 'Contact Dr. Anupam for more information about diagnostic procedures.', 
            phone: '+91-9899094465'
    }
  ];
  
  // Utility functions for filtering services
  export const getServicesBySubdomain = (subdomain: 'drjay' | 'dranupam'): Service[] => {
    return services.filter(service => service.subdomain === subdomain);
  };
  
  export const getServiceBySlug = (slug: string): Service | undefined => {
    return services.find(service => service.slug === slug);
  };