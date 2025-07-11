'use client'
// components/doctor/About.tsx
import React, { useState, useEffect } from 'react';
import Doctor from '@/data/doctors';
import Image from 'next/image';
import { Calendar, MapPin, Phone, Mail, Award, BookOpen, Clock, Star, ChevronRight, Globe, Stethoscope, GraduationCap, Briefcase, Trophy, Medal, Crown } from 'lucide-react';

interface AboutProps {
  doctor: Doctor;
}

const About: React.FC<AboutProps> = ({ doctor }) => {
  const [activeTab, setActiveTab] = useState('bio');
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY)
  const { 
    personalDetails, 
    contactDetails, 
    currentWorkExperience, 
    pastExperience,
    education,
    research,
    awards,
    skills, 
    offline, 
    onlineTiming, 
    id, 
    span, bio,
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
 
 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Landing Section with Mobile Optimizations */}
      <section className="relative overflow-hidden mt-20">
        {/* Distinct curved background with stronger gradients */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDrJay ? 'bg-gradient-to-br from-red-100 via-amber-50 to-white' : 'bg-gradient-to-br from-teal-100 via-yellow-50 to-white'}`}></div>
          <div className={`absolute inset-0 ${isDrJay ? 'bg-gradient-to-r from-red-500/10 via-amber-500/5 to-transparent' : 'bg-gradient-to-r from-teal-500/10 via-yellow-500/5 to-transparent'}`}></div>
          <svg
            className="absolute bottom-0 left-0 w-full h-32 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C400,40 800,40 1200,120 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Content - Mobile Centered */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                {/* Professional Badge */}
                <div className="flex justify-center lg:justify-start">
                  <div className={`inline-flex items-center px-3 md:px-4 py-2 rounded-full ${colorScheme.cardBg} backdrop-blur-sm ${colorScheme.borderColor} border shadow-sm`}>
                    <Stethoscope className={`w-4 h-4 ${colorScheme.primaryText} mr-2`} />
                    <span className={`${colorScheme.primaryText} font-medium text-xs md:text-sm`}>
                      {personalDetails.speciality}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 md:mb-4 px-2 md:px-0">
                    {personalDetails.name}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 font-medium mb-4 md:mb-6 px-2 md:px-0">
                    {span}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl mx-auto lg:mx-0 px-2 md:px-0 hidden md:block">
                    {personalDetails.description}
                  </p>
                </div>
              </div>
              
              {/* Enhanced Stats - Mobile Centered */}
              <div className="hidden md:flex justify-center lg:justify-start">
                <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-sm ${colorScheme.borderColor} border`}>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center text-white`}>
                      <Clock className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900">{doctor.totalExp}</div>
                      <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button - Mobile Centered */}
              <div className="flex justify-center lg:justify-start">
                <button className={`bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group text-sm md:text-base`}>
                  <span className="flex items-center justify-center">
                    Book Appointment
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Profile Image - Mobile Optimized */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative ${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-2 md:p-3 shadow-xl ${colorScheme.borderColor} border`}>
                    <Image
                      src={personalDetails.imageUrl}
                      alt={personalDetails.name}
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-xl object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Professional Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Biography - Mobile Optimized */}
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

            {/* Education - Mobile Optimized */}
            <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg ${colorScheme.borderColor} border`}>
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-3 md:mr-4`}>
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50/50 rounded-xl p-4 md:p-6 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{edu.degree}</h3>
                    <p className={`${colorScheme.primaryText} font-medium mb-1 text-sm md:text-base`}>{edu.institution}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{edu.duration.start} - {edu.duration.end}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience with Dropdowns - Mobile Optimized */}
            <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg ${colorScheme.borderColor} border`}>
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-3 md:mr-4`}>
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Experience</h2>
              </div>
              
              {/* Current Experience Dropdown */}
              <div className="mb-4 md:mb-6">
                <button 
                  onClick={() => setActiveTab(activeTab === 'current' ? '' : 'current')}
                  className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-all duration-300"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">Current Position</h3>
                  <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-gray-600 transition-transform duration-300 ${activeTab === 'current' ? 'rotate-90' : ''}`} />
                </button>
                {activeTab === 'current' && (
                  <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                    {currentWorkExperience.map((exp, index) => (
                      <div key={index} className="bg-white/80 rounded-xl p-4 md:p-6 border border-gray-200/50 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{exp.role}</h4>
                        <p className={`${colorScheme.primaryText} font-medium mb-1 text-sm md:text-base`}>{exp.department}</p>
                        <p className="text-gray-700 mb-2 text-sm md:text-base">{exp.organization}</p>
                        <p className="text-gray-500 text-xs md:text-sm">{exp.duration.start} - {exp.duration.end}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Past Experience Dropdown */}
              <div>
                <button 
                  onClick={() => setActiveTab(activeTab === 'past' ? '' : 'past')}
                  className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-all duration-300"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">Previous Experience</h3>
                  <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-gray-600 transition-transform duration-300 ${activeTab === 'past' ? 'rotate-90' : ''}`} />
                </button>
                {activeTab === 'past' && (
                  <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                    {pastExperience.map((exp, index) => (
                      <div key={index} className="bg-white/80 rounded-xl p-4 md:p-6 border border-gray-200/50 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{exp.role}</h4>
                        {exp.department && <p className={`${colorScheme.primaryText} font-medium mb-1 text-sm md:text-base`}>{exp.department}</p>}
                        <p className="text-gray-700 mb-2 text-sm md:text-base">{exp.organization}</p>
                        <p className="text-gray-500 text-xs md:text-sm">{exp.duration.start} - {exp.duration.end}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Research - Mobile Optimized */}
            {research.length > 0 && (
              <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg ${colorScheme.borderColor} border`}>
                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-3 md:mr-4`}>
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Research</h2>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {research.map((res, index) => (
                    <div key={index} className="bg-gray-50/50 rounded-xl p-4 md:p-6 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">{res.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{res.description}</p>
                      {res.publications.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3 text-sm md:text-base">Publications</h4>
                          <div className="space-y-2">
                            {res.publications.map((pub, pubIndex) => (
                              <div key={pubIndex} className="text-gray-600 text-xs md:text-sm bg-white/50 p-3 rounded-lg border border-gray-200/30">
                                <span className={`font-medium ${colorScheme.primaryText}`}>{pub.title}</span> - {pub.journal}
                                {pub.year && <span className="text-gray-500"> ({pub.year})</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact & Schedule - Mobile Optimized */}
          <div className="space-y-4 md:space-y-6">
            {/* Contact Card */}
            <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg ${colorScheme.borderColor} border`}>
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-2 md:mr-3`}>
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Contact</h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                {contactDetails.phone && (
                  <div className="flex items-center bg-gray-50/50 p-2 md:p-3 rounded-lg">
                    <Phone className={`w-3 h-3 md:w-4 md:h-4 ${colorScheme.primaryText} mr-2 md:mr-3`} />
                    <span className="text-gray-700 text-xs md:text-sm">{contactDetails.phone}</span>
                  </div>
                )}
                {contactDetails.email && (
                  <div className="flex items-center bg-gray-50/50 p-2 md:p-3 rounded-lg">
                    <Mail className={`w-3 h-3 md:w-4 md:h-4 ${colorScheme.primaryText} mr-2 md:mr-3`} />
                    <span className="text-gray-700 text-xs md:text-sm break-all">{contactDetails.email}</span>
                  </div>
                )}
                {contactDetails.address && (
                  <div className="flex items-start bg-gray-50/50 p-2 md:p-3 rounded-lg">
                    <MapPin className={`w-3 h-3 md:w-4 md:h-4 ${colorScheme.primaryText} mr-2 md:mr-3 mt-0.5`} />
                    <span className="text-gray-700 text-xs md:text-sm">{contactDetails.address}</span>
                  </div>
                )}
              </div>

              {/* Online Timing */}
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200/50">
                <h4 className="text-xs md:text-sm font-medium text-gray-900 mb-2 md:mb-3 flex items-center">
                  <Clock className={`w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 ${colorScheme.primaryText}`} />
                  Online Consultation
                </h4>
                <div className="bg-gray-50/50 p-2 md:p-3 rounded-lg">
                  <p className="text-gray-700 text-xs md:text-sm">{onlineTiming}</p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg ${colorScheme.borderColor} border`}>
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-2 md:mr-3`}>
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Schedule</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {offline.map((location, index) => (
                  <div key={index} className="bg-gray-50/50 rounded-xl p-3 md:p-4 border border-gray-200/50">
                    <h4 className="font-medium text-gray-900 mb-2 md:mb-3 text-sm md:text-base">{location.hospital}</h4>
                    <div className="space-y-1 md:space-y-2">
                      {location.schedules.map((schedule, scheduleIndex) => (
                        <div key={scheduleIndex} className="flex justify-between items-center text-xs md:text-sm bg-white/50 p-2 rounded-lg">
                          <span className="text-gray-700">{schedule.day}</span>
                          <span className={`${colorScheme.primaryText} font-medium`}>{schedule.timing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg ${colorScheme.borderColor} border`}>
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-2 md:mr-3`}>
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Specializations</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-2 md:px-3 py-1 bg-gray-50/50 ${colorScheme.primaryText} text-xs md:text-sm font-medium rounded-full border border-gray-200/30 hover:bg-gray-100/50 transition-all duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Awards */}
            {awards.length > 0 && (
              <div className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-6 shadow-lg ${colorScheme.borderColor} border`}>
                <div className="flex items-center mb-6">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} rounded-lg flex items-center justify-center mr-3`}>
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Awards</h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="bg-gray-50/50 rounded-xl p-4 border border-gray-200/50">
                      <h4 className="font-medium text-gray-900 mb-2">{award.title}</h4>
                      <p className={`${colorScheme.secondaryText} font-medium text-sm mb-1`}>{award.year}</p>
                      {award.category && <p className="text-gray-500 text-sm">{award.category}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
 