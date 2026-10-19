import React from 'react';
import { ABOUT_VALUES } from '../data/portfolioData';
import { ArrowRight, Compass, Code, Target } from 'lucide-react';

export default function About() {
  const valueIcons = [Compass, Code, Target];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F5F5F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-[#E53935]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#666666] font-semibold">
            A LITTLE ABOUT US
          </span>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Headline & Editorial Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15] text-balance">
              Turning bold ideas into meaningful digital experiences.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Maruf Scale Labs combines creative thinking, thoughtful design, and modern technology to build digital experiences that help brands communicate clearly, stand out, and grow.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-4 text-xs font-mono text-[#666666]">
              <span className="text-[#111111] font-semibold">PURPOSE</span>
              <span aria-hidden="true">/</span>
              <span>Engineering visual distinction through deliberate design</span>
            </div>
          </div>

          {/* Right Column: 3 Value Statements Cards */}
          <div className="lg:col-span-6 space-y-4">
            {ABOUT_VALUES.map((val, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div
                  key={val.title}
                  className="group p-6 sm:p-7 bg-white border border-[#E5E5E5] hover:border-[#E53935] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#F5F5F5] group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] text-[#111111] transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#E53935] transition-colors duration-200">
                        {val.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#999999] group-hover:text-[#E53935] transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed pl-11">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
