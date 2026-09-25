import React from 'react';
import { 
  Briefcase, 
  Store, 
  Palette, 
  Target, 
  Utensils, 
  ShoppingBag, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight, 
  Check,
  Sparkles
} from 'lucide-react';
import { servicesList, ServiceItem } from '../siteConfig';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Map icon strings to Lucide components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'Store':
        return <Store className="w-6 h-6 text-sky-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Specialized Web Solutions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Tailored for Real Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Web Development Services Built for Your Business
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From single-page marketing funnels to full-fledged shop catalogs, we build fast, mobile-friendly websites that attract customers and generate revenue.
          </p>
        </div>

        {/* 8 Attractive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div>
                {/* Header: Icon & Starting Price */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-mono">Starts at</span>
                    <span className="text-sm font-bold font-mono text-white tabular-nums">{service.startingPrice}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/70 hover:bg-blue-600 hover:text-white border border-slate-700/60 hover:border-blue-500 transition-all duration-150 flex items-center justify-center gap-1.5 group-hover:border-blue-500/40"
              >
                <span>Get {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom requirements kicker */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Need a specific custom feature or unique layout?</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              We create custom payment integrations, booking calendars, catalog filters, and multi-language sites.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Website Project')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap shadow-md shadow-blue-600/25 shrink-0"
          >
            Discuss Custom Project
          </button>
        </div>

      </div>
    </section>
  );
};
