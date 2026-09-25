import React, { useState } from 'react';
import { useProducts, ADMIN_PIN } from '../context/ProductContext';
import { Lock, X, KeyRound, ShieldAlert, ArrowRight } from 'lucide-react';

export const AdminPinModal: React.FC = () => {
  const { isAdminModalOpen, closeAdminModal, loginAdmin } = useProducts();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isAdminModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(pin);
    if (!success) {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 2500);
    } else {
      setPin('');
      setError(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeAdminModal}
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className={`relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white transition-all ${
          error ? 'animate-shake border-rose-500' : ''
        }`}>
          {/* Close button */}
          <button
            onClick={closeAdminModal}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lock Icon */}
          <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Owner Security Check
            </h3>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto">
              This area is restricted to the owner of <strong>Farhan Clothing</strong>. Customers cannot edit or manage stock.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 text-center">
                Enter Owner PIN
              </label>
              
              <div className="relative max-w-[220px] mx-auto">
                <input
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={8}
                  autoFocus
                  value={pin}
                  onChange={(e) => {
                    setError(false);
                    setPin(e.target.value);
                  }}
                  placeholder="••••••"
                  className="w-full text-center tracking-[0.4em] text-2xl font-mono py-3 bg-neutral-950 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                />
              </div>

              {error && (
                <div className="flex items-center justify-center space-x-1.5 text-rose-400 text-xs mt-3">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Incorrect PIN. Try again.</span>
                </div>
              )}
            </div>

            {/* Quick Demo Assist */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-3 text-center">
              <span className="text-[11px] text-neutral-400 block font-medium">
                Default Owner Passcode: <code className="text-amber-400 font-bold px-1.5 py-0.5 bg-neutral-900 rounded border border-neutral-700">{ADMIN_PIN}</code>
              </span>
              <button
                type="button"
                onClick={() => setPin(ADMIN_PIN)}
                className="text-[10px] text-neutral-500 hover:text-amber-300 underline mt-1"
              >
                Auto-fill '{ADMIN_PIN}' for quick testing
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[10px] text-neutral-500 text-center mt-5">
            Strict role isolation active. Session locks automatically when closed.
          </p>
        </div>
      </div>
    </div>
  );
};
