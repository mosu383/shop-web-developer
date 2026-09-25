import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp, MapPin } from 'lucide-react';
import { businessInfo } from '../siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand & Slogan as specified */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold">
                {'</>'}
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white font-display">
                {businessInfo.businessName}
              </span>
            </div>
            
            {/* Specified exact phrase */}
            <p className="text-sm text-slate-400">
              "Building websites that help businesses grow."
            </p>

            <p className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1.5 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{businessInfo.location}</span>
            </p>
          </div>

          {/* Navigation Links: Services | Portfolio | About | Contact */}
          <nav className="flex items-center flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Quick Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${businessInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              aria-label="Call"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${businessInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Exact Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright © 2026 {businessInfo.businessName}
          </p>
          <p className="flex items-center gap-2">
            <span>Fast, Mobile-Friendly & Affordable Web Development</span>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <span>All Rights Reserved</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
