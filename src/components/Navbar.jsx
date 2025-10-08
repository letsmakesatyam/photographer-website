import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons ---
const MenuIcon = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoLetters = Array.from("Jude Photographs");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 left-0 w-full z-[60] bg-slate-900/60 backdrop-blur-lg border-b border-slate-700/50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            className="text-2xl font-semibold text-slate-100"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {logoLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, ease: "easeOut" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive ? (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1.5 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    ) : (
                      <span
                        className="absolute left-0 -bottom-1.5 block h-[2px] w-full bg-white
                        transform scale-x-0 transition-transform duration-300 ease-out
                        group-hover:scale-x-100 origin-left"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl p-2 text-slate-100 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300 z-[70]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CloseIcon className="w-7 h-7" />
          ) : (
            <MenuIcon className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation (push-down style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden w-full bg-slate-900/95 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className="flex flex-col items-center justify-center space-y-6 py-6 text-xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
