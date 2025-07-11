'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, Calendar, Home, User, Briefcase, FileText, MessageSquare, Stethoscope, Heart, Activity, Shield, Zap, Target, Microscope, Settings } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { drjayData, dranupamData } from '@/data/doctors';
import type Doctor from '@/data/doctors';

interface HeaderProps {
  doctorId: string;
}

function getDoctorById(id: string): Doctor | null {   
    switch (id) {     
        case 'drjay':       
           return drjayData;     
        case 'dranupam':       
            return dranupamData;     
        default:       
            return null;   
        }} 

const Header: React.FC<HeaderProps> = ({ doctorId }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  console.log(setActiveSection); 

  useEffect(() => {
    const doctorData = getDoctorById(doctorId);
    setDoctor(doctorData);
  }, [doctorId]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesOpen = useCallback(() => {
    setIsServicesOpen(true);
  }, []);

  const handleServicesClose = useCallback(() => {
    setIsServicesOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  if (!doctor) return null;

  const isJayRelan = doctorId === 'drjay';
  const colorScheme = isJayRelan 
    ? {
        primary: 'bg-red-600',
        primaryHover: 'hover:bg-red-700',
        accent: 'text-red-600',
        accentHover: 'hover:text-red-700',
        gradient: 'from-red-600 to-red-700',
        border: 'border-red-200',
        bg: 'bg-red-50',
        light: 'bg-red-100',
        glass: 'bg-red-500/10 backdrop-blur-xl border-red-200/20'
      }
    : {
        primary: 'bg-teal-600',
        primaryHover: 'hover:bg-teal-700',
        accent: 'text-teal-600',
        accentHover: 'hover:text-teal-700',
        gradient: 'from-teal-600 to-teal-700',
        border: 'border-teal-200',
        bg: 'bg-teal-50',
        light: 'bg-teal-100',
        glass: 'bg-teal-500/10 backdrop-blur-xl border-teal-200/20'
      };

  // Dr. Jay's Services
  const jayServices = [
    { title: 'Congenital Heart Defects', icon: Heart, description: 'Shunts, Valvular/Vascular Obstructions, Cyanotic diseases' },
    { title: 'Acquired Heart Diseases', icon: Activity, description: 'Rheumatic heart disease, Cardiomyopathies' },
    { title: 'Pulmonary Hypertension', icon: Shield, description: 'Specialized care for pulmonary circulation' },
    { title: 'Systemic Hypertension', icon: Target, description: 'Comprehensive blood pressure management' },
    { title: 'Cardiac Arrhythmias', icon: Zap, description: 'Heart rhythm disorder treatment' }
  ];

  // Dr. Anupam's Procedures
  const anupamProcedures = [
    { title: 'Device Closures', icon: Settings, description: 'ASD, VSD, PDA, AP window closures' },
    { title: 'Balloon Valvuloplasty', icon: Heart, description: 'Pulmonary & Aortic valve procedures' },
    { title: 'Coarctation Treatment', icon: Activity, description: 'Balloon dilation for aortic coarctation' },
    { title: 'Pediatric Stenting', icon: Target, description: 'Neonatal & pediatric cardiac stenting' },
    { title: 'Diagnostic Procedures', icon: Microscope, description: 'Angiography & cardiac catheterization' }
  ];

  const servicesData = isJayRelan ? jayServices : anupamProcedures;
  const servicesTitle = isJayRelan ? 'Services' : 'Procedures';

  const navigationItems = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About', href: '/about', icon: User },
    { title: servicesTitle, href: '/services', icon: Briefcase, hasSubmenu: true },
    { title: 'Blogs', href: '/blogs', icon: FileText },
    { title: 'Contact', href: '/contact', icon: MessageSquare }
  ];

  return (
    <>
      {/* Desktop Header - Floating & Glassy */}
      <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled 
          ? `bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl` 
          : 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl'
      }`}>
        
        {/* Main Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Mobile Center, Desktop Left */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer lg:flex-initial flex-1 lg:justify-start justify-center"
              whileHover={{ scale: 1.02 }}
 
            >
              <div className={`w-12 h-12 rounded-full ${scrolled ? colorScheme.light : 'bg-white/20'} flex items-center justify-center backdrop-blur-sm`}>
                <Stethoscope className={`w-6 h-6 ${colorScheme.accent}`} />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-zinc-800'} transition-colors`}>
                  {doctor.personalDetails.name}
                </h1>
                <p className={`text-sm ${scrolled ? colorScheme.accent : 'text-gray/80'} transition-colors`}>
                  {doctor.personalDetails.speciality}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasSubmenu ? (
                    <div
                      className="group relative"
                      onMouseEnter={handleServicesOpen}
                      onMouseLeave={handleServicesClose}
                    >
                      <motion.button
                        className={`flex items-center gap-1 font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                          scrolled 
                            ? `text-gray-700 ${colorScheme.accentHover} hover:bg-white/50` 
                            : 'text-zinc-800 hover:text-zinc/80 hover:bg-white/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.title}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-3 z-10"
                          >
                            {servicesData.map((service, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`flex items-start gap-3 px-4 py-3 text-gray-700 ${colorScheme.accentHover} transition-colors hover:bg-white/50 rounded-lg mx-2`}
                                whileHover={{ x: 5 }}
                              >
                                <service.icon className="w-5 h-5 mt-1 flex-shrink-0" />
                                <div>
                                  <div className="font-medium">{service.title}</div>
                                  <div className="text-sm text-gray-500">{service.description}</div>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      className={`font-medium px-4 py-2 rounded-full transition-all duration-200 relative ${
                        scrolled 
                          ? `text-gray-700 ${colorScheme.accentHover} hover:bg-white/50` 
                          : 'text-zinc-800 hover:text-zinc/80 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.title}</span>
                      <AnimatePresence>
                        {activeSection === item.href.replace('#', '') && (
                          <motion.span
                            layoutId="activeTab"
                            className={`absolute inset-0 -z-10 rounded-full ${colorScheme.primary}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.a>
                  )}
                </div>
              ))}
            </div>

            {/* Book Appointment Button */}
            <div className="flex items-center gap-4">
              <motion.button 
                className={`hidden md:flex items-center gap-2 ${colorScheme.primary} ${colorScheme.primaryHover} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button 
                className={`hidden p-2 rounded-full transition-colors backdrop-blur-sm cursor-pointer ${
                  scrolled ? `text-gray-700 ${colorScheme.accentHover} hover:bg-white/50` : 'text-zinc-800 hover:text-zinc/80 hover:bg-white/20'
                }`}
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 rounded-b-2xl"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      {item.hasSubmenu ? (
                        <div>
                          <motion.button 
                            className={`flex items-center gap-2 font-medium ${colorScheme.accentHover} transition-colors w-full text-left py-2`}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            whileHover={{ x: 5 }}
                          >
                            <item.icon className="w-5 h-5" />
                            {item.title}
                            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                          </motion.button>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 ml-7 flex flex-col gap-3"
                              >
                                {servicesData.map((service, subIndex) => (
                                  <motion.a 
                                    key={subIndex}
                                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`flex items-start gap-3 text-gray-600 ${colorScheme.accentHover} transition-colors py-2 hover:bg-white/50 rounded-lg px-2`}
                                    whileHover={{ x: 5 }}
                                  >
                                    <service.icon className="w-4 h-4 mt-1 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-sm">{service.title}</div>
                                      <div className="text-xs text-gray-500">{service.description}</div>
                                    </div>
                                  </motion.a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.a 
                          href={item.href} 
                          className={`flex items-center gap-2 font-medium ${colorScheme.accentHover} transition-colors py-2 hover:bg-white/50 rounded-lg px-2`}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-5 h-5" />
                          {item.title}
                        </motion.a>
                      )}
                    </div>
                  ))}
                  <motion.button 
                    className={`${colorScheme.primary} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 justify-center shadow-lg mt-4`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* New Unique Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
        <motion.div 
          className="bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl p-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {navigationItems.slice(0, 4).map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 relative ${
                  activeSection === item.href.replace('#', '') 
                    ? `${colorScheme.accent} ${colorScheme.light}` 
                    : `text-gray-600 ${colorScheme.accentHover}`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.title}</span>
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="bottomActiveTab"
                    className={`absolute inset-0 -z-10 rounded-xl ${colorScheme.light}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Floating Action Button in Bottom Nav */}
            <motion.button
              className={`${colorScheme.primary} text-white p-3 rounded-full shadow-lg relative`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Calendar className="w-6 h-6" />
               
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
