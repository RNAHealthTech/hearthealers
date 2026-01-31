import React, { useState } from 'react';
import { Heart, Shield, Stethoscope, Brain, Baby, Microscope, Users, Clock } from 'lucide-react';
import BookAppointmentModal from './BookAppointment';
import { motion } from 'framer-motion';

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
    bgGradient: 'from-red-50 via-orange-50 to-red-50',
    primaryText: 'text-red-600',
    secondaryText: 'text-red-500',
    primaryBg: 'bg-red-500',
    lightBg: 'bg-red-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
  } : {
    primary: 'teal',
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-cyan-500',
    bgGradient: 'from-teal-50 via-cyan-50 to-teal-50',
    primaryText: 'text-teal-600',
    secondaryText: 'text-teal-500',
    primaryBg: 'bg-teal-500',
    lightBg: 'bg-teal-50',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
  };

  // Content based on doctor specialization
  const content = isDrJay ? {
    title: `Why Choose ${doctor.personalDetails.name}?`,
    subtitle: "Leading Excellence in Pediatric & Fetal Cardiology",

    expertiseAreas: [
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Specialized Pediatric Heart Care",
        description: "Expert in diagnosing and treating congenital heart defects in children from birth through adolescence with compassionate, child-centered care."
      },
      {
        icon: <Baby className="w-6 h-6" />,
        title: "Advanced Fetal Cardiology",
        description: "Pioneering prenatal heart diagnosis using cutting-edge ultrasound technology to detect and plan treatment for heart conditions before birth."
      },
      {
        icon: <Stethoscope className="w-6 h-6" />,
        title: "Non-Invasive Interventions",
        description: "Expertise in minimally invasive procedures and catheter-based interventions, reducing recovery time and improving outcomes for young patients."
      }
    ],

    uniqueValue: "Combining advanced medical expertise with a deep understanding of pediatric psychology, Dr. Relan ensures both medical excellence and emotional comfort for children and families facing heart conditions."
  } : {
    title: `Why Choose ${doctor.personalDetails.name}?`,
    subtitle: "Master Surgeon in Cardiothoracic & Vascular Excellence",

    expertiseAreas: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Complex Cardiac Surgery",
        description: "Expertise in performing intricate heart surgeries including bypass, valve repairs, and transplants with exceptional precision and safety records."
      },
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Dual Adult & Pediatric Expertise",
        description: "Unique capability to perform cardiovascular surgeries across all age groups, from newborns to elderly patients with specialized techniques for each."
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Minimally Invasive Techniques",
        description: "Leading practitioner of robotic and minimally invasive cardiac procedures, reducing surgical trauma and accelerating patient recovery."
      }
    ],

    uniqueValue: "Dr. Das combines surgical mastery with innovative techniques and comprehensive patient care, delivering life-saving results with minimal invasiveness and faster recovery times."
  };

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br ${colorScheme.bgGradient} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-current rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-current rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-block px-6 py-2 ${colorScheme.lightBg} rounded-full mb-6`}>
            <span className={`${colorScheme.primaryText} font-semibold text-sm uppercase tracking-wide`}>
              Medical Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h2>
          <p className={`text-lg md:text-xl ${colorScheme.secondaryText} font-medium max-w-4xl mx-auto leading-relaxed`}>
            {content.subtitle}
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className={`grid ${isDrJay ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-16 mb-16`}>

          {/* Video Section - Only for Dr. Jay */}
          {isDrJay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-[400px] mx-auto">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=591&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1439699433977297%2F&show_text=true&width=267&t=0"
                  width="100%"
                  height="600"
                  style={{ border: 'none', overflow: 'hidden', borderRadius: '2.5rem' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-[2.5rem] shadow-2xl"
                />
              </div>
              <p className={`text-center ${colorScheme.secondaryText} text-sm mt-4 font-medium`}>
                Watch Dr. Relan share insights about increasing heart attacks among kids
              </p>
            </motion.div>
          )}

          {/* Expertise Content */}
          <div className="space-y-12">

            {/* Areas of Expertise */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
              <div className="space-y-8">
                {content.expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${colorScheme.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {area.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Makes Different */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${colorScheme.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What Makes Us Different</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {content.uniqueValue}
              </p>

              {/* Key Differentiators */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Evidence-based treatment protocols",
                  "Personalized care plans",
                  "Multidisciplinary team approach",
                  "Cutting-edge medical technology"
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`w-3 h-3 ${colorScheme.primaryBg} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto relative overflow-hidden">
            {/* CTA Background Pattern */}
            <div className={`absolute inset-0 ${colorScheme.lightBg} opacity-20`}></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-current opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-current opacity-5 rounded-full translate-x-32 translate-y-32"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Take the Next Step in Your Heart Health Journey?
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Schedule a consultation today and experience world-class cardiac care tailored specifically to your needs with personalized treatment plans.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className={`bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group`}
              >
                <span className="relative z-10">Book Your Consultation</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              {/* Additional Info */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Same Day Appointments Available</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Insurance Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={isDrJay ? "drjay" : "dranupam"}
        doctorName={doctor.personalDetails.name}
      />
    </section>
  );
};

export default WhyChooseDoctor;