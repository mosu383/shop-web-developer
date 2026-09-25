import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { User, Mail, Lock, Phone, MapPin, Package, LogOut, ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { formatINR } from '../data/products';

export const CustomerLogin: React.FC = () => {
  const { customerUser, loginCustomer, logoutCustomer, customerOrders, showSection } = useProducts();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }

    loginCustomer(email, name || email.split('@')[0], phone || '+91 8292335799', address);
    setSuccessToast(`Welcome to Farhan Clothing, ${name || email.split('@')[0]}!`);
    
    // Reset inputs
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
    setAddress('');

    setTimeout(() => {
      setSuccessToast(null);
    }, 3500);
  };

  const handleDemoLogin = () => {
    loginCustomer('princejii2607@gmail.com', 'Prince Kumar', '+91 8292335799', 'Civil Lines, New Delhi 110054');
    setSuccessToast('Logged in as Prince Kumar (Demo Account)');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div id="customer-login" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Back button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => showSection('storefront')}
          className="inline-flex items-center space-x-2 text-xs font-bold text-neutral-600 hover:text-neutral-950 transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </button>
        <span className="text-xs font-semibold text-neutral-400">
          Farhan Clothing · Customer Portal
        </span>
      </div>

      {successToast && (
        <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 rounded-2xl flex items-center space-x-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span className="text-sm font-semibold">{successToast}</span>
        </div>
      )}

      {customerUser ? (
        /* Logged In Customer Account Dashboard */
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                {customerUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Customer Account</span>
                </div>
                <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
                  Welcome back, {customerUser.name}!
                </h2>
                <p className="text-xs text-neutral-500">{customerUser.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => showSection('storefront')}
                className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Latest Collection</span>
              </button>
              <button
                onClick={logoutCustomer}
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Account Details Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
              <div className="flex items-center space-x-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Email Address</span>
              </div>
              <p className="text-sm font-semibold text-neutral-900 break-all">{customerUser.email}</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
              <div className="flex items-center space-x-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Phone</span>
              </div>
              <p className="text-sm font-semibold text-neutral-900">{customerUser.phone || '+91 8292335799'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
              <div className="flex items-center space-x-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Default Address</span>
              </div>
              <p className="text-sm font-semibold text-neutral-900">
                {customerUser.address || 'Civil Lines, Delhi NCR, India'}
              </p>
            </div>
          </div>

          {/* Customer Orders History */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-neutral-800" />
                <h3 className="text-base font-bold text-neutral-950">Your Recent Orders ({customerOrders.length})</h3>
              </div>
              <span className="text-xs text-neutral-400">All orders tracked via WhatsApp delivery updates</span>
            </div>

            {customerOrders.length === 0 ? (
              <div className="text-center py-10 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
                <p className="text-xs text-neutral-500 mb-2">No orders placed yet.</p>
                <button
                  onClick={() => showSection('storefront')}
                  className="text-xs font-bold text-neutral-950 underline"
                >
                  Browse Latest Collection (₹ INR)
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {customerOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold text-neutral-900">Order #{ord.id}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800">
                          {ord.status}
                        </span>
                        <span className="text-[11px] text-neutral-400">· {ord.date}</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        {ord.items.map((item, idx) => (
                          <p key={idx} className="text-xs text-neutral-700">
                            • {item.name} <span className="text-neutral-400">x{item.quantity}</span> — {formatINR(item.price * item.quantity)}
                          </p>
                        ))}
                      </div>
                      <p className="text-[10px] text-neutral-400 mt-2 font-mono">
                        Tracking: {ord.trackingNumber} · Courier: BlueDart / Delhivery Express
                      </p>
                    </div>

                    <div className="sm:text-right flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block">Total Paid</span>
                        <span className="text-base font-black text-neutral-950">{formatINR(ord.total)}</span>
                      </div>
                      <a
                        href={`https://wa.me/918292335799?text=${encodeURIComponent(
                          `Hi Farhan Clothing, checking update for my order #${ord.id}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-xs font-bold text-emerald-700 hover:underline"
                      >
                        Track on WhatsApp →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Customer Login / Sign Up Card (Matches User's Prototype Layout) */
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-lg max-w-md mx-auto">
          
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-neutral-950 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-4 shadow">
              <User className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
              {isSignUp ? 'Create Customer Account' : 'Customer Login'}
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              {isSignUp
                ? 'Join Farhan Clothing to track orders and save your address'
                : 'Access your saved orders, wishlist, and fast checkout'}
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="grid grid-cols-2 p-1 bg-neutral-100 rounded-xl mb-6 text-xs font-bold">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`py-2 rounded-lg transition-all ${
                !isSignUp ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`py-2 rounded-lg transition-all ${
                isSignUp ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              New Customer? Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Farhan Ali"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>

            {isSignUp && (
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Phone (WhatsApp Updates)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 8292335799"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md mt-2 flex items-center justify-center space-x-2"
            >
              <span>{isSignUp ? 'Create Account & Enter' : 'Login / Sign Up'}</span>
            </button>
          </form>

          {/* Quick Demo Access */}
          <div className="mt-6 pt-5 border-t border-neutral-100 text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 underline"
            >
              ⚡ Instant One-Click Demo Login (Prince Kumar)
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => showSection('storefront')}
              className="text-xs text-neutral-400 hover:text-neutral-600"
            >
              Skip login and continue browsing Storefront →
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
