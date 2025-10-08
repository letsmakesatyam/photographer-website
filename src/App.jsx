import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // ✅ Required CSS

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";

export default function App() {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollEl = scrollRef.current;
    let locoScroll;

    // ✅ Initialize after DOM paint
    const initScroll = () => {
      if (!scrollEl) return;
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1.2,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    };

    requestAnimationFrame(initScroll);

    // ✅ Reposition to top on route change
    window.scrollTo(0, 0);

    // ✅ Cleanup
    return () => {
      if (locoScroll) locoScroll.destroy();
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
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
