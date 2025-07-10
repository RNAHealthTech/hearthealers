'use client'

import React, { useState } from 'react';
import { ArrowRight, Heart, Stethoscope, Award, MapPin, Phone, Mail, Menu, X, Calendar, User, Clock, CheckCircle, Star, Activity, Shield, Scan, Pill, Gauge, Zap } from 'lucide-react';
import Doctor, { drjayData, dranupamData } from '@/data/doctors'; // Adjust path as needed
import { services, Service } from '@/data/services'; // Adjust path as needed
import FadeRight from '@/animation/fade-right';
import FadeUp from '@/animation/fade-up';
import AppointmentModal from './components/utilities/AppointmentModalMix';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'offline', // offline or online
    doctor: '',
    message: ''
  });
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
  const drJayServices = services.filter((service: Service) => service.subdomain === 'drjay');
  const drAnupamServices = services.filter((service: Service) => service.subdomain === 'dranupam');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', appointmentForm);
    alert('Thank you! We will contact you soon to confirm your appointment.');
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      type: 'offline',
      doctor: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <button onClick={() => handleScroll('doctors')} className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
                Our Doctors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => handleScroll('services')} className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Book Now
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
              <div className="flex flex-col items-center py-4 space-y-4">
                <button onClick={() => handleScroll('doctors')} className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">
                  Our Doctors
                </button>
                <button onClick={() => handleScroll('services')} className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">
                  Services
                </button>
                <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">
                  Contact
                </button>
                <button onClick={() => handleScroll('appointment')} className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full font-medium">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/60 to-red-700/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
        </div>

        

        <div className="relative z-20 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-12" >
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full border border-white/30 shadow-2xl">
              <Heart className="h-20 w-20 text-white animate-pulse" />
            </div>
          </div>

          <div  >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Your Heart
              <div className="text-5xl md:text-7xl mt-2 text-red-300 font-extrabold">
                Our Expertise
              </div>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-white mx-auto mb-8"></div>
          </div>

          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light"  >
            Experience world-class cardiac care with India's leading heart specialists. 
            Advanced diagnostics, minimally invasive procedures, and compassionate care 
            for your heart health journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" >
            <button 
              onClick={() => handleScroll('appointment')}
              className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-5 rounded-2xl hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 hover:scale-105 text-lg font-semibold flex items-center justify-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleScroll('doctors')}
              className="group border-2 border-white/40 text-white px-12 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center"
            >
              Meet Our Doctors
              <User className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

       </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-6">
              Meet Our Expert Cardiologists
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of internationally acclaimed cardiac specialists brings decades of experience, 
              cutting-edge expertise, and personalized care to your heart health journey.
            </p>
          </div>
 
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {doctors.map((doctor: Doctor, index) => {
    const theme = getDoctorTheme(doctor.subdomain);
    return (
      <div key={doctor.id} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
        {/* Gradient Background Accent */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${theme.gradient}`}></div>
        
        <div className="p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-6">
              {doctor.personalDetails.imageUrl ? (
                <div className="relative">
                  <img
                    src={doctor.personalDetails.imageUrl}
                    alt={doctor.personalDetails.name}
                    className="w-36 h-36 rounded-full object-cover shadow-2xl ring-4 ring-white group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-t ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              ) : (
                <div className={`w-36 h-36 ${theme.secondary} rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white group-hover:scale-105 transition-transform duration-300`}>
                  <Stethoscope className={`h-16 w-16 ${theme.text}`} />
                </div>
              )}
           
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
              {doctor.personalDetails.name}
            </h3>
            
            
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <h4 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                {doctor.h1}
              </h4>
             </div>
            
            {/* Shortened bio - only 2 lines */}
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed text-base">
                {doctor.bio.split('.').slice(0, 2).join('.') + (doctor.bio.split('.').length > 2 ? '.' : '')}
              </p>
            </div>
            
            <div className={`bg-gradient-to-r ${theme.secondary} to-gray-50 rounded-2xl p-6 border border-gray-100`}>
              <h4 className="font-bold text-gray-900 mb-4 text-center flex items-center justify-center">
                <Award className="h-5 w-5 mr-2" />
                Key Specializations
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {doctor.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span key={skillIndex} className={`px-4 py-2 bg-white ${theme.text} rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md transition-shadow`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
           
            <button
              onClick={() => navigateToSubdomain(doctor.subdomain)}
              className={`group flex items-center justify-center w-full bg-gradient-to-r ${theme.gradient} text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Profile & Book Appointment
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

<section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-6">
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
          <h3 className="text-3xl font-bold text-red-600 mb-4">Dr. Jay's Services</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="space-y-4">
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Cardiac Catheterization</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
              <Stethoscope className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Coronary Angioplasty</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
              <Activity className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Pacemaker Implantation</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors flex-shrink-0">
              <Zap className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Electrophysiology</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Dr. Anupam's Services */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-teal-600 mb-4">Dr. Anupam's Services</h3>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>
        <div className="space-y-4">
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
              <Shield className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Preventive Cardiology</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
              <Scan className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Cardiac Imaging</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
              <Pill className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Heart Failure Management</h4>
            </div>
          </div>
          
          <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-center space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors flex-shrink-0">
              <Gauge className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Hypertension Care</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

   <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold">HeartHealers</span>
            </div>
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <button
                onClick={() => handleScroll('doctors')}
                className="text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
              >
                Our Doctors
              </button>
              <button
                onClick={() => handleScroll('services')}
                className="text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} HeartHealers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;