import React from 'react';
import { X, ExternalLink, Check, MessageCircle, ArrowRight, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { PortfolioItem, businessInfo } from '../siteConfig';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${businessInfo.businessName}! I really liked the "${project.title}" (${project.type}) portfolio project. Can you build a similar website for my business?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-slate-400">Demo Project Showcase</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Category */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{project.type}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Simulated Browser Preview Header */}
          <div className="rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[11px] text-slate-400">{project.liveUrlPlaceholder}</span>
              <span className="text-emerald-400 text-[10px] font-mono">100% Mobile Ready</span>
            </div>

            {/* Visual Preview Banner */}
            <div className="p-8 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.impactMetric}</span>
              </div>
              <h4 className="text-xl font-bold text-white max-w-md mx-auto">
                Clean, Fast & Custom Made for {project.clientType}
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Built with modern web standards, lightweight code, and direct WhatsApp customer communication.
              </p>
            </div>
          </div>

          {/* Key Features Included */}
          <div>
            <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
              Features Included in this Build
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Inquire on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
            >
              <span>Order Similar Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
