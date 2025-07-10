'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Service, getServiceBySlug } from '@/data/services';

const ServiceTemplate = () => {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const doctorId = params.doctorId as 'drjay' | 'dranupam';
  const slug = params.slug as string;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const foundService = getServiceBySlug(slug);
        
        if (!foundService) {
          setError('Service not found');
          return;
        }

        // Verify the service belongs to the correct doctor
        if (foundService.subdomain !== doctorId) {
          setError('Service not found for this doctor');
          return;
        }

        setService(foundService);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError('Failed to load service');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug, doctorId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${doctorId === 'drjay' ? 'border-amber-500' : 'border-teal-500'}`}></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">{error || 'Service not found'}</h1>
          <Link href={`/doctor/${doctorId}/services`} className={`${doctorId === 'drjay' ? 'text-amber-600 hover:text-amber-700' : 'text-teal-600 hover:text-teal-700'} hover:underline transition-colors`}>
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const isDrJay = doctorId === 'drjay';
  const colorScheme = isDrJay 
    ? {
        primary: 'bg-gradient-to-br from-amber-50 to-red-50',
        secondary: 'bg-white',
        accent: 'text-amber-600',
        accentHover: 'hover:text-amber-700',
        border: 'border-amber-200',
        button: 'bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700',
        buttonOutline: 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
        gradient: 'from-amber-50 to-red-50',
        heroGradient: 'from-amber-600/10 to-red-600/10',
        text: 'text-slate-800',
        subtext: 'text-slate-600',
        iconColor: 'text-amber-600',
        dotColor: 'bg-amber-500',
        cardHover: 'hover:bg-amber-50',
        ctaSection: 'bg-gradient-to-r from-amber-50 via-white to-red-50'
      }
    : {
        primary: 'bg-gradient-to-br from-teal-50 to-yellow-50',
        secondary: 'bg-white',
        accent: 'text-teal-600',
        accentHover: 'hover:text-teal-700',
        border: 'border-teal-200',
        button: 'bg-gradient-to-r from-teal-600 to-yellow-600 hover:from-teal-700 hover:to-yellow-700',
        buttonOutline: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white',
        gradient: 'from-teal-50 to-yellow-50',
        heroGradient: 'from-teal-600/10 to-yellow-600/10',
        text: 'text-slate-800',
        subtext: 'text-slate-600',
        iconColor: 'text-teal-600',
        dotColor: 'bg-teal-500',
        cardHover: 'hover:bg-teal-50',
        ctaSection: 'bg-gradient-to-r from-teal-50 via-white to-yellow-50'
      };

  const doctorName = isDrJay ? 'Dr. Jay Relan' : 'Dr. Anupam Das';

  return (
    <div className={`min-h-screen ${colorScheme.primary}`}>
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className={`absolute inset-0 bg-gradient-to-b ${colorScheme.heroGradient}`}></div>
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-white/80">
                  <li>
                    <Link href={`/doctor/${doctorId}`} className="hover:text-white transition-colors">
                      {doctorName}
                    </Link>
                  </li>
                  <li className="text-white/60">/</li>
                  <li>
                    <Link href={`/doctor/${doctorId}/services`} className="hover:text-white transition-colors">
                      {isDrJay ? 'Services' : 'Procedures'}
                    </Link>
                  </li>
                  <li className="text-white/60">/</li>
                  <li className="text-white font-medium">{service.title}</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book Consultation
                </button>
                
                <button className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-1.946-.276A5.005 5.005 0 0112 20.717a5.005 5.005 0 01-1.054-3.276A8.955 8.955 0 0110 17.5c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8z" />
                  </svg>
                  Ask Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Symptoms Section */}
            {service.symptoms && (
              <div className={`${colorScheme.secondary} rounded-2xl p-8 ${colorScheme.border} border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <h2 className={`text-3xl font-bold mb-8 ${colorScheme.text} flex items-center`}>
                  <svg className={`w-8 h-8 mr-3 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                  </svg>
                  Common Symptoms
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200">
                      <div className={`w-3 h-3 rounded-full mt-2 ${colorScheme.dotColor} shadow-sm`}></div>
                      <span className={`${colorScheme.subtext} leading-relaxed text-lg`}>
                        {symptom}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Procedure Info Section */}
            {service.procedureInfo && (
              <div className={`${colorScheme.secondary} rounded-2xl p-8 ${colorScheme.border} border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <h2 className={`text-3xl font-bold mb-8 ${colorScheme.text} flex items-center`}>
                  <svg className={`w-8 h-8 mr-3 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Procedure Information
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className={`${colorScheme.subtext} leading-relaxed text-lg`}>
                    {service.procedureInfo}
                  </p>
                </div>
              </div>
            )}

            {/* Why Choose Section */}
            <div className={`${colorScheme.secondary} rounded-2xl p-8 ${colorScheme.border} border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <h2 className={`text-3xl font-bold mb-8 ${colorScheme.text} flex items-center`}>
                <svg className={`w-8 h-8 mr-3 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Why Choose {doctorName}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200">
                  <svg className={`w-7 h-7 ${colorScheme.iconColor} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className={`font-bold text-lg ${colorScheme.text} mb-2`}>Expert Care</h3>
                    <p className={`${colorScheme.subtext} leading-relaxed`}>Years of specialized experience in cardiac care with proven results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200">
                  <svg className={`w-7 h-7 ${colorScheme.iconColor} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className={`font-bold text-lg ${colorScheme.text} mb-2`}>Advanced Technology</h3>
                    <p className={`${colorScheme.subtext} leading-relaxed`}>State-of-the-art equipment and cutting-edge techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200">
                  <svg className={`w-7 h-7 ${colorScheme.iconColor} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className={`font-bold text-lg ${colorScheme.text} mb-2`}>Personalized Treatment</h3>
                    <p className={`${colorScheme.subtext} leading-relaxed`}>Tailored care plans designed for each patient's unique needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200">
                  <svg className={`w-7 h-7 ${colorScheme.iconColor} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className={`font-bold text-lg ${colorScheme.text} mb-2`}>Compassionate Care</h3>
                    <p className={`${colorScheme.subtext} leading-relaxed`}>Patient-centered approach with empathy and understanding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className={`${colorScheme.secondary} rounded-2xl p-8 ${colorScheme.border} border shadow-lg hover:shadow-xl transition-shadow duration-300 sticky top-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${colorScheme.text} flex items-center`}>
                <svg className={`w-6 h-6 mr-2 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get in Touch
              </h3>
              <div className="space-y-4 mb-6">
                <div className={`flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100`}>
                  <svg className={`w-6 h-6 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={`${colorScheme.subtext} font-medium text-lg`}>{service.phone}</span>
                </div>
              </div>

              <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${colorScheme.button} text-white hover:shadow-lg transform hover:-translate-y-1`}>
                Schedule Appointment
              </button>
            </div>

            {/* Related Services */}
            <div className={`${colorScheme.secondary} rounded-2xl p-8 ${colorScheme.border} border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <h3 className={`text-2xl font-bold mb-6 ${colorScheme.text} flex items-center`}>
                <svg className={`w-6 h-6 mr-2 ${colorScheme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Related {isDrJay ? 'Services' : 'Procedures'}
              </h3>
              <div className="space-y-3">
                <Link href={`/doctor/${doctorId}/services`} className={`block p-4 rounded-lg ${colorScheme.cardHover} transition-all duration-200 border ${colorScheme.border}`}>
                  <span className={`${colorScheme.subtext} ${colorScheme.accentHover} font-medium`}>
                    View All {isDrJay ? 'Services' : 'Procedures'} →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${colorScheme.ctaSection} py-20`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${colorScheme.text}`}>
            Ready to Take the Next Step?
          </h2>
          <p className={`text-xl mb-10 ${colorScheme.subtext} leading-relaxed`}>
            Don't wait to address your cardiac health concerns. Schedule a consultation with {doctorName} today and take the first step towards better heart health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className={`inline-flex items-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${colorScheme.button} text-white hover:shadow-xl transform hover:-translate-y-1 hover:scale-105`}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Book Appointment Now
            </button>
            <button className={`inline-flex items-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 border-2 ${colorScheme.buttonOutline} bg-white hover:shadow-lg transform hover:-translate-y-1`}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-1.946-.276A5.005 5.005 0 0112 20.717a5.005 5.005 0 01-1.054-3.276A8.955 8.955 0 0110 17.5c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8z" />
              </svg>
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate; 