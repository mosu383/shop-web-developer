import React, { useState } from 'react';
import { useProducts, ADMIN_PIN } from '../context/ProductContext';
import { Lock, ShieldAlert, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { checkAdminPin, showSection } = useProducts();
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) {
      setErrorMsg('Please enter the Admin PIN');
      return;
    }

    const success = checkAdminPin(pin);
    if (!success) {
      setErrorMsg('Wrong PIN! You are not the admin.');
      setPin('');
      setTimeout(() => setErrorMsg(null), 3000);
    }
  };

  return (
    <div id="admin-login" className="max-w-md mx-auto px-4 py-16">
      
      {/* Back button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => showSection('storefront')}
          className="inline-flex items-center space-x-2 text-xs font-bold text-neutral-600 hover:text-neutral-950 transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </button>
        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
          Owner Portal
        </span>
      </div>

      <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-xl text-center">
        
        {/* Lock Icon */}
        <div className="w-16 h-16 bg-neutral-950 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
          <Lock className="w-8 h-8 text-amber-400" />
        </div>

        <h2 className="text-2xl font-black text-neutral-950 tracking-tight mb-1">
          Admin Access
        </h2>
        
        {/* Hint exactly as requested */}
        <p className="text-xs text-neutral-500 mb-6 font-medium">
          (Hint: PIN is <span className="font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded">{ADMIN_PIN}</span>)
        </p>

        {errorMsg && (
          <div className="mb-5 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 animate-fadeIn">
            <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                id="adminPin"
                inputMode="numeric"
                pattern="[0-9]*"
                autoFocus
                value={pin}
                onChange={(e) => {
                  setErrorMsg(null);
                  setPin(e.target.value);
                }}
                placeholder="Enter Admin PIN"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-900 tracking-widest placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <span>Login to Dashboard</span>
          </button>
        </form>

        {/* Quick test auto-fill */}
        <div className="mt-6 pt-5 border-t border-neutral-100">
          <button
            type="button"
            onClick={() => setPin(ADMIN_PIN)}
            className="text-xs text-neutral-500 hover:text-neutral-950 underline"
          >
            Auto-fill PIN ({ADMIN_PIN})
          </button>
        </div>

        <p className="text-[11px] text-neutral-400 mt-4 leading-relaxed">
          Authorized store administrators can add new inventory items, manage stock prices, and remove sold-out listings.
        </p>
      </div>

    </div>
  );
};
