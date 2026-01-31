'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Doctor from '@/data/doctors';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HomeServicesSection = dynamic(() => import('../utilities/HomeServices'), { ssr: false });
const HomeAbout = dynamic(() => import('../utilities/HomeAbout'), { ssr: false });
const HomeContactSection = dynamic(() => import('../utilities/HomeContact'), { ssr: false });
const HomeReviews = dynamic(() => import('../utilities/HomeReviews'), { ssr: false });
const WhyChooseDoctor = dynamic(() => import('../utilities/WhyChooseDoctor'), { ssr: false });
const BookAppointmentModal = dynamic(() => import('../utilities/BookAppointment'), { ssr: false });


interface HomeProps {
  doctor: Doctor;
}

const Home: React.FC<HomeProps> = ({ doctor }) => {
  const { personalDetails, id, span, h1, bgVideo } = doctor;

  const isJayRelan = id === 'drjay';

  const getColorClasses = () => {
    if (isJayRelan) {
      return {
        gradient: 'from-red-950/80 via-red-900/70 to-red-800/60',
        textPrimary: 'text-white',
        textSecondary: 'text-red-50/90',
        button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-red-600/20',
        buttonText: 'text-white',
        accent: 'border-red-400/30'
      };
    } else {
      return {
        gradient: 'from-teal-900/80 via-teal-800/70 to-teal-700/60',
        textPrimary: 'text-white',
        textSecondary: 'text-teal-100',
        button: 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500',
        buttonText: 'text-white',
        accent: 'border-teal-400'
      };
    }
  };

  const colors = getColorClasses();

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <main>
      <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={bgVideo} type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-slate-900"></div>
          </video>
          {/* Video overlay */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold ${colors.textPrimary} mb-8 sm:pt-20 leading-[1.2] tracking-tight`}
          >
            {h1}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-lg sm:text-xl md:text-2xl ${colors.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed font-light`}
          >
            {span}
          </motion.p>

          {/* Doctor Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-16 p-8 backdrop-blur-md bg-white/10 rounded-[2.5rem] border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/[0.15]"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-24">
              {/*  doctor avatar  */}
              <div className='flex-shrink-0'>
                <div className='relative'>
                  <Image
                    src={personalDetails.imageUrl2}
                    alt={personalDetails.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-contain border-4 border-white/30 shadow-xl"
                    width={96}
                    height={96}
                    priority
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className={`text-2xl font-semibold ${colors.textPrimary} mb-2`}>
                  {personalDetails.name}
                </h2>
                <p className={`${colors.textSecondary} text-lg mb-2`}>
                  {personalDetails.speciality}
                </p>
                <p className={`${colors.textSecondary} text-sm`}>
                  {doctor.totalExp} years of experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              className={`
              ${colors.button}
              ${colors.buttonText}
              font-bold
              py-6 px-16
              rounded-full
              text-base md:text-lg
              transform
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-1
              focus:outline-none
              focus:ring-4
              focus:ring-opacity-50
              shadow-xl
              hover:shadow-red-600/30
              active:scale-95
              backdrop-blur-sm
              min-w-[240px]
              cursor-pointer
            `}
              aria-label={`Book Appointment with ${doctor.personalDetails.name}`}
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-20 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-32 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 right-20 w-1 h-16 bg-white/30 rounded-full blur-sm hidden lg:block"></div>
      </section>
      <HomeAbout doctor={doctor} />
      <HomeServicesSection subdomain={doctor.subdomain} />
      <WhyChooseDoctor doctor={doctor} />
      <HomeReviews doctor={doctor} />
      <HomeContactSection doctor={doctor} formspreeId={doctor.id === 'drjay' ? 'xovwobnv' : 'mgvyjqlo'} />

      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={isJayRelan ? "drjay" : "dranupam"}// or "dranupam"
        doctorName={doctor.personalDetails.name}
      />
    </main >
  );
};

export default Home;