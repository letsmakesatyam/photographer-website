import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";


export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const loco = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => loco.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

      <Footer />
    </div>
  );
}
