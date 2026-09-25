import React, { useState } from 'react';
import { Product, formatINR } from '../data/products';
import { useCart } from '../context/CartContext';
import { X, Check, ShoppingBag, MessageCircle } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const currentSize = selectedSize || (product.sizes && product.sizes[0]) || 'M';
  const formattedPrice = formatINR(product.price);
  const whatsappUrl = `https://wa.me/918292335799?text=${encodeURIComponent(
    `Hi Farhan Clothing, I want to order "${product.name}" in size ${currentSize} for ${formattedPrice}. Please confirm availability.`
  )}`;

  const handleAddToCart = () => {
    addToCart(product, currentSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setIsCartOpen(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left: Product Image */}
            <div className="md:col-span-6 relative aspect-square md:aspect-auto min-h-[300px] bg-neutral-100 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80';
                }}
              />
              {product.tag && (
                <div className="absolute top-4 left-4 bg-neutral-950/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {product.tag}
                </div>
              )}
            </div>

            {/* Right: Product Details & Controls */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {product.category} · Farhan Clothing India
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 leading-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-black text-neutral-950">
                    {formattedPrice}
                  </span>
                  <span className="text-xs text-neutral-500">
                    (All taxes included)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-neutral-900">Select Size</span>
                      <span className="text-neutral-500">Regular Indian fit</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-10 h-10 px-3 flex items-center justify-center text-xs font-bold rounded-xl border transition-all ${
                            currentSize === size
                              ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                              : 'border-neutral-200 text-neutral-800 hover:border-neutral-400 bg-white'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-3 border-t border-neutral-100">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag · {formattedPrice}</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order via WhatsApp (+91 8292335799)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
