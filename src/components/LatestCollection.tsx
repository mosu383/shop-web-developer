import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Product, formatINR, FALLBACK_PRODUCT_IMAGE } from '../data/products';
import { ShoppingBag, Eye, MessageCircle, Check, Search } from 'lucide-react';

interface LatestCollectionProps {
  onQuickView: (product: Product) => void;
}

export const LatestCollection: React.FC<LatestCollectionProps> = ({ onQuickView }) => {
  const { products, selectedCategory, setSelectedCategory } = useProducts();
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Men', 'Women', 'Accessories', 'Streetwear'];

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <section id="collection" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-neutral-950"></span>
              <span>Farhan Clothing Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              Latest Collection
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              All prices shown in Indian Rupees (₹) with all-inclusive pricing. Click any product to inspect details or message us on WhatsApp.
            </p>
          </div>

          {/* Customer View Badge */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold px-3 py-1.5 bg-neutral-200/90 text-neutral-800 rounded-full">
              Showing {filteredProducts.length} of {products.length} Items (₹ INR)
            </span>
          </div>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border border-neutral-200 rounded-full pl-9 pr-4 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>
        </div>

        {/* Dynamic Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300 p-8">
            <p className="text-neutral-500 text-sm">No products found matching your filter.</p>
          </div>
        ) : (
          <div id="customer-product-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isJustAdded = addedId === product.id;
              const formattedPrice = formatINR(product.price);
              const whatsappOrderUrl = `https://wa.me/918292335799?text=${encodeURIComponent(
                `Hello Farhan Clothing, I want to order "${product.name}" priced at ${formattedPrice}. Please share available sizes and COD options.`
              )}`;

              return (
                <div
                  key={product.id}
                  onClick={() => onQuickView(product)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200/90 hover:border-neutral-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
                >
                  {/* Image Container with Hover zoom */}
                  <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_PRODUCT_IMAGE;
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Tag / Badge */}
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-neutral-950/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                        {product.tag}
                      </div>
                    )}

                    {/* Category pill */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {product.category}
                    </div>

                    {/* Quick Preview overlay */}
                    <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center space-x-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Details (Read-Only Customer View) */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-neutral-950 text-base leading-snug group-hover:text-amber-800 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price in Indian Rupees (₹) and Actions */}
                    <div className="pt-3 border-t border-neutral-100 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-neutral-400 block">Price (INR)</span>
                          <span className="text-xl font-black text-neutral-950 tracking-tight">
                            {formattedPrice}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          Inclusive of Taxes
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Add to Bag Button */}
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
                            isJustAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-neutral-950 hover:bg-neutral-800 text-white active:scale-95'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>

                        {/* WhatsApp Direct Order Button */}
                        <a
                          href={whatsappOrderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1"
                          title="Inquire directly on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
