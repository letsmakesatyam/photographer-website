import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Service names for the dropdown menu
const serviceNames = [
  'Wedding Photography',
  'Portraits & Profiles',
  'Concerts & Events',
  'Landscape Photography',
  'Product & Commercial',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Photography Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Jude,\n\nYou have a new inquiry with the following details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interested In: ${formData.plan}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:satyamrevgadelinkedin@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', plan: '', message: '' });

    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000); // Hide message after 5 seconds
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide text-amber-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 bg-gray-800/50 p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition" />
            </div>

            {/* Email Input */}
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition" />
            </div>

            {/* Phone Input */}
             <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition" />
            </div>
            
            {/* Plan Dropdown */}
            <div className="md:col-span-1">
              <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-2">I'm Interested In...</label>
              <select name="plan" id="plan" value={formData.plan} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition">
                <option value="" disabled>Select a service</option>
                {serviceNames.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>
            
            {/* Message Textarea */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition"></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-amber-500 text-gray-900 font-bold py-3 px-10 rounded-lg hover:bg-amber-400 transition-colors text-lg">
                Send Inquiry
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-green-400 text-center">
              Thank you for your message! We will contact you shortly.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
