import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Order Support" className="fixed bottom-5 right-5 z-40">
      <a
        href="https://wa.me/918292335799?text=Hi%20Farhan%20Clothing%2C%20I%20am%20interested%20in%20your%20collection!"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 border-2 border-white/30"
        title="Chat on WhatsApp (+91 8292335799)"
      >
        {/* WhatsApp Icon */}
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        </div>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold font-sans pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
        <span className="hidden sm:inline-block ml-2 text-xs font-bold">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
};
