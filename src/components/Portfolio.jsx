import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const portfolioData = {
  "Weddings": [
    { id: "w1", src: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Bride and groom sharing a moment" },
    { id: "w2", src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Wedding ceremony details" },
    { id: "w3", src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Couple walking on the beach" },
    { id: "w4", src: "https://images.pexels.com/photos/3779837/pexels-photo-3779837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Elegant wedding reception" },
    { id: "w5", src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Joyful wedding dance" },
    { id: "w6", src: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Close-up of wedding rings" },
  ],
  "Portraits": [
    { id: "p1", src: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Man in a suit portrait" },
    { id: "p2", src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Woman smiling portrait" },
    { id: "p3", src: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Creative outdoor portrait" },
    { id: "p4", src: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Professional headshot" },
    { id: "p5", src: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Family portrait" },
    { id: "p6", src: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Artistic black and white portrait" },
  ],
  "Events": [
    { id: "e1", src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Live concert with bright lights" },
    { id: "e2", src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Corporate conference speaker" },
    { id: "e3", src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Audience at a music festival" },
    { id: "e4", src: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Birthday party celebration" },
    { id: "e5", src: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Elegant banquet hall" },
    { id: "e6", src: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Networking event" },
  ],
  "Commercial": [
    { id: "c1", src: "https://images.pexels.com/photos/1283208/pexels-photo-1283208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Product shot of headphones" },
    { id: "c2", src: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Fashion model in a stylish outfit" },
    { id: "c3", src: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Modern office interior" },
    { id: "c4", src: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Gourmet food plating" },
    { id: "c5", src: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Skincare product lineup" },
    { id: "c6", src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Creative flat lay of tech gadgets" },
  ],
};

const tabs = Object.keys(portfolioData);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 350); 
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 pb-2">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Explore our diverse portfolio, where every image tells a unique story.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- FIX APPLIED HERE --- */}
        {/* Added min-h-[60vh] to prevent the container from collapsing during tab switches */}
        {/* --- FIXED GRID WITHOUT EXTRA SPACE --- */}
<div className="mt-12">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeTab}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {portfolioData[activeTab].map((image) => (
        <motion.div
          key={image.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-medium">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

        
        <div className="mt-24 text-center">
             <h2 className="text-3xl font-bold tracking-tight text-gray-100 mb-4">
                Ready to Create Your Own Story?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
                If our work resonates with you, let's connect. We're excited to learn about your vision and help bring it to life.
            </p>
            <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
                Get In Touch
            </Link>
        </div>

      </div>
    </div>
  );
}