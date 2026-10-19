import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Layout, Cpu, Play, Palette, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const iconMap = {
  layout: Layout,
  cpu: Cpu,
  play: Play,
  palette: Palette,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E53935]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#666666] font-semibold">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15] text-balance">
            Creative solutions built for the next stage of growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666]">
            Tailored digital capabilities engineered to elevate brands, streamline workflows, and inspire audiences.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                data-cursor="hover"
                className="group relative p-8 sm:p-10 bg-white border border-[#E5E5E5] hover:border-[#E53935] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-[#F5F5F5] group-hover:bg-[#E53935] text-[#111111] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-[#999999] group-hover:text-[#E53935] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#E53935] transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables / Scope list */}
                  <div className="pt-4 border-t border-[#E5E5E5] space-y-2 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#666666]">
                        <span className="w-1.5 h-1.5 bg-[#E5E5E5] group-hover:bg-[#E53935] transition-colors shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#E53935] transition-colors">
                  <span className="font-mono">Explore Capability</span>
                  <div className="w-8 h-8 rounded-full border border-[#E5E5E5] group-hover:border-[#E53935] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
