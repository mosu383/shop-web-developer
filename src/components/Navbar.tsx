import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts, ADMIN_PIN } from '../context/ProductContext';
import { ShoppingBag, Lock, Unlock, Menu, X, ArrowUpRight, User, Home } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const {
    currentView,
    showSection,
    isAdminAuthenticated,
    customerUser,
    logoutAdmin,
  } = useProducts();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (section: 'storefront' | 'customer-login' | 'admin-login') => {
    setMobileMenuOpen(false);
    showSection(section);
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-neutral-950 text-white text-xs font-medium py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center space-x-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide">
              🇮🇳 All-India Free Express Delivery above ₹999 | WhatsApp Order Available (+91 8292335799)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-neutral-400">
            {customerUser ? (
              <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>Hi, {customerUser.name}</span>
              </span>
            ) : (
              <span>Guest Shopper</span>
            )}
            {isAdminAuthenticated && (
              <span className="text-amber-400 font-bold flex items-center space-x-1">
                <Unlock className="w-3 h-3" />
                <span>Admin Active</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Header matching user request */}
      <header className="sticky top-0 z-40 bg-neutral-950 text-white border-b border-neutral-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleNav('storefront')}
                className="text-left group flex items-center space-x-3 focus:outline-none"
              >
                <div className="w-11 h-11 bg-white text-neutral-950 rounded-xl flex items-center justify-center font-black text-xl tracking-tighter group-hover:bg-neutral-200 transition-colors shadow">
                  FC
                </div>
                <div>
                  <span className="font-black text-xl sm:text-2xl tracking-wider text-white block leading-tight">
                    Farhan Clothing
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block">
                    Streetwear & Essentials
                  </span>
                </div>
              </button>
            </div>

            {/* Navigation Buttons (Home, Customer Login, Admin Login) */}
            <nav className="hidden md:flex items-center space-x-3 text-sm font-bold">
              {/* Button 1: Home */}
              <button
                onClick={() => handleNav('storefront')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
                  currentView === 'storefront'
                    ? 'bg-white text-neutral-950 shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              {/* Button 2: Customer Login */}
              <button
                onClick={() => handleNav('customer-login')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
                  currentView === 'customer-login'
                    ? 'bg-white text-neutral-950 shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{customerUser ? `Account (${customerUser.name.split(' ')[0]})` : 'Customer Login'}</span>
              </button>

              {/* Button 3: Admin Login */}
              <button
                onClick={() => handleNav('admin-login')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
                  currentView === 'admin-login' || currentView === 'admin-dashboard'
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                }`}
              >
                {isAdminAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                <span>{isAdminAuthenticated ? 'Admin Dashboard' : 'Admin Login'}</span>
              </button>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* WhatsApp Quick Order button */}
              <a
                href="https://wa.me/918292335799?text=Hi%20Farhan%20Clothing%2C%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>WhatsApp: +91 8292335799</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Cart Icon Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-neutral-700"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[2]" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-neutral-950 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-scaleIn shadow">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none border border-neutral-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <div className="space-y-2">
              <button
                onClick={() => handleNav('storefront')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 ${
                  currentView === 'storefront' ? 'bg-white text-neutral-950' : 'bg-neutral-900 text-neutral-200'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              <button
                onClick={() => handleNav('customer-login')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 ${
                  currentView === 'customer-login' ? 'bg-white text-neutral-950' : 'bg-neutral-900 text-neutral-200'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{customerUser ? `Customer Account (${customerUser.name})` : 'Customer Login / Sign Up'}</span>
              </button>

              <button
                onClick={() => handleNav('admin-login')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 ${
                  currentView === 'admin-login' || currentView === 'admin-dashboard' ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-900 text-neutral-200'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>{isAdminAuthenticated ? 'Admin Dashboard' : `Admin Login (PIN: ${ADMIN_PIN})`}</span>
              </button>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col space-y-2">
              <a
                href="https://wa.me/918292335799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center space-x-2 shadow"
              >
                <span>WhatsApp Order: +91 8292335799</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
