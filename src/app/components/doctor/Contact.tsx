'use client'

import React, { useState } from "react";
import Doctor from '@/data/doctors';
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,

  FaArrowRight,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import FadeUp from "@/animation/fade-up";

interface ContactProps {
  doctor: Doctor;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;

  [key: string]: string;
}

const doctorFormIds = {
  drjay: 'xovwobnv',
  dranupam: 'mgvyjqlo'
}

const Contact: React.FC<ContactProps> = ({ doctor }) => {
  const [state, submitToFormspree] = useForm(doctorFormIds[doctor.id as keyof typeof doctorFormIds]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date: ${formData.date}
Message: ${formData.message}`;

    const whatsappNumber = doctor.contactDetails.phone?.replace(/[^\d]/g, '') || "";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const finalHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await submitToFormspree(e);

      if (!state.errors) {
        sendWhatsAppMessage();
      }

      if (state.succeeded) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Gradient Background */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden mt-28 md:mt-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Get in <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Schedule your consultation with {doctor.personalDetails.name}
              </p>
              <div className="text-gray-500 text-lg mb-8">
                {doctor.personalDetails.speciality}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                  onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Appointment
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[700px] rounded-3xl overflow-hidden">
                <Image
                  src={doctor.personalDetails.imageUrl2}
                  alt={doctor.personalDetails.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information - Subtle Pattern Background */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156, 163, 175) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-light text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Information</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <FadeUp duration={0.6}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <FaPhone className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Details</h3>
                <div className="space-y-4">
                  {doctor.contactDetails.phone && (
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-4 text-blue-500" />
                      <span>{doctor.contactDetails.phone}</span>
                    </div>
                  )}
                  {doctor.contactDetails.email && (
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-4 text-blue-500" />
                      <span>{doctor.contactDetails.email}</span>
                    </div>
                  )}
                  {doctor.contactDetails.address && (
                    <div className="flex items-start text-gray-600">
                      <FaMapMarkerAlt className="mr-4 text-blue-500 mt-1" />
                      <span>{doctor.contactDetails.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>

            {/* Schedule Cards */}
            {doctor.offline.map((schedule, index) => (
              <FadeUp key={index} duration={0.6 + index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">{doctor.contactDetails.address}</h3>
                  <div className="space-y-4">
                    {schedule.schedules.map((timing, timingIndex) => (
                      <div key={timingIndex} className="flex items-center">
                        <FaClock className="mr-4 text-green-500" />
                        <div>
                          <p className="font-medium text-gray-900">{timing.day}</p>
                          <p className="text-gray-600 text-sm">{timing.timing}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* {doctor.onlineTiming && (
              <FadeUp duration={0.8}>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6">Online Consultation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaClock className="mr-4 text-white/80" />
                      <div>
                        <p className="font-medium">Available Days</p>
                        <p className="text-white/80 text-sm">{doctor.days.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-4 text-white/80" />
                      <div>
                        <p className="font-medium">Timing</p>
                        <p className="text-white/80 text-sm">{doctor.onlineTiming}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            )} */}
          </div>

          {/* Social Links */}

        </div>
      </section>

      {/* Appointment Form - Clean White with Accent */}
      <section id="appointment-form" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light mb-4 text-gray-900">
              Book Your <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Appointment</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&#39;ll get back to you shortly
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 backdrop-blur-sm">
            {state.succeeded ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 text-lg">
                  Your appointment request has been submitted successfully.
                  Dr. {doctor.personalDetails.name} will contact you soon.
                </p>
              </motion.div>
            ) : (
              <FadeUp duration={0.6}>
                <form onSubmit={finalHandleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div> */}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91-XXXX-XXXX"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                      />
                      <ValidationError prefix="Date" field="date" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your symptoms or reason for consultation..."
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <FaArrowRight className="ml-2" />
                      </span>
                    )}
                  </motion.button>
                </form>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-light text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Location</span>
          </motion.h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.308553553954!2d77.32582385857022!3d28.371631393795468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd78a06fe98f%3A0x5c7eaa85fa52d93!2sSarvodaya%20Hospital%20and%20Research%20Center%20%7C%20Dental%20and%20Maxillofacial%20Surgery%20%7C%20Faridabad!5e0!3m2!1sen!2sin!4v1752063408927!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
