import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
              <span>Our Brand Philosophy</span>
              <span>·</span>
              <span>Farhan Clothing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Crafted for Character, Built for Longevity.
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              At <strong className="text-neutral-950 font-semibold">Farhan Clothing</strong>, we believe everyday apparel should be comfortable, authentic, and impeccably constructed. We reject cheap fast-fashion shortcuts in favor of heavyweight fabrics, clean silhouettes, and thoughtful streetwear styling.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              From our signature 100% combed cotton heavy t-shirts to our authentic ring-spun denim and versatile outerwear, every garment undergoes rigorous wear testing to ensure it keeps its shape, drape, and color through countless washes.
            </p>

            {/* Quality Commitments Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ✓
                </div>
                <h4 className="font-bold text-sm text-neutral-950 mb-1">Heavyweight Fabric</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  240gsm to 450gsm fabrics that never turn translucent, pill, or stretch out of shape.
                </p>
              </div>

              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ★
                </div>
                <h4 className="font-bold text-sm text-neutral-950 mb-1">Tailored Modern Fit</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Relaxed drop-shoulders and modern tapers engineered to look effortless across all body types.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Statement Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-800">
              {/* Background image accent */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-block text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded">
                  The Farhan Clothing Guarantee
                </div>

                <blockquote className="text-xl sm:text-2xl font-light italic leading-snug text-neutral-200">
                  “We don't design for the rack — we design for your real life. Wear it hard, wash it freely, make it yours.”
                </blockquote>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-white">Farhan Atelier & Studio</p>
                    <p className="text-xs text-neutral-400">Head of Design & Production</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-neutral-400">Est. 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
