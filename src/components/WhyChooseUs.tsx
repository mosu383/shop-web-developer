import React from 'react';
import { 
  BadgePercent, 
  Smartphone, 
  Sparkles, 
  Zap, 
  MessageCircle, 
  Sliders, 
  CheckCircle,
  Clock,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { whyChooseUsList } from '../siteConfig';

interface WhyChooseUsProps {
  onOpenContact: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'DollarSign':
        return <BadgePercent className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-emerald-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-purple-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Built Differently</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Why Business Owners Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Everything Your Business Needs to Win Online
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We eliminate expensive agency retainers, confusing tech jargon, and months of waiting. Get a professional website designed to turn visitors into buyers.
          </p>
        </div>

        {/* 6 Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsList.map((item, index) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-950 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <span className="font-mono text-xs font-bold text-slate-400">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs font-semibold text-blue-400/90 font-mono mb-3">
                {item.highlight}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small business comparison banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-white">
              Traditional Web Agencies vs. Shop Web Developer
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Most digital agencies charge ₹25,000+ and take 4-8 weeks to deliver. We are focused on speed, honest pricing, and direct WhatsApp communication.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                Transparent flat pricing
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Clock className="w-4 h-4" />
                Delivery in 24-48 hours
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <MessageCircle className="w-4 h-4" />
                Direct WhatsApp contact
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 whitespace-nowrap"
            >
              <span>Get Your Website Today</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
