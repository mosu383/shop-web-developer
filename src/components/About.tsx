import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../siteConfig';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>About Us</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Our Mission & Promise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Empowering Local Businesses with High-Impact Websites
            </h2>

            {/* Core introduction as requested */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                At <span className="font-semibold text-white">{businessInfo.businessName}</span>, we believe that every small business, retail store, local entrepreneur, and startup deserves a professional, modern website without paying exorbitant agency fees.
              </p>
              <p className="text-slate-400">
                Too many business owners are held back by complex technical jargon, slow agencies taking months to respond, or expensive ₹20,000+ packages they simply don't need. We founded {businessInfo.businessName} to solve this exact problem: providing sleek, mobile-optimized, ultra-fast websites with direct WhatsApp support starting at just ₹999.
              </p>
              <p className="text-slate-400">
                Whether you run a physical boutique looking to take orders via WhatsApp, a restaurant wanting an appetizing digital menu, or a professional needing a credible portfolio, we treat your business like our own.
              </p>
            </div>

            {/* Three Pillar Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Hidden Fees</h4>
                <p className="text-xs text-slate-400">What you see is what you pay. Transparent pricing from day one.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast Turnaround</h4>
                <p className="text-xs text-slate-400">Most projects completed and live within 24 to 48 hours.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <HeartHandshake className="w-5 h-5 text-emerald-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct WhatsApp</h4>
                <p className="text-xs text-slate-400">Direct 1-on-1 contact with your developer whenever you need edits.</p>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Commitments & Stats Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">The Shop Web Developer Promise</span>
                <h3 className="text-xl font-bold text-white mt-1">What You Get With Every Project</h3>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-white">100% Mobile & Tablet Responsive</h5>
                    <p className="text-xs text-slate-400">Tested across iPhone, Samsung, Xiaomi, and iPads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Google Maps & WhatsApp Ready</h5>
                    <p className="text-xs text-slate-400">Makes it effortless for customers to find you and message you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Speed & SEO Optimized</h5>
                    <p className="text-xs text-slate-400">Clean code structure so your website ranks properly on Google.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Free Post-Launch Support</h5>
                    <p className="text-xs text-slate-400">Free minor text updates and photo adjustments after going live.</p>
                  </div>
                </div>
              </div>

              {/* Developer contact direct note */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="text-white font-medium">Have questions before starting?</p>
                <p>Based in {businessInfo.location}. We are happy to jump on a quick WhatsApp chat or phone call to discuss your ideas.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
