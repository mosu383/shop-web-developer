import React, { useState } from 'react';
import { useProducts, ADMIN_PIN } from '../context/ProductContext';
import { SAMPLE_IMAGE_PRESETS, formatINR, FALLBACK_PRODUCT_IMAGE } from '../data/products';
import { Lock, Plus, Trash2, ArrowLeft, RefreshCw, CheckCircle2, AlertCircle, ShieldCheck, LayoutGrid, List } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    products,
    addProduct,
    deleteProduct,
    resetToDefault,
    showSection,
    logoutAdmin,
  } = useProducts();

  // Form fields matching user's spec:
  // prodName, prodPrice, prodImg
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodImg, setProdImg] = useState('');
  
  // Optional enhancements
  const [category, setCategory] = useState<'Men' | 'Women' | 'Accessories' | 'Streetwear'>('Men');
  const [tag, setTag] = useState('New Drop');
  const [description, setDescription] = useState('');

  // UI state
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!prodName.trim()) {
      setErrorMessage('Please enter Product Name');
      return;
    }

    const priceNum = parseFloat(prodPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
      setErrorMessage('Please enter a valid Price in ₹');
      return;
    }

    // Fallback image if left empty, matching prototype
    const finalImg = prodImg.trim() || FALLBACK_PRODUCT_IMAGE;

    const added = addProduct({
      name: prodName.trim(),
      price: priceNum,
      imageUrl: finalImg,
      category,
      tag: tag || 'New Drop',
      description: description.trim() || undefined,
    });

    setStatusMessage(`Product "${added.name}" added successfully at ${formatINR(priceNum)}!`);
    
    // Clear inputs
    setProdName('');
    setProdPrice('');
    setProdImg('');
    setDescription('');

    setTimeout(() => {
      setStatusMessage(null);
    }, 4000);
  };

  const handlePresetSelect = (preset: { name: string; price: number; url: string }) => {
    setProdImg(preset.url);
    if (!prodName) setProdName(preset.name);
    if (!prodPrice) setProdPrice(preset.price.toString());
  };

  const handleDelete = (id: string | number, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from Farhan Clothing?`)) {
      deleteProduct(id);
      setStatusMessage(`Deleted "${name}" from inventory.`);
      setTimeout(() => setStatusMessage(null), 3000);
    }
  };

  return (
    <div id="admin-dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Owner Access · PIN Protected ({ADMIN_PIN})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Add new inventory, set pricing in ₹ INR, and manage active products. Data persists in <strong>LocalStorage</strong>.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => showSection('storefront')}
            className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Customer Storefront</span>
          </button>
          <button
            onClick={logoutAdmin}
            className="px-3.5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5"
            title="Lock Admin Dashboard"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {statusMessage && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-3.5 rounded-2xl flex items-center justify-between animate-fadeIn shadow-sm">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-sm font-semibold">{statusMessage}</span>
          </div>
          <button
            onClick={() => showSection('storefront')}
            className="text-xs font-bold underline hover:text-emerald-950 ml-4"
          >
            View on Storefront →
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="bg-rose-50 border border-rose-300 text-rose-800 px-4 py-3 rounded-2xl flex items-center space-x-3 animate-fadeIn shadow-sm">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          <span className="text-sm font-medium">{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Add New Product Box (Directly matches user prompt schema) */}
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-neutral-100">
          <div className="w-8 h-8 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-neutral-950 tracking-tight">Add New Product</h2>
            <p className="text-xs text-neutral-500">Provide product name, price in ₹, and image link</p>
          </div>
        </div>

        <form onSubmit={handleAddProduct} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Input: Product Name (id="prodName") */}
            <div>
              <label htmlFor="prodName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Product Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="prodName"
                required
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                placeholder="Product Name (e.g., Casual T-Shirt)"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Input: Price in ₹ (id="prodPrice") */}
            <div>
              <label htmlFor="prodPrice" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Price in ₹ <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-neutral-500 font-bold text-sm">₹</span>
                <input
                  type="number"
                  id="prodPrice"
                  min="1"
                  required
                  value={prodPrice}
                  onChange={(e) => setProdPrice(e.target.value)}
                  placeholder="Price in ₹ (e.g., 999)"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-xl pl-8 pr-4 py-3 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all font-bold"
                />
              </div>
            </div>

            {/* Input: Image URL (id="prodImg") */}
            <div>
              <label htmlFor="prodImg" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Image URL (e.g., https://...)
              </label>
              <input
                type="text"
                id="prodImg"
                value={prodImg}
                onChange={(e) => setProdImg(e.target.value)}
                placeholder="Image URL (e.g., https://...)"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
              <p className="text-[10px] text-neutral-400 mt-1">
                Optional: Leave blank to use fallback image automatically.
              </p>
            </div>

          </div>

          {/* Additional details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Accessories">Accessories</option>
                <option value="Streetwear">Streetwear</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Badge / Tag
              </label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="e.g. New Drop, Best Seller"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Description (Optional)
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. 100% Bio-washed cotton"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
          </div>

          {/* Quick presets */}
          <div>
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2">
              Quick Sample Presets (Click to autofill):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setProdName('Premium White Shirt');
                  setProdPrice('1200');
                  setProdImg('https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500');
                  setCategory('Men');
                }}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold transition-colors border border-neutral-200"
              >
                White Shirt (₹1200)
              </button>
              <button
                type="button"
                onClick={() => {
                  setProdName('Classic Blue Jeans');
                  setProdPrice('1500');
                  setProdImg('https://images.unsplash.com/photo-1542272604-787c3835535d?w=500');
                  setCategory('Men');
                }}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold transition-colors border border-neutral-200"
              >
                Blue Jeans (₹1500)
              </button>
              {SAMPLE_IMAGE_PRESETS.slice(0, 4).map((p) => (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => handlePresetSelect(p)}
                  className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold transition-colors border border-neutral-200"
                >
                  {p.name} (₹{p.price})
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>+ Add Product</span>
            </button>
          </div>
        </form>
      </div>

      {/* Section 2: Manage Existing Products */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
              Manage Existing Products
            </h2>
            <p className="text-xs text-neutral-500">
              Total {products.length} products listed on customer storefront. Each card includes a red <strong>Delete Item</strong> button.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* View toggle */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Restore defaults */}
            <button
              onClick={resetToDefault}
              className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Default Products</span>
            </button>
          </div>
        </div>

        {/* Product Grid View matching exact prototype layout */}
        {viewMode === 'grid' ? (
          <div id="admin-product-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100 mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_PRODUCT_IMAGE;
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-2 right-2 bg-neutral-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-neutral-950 text-base leading-snug line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-emerald-700 font-extrabold text-base mb-2">
                    {formatINR(product.price)}
                  </p>
                  <p className="text-[11px] text-neutral-500 line-clamp-2 mb-3">
                    {product.description}
                  </p>
                </div>

                {/* Red Delete Button matching user specification */}
                <div>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Item</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-neutral-700">
                <thead className="bg-neutral-50 text-[11px] uppercase font-bold text-neutral-500 border-b border-neutral-200">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Tag</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-3 px-4 flex items-center space-x-3">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = FALLBACK_PRODUCT_IMAGE;
                          }}
                          className="w-12 h-12 rounded-lg object-cover bg-neutral-100 flex-shrink-0"
                        />
                        <div>
                          <p className="font-bold text-neutral-900">{product.name}</p>
                          <p className="text-[10px] text-neutral-400 font-mono">ID: {product.id}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-neutral-100 font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700 text-sm">
                        {formatINR(product.price)}
                      </td>
                      <td className="py-3 px-4 text-neutral-500">
                        {product.tag || '—'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          className="px-3 py-1.5 bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white rounded-lg text-xs font-bold transition-all border border-rose-200 hover:border-transparent inline-flex items-center space-x-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Item</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
