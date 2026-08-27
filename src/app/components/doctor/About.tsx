'use client'
// components/doctor/About.tsx
import React, { useState } from 'react';
import Doctor from '@/data/doctors';
import Image from 'next/image';
import { Award, BookOpen, ChevronRight, Globe, Stethoscope, GraduationCap, Briefcase } from 'lucide-react';
import BookAppointmentModal from '../utilities/BookAppointment';
import { TimelineShowcaseList } from '@/app/components/utilities/TimelineShowcaseList';

interface AboutProps {
  doctor: Doctor;
}

const About: React.FC<AboutProps> = ({ doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const {
    personalDetails,
    currentWorkExperience,
    pastExperience,
    education,
    research,
    awards,
    id,

    bio,
  } = doctor;

  // Determine color schema based on doctor ID
  const isDrJay = id === 'dr-jay' || personalDetails.name.toLowerCase().includes('jay');

  const colorScheme = isDrJay ? {
    primary: 'red',
    secondary: 'amber',
    accent: 'white',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-amber-500',
    bgGradient: 'from-red-50/30 via-amber-50/20 to-white',
    cardBg: 'bg-white/80',
    primaryText: 'text-red-600',
    secondaryText: 'text-amber-600',
    primaryBg: 'bg-red-500',
    secondaryBg: 'bg-amber-500',
    borderColor: 'border-red-200/30',
    hoverShadow: 'hover:shadow-red-200/20'
  } : {
    primary: 'teal',
    secondary: 'yellow',
    accent: 'white',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-yellow-500',
    bgGradient: 'from-teal-50/30 via-yellow-50/20 to-white',
    cardBg: 'bg-white/80',
    primaryText: 'text-teal-600',
    secondaryText: 'text-yellow-600',
    primaryBg: 'bg-teal-500',
    secondaryBg: 'bg-yellow-500',
    borderColor: 'border-teal-200/30',
    hoverShadow: 'hover:shadow-teal-200/20'
  };

  // Transform data for timeline components
  const educationTimelineData = education.map(edu => ({
    title: edu.degree,
    organisation: {
      name: edu.institution,
      href: '#'
    },
    date: `${edu.duration.start} - ${edu.duration.end}`,

  }));

  const experienceTimelineData = [
    ...currentWorkExperience.map(exp => ({
      title: exp.role,
      organisation: {
        name: exp.organization,
        href: '#'
      },
      date: 'Current Position',

      description: `${exp.department ? `${exp.department} - ` : ''}Currently serving in this role at ${exp.organization}`
    })),
    ...pastExperience.map(exp => ({
      title: exp.role,
      organisation: {
        name: exp.organization,
        href: '#'
      },
      date: exp.duration ? `${exp.duration.start} - ${exp.duration.end}` : 'Previous Position',

      description: `${exp.department ? `${exp.department} - ` : ''}Previous role at ${exp.organization}`
    }))
  ];

  const awardsTimelineData = awards.map(award => ({
    title: award.title,
    organisation: {
      name: award.title || 'Recognition',
      href: '#'
    },
    date: award.year?.toString() || 'Award Received',

  }));

  const researchTimelineData = research.flatMap(res =>
    res.publications.map(pub => ({
      title: pub.title,
      organisation: {
        name: pub.journal,
        href: '#'
      },
      date: pub.year?.toString() || 'Published',
      location: '',
      description: `Published in ${pub.journal}${pub.year ? ` in ${pub.year}` : ''}`
    }))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* OPTIMIZED LANDING SECTION - Same as before */}
      <section className="relative overflow-hidden mt-20">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className={`absolute inset-0 ${isDrJay ? 'bg-gradient-to-br from-red-50 via-amber-25 to-white' : 'bg-gradient-to-br from-teal-50 via-yellow-25 to-white'}`}></div>

          {/* Secondary overlay gradient */}
          <div className={`absolute inset-0 ${isDrJay ? 'bg-gradient-to-r from-red-500/8 via-amber-500/4 to-transparent' : 'bg-gradient-to-r from-teal-500/8 via-yellow-500/4 to-transparent'}`}></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDrJay ? '#ef4444' : '#14b8a6'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>

          {/* Enhanced curved bottom with smoother transition */}
          <svg
            className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-40 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C300,20 500,60 800,40 C900,30 1000,50 1200,80 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[600px] lg:min-h-[700px]">

            {/* Content Section - Enhanced Typography and Spacing */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Professional Badge - Enhanced */}
              <div className="flex justify-center lg:justify-start">
                <div className={`inline-flex items-center px-4 py-3 rounded-full ${colorScheme.cardBg} backdrop-blur-lg ${colorScheme.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <Stethoscope className={`w-5 h-5 ${colorScheme.primaryText} mr-3`} />
                  <span className={`${colorScheme.primaryText} font-semibold text-sm lg:text-base tracking-wide`}>
                    {personalDetails.speciality}
                  </span>
                </div>
              </div>

              {/* Main Content - Enhanced Typography */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                    <span className="block">{personalDetails.name.split(' ')[0]}</span>
                    <span className={`block bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} bg-clip-text text-transparent`}>
                      {personalDetails.name.split(' ').slice(1).join(' ')}
                    </span>
                  </h1>



                  <p className="text-gray-600 leading-relaxed text-base md:text-md lg:text-lg max-w-2xl mx-auto lg:mx-0 hidden md:block mb-6">
                    {personalDetails.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    {/* LinkedIn Link */}
                    <a
                      href={doctor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 ${colorScheme.cardBg} backdrop-blur-lg ${colorScheme.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        className={`w-6 h-6 ${colorScheme.primaryText} group-hover:scale-110 transition-transform duration-300`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* Google Scholar Link */}
                    <a
                      href={doctor.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 ${colorScheme.cardBg} backdrop-blur-lg ${colorScheme.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      aria-label="Google Scholar Profile"
                    >
                      <svg
                        className={`w-6 h-6 ${colorScheme.primaryText} group-hover:scale-110 transition-transform duration-300`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="flex justify-center lg:justify-start pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`group bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1`}
                >
                  <span className="flex items-center justify-center">
                    Book Your Appointment
                    <ChevronRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* ENHANCED PROFILE IMAGE SECTION - Much Bigger Photo */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                {/* Enhanced floating elements around the image */}
                <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 lg:-bottom-12 lg:-right-12 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-15 animate-pulse delay-1000"></div>

                {/* Main image container with enhanced effects */}
                <div className="relative group">
                  {/* Glowing background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-3xl lg:rounded-4xl blur-3xl opacity-30 group-hover:opacity-40 transition-all duration-700 scale-110`}></div>

                  {/* Image frame with enhanced styling */}
                  <div className={`relative ${colorScheme.cardBg} backdrop-blur-lg rounded-3xl lg:rounded-4xl p-3 lg:p-4 shadow-2xl ${colorScheme.borderColor} border-2 group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]`}>
                    {/* Inner glow effect */}
                    <div className="absolute inset-3 lg:inset-4 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-50 pointer-events-none"></div>

                    {/* The main profile image - MUCH BIGGER */}
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                      <Image
                        src={personalDetails.imageUrl}
                        alt={personalDetails.name}
                        width={600}
                        height={750}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        priority
                        style={{ aspectRatio: '4/5' }}
                      />

                      {/* Overlay gradient for better text readability if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section - Standalone */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg ${colorScheme.borderColor} border`}>
          <div className="flex items-center mb-4 md:mb-6">
            <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-3 md:mr-4`}>
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">About</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {bio}
          </p>
        </div>
      </section>

      {/* Timeline Sections */}
      {educationTimelineData.length > 0 && (
        <TimelineShowcaseList
          title="Education"
          details={educationTimelineData}
          colorScheme={colorScheme}
          icon={<GraduationCap className="w-5 h-5 text-white" />}
        />
      )}

      {experienceTimelineData.length > 0 && (
        <TimelineShowcaseList
          title="Experience"
          details={experienceTimelineData}
          colorScheme={colorScheme}
          icon={<Briefcase className="w-5 h-5 text-white" />}
        />
      )}

      {awardsTimelineData.length > 0 && (
        <TimelineShowcaseList
          title="Awards & Recognition"
          details={awardsTimelineData}
          colorScheme={colorScheme}
          icon={<Award className="w-5 h-5 text-white" />}
        />
      )}

      {researchTimelineData.length > 0 && (
        <TimelineShowcaseList
          title="Research & Publications"
          details={researchTimelineData}
          colorScheme={colorScheme}
          icon={<Globe className="w-5 h-5 text-white" />}
        />
      )}

      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={isDrJay ? "drjay" : "dranupam"}
        doctorName={doctor.personalDetails.name}
      />
    </div>
  );
};

export default About;