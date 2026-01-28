'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Doctor from '@/data/doctors';
import dynamic from 'next/dynamic';

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
        gradient: 'from-red-900/80 via-red-800/70 to-red-700/60',
        textPrimary: 'text-white',
        textSecondary: 'text-red-100',
        button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        buttonText: 'text-white',
        accent: 'border-red-400'
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
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700"></div>
          </video>
          {/* Video overlay */}

        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${colors.textPrimary} mb-6 leading-tight tracking-tight`}>
            {h1}
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl ${colors.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed font-light`}>
            {span}
          </p>

          {/* Doctor Info Card */}
          <div className="mb-12 p-6 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-18">
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
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className={`
              ${colors.button}
              ${colors.buttonText}
              font-semibold
              py-5 px-12
              rounded-2xl
              text-md md:text-lg
              transform
              transition-all
              duration-300
              hover:scale-105
              focus:outline-none
              focus:ring-4
              focus:ring-opacity-50
              shadow-2xl
              hover:shadow-3xl
              active:scale-95
              backdrop-blur-sm
              min-w-[200px]
              cursor-pointer
            `}
              aria-label={`Book Appointment with ${doctor.personalDetails.name}`}
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </button>


          </div>
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
    </main>
  );
};

export default Home;