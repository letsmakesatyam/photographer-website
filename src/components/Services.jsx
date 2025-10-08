import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- Icon Components ---
const FaCameraRetro = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 288c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm0-112c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path>
    <path d="M149.3 80h-21.2c-13.8 0-25.2 9.9-27.1 23.3l-20 133.3c-2.3 15.3 8.3 29.5 23.3 33.1 15.3 2.3 29.5-8.3 33.1-23.3l20-133.3c2.3-15.3-8.3-29.5-23.3-33.1zM416 64h-80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80c17.7 0 32-14.3 32-32s-14.3-32-32-32zM480 160c-17.7 0-32 14.3-32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 53 43 96 96 96h320c53 0 96-43 96-96V192c0-17.7-14.3-32-32-32z"></path>
  </svg>
);

const FaUserTie = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 256c52.9 0 96-43.1 96-96s-43.1-96-96-96-96 43.1-96 96 43.1 96 96 96zm0 48c-61.9 0-112 50.1-112 112v8H112c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-32v-8c0-61.9-50.1-112-112-112z"></path>
  </svg>
);

const FaMusic = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-77.22 0-128 58.8-128 128s50.78 128 128 128 128-58.8 128-128V192l320-96V1.51z"></path>
  </svg>
);

const FaLandmark = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 16L16 112v32h480v-32L256 16zM64 192v224h64V192H64zm128 0v224h64V192h-64zm128 0v224h64V192h-64zM16 464h480v32H16v-32z"></path>
  </svg>
);

const FaBuilding = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 416h32v-32h-32v32zm0-96h32v-32h-32v32zm0-96h32v-32h-32v32zm96 192h32v-32h-32v32zm0-96h32v-32h-32v32zm0-96h32v-32h-32v32zm96 192h32v-32h-32v32zm0-96h32v-32h-32v32zm0-96h32v-32h-32v32z"></path>
  </svg>
);

// --- Services Data ---
const servicesData = [
  {
    name: 'Wedding Photography',
    description: 'Capturing the love, emotion, and unforgettable moments of your special day with a timeless and artistic approach.',
    icon: <FaCameraRetro />,
    imageUrl: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=1964&auto=format&fit=crop',
    pricing: [
      { package: 'Basic', details: '2 hours coverage, 50 edited photos', price: '₹10,000' },
      { package: 'Standard', details: '4 hours coverage, 150 edited photos', price: '₹20,000', popular: true },
      { package: 'Premium', details: 'Full day coverage, 300+ edited photos', price: '₹35,000' },
    ],
  },
  {
    name: 'Portraits & Profiles',
    description: 'Professional headshots and personal portraits that capture your unique personality for branding, family, or personal use.',
    icon: <FaUserTie />,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    pricing: [
      { package: 'Basic', details: '1 hour session, 10 edited photos', price: '₹3,500' },
      { package: 'Standard', details: '2 hours session, 25 edited photos', price: '₹6,000', popular: true },
      { package: 'Premium', details: '3 hours session, 50 edited photos', price: '₹10,000' },
    ],
  },
  {
    name: 'Concerts & Events',
    description: 'Dynamic coverage of live concerts, corporate functions, and special events, preserving the energy and atmosphere of any occasion.',
    icon: <FaMusic />,
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop',
    pricing: [
      { package: 'Basic', details: '2 hours coverage, 50 edited photos', price: '₹8,000' },
      { package: 'Standard', details: '4 hours coverage, 120 edited photos', price: '₹15,000', popular: true },
      { package: 'Premium', details: 'Full event coverage, 250+ edited photos', price: '₹25,000' },
    ],
  },
  {
    name: 'Landscape Photography',
    description: 'Stunning images of natural and urban landscapes, perfect for fine art prints, commercial use, or personal collections.',
    icon: <FaLandmark />,
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
    pricing: [
      { package: 'Single Shot', details: 'One location, 5 high-res images', price: '₹2,500' },
      { package: 'Half Day', details: 'Multiple locations, 20 high-res images', price: '₹8,000', popular: true },
      { package: 'Full Day', details: 'Unlimited locations, 50+ high-res images', price: '₹15,000' },
    ],
  },
  {
    name: 'Product & Commercial',
    description: 'Clean, crisp, and compelling photographs of your products that drive sales and elevate your brand\'s image.',
    icon: <FaBuilding />,
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop',
    pricing: [
      { package: 'Basic', details: 'Up to 5 products, 10 edited photos', price: '₹5,000' },
      { package: 'Standard', details: 'Up to 15 products, 30 edited photos', price: '₹12,000', popular: true },
      { package: 'Premium', details: 'Unlimited products, 60+ edited photos', price: '₹20,000' },
    ],
  },
];

// --- Component ---
export default function Services() {
  const [selectedId, setSelectedId] = React.useState(null);
  const navigate = useNavigate();

  const selectedService = selectedId ? servicesData.find(s => s.name === selectedId) : null;

  const handleBookNowClick = () => {
    setSelectedId(null); // Close modal first
    setTimeout(() => {
      navigate('/contact'); // Navigate to /contact route
    }, 100);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-amber-400">
            Photography Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Explore my range of professional photography services. Click on any service to view detailed packages and pricing information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.name}
              layoutId={service.name}
              onClick={() => setSelectedId(service.name)}
              className="relative rounded-xl overflow-hidden group shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={service.imageUrl} alt={service.name} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="mb-4 text-4xl text-amber-400">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img src={selectedService.imageUrl} alt={selectedService.name} className="w-full h-64 object-cover rounded-t-2xl"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                  <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-amber-400 mb-2">{selectedService.name}</h2>
                  <p className="text-gray-300 mb-8">{selectedService.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {selectedService.pricing.map(pkg => (
                      <div key={pkg.package} className={`bg-gray-900/50 rounded-lg p-6 border-2 transition-all duration-300 relative ${pkg.popular ? 'border-amber-400 scale-105' : 'border-gray-700'}`}>
                        {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</span>}
                        <h3 className="text-xl font-semibold text-white mb-2">{pkg.package}</h3>
                        <p className="text-3xl font-bold text-amber-400 mb-4">{pkg.price}</p>
                        <p className="text-gray-400 text-sm">{pkg.details}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button onClick={handleBookNowClick} className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
