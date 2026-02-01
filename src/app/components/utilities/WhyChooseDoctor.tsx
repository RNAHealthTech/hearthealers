"use client";

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

  const isDrJay =
    doctor.id === 'drjay' ||
    doctor.personalDetails.name.toLowerCase().includes('jay');

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🎨 Color Scheme
  const colorScheme = isDrJay
    ? {
      gradientFrom: 'from-red-600',
      gradientTo: 'to-orange-500',
      bgGradient: 'from-red-50 via-orange-50 to-red-50',
      primaryText: 'text-red-600',
      secondaryText: 'text-red-500',
      primaryBg: 'bg-red-500',
      lightBg: 'bg-red-50',
      iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
    }
    : {
      gradientFrom: 'from-teal-600',
      gradientTo: 'to-cyan-500',
      bgGradient: 'from-teal-50 via-cyan-50 to-teal-50',
      primaryText: 'text-teal-600',
      secondaryText: 'text-teal-500',
      primaryBg: 'bg-teal-500',
      lightBg: 'bg-teal-50',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    };

  // 📚 Content
  const content = isDrJay
    ? {
      title: `Why Choose ${doctor.personalDetails.name}?`,
      subtitle: "Leading Excellence in Pediatric & Fetal Cardiology",

      expertiseAreas: [
        {
          icon: <Heart className="w-5 h-5" />,
          title: "Specialized Pediatric Heart Care",
          description:
            "Expert in diagnosing and treating congenital heart defects in children with compassionate care.",
        },
        {
          icon: <Baby className="w-5 h-5" />,
          title: "Advanced Fetal Cardiology",
          description:
            "Prenatal heart diagnosis using cutting-edge ultrasound technology.",
        },
        {
          icon: <Stethoscope className="w-5 h-5" />,
          title: "Minimally Invasive Interventions",
          description:
            "Catheter-based treatments ensuring faster recovery for young patients.",
        },
      ],

      uniqueValue:
        "Combining advanced expertise with pediatric psychology, Dr. Relan ensures medical excellence and emotional comfort for families.",
    }
    : {
      title: `Why Choose ${doctor.personalDetails.name}?`,
      subtitle: "Master Surgeon in Cardiothoracic & Vascular Excellence",

      expertiseAreas: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Complex Cardiac Surgery",
          description:
            "Expert in bypass, valve repair, and transplant surgeries with exceptional precision.",
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: "Dual Adult & Pediatric Expertise",
          description:
            "Advanced cardiovascular surgeries across all age groups.",
        },
        {
          icon: <Microscope className="w-5 h-5" />,
          title: "Minimally Invasive Techniques",
          description:
            "Robotic procedures reducing trauma and speeding recovery.",
        },
      ],

      uniqueValue:
        "Dr. Das combines surgical mastery with innovative techniques to deliver life-saving results with faster recovery.",
    };

  return (
    <>
      <section
        className={`py-20 md:py-28 bg-gradient-to-br ${colorScheme.bgGradient} relative overflow-hidden`}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-current rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-current rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className={`inline-block px-5 py-2 ${colorScheme.lightBg} rounded-full mb-4`}>
              <span className={`${colorScheme.primaryText} font-semibold text-xs tracking-wider uppercase`}>
                Medical Excellence
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
              {content.title}
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>

          {/* 🔥 FIXED PREMIUM GRID */}
          <div className={`grid ${isDrJay ? 'lg:grid-cols-[420px_1fr]' : 'lg:grid-cols-1'} gap-12 items-start`}>

            {/* VIDEO */}
            {isDrJay && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto"
              >
                <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-white">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=591&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1439699433977297%2F&show_text=true&width=267&t=0"
                    className="w-full aspect-[9/16]"
                    style={{ border: 'none' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>

                <p className="text-gray-500 text-sm mt-3 text-center">
                  Watch Dr. Relan share insights about increasing heart attacks among kids
                </p>
              </motion.div>
            )}

            {/* CONTENT */}
            <div className="space-y-10">

              {/* EXPERTISE */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas of Expertise
                </h3>

                <div className="space-y-5">
                  {content.expertiseAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                    >
                      <div className={`w-10 h-10 ${colorScheme.iconBg} rounded-lg flex items-center justify-center text-white`}>
                        {area.icon}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {area.title}
                        </h4>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* WHAT MAKES DIFFERENT */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${colorScheme.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                    <Users className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    What Makes Us Different
                  </h3>
                </div>

                <p className="text-gray-600 mb-5">
                  {content.uniqueValue}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Evidence-based treatment protocols",
                    "Personalized care plans",
                    "Multidisciplinary team approach",
                    "Cutting-edge medical technology"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 ${colorScheme.primaryBg} rounded-full`} />
                      <span className="text-gray-700 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 🔥 CTA */}
          <div className="text-center mt-16">
            <div className="
    w-full
    bg-white
    rounded-3xl
    p-10 md:p-14
    shadow-[0_25px_80px_rgba(0,0,0,0.12)]
    border border-gray-100
  ">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Ready to Take the Next Step in Your Heart Health Journey?
              </h3>

              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Schedule a consultation today and experience world-class cardiac care tailored specifically to your needs.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`
        bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo}
        text-white
        px-10 py-4
        rounded-xl
        font-semibold
        text-lg
        shadow-lg
        hover:shadow-xl
        hover:scale-[1.04]
        transition-all
      `}
              >
                Book Your Consultation
              </button>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Same Day Appointments
                </div>

                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Insurance Accepted
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ✅ Modal OUTSIDE section */}
      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={isDrJay ? "drjay" : "dranupam"}
        doctorName={doctor.personalDetails.name}
      />
    </>
  );
};

export default WhyChooseDoctor;
