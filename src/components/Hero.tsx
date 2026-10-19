import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-white border-b border-[#E5E5E5]"
    >
      {/* Background Interactive Layer: Fine grid + subtle pointer radial glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-75 pointer-events-none" />

      {/* Restrained pointer-reactive ambient red glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(229, 57, 53, 0.05), transparent 70%)`,
        }}
      />

      {/* Subtle abstract geometric CSS elements in hero */}
      <div
        className="absolute top-20 right-[10%] w-72 h-72 border border-[#E5E5E5] pointer-events-none transition-transform duration-500 ease-out hidden lg:block"
        style={{
          transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px) rotate(45deg)`,
        }}
      >
        <div className="absolute inset-4 border border-[#E53935]/15" />
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#E53935]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#111111]" />
      </div>

      <div
        className="absolute bottom-28 left-[6%] w-48 h-48 border border-dashed border-[#E5E5E5] pointer-events-none transition-transform duration-500 ease-out hidden xl:block"
        style={{
          transform: `translate(${(mousePos.x - 50) * -0.08}px, ${(mousePos.y - 50) * -0.08}px)`,
        }}
      >
        <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-mono text-[#666666]">
          MSL // 01
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Availability / Status Indicator (Clean unboxed typographic discipline) */}
        <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 text-xs sm:text-sm text-[#666666]">
          <span className="w-2 h-2 bg-[#E53935] inline-block shrink-0" />
          <span className="tracking-wide uppercase font-mono text-[11px] sm:text-xs text-[#111111] font-medium">
            Available for select projects
          </span>
          <span className="text-[#E5E5E5]" aria-hidden="true">
            /
          </span>
          <span className="text-xs text-[#666666]">Design & Engineering Studio</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#111111] leading-[1.06] mb-6 sm:mb-8 text-balance">
            Creative Ideas.{' '}
            <span className="text-[#E53935] inline-block relative">
              Intelligent Solutions.
            </span>{' '}
            Digital Impact.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#666666] leading-relaxed max-w-3xl font-normal mb-10">
            Maruf Scale Labs transforms ideas into engaging digital experiences through creative design, modern web development, and AI-powered innovation.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={() => scrollTo('portfolio')}
              data-cursor="hover"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-[#111111] hover:bg-[#E53935] active:translate-y-0.5 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              data-cursor="hover"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-semibold text-[#111111] bg-white border border-[#111111] hover:border-[#E53935] hover:text-[#E53935] active:translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Let’s Collaborate</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#666666] border-t border-[#E5E5E5]/60 mt-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#111111] font-semibold">MSL</span>
          <span aria-hidden="true">·</span>
          <span>Creative Direction & Full-Stack Web Development</span>
        </div>

        <button
          onClick={() => scrollTo('about')}
          data-cursor="hover"
          className="group flex items-center gap-2 hover:text-[#E53935] transition-colors cursor-pointer py-1"
          aria-label="Scroll down to About section"
        >
          <span className="uppercase tracking-wider font-mono text-[11px]">Scroll to discover</span>
          <div className="w-6 h-6 rounded-full border border-[#E5E5E5] group-hover:border-[#E53935] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3 h-3 text-[#111111] group-hover:text-[#E53935] transition-transform duration-200 group-hover:translate-y-0.5" />
          </div>
        </button>
      </div>
    </section>
  );
}
