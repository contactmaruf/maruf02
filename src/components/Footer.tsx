import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
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
    <footer className="bg-white border-t border-[#E5E5E5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E5E5]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-[#E53935]" />
              <span className="font-bold text-xl tracking-tight text-[#111111]">
                Maruf Scale Labs
              </span>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed max-w-sm">
              Transforming bold concepts into engaging digital experiences through creative design, modern web development, and AI-powered innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
              Index
            </div>
            <ul className="space-y-2 text-sm text-[#666666]">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    data-cursor="hover"
                    className="hover:text-[#E53935] transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
              Digital Presence
            </div>
            <p className="text-xs text-[#666666]">
              Placeholder social channels ready for production linking:
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <span className="text-[#666666] hover:text-[#E53935] transition-colors cursor-pointer">
                GitHub (demo)
              </span>
              <span className="text-[#E5E5E5]" aria-hidden="true">·</span>
              <span className="text-[#666666] hover:text-[#E53935] transition-colors cursor-pointer">
                LinkedIn (demo)
              </span>
              <span className="text-[#E5E5E5]" aria-hidden="true">·</span>
              <span className="text-[#666666] hover:text-[#E53935] transition-colors cursor-pointer">
                Twitter / X (demo)
              </span>
              <span className="text-[#E5E5E5]" aria-hidden="true">·</span>
              <span className="text-[#666666] hover:text-[#E53935] transition-colors cursor-pointer">
                Dribbble (demo)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-3">
            <span>© {currentYear} Maruf Scale Labs. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[11px] font-mono">White · Black · Crimson Accent</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="group flex items-center gap-2 text-xs font-mono font-medium hover:text-[#E53935] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span className="uppercase tracking-wider">Back to top</span>
            <div className="w-7 h-7 border border-[#E5E5E5] group-hover:border-[#E53935] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#111111] group-hover:text-[#E53935] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
