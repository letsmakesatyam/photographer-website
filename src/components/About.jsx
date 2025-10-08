import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaUserTie, FaMusic, FaLandmark, FaBuilding, FaQuoteLeft, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// --- Make sure you have this image in your project ---
import photographerPortrait from '../assets/ProfileImage.png';

const testimonials = [
  {
    quote: "Jude has turned out to be one of the finest photographers who’s versatility allows him to click fantastic shots whether it’s Profiles, Products, Concerts, Landscape etc.",
    name: "Neil V Banks",
  },
  {
    quote: "The quality of his work is outstanding. I had a great time and a wonderful experience while shooting with him😊",
    name: "A Happy Client",
  },
  {
    quote: "Jude is a Brilliant photographer and knows how to bring out the best in every click.",
    name: "Keegan Milton",
  },
];

const services = [
  { name: 'Weddings', icon: <FaCameraRetro /> },
  { name: 'Portraits & Profiles', icon: <FaUserTie /> },
  { name: 'Concerts & Events', icon: <FaMusic /> },
  { name: 'Landscape', icon: <FaLandmark /> },
  { name: 'Products & Commercial', icon: <FaBuilding /> },
];

export default function About() {
  const gmapsUrl = "https://www.google.com/maps/search/?api=1&query=Cuz+Inns,+601,+St+Cyril+Rd,+Bandra+West,+Mumbai,+Maharashtra+400050";

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* --- Section 1: Introduction --- */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex-shrink-0 md:w-1/3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-1.5 rounded-2xl shadow-2xl">
              <img
                src={photographerPortrait}
                alt="Jude, the photographer"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-400 pb-2">
              The Artist Behind The Lens
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Hello! I'm Jude, a passionate photographer based in the heart of Bandra West, Mumbai. Photography is about capturing fleeting, beautiful moments and turning them into timeless stories.
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              My mission is to see the extraordinary in the ordinary and bring out the best in every click. From weddings to concerts, I strive to create images that are authentic and artistic.
            </p>
          </div>
        </motion.section>

        <hr className="border-white/10" />

        {/* --- Section 2: Services & Philosophy --- */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Versatile Approach</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Versatility is at the core of my work. I adapt my style to fit the unique needs of every project, ensuring fantastic results across a wide range of categories.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-3 text-gray-300">
                <div className="text-4xl text-amber-400">{service.icon}</div>
                <span className="font-semibold text-center">{service.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-white/10" />

        {/* --- Section 3: Testimonials --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">What My Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gray-800/80 p-6 rounded-xl shadow-lg border border-white/10 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <FaQuoteLeft className="text-amber-500 text-2xl mb-4" />
                <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold text-right">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <hr className="border-white/10" />

        {/* --- Section 4: Contact & Location --- */}
        <motion.section
          className="text-center bg-gray-800/50 rounded-2xl py-16 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's Create Something Beautiful</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            My studio is open 24/7, ready to capture your moments whenever inspiration strikes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 text-lg">
            <a href="tel:09920489861" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
              <FaPhone />
              <span>099204 89861</span>
            </a>
            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start text-center gap-3 hover:text-amber-400 transition-colors max-w-sm">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span>Cuz Inns, 601, St Cyril Rd, Bandra West, Mumbai, Maharashtra 400050</span>
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}