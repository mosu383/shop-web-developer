import React from 'react';
import { MessageSquare, LayoutTemplate, Eye, Rocket, Check, ArrowRight } from 'lucide-react';
import { howItWorksSteps } from '../siteConfig';

interface HowItWorksProps {
  onStartProject: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartProject }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Eye className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Check className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Simple 4-Step Process</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Zero Hassle Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            How It Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Getting your business online should be quick and straightforward. Here is our simple 4-step roadmap from idea to live launch.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 group"
            >
              <div>
                {/* Step Top Bar: Icon & Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-blue-500/50 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                {/* Step Subtitle / Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {step.subtitle}
                </p>
              </div>

              {/* Step Footer: Timeframe & Deliverable */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Timeline:</span>
                  <span className="font-mono text-blue-400 font-semibold">{step.timeframe}</span>
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  <span className="text-slate-400">Result: </span>
                  <span className="text-slate-300">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to start action strip */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-600/30 whitespace-nowrap"
          >
            <span>Start Step 1: Tell Us Your Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
