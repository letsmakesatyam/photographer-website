import React from "react";
import { FaInstagram, FaFacebookF, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom for navigation

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-light uppercase tracking-wider">
              Jude Photographs
            </h2>
            <span className="text-sm font-normal text-gray-400">जुड़े फोटोग्राफ्स</span>
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Crafting visual stories that capture life's most precious moments with elegance and artistry.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/judephotographs/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="text-sm">
            <h3 className="uppercase font-semibold text-white tracking-widest">Services</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/services/weddings" className="hover:text-white transition-colors duration-300">Wedding Photography</Link></li>
              <li><Link to="/services/portraits" className="hover:text-white transition-colors duration-300">Portrait Sessions</Link></li>
              <li><Link to="/services/events" className="hover:text-white transition-colors duration-300">Event Coverage</Link></li>
              <li><Link to="/services/commercial" className="hover:text-white transition-colors duration-300">Commercial & Product</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-sm">
            <h3 className="uppercase font-semibold text-white tracking-widest">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Me</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors duration-300">Investment</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-sm">
            <h3 className="uppercase font-semibold text-white tracking-widest">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Cuz Inns, 601, St Cyril Rd, Bandra West, Mumbai, Maharashtra 400050</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone />
                <a href="tel:09920489861" className="hover:text-white transition-colors duration-300">099204 89861</a>
              </li>
               <li className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:info@judephotographs.com" className="hover:text-white transition-colors duration-300">info@judephotographs.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs border-t border-white/10 py-5">
        <p>© {new Date().getFullYear()} Jude Photographs. All Rights Reserved.</p>
      </div>
    </footer>
  );
}