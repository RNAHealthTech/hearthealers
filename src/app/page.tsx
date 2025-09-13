'use client'

import React, { useState } from 'react';
import { ArrowRight, Heart, Stethoscope, Award, MapPin, Phone, Menu, X, Calendar, User, CheckCircle, Activity, Shield, Scan, Pill, Gauge, Zap } from 'lucide-react';
import Doctor, { drjayData, dranupamData } from '@/data/doctors'; // Adjust path as needed
//import { services, Service } from '@/data/services'; // Adjust path as needed
import Image from 'next/image';
import AppointmentModal from './components/utilities/AppointmentModalMix';
import MediaCarousel from './components/utilities/MediaCarousel';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateToSubdomain = (subdomain: string) => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      const port = window.location.port;
      const newUrl = `${protocol}//${subdomain}.localhost${port ? ':' + port : ''}/`;
      window.location.assign(newUrl);
    } else {
      const domainParts = hostname.split('.');
      const mainDomain = domainParts.length > 2 ? domainParts.slice(1).join('.') : hostname;
      const newUrl = `${protocol}//${subdomain}.${mainDomain}/`;
      window.location.assign(newUrl);
    }
  };

  const getDoctorTheme = (subdomain: string) => {
    return subdomain === 'drjay'
      ? { primary: 'bg-red-600', secondary: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-700', gradient: 'from-red-500 to-red-600' }
      : { primary: 'bg-teal-600', secondary: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-700', gradient: 'from-teal-500 to-teal-600' };
  };

  const doctors = [dranupamData, drjayData];
  //const drJayServices = services.filter((service: Service) => service.subdomain === 'drjay');
  //const drAnupamServices = services.filter((service: Service) => service.subdomain === 'dranupam');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const images = [
  { src: 'https://hearthealers.in/images/reviews/j1.webp', alt: 'Patient 1', width: 800, height: 600 },
  { src: 'https://hearthealers.in/images/reviews/j2.webp', alt: 'Patient 2', width: 600, height: 900 },
  { src: 'https://hearthealers.in/images/reviews/a1.webp', alt: 'Patient 3', width: 1024, height: 768 },
  { src: 'https://hearthealers.in/images/reviews/a2.webp', alt: 'Patient 3', width: 1024, height: 768 },

];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Heart className="h-8 w-8 text-red-600 animate-pulse" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  HeartHealers
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => handleScroll('doctors')} className="text-white/90 hover:text-red-400 transition-all duration-300 font-medium relative group">
                  Our Doctors
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => handleScroll('services')} className="text-white/90 hover:text-red-400 transition-all duration-300 font-medium relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                >
                  Book Appointment
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-white/20 rounded-b-2xl -mx-6 mt-4">
                <div className="flex flex-col items-center py-4 space-y-4">
                  <button onClick={() => handleScroll('doctors')} className="text-zinc-800 hover:text-red-400 transition-colors text-lg font-medium">
                    Our Doctors
                  </button>
                  <button onClick={() => handleScroll('services')} className="text-zinc-800 hover:text-red-400 transition-colors text-lg font-medium">
                    Services
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-4 rounded-xl font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>



      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Curved Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-transparent to-blue-600/20"></div>

          <div className="absolute top-0 right-0 w-3/5 h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M30,0 C60,0 100,40 100,100 L100,0 Z" fill="url(#heroGradient)" />
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(71, 85, 105, 0.15)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full mt-38 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Heart className="h-4 w-4 mr-2 text-red-400" />
                  Expert Cardiac Care
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Your Heart
                  <div className="text-red-300 font-extrabold mt-2">
                    Our Expertise
                  </div>
                </h1>

                <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Leading cardiac specialists providing comprehensive heart care with cutting-edge technology and personalized treatment approaches.
                </p>

                <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-white mx-auto lg:mx-0 mb-8"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group cursor-pointer bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-2xl hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 hover:scale-105 text-md md:text-lg font-semibold flex items-center justify-center"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleScroll('doctors')}
                  className="group border-2 cursor-pointer border-white/40 text-white px-8 py-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-md md:text-lg font-semibold flex items-center justify-center"
                >
                  Meet Our Doctors
                  <User className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-2 lg:order-2">
              <div className="relative">


                <div className="relative w-full h-96 lg:h-[700px] rounded-3xl overflow-hidden">
                  <Image
                    src="https://hearthealers.in/images/landing.png"
                    alt="Expert cardiac care"
                    className="w-full h-full object-contain"
                    width={600}
                    height={700}
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold  text-gray-900">welcome</div>
                      <div className="text-sm text-gray-600">Happy Heart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="doctors" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-6">
              Meet Our Heart Experts
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doctors.map((doctor: Doctor) => {
              const theme = getDoctorTheme(doctor.subdomain);
              return (
                <div key={doctor.id} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100">
                  {/* ⚠️ BEGIN: New Design for Bigger Image ⚠️ */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={doctor.personalDetails.imageUrl}
                      alt={doctor.personalDetails.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    {/* Glowing Edge Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  </div>
                  {/* ⚠️ END: New Design for Bigger Image ⚠️ */}

                  <div className="p-10">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 transition-colors">
                        {doctor.personalDetails.name}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                          {doctor.h1}
                        </h4>
                      </div>

                      {/* Shortened bio - 2 lines */}
                      <div className="text-center">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {doctor.bio.split('.').slice(0, 2).join('.') + (doctor.bio.split('.').length > 2 ? '.' : '')}
                        </p>
                      </div>

                      <div className={`bg-gradient-to-r ${theme.secondary} rounded-2xl p-6 border border-gray-100 hidden md:block`}>
                        <h4 className="font-bold text-gray-900 mb-4 text-center flex items-center justify-center">
                          <Award className="h-5 w-5 mr-2" />
                          Key Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {doctor.skills.slice(0, 4).map((skill, skillIndex) => (
                            <span key={skillIndex} className={`px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md transition-shadow`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => navigateToSubdomain(doctor.subdomain)}
                        className={`group flex items-center justify-center cursor-pointer w-full bg-gradient-to-r ${theme.gradient} text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                      >
                        View Profile
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MediaCarousel images={images} />

      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cardiac care services with state-of-the-art technology and personalized treatment approaches
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Dr. Jay's Services */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Dr. Jay&#39;s Services</h3>
                <div className="w-20 h-1 bg-red-600 mx-auto"></div>
              </div>
              <div className="space-y-4">
                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Congenital Heart Defects</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Acquired Heart Diseases</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
                    <Activity className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Hypertension Care</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Cardiac Arrhythmias</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Anupam's Services */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-teal-600 mb-4">Dr. Anupam&#39;s Services</h3>
                <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
              </div>
              <div className="space-y-4">
                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Adult and Pediatric Congenital Heart Surgeries</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
                    <Scan className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Aortic Surgeries</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
                    <Pill className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Vascular Surgeries</h4>
                  </div>
                </div>

                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
                    <Gauge className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Heart Failure and Mechanical Circulatory Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Care of Your Heart?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
              Don&#39;t wait for tomorrow. Book your consultation today with our expert cardiologists and take the first step towards a healthier heart.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-white text-zinc-600 px-8 py-4 rounded-2xl cursor-pointer hover:bg-red-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 text-lg font-semibold flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center text-red-100">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Available for Online & Offline Consultations</span>
            </div>
          </div>
        </div>
      </section>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <span className="text-2xl font-bold">HeartHealers</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert cardiac care with cutting-edge technology and personalized treatment approaches for your heart health.
              </p>

            </div>

            {/* Our Doctors Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Our Doctors</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://drjay.hearthealers.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Dr. Jay Relan
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dranupam.hearthealers.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Dr. Anupam Das
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleScroll('doctors')}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <Stethoscope className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Our Doctors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll('services')}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <Activity className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2 text-red-400" />
                  <span>+91-9899094465                  </span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2 text-red-400" />
                  <span>+91-9868700886</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-red-400 flex-shrink-0" />
                  <span>Faridabad, Delhi NCR</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} HeartHealers. All rights reserved.
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span>Powered by </span>
                <a
                  href="https://rnahealthtech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors ml-1 font-medium"
                >
                  RNA HealthTech
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;