import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessInfo } from '../siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${businessInfo.businessName}! I would like to inquire about getting a website made for my business.`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Small notification badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs shadow-xl pointer-events-auto animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Need a website? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
            className="p-0.5 text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shop Web Developer on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center pointer-events-auto transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/10 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
