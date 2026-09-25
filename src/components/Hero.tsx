import React from 'react';
import { useProducts } from '../context/ProductContext';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { products } = useProducts();

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-neutral-950 text-white min-h-[540px] sm:min-h-[620px] flex items-center">
      {/* Background Graphic & Mood Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80"
          alt="Farhan Clothing editorial lookbook"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="uppercase tracking-wider">India Season Drop 2026</span>
              <span className="text-neutral-500">•</span>
              <span className="text-amber-400 font-bold">{products.length} Products In Stock</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Elevate Your Wardrobe <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-amber-200 bg-clip-text text-transparent">
                With Farhan Clothing.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              Premium heavyweight cottons, streetwear fits, and timeless everyday essentials designed for comfort in India. Browse our latest pieces with all prices in Indian Rupees (₹).
            </p>

            {/* CTAs for Customer */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToCollection}
                className="px-7 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 rounded-xl font-extrabold text-sm tracking-wide shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
              >
                <span>Explore Latest Collection</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918292335799?text=Hi%20Farhan%20Clothing%2C%20I%20want%20to%20know%20more%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges for Indian Shoppers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 max-w-lg text-neutral-400">
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">₹ Prices</p>
                <p className="text-xs text-neutral-400">Inclusive of Taxes</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">100%</p>
                <p className="text-xs text-neutral-400">Bio-Washed Cotton</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">Pan-India</p>
                <p className="text-xs text-neutral-400">Fast 48h Dispatch</p>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-3xl blur-xl"></div>

              <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-neutral-950">
                  <img
                    src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
                    alt="Farhan Clothing denim featured piece"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-amber-400 border border-neutral-800 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Top Pick of the Month</span>
                  </div>
                </div>

                <div className="pt-4 px-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white">Classic Indigo Denim Trucker</h3>
                    <p className="text-xs text-neutral-400">Heavyweight Washed Denim</p>
                  </div>
                  <span className="font-black text-lg text-emerald-400">₹2,499</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
