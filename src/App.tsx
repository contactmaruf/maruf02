/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#111111] selection:bg-[#E53935] selection:text-white">
      {/* Creative Interactive Desktop Custom Cursor Follower */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: About */}
        <About />

        {/* Section D: Services */}
        <Services />

        {/* Section E: Portfolio / Selected Work */}
        <Portfolio />

        {/* Section G: Contact */}
        <Contact />
      </main>

      {/* Section H: Footer */}
      <Footer />
    </div>
  );
}
