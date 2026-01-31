'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Doctor from '@/data/doctors';

interface HomeContactSectionProps {
  doctor: Doctor;
  formspreeId: string;
}

const HomeContactSection: React.FC<HomeContactSectionProps> = ({ doctor, formspreeId }) => {
  const [state, handleSubmit] = useForm(formspreeId);

  // Dynamic styling based on doctor
  const getColorScheme = () => {
    if (doctor.id === 'drjay') {
      return {
        background: 'from-orange-50 via-amber-50 to-orange-100',
        cardBg: 'bg-white/80',
        accentColor: 'text-orange-600',
        primaryColor: 'orange',
        buttonBg: 'bg-orange-600 hover:bg-orange-700',
        borderColor: 'border-orange-300',
        focusRing: 'focus:ring-orange-400 focus:border-orange-500',
        ringColor: 'ring-orange-100'
      };
    } else if (doctor.id === 'dranupam') {
      return {
        background: 'from-teal-50 via-emerald-50 to-teal-100',
        cardBg: 'bg-white/80',
        accentColor: 'text-teal-600',
        primaryColor: 'teal',
        buttonBg: 'bg-teal-600 hover:bg-teal-700',
        borderColor: 'border-teal-300',
        focusRing: 'focus:ring-teal-400 focus:border-teal-500',
        ringColor: 'ring-teal-100'
      };
    }
    // Default fallback
    return {
      background: 'from-gray-50 via-blue-50 to-gray-100',
      cardBg: 'bg-white/80',
      accentColor: 'text-blue-600',
      primaryColor: 'blue',
      buttonBg: 'bg-blue-600 hover:bg-blue-700',
      borderColor: 'border-blue-300',
      focusRing: 'focus:ring-blue-400 focus:border-blue-500',
      ringColor: 'ring-blue-100'
    };
  };

  const colors = getColorScheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };


  // For demo purposes, using a generic map URL - replace with actual API key
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.308553553954!2d77.32582385857022!3d28.371631393795468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd78a06fe98f%3A0x5c7eaa85fa52d93!2sSarvodaya%20Hospital%20and%20Research%20Center%20%7C%20Dental%20and%20Maxillofacial%20Surgery%20%7C%20Faridabad!5e0!3m2!1sen!2sin!4v1752063408927!5m2!1sen!2sin`;

  return (
    <motion.section
      id="contact-info"
      className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      </div> */}
      <motion.div
        className="absolute inset-0 z-0 shadow-xl"
        style={{
          backgroundImage: "url('https://hearthealers.in/images/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your{' '}
            <span className={`${colors.accentColor} relative`}>
              Appointment
              <div className={`absolute -bottom-2 left-0 w-full h-1 bg-${colors.primaryColor}-500 rounded-full`}></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with {doctor.personalDetails.name} and take the first step towards better health
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className={`${colors.cardBg} backdrop-blur-sm ring-1 ${colors.ringColor} rounded-2xl shadow-xl overflow-hidden order-1 lg:order-1`}
          >
            <motion.div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className={`text-2xl font-bold ${colors.accentColor} mb-2`}>
                  Schedule Consultation
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we&#39;ll get back to you within 24 hours
                </p>
              </div>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${colors.primaryColor}-100 rounded-full flex items-center justify-center`}>
                    <svg className={`w-8 h-8 text-${colors.primaryColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-semibold ${colors.accentColor} mb-2`}>
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for your message. We&#39;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className={`block text-sm font-medium ${colors.accentColor} mb-2`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className={`w-full border ${colors.borderColor} rounded-xl shadow-sm p-3 bg-white/80 text-gray-900 ${colors.focusRing} focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white`}
                    />
                  </motion.div>



                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className={`block text-sm font-medium ${colors.accentColor} mb-2`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full border ${colors.borderColor} rounded-xl shadow-sm p-3 bg-white/80 text-gray-900 ${colors.focusRing} focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white`}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="date" className={`block text-sm font-medium ${colors.accentColor} mb-2`}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full border ${colors.borderColor} rounded-xl shadow-sm p-3 bg-white/80 text-gray-900 ${colors.focusRing} focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white`}
                    />
                    <ValidationError prefix="Date" field="date" errors={state.errors} />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className={`block text-sm font-medium ${colors.accentColor} mb-2`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your health concerns or questions..."
                      className={`w-full border ${colors.borderColor} rounded-xl shadow-sm p-3 bg-white/80 text-gray-900 ${colors.focusRing} focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white resize-none`}
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full px-6 py-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white ${colors.buttonBg} transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                    >
                      {state.submitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Map & Contact Info Section */}
          <motion.div
            variants={itemVariants}
            className={`${colors.cardBg} backdrop-blur-sm ring-1 ${colors.ringColor} rounded-2xl shadow-xl overflow-hidden order-2 lg:order-2`}
          >
            {/* Contact Information */}
            <div className="p-8 border-b border-gray-200">
              <h3 className={`text-2xl font-bold ${colors.accentColor} mb-6`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {doctor.contactDetails.phone && (
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-${colors.primaryColor}-100 rounded-full flex items-center justify-center`}>
                      <svg className={`w-5 h-5 text-${colors.primaryColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Phone</p>
                      <p className=" text-gray-900">{doctor.contactDetails.phone}</p>
                    </div>
                  </div>
                )}

                {doctor.contactDetails.email && (
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-${colors.primaryColor}-100 rounded-full flex items-center justify-center`}>
                      <svg className={`w-5 h-5 text-${colors.primaryColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Email</p>
                      <p className=" text-gray-900">{doctor.contactDetails.email}</p>
                    </div>
                  </div>
                )}

                {/* All Hospitals - Only for Dr Jay */}
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 bg-${colors.primaryColor}-100 rounded-full flex items-center justify-center mt-1`}>
                    <svg className={`w-5 h-5 text-${colors.primaryColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Practice Locations</p>

                    {/* Primary Hospital */}
                    {doctor.offline[0] && (
                      <div className="mb-3">
                        <p className="text-gray-900">{doctor.offline[0].hospital}</p>
                        <p className="text-sm text-gray-600">{doctor.offline[0].schedules[0]?.timing}</p>
                      </div>
                    )}

                    {/* Additional Hospitals - Only for Dr Jay */}
                    {doctor.id === 'drjay' && (
                      <div className="space-y-3 text-sm ">
                        <p className="text-xs text-gray-500 italic">Available at following hospitals on prior appointment:</p>
                        <div className="space-y-2">
                          <div>
                            <p className="font-medium text-gray-800">Madhukar Rainbow Children&apos;s Hospital</p>
                            <p className="text-gray-600">Malviya Nagar, Delhi</p>
                          </div>

                          <div>
                            <p className="font-medium text-gray-800">Sitaram Bhartia Institute of Science and Research</p>
                            <p className="text-gray-600">Qutab Institutional Area, Delhi</p>
                          </div>

                          <div>
                            <p className="font-medium text-gray-800">Apollo Cradle Maternity & Child Hospital</p>
                            <p className="text-gray-600">Greater Kailash, Delhi</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <motion.div className="h-80 md:h-96">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${doctor.personalDetails.name} Location`}
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeContactSection;