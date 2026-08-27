import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';


interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const variantStyles = {
  drjay: {
    gradient: 'from-red-50 via-red-100 to-red-200',
    button: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
    textPrimary: 'text-red-700',
    textSecondary: 'text-red-600',
    border: 'border-red-300',
    ring: 'focus:ring-red-500',
    accent: 'text-red-800',
    buttonText: 'text-white',
  },
  dranupam: {
    gradient: 'from-teal-50 via-teal-100 to-teal-200',
    button: 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-500',
    textPrimary: 'text-teal-700',
    textSecondary: 'text-teal-600',
    border: 'border-teal-300',
    ring: 'focus:ring-teal-500',
    accent: 'text-teal-800',
    buttonText: 'text-white',
  },
};

const doctorFormIds = {
  drjay: 'xovwobnv',
  dranupam: 'mgvyjqlo'
};

const doctorWhatsAppNumbers = {
  drjay: '919868700886', // Replace with Dr. Jay's WhatsApp number
  dranupam: '919899094465', // Replace with Dr. Anupam's WhatsApp number
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<'drjay' | 'dranupam' | ''>('');
  const [state, handleSubmit] = useForm(selectedDoctor ? doctorFormIds[selectedDoctor] : 'xzzdgaqg');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentType: '',
    phone: '',
    message: '',
    doctorName: '',
  });


  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          appointmentType: '',
          phone: '',
          message: '',
          doctorName: '',
        });
        setSelectedDoctor('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  if (!isOpen) return null;

  const styles = selectedDoctor ? variantStyles[selectedDoctor] : variantStyles.drjay;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'doctorName') {
      if (value === 'Dr. Jay Relan') {
        setSelectedDoctor('drjay');
      } else if (value === 'Dr. Anupam Das') {
        setSelectedDoctor('dranupam');
      }
    }
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    if (!selectedDoctor) return;
    const message = `New Appointment Request:\nDoctor: ${formData.doctorName}\nAppointment Type: ${formData.appointmentType}\nPatient Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = doctorWhatsAppNumbers[selectedDoctor];
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className={`bg-gradient-to-br ${styles.gradient} rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20`}
      >
        <h2 className={`text-3xl font-bold mb-6 text-center font-fraunces-slab ${styles.accent}`}>Book Appointment</h2>
        {state.succeeded ? (
          <div className="text-center p-6 bg-white/80 rounded-lg border border-green-200">
            <div className="text-green-600 text-2xl mb-2">✓</div>
            <p className="text-zinc-700 font-work-sans text-lg">
              Thank you for submitting! We&#39;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFinalSubmit} className="space-y-6 font-work-sans">
            <input type="hidden" name="doctor" value={formData.doctorName} />

            <motion.div className='bg-white/60 rounded-lg p-4 border border-white/40'>
              <label className={`block text-lg font-semibold ${styles.accent} mb-3`}>Choose Doctor</label>
              <motion.div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="doctorName"
                    value="Dr. Jay Relan"
                    checked={formData.doctorName === "Dr. Jay Relan"}
                    onChange={handleChange}
                    className={`form-radio h-5 w-5 ${styles.ring} text-red-500`}
                  />
                  <span className={`ml-3 font-medium ${styles.textPrimary}`}>Dr. Jay Relan dfgfg</span>
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="doctorName"
                    value="Dr. Anupam Das"
                    checked={formData.doctorName === "Dr. Anupam Das"}
                    onChange={handleChange}
                    className={`form-radio h-5 w-5 ${styles.ring} text-teal-500`}
                  />
                  <span className={`ml-3 font-medium ${styles.textPrimary}`}>Dr. Anupam Das</span>
                </label>
              </motion.div>
            </motion.div>

            <motion.div className='bg-white/60 rounded-lg p-4 border border-white/40'>
              <label className={`block text-lg font-semibold ${styles.accent} mb-3`}>Appointment Type</label>
              <motion.div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Offline Appointment"
                    checked={formData.appointmentType === "Offline Appointment"}
                    onChange={handleChange}
                    className={`form-radio h-5 w-5 ${styles.ring} ${selectedDoctor === 'drjay' ? 'text-red-500' : 'text-teal-500'}`}
                  />
                  <span className={`ml-3 font-medium ${styles.textPrimary}`}>Offline Appointment</span>
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online Appointment"
                    checked={formData.appointmentType === "Online Appointment"}
                    onChange={handleChange}
                    className={`form-radio h-5 w-5 ${styles.ring} ${selectedDoctor === 'drjay' ? 'text-red-500' : 'text-teal-500'}`}
                  />
                  <span className={`ml-3 font-medium ${styles.textPrimary}`}>Online Appointment</span>
                </label>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-semibold ${styles.accent} mb-2`}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full border-2 ${styles.border} rounded-lg px-4 py-3 bg-white/90 text-zinc-800 placeholder-zinc-500 focus:border-transparent focus:ring-2 ${styles.ring} transition-all duration-200`}
                  placeholder="Enter your full name"
                />
              </div>

            </div>

            <div>
              <label htmlFor="phone" className={`block text-sm font-semibold ${styles.accent} mb-2`}>WhatsApp Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full border-2 ${styles.border} rounded-lg px-4 py-3 bg-white/90 text-zinc-800 placeholder-zinc-500 focus:border-transparent focus:ring-2 ${styles.ring} transition-all duration-200`}
                placeholder="Enter your WhatsApp number"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-semibold ${styles.accent} mb-2`}>Message / Description</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full border-2 ${styles.border} rounded-lg px-4 py-3 bg-white/90 text-zinc-800 placeholder-zinc-500 focus:border-transparent focus:ring-2 ${styles.ring} transition-all duration-200 resize-none`}
                maxLength={1200}
                placeholder="Describe your symptoms or reason for appointment (max 200 words)"
              />
              <div className="text-right text-sm text-zinc-600 mt-1">
                {formData.message.length}/1200 characters
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className={`px-6 py-3 border-2 ${styles.border} rounded-lg text-sm font-semibold ${styles.textPrimary} bg-white/80 hover:bg-white transition-all duration-200`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={state.submitting}
                className={`px-6 py-3 ${styles.button} rounded-lg shadow-lg text-sm font-semibold ${styles.buttonText} transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {state.submitting ? 'Submitting...' : 'Submit Appointment'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(
    <>
      {isOpen && modalContent}
    </>,
    document.body
  );
};

export default AppointmentModal;