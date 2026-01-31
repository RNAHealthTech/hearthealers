import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Doctor from '@/data/doctors';

interface HomeAboutProps {
  doctor: Doctor;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ doctor }) => {
  // Dynamic styling based on doctor
  const getColorScheme = () => {
    if (doctor.id === 'drjay') {
      return {
        background: 'from-orange-50/50 via-white to-orange-50/30',
        cardBg: 'bg-white/60',
        accentColor: 'text-orange-600',
        buttonBg: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
        borderColor: 'border-orange-100/50'
      };
    } else if (doctor.id === 'dranupam') {
      return {
        background: 'from-teal-50/50 via-white to-teal-50/30',
        cardBg: 'bg-white/60',
        accentColor: 'text-teal-600',
        buttonBg: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600',
        borderColor: 'border-teal-100/50'
      };
    }
    // Default fallback
    return {
      background: 'from-gray-50 via-blue-50 to-gray-100',
      cardBg: 'bg-gradient-to-br from-blue-100/80 to-gray-100/80',
      accentColor: 'text-blue-600',
      buttonBg: 'bg-gradient-to-r from-blue-500 to-gray-500 hover:from-blue-600 hover:to-gray-600',
      borderColor: 'border-blue-200'
    };
  };

  const colors = getColorScheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  //   const imageVariants = {
  //     hidden: { opacity: 0, scale: 0.8, x: 50 },
  //     visible: {
  //       opacity: 1,
  //       scale: 1,
  //       x: 0,
  //       transition: {
  //         duration: 0.8,
  //         ease: "easeOut" as const
  //       }
  //     }
  //   };

  return (
    <section className={`relative py-16 md:py-24 bg-gradient-to-br ${colors.background} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Meet Your{' '}
                <span className={`${colors.accentColor} relative`}>
                  Trusted Doctor
                  <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r ${colors.buttonBg.replace('hover:', '').replace('bg-gradient-to-r', '')} rounded-full`}></div>
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover the expertise, dedication, and compassionate care that defines{' '}
                <span className="font-semibold text-gray-800">{doctor.personalDetails.name}</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={`${colors.cardBg} backdrop-blur-md p-8 rounded-[2rem] border ${colors.borderColor} shadow-xl transition-all duration-500 hover:shadow-2xl`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${colors.buttonBg}`}></div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doctor.personalDetails.speciality}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.personalDetails.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 ${colors.cardBg} border ${colors.borderColor} rounded-full text-sm font-medium ${colors.accentColor}`}>
                    {doctor.totalExp} Years Experience
                  </span>
                  <span className={`px-3 py-1 ${colors.cardBg} border ${colors.borderColor} rounded-full text-sm font-medium ${colors.accentColor}`}>
                    {doctor.researchArticles}+ Research Articles
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Key Specializations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.skills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className={`w-4 h-4 ${colors.accentColor} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className={`inline-flex items-center space-x-3 ${colors.buttonBg} text-white px-10 py-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl`}
              >
                <span>Learn More About Dr {doctor.personalDetails.name.split(' ')[1]}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 gap-6 h-[750px]">
              {/* Standing Image - Takes full height */}
              <div className="col-span-2 relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src={doctor.personalDetails.imageUrl3}
                  alt={`${doctor.personalDetails.name} - Main`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Two Vertical Images */}
              <div className="col-span-1 flex flex-col gap-6 h-full">
                <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-xl group">
                  <Image
                    src={doctor.personalDetails.imageUrl || doctor.personalDetails.imageUrl3}
                    alt={`${doctor.personalDetails.name} - Portrait 1`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-xl group">
                  <Image
                    src={doctor.personalDetails.imageUrl2 || doctor.personalDetails.imageUrl3}
                    alt={`${doctor.personalDetails.name} - Portrait 2`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
              {/* Main Standing Image */}
              <div className="relative w-full h-96 rounded-3xl overflow-hidden">
                <Image
                  src={doctor.personalDetails.imageUrl3}
                  alt={`${doctor.personalDetails.name} - Main`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Two Horizontal Images Below */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={doctor.personalDetails.imageUrl || doctor.personalDetails.imageUrl3}
                    alt={`${doctor.personalDetails.name} - Portrait 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={doctor.personalDetails.imageUrl2 || doctor.personalDetails.imageUrl3}
                    alt={`${doctor.personalDetails.name} - Portrait 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;