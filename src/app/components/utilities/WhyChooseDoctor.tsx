import React, {useState} from 'react';
import { Heart, Shield, Stethoscope, Brain, Baby, Microscope, CheckCircle } from 'lucide-react';
import BookAppointmentModal from './BookAppointment';

interface WhyChooseDoctorProps {
  doctor: {
    id: string;
    personalDetails: {
      name: string;
      speciality: string;
    };
    totalExp: string;
  };
}

const WhyChooseDoctor: React.FC<WhyChooseDoctorProps> = ({ doctor }) => {
  const isDrJay = doctor.id === 'drjay' || doctor.personalDetails.name.toLowerCase().includes('jay');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Color schemes
  const colorScheme = isDrJay ? {
    primary: 'red',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    cardBg: 'bg-white',
    primaryText: 'text-red-600',
    secondaryText: 'text-red-500',
    primaryBg: 'bg-red-500',
    borderColor: 'border-red-200',
    hoverBorder: 'hover:border-red-300',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500'
  } : {
    primary: 'teal',
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
    cardBg: 'bg-white',
    primaryText: 'text-teal-600',
    secondaryText: 'text-teal-500',
    primaryBg: 'bg-teal-500',
    borderColor: 'border-teal-200',
    hoverBorder: 'hover:border-teal-300',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500'
  };

  // Content based on doctor specialization
  const content = isDrJay ? {
    title: `Why Choose ${doctor.personalDetails.name}?`,
    subtitle: "Leading Excellence in Pediatric & Fetal Cardiology",
    mainFeatures: [
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Specialized Pediatric Heart Care",
        description: "Expert in diagnosing and treating congenital heart defects in children from birth through adolescence with compassionate, child-centered care."
      },
      {
        icon: <Baby className="w-8 h-8" />,
        title: "Advanced Fetal Cardiology",
        description: "Pioneering prenatal heart diagnosis using cutting-edge ultrasound technology to detect and plan treatment for heart conditions before birth."
      },
      {
        icon: <Stethoscope className="w-8 h-8" />,
        title: "Non-Invasive Interventions",
        description: "Expertise in minimally invasive procedures and catheter-based interventions, reducing recovery time and improving outcomes for young patients."
      }
    ],
    expertise: [
      "Congenital Heart Disease Diagnosis & Management",
      "Fetal Echocardiography & Prenatal Counseling",
      "Pediatric Cardiac Catheterization",
      "Heart Rhythm Disorders in Children",
      "Cardiac Care for Premature Babies",
      "Family-Centered Treatment Plans"
    ],
    uniqueValue: "Combining advanced medical expertise with a deep understanding of pediatric psychology, Dr. Relan ensures both medical excellence and emotional comfort for children and families facing heart conditions."
  } : {
    title: `Why Choose ${doctor.personalDetails.name}?`,
    subtitle: "Master Surgeon in Cardiothoracic & Vascular Excellence",
    mainFeatures: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Complex Cardiac Surgery",
        description: "Expertise in performing intricate heart surgeries including bypass, valve repairs, and transplants with exceptional precision and safety records."
      },
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Dual Adult & Pediatric Expertise",
        description: "Unique capability to perform cardiovascular surgeries across all age groups, from newborns to elderly patients with specialized techniques for each."
      },
      {
        icon: <Microscope className="w-8 h-8" />,
        title: "Minimally Invasive Techniques",
        description: "Leading practitioner of robotic and minimally invasive cardiac procedures, reducing surgical trauma and accelerating patient recovery."
      }
    ],
    expertise: [
      "Coronary Artery Bypass Surgery (CABG)",
      "Heart Valve Repair & Replacement",
      "Aortic Aneurysm Repair",
      "Congenital Heart Surgery",
      "Heart & Lung Transplantation",
      "Robotic & Minimally Invasive Procedures"
    ],
    uniqueValue: "Dr. Das combines surgical mastery with innovative techniques and comprehensive patient care, delivering life-saving results with minimal invasiveness and faster recovery times."
  };

   

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br ${colorScheme.bgGradient}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className={`text-lg md:text-xl ${colorScheme.secondaryText} font-medium max-w-3xl mx-auto`}>
            {content.subtitle}
          </p>
        </div>

       

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.mainFeatures.map((feature, index) => (
            <div key={index} className={`${colorScheme.cardBg} rounded-2xl p-8 shadow-lg ${colorScheme.borderColor} border ${colorScheme.hoverBorder} hover:shadow-xl transition-all duration-300 group`}>
              <div className={`w-16 h-16 ${colorScheme.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise & Unique Value */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* What Makes Us Different */}
          <div className={`${colorScheme.cardBg} rounded-2xl p-8 shadow-lg ${colorScheme.borderColor} border`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {content.uniqueValue}
            </p>
            
            {/* Key Differentiators */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className={`w-2 h-2 ${colorScheme.primaryBg} rounded-full mr-3`}></div>
                <span className="text-gray-700">Evidence-based treatment protocols</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 ${colorScheme.primaryBg} rounded-full mr-3`}></div>
                <span className="text-gray-700">Personalized care plans</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 ${colorScheme.primaryBg} rounded-full mr-3`}></div>
                <span className="text-gray-700">Multidisciplinary team approach</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 ${colorScheme.primaryBg} rounded-full mr-3`}></div>
                <span className="text-gray-700">Cutting-edge medical technology</span>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className={`${colorScheme.cardBg} rounded-2xl p-8 shadow-lg ${colorScheme.borderColor} border`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isDrJay ? "Why Choose Pediatric Cardiology" : "Why Choose Our Surgical Expertise"}
            </h3>
            <div className="space-y-4">
              {isDrJay ? [
                "Child-friendly environment and approach",
                "Family-centered care philosophy",
                "Advanced fetal diagnostic capabilities",
                "Minimally invasive treatment options",
                "Comprehensive long-term follow-up care",
                "Collaboration with pediatric specialists"
              ] : [
                "State-of-the-art surgical facilities",
                "Robotic and minimally invasive techniques",
                "Comprehensive pre and post-operative care",
                "Multidisciplinary surgical team",
                "Adult and pediatric expertise combined",
                "Emergency cardiac surgery capabilities"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-6 h-6 ${colorScheme.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`${colorScheme.cardBg} rounded-2xl p-8 shadow-lg ${colorScheme.borderColor} border max-w-4xl mx-auto`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take the Next Step in Your Heart Health Journey?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Schedule a consultation today and experience world-class cardiac care tailored specifically to your needs.
            </p>
            <button onClick={()=>setIsModalOpen(true)} className={`bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1`}>
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
       <BookAppointmentModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  variant={ isDrJay ? "drjay" : "dranupam" }// or "dranupam"
  doctorName={doctor.personalDetails.name}
/>
    </section>
         
  );
};

export default WhyChooseDoctor;