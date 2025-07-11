import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from '@formspree/react';
import { X, Phone, Calendar, MessageCircle, User } from 'lucide-react';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'drjay' | 'dranupam';
  doctorName: string;
}

const doctorFormIds = {
  drjay: 'xovwobnv',
  dranupam: 'mgvyjqlo'
};

const doctorWhatsAppNumbers = {
  drjay: '919868700886',
  dranupam: '919899094465'
};

const colorScheme = {
  drjay: {
    accent: 'red-500',
    light: 'red-50',
    border: 'border-red-200',
    ring: 'focus:ring-red-500',
    text: 'text-red-600',
    button: 'bg-red-500 hover:bg-red-600',
    radio: 'text-red-500 focus:ring-red-500'
  },
  dranupam: {
    accent: 'teal-500',
    light: 'teal-50',
    border: 'border-teal-200',
    ring: 'focus:ring-teal-500',
    text: 'text-teal-600',
    button: 'bg-teal-500 hover:bg-teal-600',
    radio: 'text-teal-500 focus:ring-teal-500'
  }
};

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
  variant,
  doctorName
}) => {
  const colors = colorScheme[variant];
  const [state, handleSubmit] = useForm(doctorFormIds[variant]);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appointmentType: '',
    message: ''
  });

  // Ensure component only renders on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
    
    // Send WhatsApp message after successful form submission
    if (state.succeeded) {
      sendWhatsAppMessage();
    }
  };

  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Appointment Type: ${formData.appointmentType}
Message/Concern: ${formData.message}`;

    const whatsappNumber = doctorWhatsAppNumbers[variant];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle form submission success
  useEffect(() => {
    if (state.succeeded) {
      sendWhatsAppMessage();
    }
  }, [state.succeeded]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Book Appointment
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600">
              Schedule a consultation with <span className={`font-medium ${colors.text}`}> {doctorName}</span>
            </p>
          </div>

          {state.succeeded ? (
            <div className="text-center py-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${colors.light} flex items-center justify-center`}>
                <svg className={`w-8 h-8 text-${colors.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Request Sent!
              </h3>
              <p className="text-gray-600 mb-4">
                You'll be redirected to WhatsApp to complete your appointment booking.
              </p>
              <button
                onClick={onClose}
                className={`${colors.button} text-white px-6 py-2 rounded-lg transition-colors`}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`block w-full rounded-lg border-gray-300 shadow-sm p-3 ${colors.ring} focus:border-transparent transition-colors`}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`block w-full rounded-lg border-gray-300 shadow-sm p-3 ${colors.ring} focus:border-transparent transition-colors`}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Appointment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Appointment Type
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="online"
                      onChange={handleChange}
                      className={`form-radio h-4 w-4 ${colors.radio} border-gray-300`}
                    />
                    <span className="ml-3 text-gray-700">Online Consultation</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="offline"
                      onChange={handleChange}
                      className={`form-radio h-4 w-4 ${colors.radio} border-gray-300`}
                    />
                    <span className="ml-3 text-gray-700">In-Person Visit</span>
                  </label>
                </div>
              </div>

              {/* Message/Concern Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Concern/Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`block w-full rounded-lg border-gray-300 shadow-sm p-3 ${colors.ring} focus:border-transparent transition-colors resize-none`}
                  placeholder="Please describe your concern or any specific message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting || !formData.appointmentType}
                className={`w-full ${colors.button} text-white px-6 py-3 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {state.submitting ? 'Sending...' : 'Book Appointment'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  // Don't render on server side
  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {isOpen && modalContent}
    </>,
    document.body
  );
};

export default BookAppointmentModal;