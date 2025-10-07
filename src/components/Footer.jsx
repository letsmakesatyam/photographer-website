import React from "react";
import { FaInstagram, FaFacebookF, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-300 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Logo & Description */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-light uppercase">
            Jude Photographs
          </h2>
          <span className="text-sm font-normal">जुड़े फोटोग्राफ्स</span>
          <p className="text-gray-400 text-sm max-w-xs">
            Capturing moments, emotions & stories. Professional photography services in Bandra West, Mumbai.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="uppercase font-semibold text-white">Contact</h3>
          <p className="flex items-center gap-2">
            <FaPhone /> 099204 89861
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Cuz Inns, 601, St Cyril Rd, Bandra West, Mumbai
          </p>
          <p className="text-gray-400 text-xs">Open 24 hours</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="uppercase font-semibold text-white">Follow</h3>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="#" className="hover:text-white transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-white transition"><FaFacebookF size={18} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs border-t border-white/10 py-4">
        © {new Date().getFullYear()} Jude Photographs. All rights reserved.
      </div>
    </footer>
  );
}
