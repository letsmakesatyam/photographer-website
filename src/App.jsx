import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Components
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";

export default function App() {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollEl = scrollRef.current;
    let locoScroll;

    // We wait 100ms to initialize. This gives React time to render the new
    // page's components, ensuring Locomotive Scroll gets the correct height.
    const timer = setTimeout(() => {
      if (!scrollEl) return;
      
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1.2,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      // This is an additional safeguard. After another moment, we update again
      // just in case any images were slow to load.
      const updateTimer = setTimeout(() => {
        if(locoScroll) locoScroll.update();
      }, 500);

      // Add cleanup for the inner timer
      locoScroll.on('destroy', () => {
        clearTimeout(updateTimer);
      });

    }, 100);


    // Cleanup
    return () => {
      clearTimeout(timer);
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, [pathname]);

  return (
    <div
      ref={scrollRef}
      id="main-container"
      data-scroll-container
      className="bg-black text-white"
    >
      <div data-scroll data-scroll-sticky data-scroll-target="#main-container">
        <Navbar />
      </div>

      <main data-scroll-section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
            {/* Add other routes here */}
        </Routes>
        <Footer />
      </main>
    </div>
  );
}