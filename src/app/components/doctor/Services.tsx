'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Service, getServicesBySubdomain } from '@/data/services';
import { motion } from 'framer-motion';
import BookAppointmentModal from '../utilities/BookAppointment';



const Services = () => {
  const params = useParams();
  const [services, setServices] = useState<Service[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const doctorId = params.doctorId as 'drjay' | 'dranupam';


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const doctorServices = getServicesBySubdomain(doctorId);
        setServices(doctorServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [doctorId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const isDrJay = doctorId === 'drjay';
  const colorScheme = isDrJay
    ? {
      primary: 'bg-blue-50',
      secondary: 'bg-white',
      accent: 'text-blue-600',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
      gradient: 'from-blue-50 to-white'
    }
    : {
      primary: 'bg-teal-500',
      secondary: 'bg-zinc-100',
      accent: 'text-slate-100',
      border: 'border-slate-700',
      button: 'bg-slate-700 hover:bg-slate-600',
      gradient: 'from-slate-900 to-slate-800'
    };

  const doctorName = isDrJay ? 'Dr. Jay Relan' : 'Dr. Anupam';
  const serviceType = isDrJay ? 'Services' : 'Procedures';

  return (
    <div className={`min-h-screen ${isDrJay ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-gradient-to-br from-teal-50 to-white'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10">
        <motion.div
          className="absolute inset-0 z-0 shadow-xl"
          style={{
            backgroundImage: "url('https://hearthealers.in/images/services-landing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDrJay ? 'text-slate-800' : 'text-white'}`}>
              {serviceType}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDrJay ? 'text-slate-600' : 'text-slate-300'}`}>
              {isDrJay
                ? 'Comprehensive cardiac care with expertise in congenital and acquired heart conditions'
                : 'Advanced interventional cardiology procedures with minimally invasive techniques'
              }
            </p>
            <div className={`inline-block px-6 py-3 rounded-full text-sm font-semibold ${isDrJay ? 'bg-blue-100 text-blue-800' : 'bg-slate-700 text-slate-200'}`}>
              {doctorName}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden backdrop-blur-xl rounded-2xl ${colorScheme.secondary}  backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDrJay ? 'text-slate-800' : 'text-zinc-800'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-3 ${isDrJay ? 'text-slate-600' : 'text-slate-800'}`}>
                  {service.description}
                </p>

                {/* Symptoms/Procedure Info */}
                {service.symptoms && (
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${isDrJay ? 'text-slate-700' : 'text-slate-200'}`}>
                      Common Symptoms:
                    </h4>
                    <ul className={`text-xs space-y-1 ${isDrJay ? 'text-slate-600' : 'text-slate-400'}`}>
                      {service.symptoms.slice(0, 3).map((symptom, index) => (
                        <li key={index} className="flex items-center">
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isDrJay ? 'bg-blue-400' : 'bg-slate-500'}`}></span>
                          {symptom}
                        </li>
                      ))}
                      {service.symptoms.length > 3 && (
                        <li className={`text-xs ${isDrJay ? 'text-blue-600' : 'text-slate-300'}`}>
                          +{service.symptoms.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${colorScheme.button} text-white hover:shadow-lg transform hover:-translate-y-0.5`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className={`${colorScheme.primary} py-16`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDrJay ? 'text-slate-800' : 'text-white'}`}>
            Ready to Get Started?
          </h2>
          <p className={`text-lg mb-8 ${isDrJay ? 'text-slate-600' : 'text-slate-300'}`}>
            Schedule a consultation to discuss your cardiac health needs
          </p>
          <button
            className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${colorScheme.button} text-white hover:shadow-lg transform hover:-translate-y-0.5`}
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Appointment
          </button>
        </div>
      </div>
      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={isDrJay ? "drjay" : "dranupam"}// or "dranupam"
        doctorName={doctorName}
      />
    </div>
  );
};

export default Services;