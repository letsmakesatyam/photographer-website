import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- SVG Icons ---
const ArrowRightIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zM12 3.604c-3.171 0-3.535.012-4.762.069-2.835.129-4.044 1.33-4.173 4.173-.057 1.228-.068 1.592-.068 4.762s.011 3.534.068 4.762c.129 2.842 1.338 4.044 4.173 4.173 1.227.057 1.591.068 4.762.068s3.535-.011 4.762-.068c2.835-.129 4.044-1.33 4.173-4.173.057-1.228.068-1.592.068-4.762s-.011-3.534-.068-4.762c-.129-2.842-1.338-4.044-4.173-4.173C15.535 3.616 15.171 3.604 12 3.604zm0 5.831a3.088 3.088 0 100 6.176 3.088 3.088 0 000-6.176zm0 5.144a2.056 2.056 0 110-4.112 2.056 2.056 0 010 4.112zm4.965-6.411a1 1 0 100 2 1 1 0 000-2z" />
  </svg>
);

// --- Reliable dynamic portfolio sources (Unsplash "random by query", stable) ---
// using source.unsplash.com with unique `sig` values to ensure different images and high reliability.
const portfolioSets = [
  // Wedding
  [
    { src: "https://images.pexels.com/photos/14354431/pexels-photo-14354431.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Wedding — Couple" },
    { src: "https://images.pexels.com/photos/17362056/pexels-photo-17362056.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Bride & Groom Embrace" },
    { src: "https://images.pexels.com/photos/27350424/pexels-photo-27350424.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Portrait of a Bride" },
  ],
  // Concert
  [
    { src: "https://images.pexels.com/photos/13230616/pexels-photo-13230616.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Concert — Stage Lights" },
    { src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Concert Crowd" },
    { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Live Performance" },
  ],
  // Profile
  [
    { src: "https://images.pexels.com/photos/30875100/pexels-photo-30875100.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Studio Portrait" },
    { src: "https://images.pexels.com/photos/34114598/pexels-photo-34114598.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Creative Headshot" },
    { src: "https://images.pexels.com/photos/31578771/pexels-photo-31578771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Outdoor Portrait" },
  ],
  // Product
  [
    { src: "https://images.pexels.com/photos/27113463/pexels-photo-27113463.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Product — Sandals" },
    { src: "https://images.pexels.com/photos/8278246/pexels-photo-8278246.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Product Studio Shot" },
    { src: "https://images.pexels.com/photos/13516791/pexels-photo-13516791.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Beauty / Cosmetic Set" },
  ],
  // Landscape
  [
    { src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Lake & Mountain" },
    { src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Snowy Mountain" },
    { src: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Ocean / Seascape" },
  ],
  // Event
  [
    { src: "https://images.pexels.com/photos/19234633/pexels-photo-19234633.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Event — Crowd" },
    { src: "https://images.pexels.com/photos/18477166/pexels-photo-18477166.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Heads of Crowd" },
    { src: "https://images.pexels.com/photos/17851094/pexels-photo-17851094.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000", alt: "Raised Hands at Event" },
  ],
];


const testimonials = [
  { name: "Neil V Banks", text: "Truly one of the finest photographers. His versatility allows him to click fantastic shots for profiles, products, concerts, and landscapes." },
  { name: "Keegan Milton", text: "Jude is a brilliant photographer! He has a knack for bringing out the absolute best in every single click." },
  { name: "A Happy Client", text: "I had a great time and a wonderful experience. The quality of his work is simply outstanding and speaks for itself." },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [portfolioImages, setPortfolioImages] = useState(portfolioSets[0]);

  // rotate every 6s using functional updates (avoids stale closures)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % portfolioSets.length;
        setPortfolioImages(portfolioSets[next]);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Ensure locomotive-scroll recalculates after images load (fixes the long blank page)
  useEffect(() => {
    // select only the images in the portfolio grid
    const imgs = Array.from(document.querySelectorAll(".portfolio-dynamic-img"));
    if (imgs.length === 0) {
      // force a resize so loco recalculates even if no imgs found
      requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      return;
    }

    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded >= imgs.length) {
        // trigger resize so locomotive-scroll updates container height
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      }
    };

    imgs.forEach((img) => {
      if (img.complete) onLoad();
      else img.addEventListener("load", onLoad, { once: true });
      // also handle error: count it so we don't hang
      img.addEventListener("error", onLoad, { once: true });
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, [portfolioImages]);

  return (
    <div className="relative bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-indigo-900/40 via-transparent to-transparent animate-aurora"></div>
      </div>

      <style>{`
        @keyframes aurora { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
        .animate-aurora { animation: aurora 20s linear infinite; }
        .text-balance { text-wrap: balance; }
      `}</style>

      <div className="relative z-10 px-6 md:px-12 py-16 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 text-balance">
              Jude Photographs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 font-light max-w-xl mx-auto md:mx-0">
              जुड़े फोटोग्राफ्स — Capturing timeless moments with artistry and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/portfolio"
                className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30"
              >
                View Portfolio <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://www.instagram.com/judephotographs/reels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-6 py-3 border-2 border-slate-600 hover:bg-slate-800 hover:border-slate-500 rounded-lg font-semibold transition-all duration-300"
              >
                Instagram Reels <InstagramIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="bg-gradient-to-br from-violet-500/50 to-indigo-500/50 p-1.5 rounded-2xl shadow-2xl">
              <img
                src="https://source.unsplash.com/900x1200/?photography,portrait&sig=101"
                alt="Jude Photographs Hero"
                className="w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </section>

        {/* Portfolio Preview */}
        <section className="space-y-8">
          <motion.h2
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Portfolio Preview
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioImages.map((image, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="portfolio-dynamic-img w-full h-full object-cover aspect-[4/5] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <motion.h2
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                className="p-px bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-[11px] h-full">
                  <p className="text-slate-300 italic mb-4">"{review.text}"</p>
                  <p className="font-semibold text-right text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">— {review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-slate-800/50 rounded-2xl py-16 px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Capture Your Moments?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/50"
            >
              Contact Jude
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
