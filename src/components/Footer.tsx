import React from 'react';
import { Mail, MessageCircle, Instagram, Lock, ArrowUp } from 'lucide-react';
import { useProducts, ADMIN_PIN } from '../context/ProductContext';

export const Footer: React.FC = () => {
  const { openAdminModal, isAdminAuthenticated, logoutAdmin } = useProducts();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white text-neutral-950 font-black rounded-xl flex items-center justify-center text-sm shadow">
                FC
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Farhan Clothing
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Contemporary Indian streetwear and everyday essentials. Handcrafted with premium combed cottons, durable denims, and modern cuts tailored for life across India.
            </p>

            {/* Social Media Links (Visible to Customers) */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Official Customer Channels
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/918292335799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 flex items-center space-x-1.5 text-xs font-bold transition-all"
                  title="WhatsApp: +91 8292335799"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp (+91 8292335799)</span>
                </a>

                {/* Instagram Link */}
                <a
                  href="https://instagram.com/moshahid_ji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-pink-500/20 hover:bg-pink-600 text-pink-300 hover:text-white border border-pink-500/40 flex items-center space-x-1.5 text-xs font-bold transition-all"
                  title="Instagram: @moshahid_ji"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@moshahid_ji</span>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:princejii2607@gmail.com"
                  className="px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 flex items-center space-x-1.5 text-xs font-medium transition-all"
                  title="Email: princejii2607@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>princejii2607@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Store
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collection')} className="hover:text-white transition-colors">
                  Latest Collection (₹ INR)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Farhan Clothing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Customer Support
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support & Owner Lock (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pan-India Support
            </h4>
            <p className="text-xs text-neutral-400">
              Deliveries across Delhi NCR, Mumbai, Bengaluru, Kolkata, Hyderabad, Chennai, and tier-2/3 cities nationwide.
            </p>

            <div className="pt-2">
              {isAdminAuthenticated ? (
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-bold">Admin Active</span>
                  <button
                    onClick={logoutAdmin}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Lock Session
                  </button>
                </div>
              ) : (
                <button
                  onClick={openAdminModal}
                  className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center space-x-1.5 transition-colors pt-1"
                  title={`Owner Dashboard (PIN: ${ADMIN_PIN})`}
                >
                  <Lock className="w-3 h-3 text-neutral-500" />
                  <span>Store Owner Login (PIN Protected)</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>© {new Date().getFullYear()} Farhan Clothing India. All rights reserved. Designed for timeless comfort.</p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
