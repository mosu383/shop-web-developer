import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, ArrowRight, Store, Utensils, Briefcase, Activity, Check } from 'lucide-react';
import { portfolioItems, PortfolioItem } from '../siteConfig';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onSelectProjectForInquiry: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Shops & Stores', 'Restaurants', 'Business', 'Healthcare'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Render a thematic CSS/SVG mockup preview for each project
  const renderCardMockup = (item: PortfolioItem) => {
    switch (item.previewTheme) {
      case 'store':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                Store Catalog
              </span>
              <Store className="w-4 h-4 text-sky-400" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-white tracking-tight">{item.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-emerald-400 font-mono">● WhatsApp Ordering Ready</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-12 rounded bg-slate-800" />
              <div className="h-2 w-8 rounded bg-slate-800" />
              <div className="h-2 w-16 rounded bg-slate-800" />
            </div>
          </div>
        );
      case 'cafe':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                Digital Menu & Booking
              </span>
              <Utensils className="w-4 h-4 text-amber-400" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-white tracking-tight">{item.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-amber-400 font-mono">● Table Reservation Online</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-14 rounded bg-amber-950/80" />
              <div className="h-2 w-10 rounded bg-slate-800" />
            </div>
          </div>
        );
      case 'corporate':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                Corporate Lead Engine
              </span>
              <Briefcase className="w-4 h-4 text-blue-400" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-white tracking-tight">{item.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-blue-400 font-mono">● Quote Calculator Integrated</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-16 rounded bg-blue-900/60" />
              <div className="h-2 w-12 rounded bg-slate-800" />
            </div>
          </div>
        );
      default:
        return (
          <div className="h-44 w-full bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/30 p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                High Speed Web
              </span>
              <Activity className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-white tracking-tight">{item.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-cyan-400 font-mono">● Mobile Optimized UI</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-12 rounded bg-slate-800" />
              <div className="h-2 w-14 rounded bg-slate-800" />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Our Recent Work</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Live Demos & Mockups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Sample Websites Built for Businesses
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore sample websites we build for local shops, restaurants, service professionals, and startups. Every site is custom crafted for speed and mobile responsiveness.
          </p>
        </div>

        {/* Category Filters (Anti-slop: clean functional segmented controls) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Visual Card Mockup Header */}
                {renderCardMockup(item)}

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-blue-400">{item.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{item.clientType}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {item.impactMetric}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Project Button (Specified requirement) */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalProject(item)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 transition-all duration-150 flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Custom Note & Edit Guide */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>💡 Want a customized design tailored to your specific shop? </span>
          <button
            onClick={() => onSelectProjectForInquiry('Custom Tailored Design')}
            className="text-blue-400 hover:underline font-semibold ml-1"
          >
            Request a personalized live mockup today.
          </button>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onRequestSimilar={(title) => {
          onSelectProjectForInquiry(title);
        }}
      />
    </section>
  );
};
