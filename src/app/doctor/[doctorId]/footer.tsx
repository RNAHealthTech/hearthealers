// footer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight, Activity, Shield, Target, Zap, Settings, Microscope } from 'lucide-react';
import { drjayData, dranupamData } from '@/data/doctors';
import type Doctor from '@/data/doctors';

interface FooterProps {
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
  }
}

const Footer: React.FC<FooterProps> = ({ doctorId }) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    const doctorData = getDoctorById(doctorId);
    setDoctor(doctorData);
  }, [doctorId]);

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
      darkBg: 'bg-red-900'
    }
    : {
      primary: 'bg-teal-600',
      primaryHover: 'hover:bg-teal-700',
      accent: 'text-teal-600',
      accentHover: 'hover:text-teal-700',
      gradient: 'from-teal-600 to-teal-700',
      border: 'border-teal-200',
      bg: 'bg-teal-50',
      darkBg: 'bg-teal-900'
    };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  // Dr. Jay's Services
  const jayServices = [
    { title: 'Congenital Heart Defects', icon: Heart, description: 'Shunts, Valvular/Vascular Obstructions, Cyanotic diseases' },
    { title: 'Acquired Heart Diseases', icon: Activity, description: 'Rheumatic heart disease, Cardiomyopathies' },
    { title: 'Pulmonary Hypertension', icon: Shield, description: 'Specialized care for pulmonary circulation' },
    { title: 'Systemic Hypertension', icon: Target, description: 'Comprehensive blood pressure management' },
    { title: 'Cardiac Arrhythmias', icon: Zap, description: 'Heart rhythm disorder treatment' }
  ];

  // Dr. Anupam's Procedures (Updated with actual surgical procedures)
  const anupamProcedures = [
    {
      title: 'Coronary Artery Bypass Grafting',
      icon: Heart,
      description: 'Both off-pump and on-pump CABG, with total arterial revascularization (LIMA, RIMA, and radial artery harvesting)'
    },
    {
      title: 'Valve Repair/Replacements',
      icon: Settings,
      description: 'Mitral valve repair/replacements (MVR), aortic valve replacement (AVR), tricuspid valve repair, double valve replacement (DVR)'
    },
    {
      title: 'Minimally Invasive Cardiac Surgeries',
      icon: Target,
      description: 'Keyhole surgeries including MICS MVR, MICS AVR, MIDCAB, MICS ASD Closure, MICS VSD Closure'
    },
    {
      title: 'Adult and Pediatric Congenital Heart Surgeries',
      icon: Activity,
      description: 'ASD, VSD, AVSD, Tetralogy of Fallot, BT shunt, TAPVC repair, single ventricle repair, Ebstein\'s repair, and more'
    },
    {
      title: 'Aortic Surgeries',
      icon: Microscope,
      description: 'Bentall operation, Wheat procedure, hemiarch or total arch replacement, TEVAR/EVAR for aortic aneurysms and dissections'
    },
    {
      title: 'Vascular Surgeries',
      icon: Heart,
      description: 'Aortobifemoral bypass, femoro-femoral bypass, femoropopliteal bypass, embolectomies, vascular repairs, arteriovenous fistulas'
    },
    {
      title: 'Heart Failure and Mechanical Circulatory Support',
      icon: Settings,
      description: 'Heart failure treatment, ECMO (venoarterial and venovenous), LVADs, IABP, heart transplantation'
    }
  ];



  const servicesData = isJayRelan ? jayServices : anupamProcedures;
  const sectionTitle = isJayRelan ? 'Services' : 'Procedures';

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Doctor Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorScheme.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {doctor.personalDetails.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold leading-tight">{doctor.personalDetails.name}</h3>
                  <p className={`text-sm ${isJayRelan ? 'text-red-400' : 'text-teal-400'} leading-tight`}>
                    {doctor.personalDetails.speciality}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                {doctor.personalDetails.description}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {doctor.socialLinks.linkedin && (
                  <a href={doctor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                    LinkedIn
                  </a>
                )}
                {doctor.socialLinks.instagram && (
                  <a href={doctor.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Instagram
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm`}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services/Procedures */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6">{sectionTitle}</h4>
              <ul className="space-y-3">
                {servicesData.map((service, index) => (
                  <li key={index}>
                    <a
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm`}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="truncate">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1 font-raleway">
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {doctor.contactDetails.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 mt-0.5 ${isJayRelan ? 'text-red-400' : 'text-teal-400'} flex-shrink-0`} />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {doctor.contactDetails.address}
                    </span>
                  </div>
                )}
                {doctor.contactDetails.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className={`w-5 h-5 ${isJayRelan ? 'text-red-400' : 'text-teal-400'} flex-shrink-0`} />
                    <a href={`tel:${doctor.contactDetails.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {doctor.contactDetails.phone}
                    </a>
                  </div>
                )}
                {doctor.contactDetails.email && (
                  <div className="flex items-center gap-3">
                    <Mail className={`w-5 h-5 ${isJayRelan ? 'text-red-400' : 'text-teal-400'} flex-shrink-0`} />
                    <a href={`mailto:${doctor.contactDetails.email}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                      {doctor.contactDetails.email}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Clock className={`w-5 h-5 ${isJayRelan ? 'text-red-400' : 'text-teal-400'} flex-shrink-0`} />
                  <span className="text-gray-300 text-sm">
                    Online: {doctor.onlineTiming}
                  </span>
                </div>
              </div>

              {/* Offline Schedule */}
              {/* {doctor.offline.length > 0 && (
                <div className="mt-6">
                  <h5 className="font-medium mb-3 text-sm">Offline Schedule</h5>
                  <div className="space-y-3">
                    {doctor.offline.map((location, index) => (
                      <div key={index} className="p-3 bg-gray-800 rounded-lg">
                        <p className="font-medium text-sm mb-2 text-white">{location.hospital}</p>
                        <div className="space-y-1">
                          {location.schedules.map((schedule, scheduleIndex) => (
                            <div key={scheduleIndex} className="flex justify-between text-xs text-gray-400">
                              <span className="truncate mr-2">{schedule.day}</span>
                              <span className="flex-shrink-0">{schedule.timing}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {doctor.personalDetails.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Heart className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>powered by <a className='underline hover:text-white transition-colors' href='https://rnahealthtech.com' target="_blank" rel="noopener noreferrer">RNA HealthTech</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default Footer;
