import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import ProjectModal from './ProjectModal';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Interactive Website',
  'AI Creative Experiment',
  'Motion Graphics Project',
  'Digital Brand Experience',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#F5F5F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#E53935]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#666666] font-semibold">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15]">
              Ideas brought to life.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#666666]">
              A curated selection of sample concepts exploring responsive digital architecture, generative AI tools, motion identity, and brand presentation.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] shrink-0 border-l-2 border-[#E53935] pl-3 py-1">
            <span className="block font-semibold text-[#111111]">TRANSPARENCY NOTE</span>
            <span>Sample design concepts & demos</span>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E5E5E5]">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
                className={`px-4 py-2 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white text-[#666666] hover:text-[#111111] border border-[#E5E5E5] hover:border-[#111111]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group cursor-pointer bg-white border border-[#E5E5E5] hover:border-[#E53935] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAEAEA]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Smooth Crimson Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white text-xs font-mono tracking-wider uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                    <span>Click to inspect concept specs</span>
                  </div>
                </div>

                {/* Project Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono font-semibold text-[#111111] border border-[#E5E5E5]">
                  {project.badge}
                </div>

                {/* Category Pill on top right */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-2.5 py-1 text-[11px] font-mono">
                  {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#666666] mb-2.5">
                    <span>{project.year}</span>
                    <span className="text-[#999999] group-hover:text-[#E53935] transition-colors">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#E53935] transition-colors duration-200 mb-3 group-hover:-translate-y-0.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* View Project Action */}
                <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E53935] transition-colors">
                  <span>View Project</span>
                  <div className="w-7 h-7 rounded-full border border-[#E5E5E5] group-hover:border-[#E53935] group-hover:bg-[#E53935] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
