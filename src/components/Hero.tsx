import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Smartphone, Monitor, Zap, ShieldCheck, CheckCircle2, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { businessInfo } from '../siteConfig';

interface HeroProps {
  onOpenContact: (packageOrService?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I would like to get a professional website for my business/shop.`
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-radial">
      {/* Background ambient tech effects */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Value kicker: clean unboxed text with typographic separator (Anti-slop rule) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>Fast Turnaround</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>100% Mobile Ready</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Starting at ₹999</span>
            </div>

            {/* Main Specified Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Your Business Deserves a{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                Professional Website
              </span>
            </h1>

            {/* Main Specified Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We create modern, fast and affordable websites for businesses, shops and professionals.
            </p>

            {/* Specified CTAs + WhatsApp Direct */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenContact()}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Get Your Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Proof & Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">50+</p>
                <p className="text-xs text-slate-400 mt-0.5">Websites Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-blue-400 tabular-nums">₹999</p>
                <p className="text-xs text-slate-400 mt-0.5">Starting Package</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">24-48h</p>
                <p className="text-xs text-slate-400 mt-0.5">Rapid Delivery</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xl font-bold font-mono text-white tabular-nums">4.9/5</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Client Satisfaction</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Mockup Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-lg">
              
              {/* Device Toggle Controls (Anti-slop: clean segmented control) */}
              <div className="flex items-center justify-between pb-3 px-1 text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-400">Interactive Live Preview</span>
                <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      previewMode === 'desktop'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      previewMode === 'mobile'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Mockup Frame Container */}
              <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-blue-950/50 overflow-hidden transition-all duration-300">
                
                {/* Browser Title Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-md border border-slate-800 text-[11px] font-mono text-slate-400 max-w-[220px] truncate">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">yourbusiness.shopwebdev.com</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <Zap className="w-3 h-3" />
                    <span>99</span>
                  </div>
                </div>

                {/* Inner Website Simulated Screen */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[340px] flex flex-col justify-between">
                  {previewMode === 'desktop' ? (
                    /* Desktop Simulation */
                    <div className="space-y-4">
                      {/* Nav bar */}
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">S</div>
                          <span className="text-xs font-bold text-white">Shree Ganesh Stores</span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-400">
                          <span className="text-blue-400">Products</span>
                          <span>About</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">Open Now</span>
                        </div>
                      </div>

                      {/* Hero banner inside simulated site */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-500/20">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] uppercase font-mono text-cyan-400 tracking-wider">Local Shop Catalog</span>
                            <h4 className="text-base font-bold text-white mt-1">Fresh Groceries & Daily Needs</h4>
                            <p className="text-[11px] text-slate-300 mt-0.5">Order on WhatsApp · Delivery in 30 mins</p>
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            <ShoppingCart className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-600 text-white rounded-md flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            Order via WhatsApp
                          </span>
                          <span className="text-[10px] text-slate-400">Tap to chat with shopkeeper</span>
                        </div>
                      </div>

                      {/* Mini Product Cards */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="w-full h-12 rounded bg-slate-800/80 mb-1.5 flex items-center justify-center text-[10px] text-slate-400">Spices & Dal</div>
                          <p className="text-[11px] font-semibold text-white truncate">Organic Toor Dal</p>
                          <p className="text-[10px] font-mono text-emerald-400">₹140/kg</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="w-full h-12 rounded bg-slate-800/80 mb-1.5 flex items-center justify-center text-[10px] text-slate-400">Oils & Ghee</div>
                          <p className="text-[11px] font-semibold text-white truncate">Pure Cow Ghee</p>
                          <p className="text-[10px] font-mono text-emerald-400">₹580/L</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="w-full h-12 rounded bg-slate-800/80 mb-1.5 flex items-center justify-center text-[10px] text-slate-400">Dry Fruits</div>
                          <p className="text-[11px] font-semibold text-white truncate">California Almonds</p>
                          <p className="text-[10px] font-mono text-emerald-400">₹450/500g</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Mobile Simulation */
                    <div className="max-w-[280px] mx-auto space-y-3">
                      {/* Mobile Notch & Status */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span>9:41</span>
                        <div className="w-12 h-3 bg-slate-800 rounded-full" />
                        <span>5G 100%</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white">S</div>
                          <div>
                            <p className="text-xs font-bold text-white">Shree Ganesh Stores</p>
                            <p className="text-[10px] text-emerald-400">● Open until 9:30 PM</p>
                          </div>
                        </div>

                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-xs font-semibold text-white">Daily Catalog & Offers</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Free local delivery on orders above ₹300</p>
                          <button className="mt-2 w-full py-1.5 bg-emerald-600 text-white rounded text-[11px] font-semibold flex items-center justify-center gap-1.5">
                            <MessageCircle className="w-3 h-3" />
                            Send Shopping List
                          </button>
                        </div>

                        <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                          <span>📍 MG Road Market</span>
                          <span className="text-blue-400">Get Directions</span>
                        </div>
                      </div>

                      <p className="text-center text-[10px] text-slate-400 font-mono">
                        Instant touch load & 100% responsive
                      </p>
                    </div>
                  )}

                  {/* Feature status strip below mockup */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Live WhatsApp Link
                    </span>
                    <span className="font-mono text-slate-400">SSL Encrypted</span>
                    <span className="text-blue-400">Custom Domain</span>
                  </div>

                </div>

              </div>

              {/* Bottom caption */}
              <p className="text-center text-xs text-slate-500 mt-3">
                Every website includes direct WhatsApp connectivity for instant customer orders.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
