import React from 'react';
import { useCart } from '../context/CartContext';
import { Check, ShoppingBag, X } from 'lucide-react';

export const CartToast: React.FC = () => {
  const { toastMessage, clearToast, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-neutral-950 text-white px-5 py-4 shadow-2xl border border-neutral-800 flex items-center gap-4 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </div>
        <div className="flex-1 text-xs">
          <p className="font-semibold text-white">Item Added</p>
          <p className="text-neutral-300 mt-0.5 line-clamp-1">{toastMessage}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              clearToast();
              setIsCartOpen(true);
            }}
            className="text-[11px] font-semibold uppercase tracking-wider underline hover:text-neutral-300 transition-colors cursor-pointer"
          >
            View Bag
          </button>
          <button
            onClick={clearToast}
            className="text-neutral-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
