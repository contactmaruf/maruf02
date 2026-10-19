import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Calendar, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E5E5E5] shadow-2xl z-10 flex flex-col focus:outline-none">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E5E5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E53935]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
              {project.category}
            </span>
            <span className="text-[#E5E5E5]" aria-hidden="true">·</span>
            <span className="text-xs font-mono px-2 py-0.5 bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5]">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            data-cursor="hover"
            className="p-2 text-[#111111] hover:text-[#E53935] hover:bg-[#F5F5F5] transition-colors focus-visible:ring-2 focus-visible:ring-[#E53935] cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Short Summary */}
          <div>
            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] mb-3"
            >
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Full Visual Preview Container */}
          <div className="relative overflow-hidden bg-[#F5F5F5] border border-[#E5E5E5] aspect-video sm:aspect-16/10">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1">
              {project.badge} // Studio Archive {project.year}
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111] font-mono">
              Concept & Architecture
            </h3>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* 2-Column Specs: Key Features & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E5E5E5]">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E53935]" />
                Key Innovations
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#666666]">
                    <Check className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#111111]" />
                Deliverables
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#666666]">
                    <span className="w-1.5 h-1.5 bg-[#E53935] shrink-0 mt-2" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-6 border-t border-[#E5E5E5]">
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-mono text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#666666]">
              Sample concept architecture designed by Maruf Scale Labs.
            </span>
            <button
              onClick={onClose}
              data-cursor="hover"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#111111] hover:bg-[#E53935] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
