import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-neutral-950"></span>
            <span>Direct Customer Desk</span>
            <span>·</span>
            <span>India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            Connect With Farhan Clothing
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-normal">
            We are readily available on WhatsApp, Email, and Instagram for custom sizing, order updates, and bulk queries.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards (WhatsApp, Email, Instagram) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* 1. WhatsApp Card */}
          <a
            href="https://wa.me/918292335799"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 rounded-3xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 block"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
              Instant WhatsApp Support
            </span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-1">
              +91 8292335799
            </h3>
            <p className="text-xs text-neutral-600">
              Click to open WhatsApp chat directly for instant order booking and size help.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-emerald-700 mt-4 group-hover:underline">
              Message on WhatsApp →
            </span>
          </a>

          {/* 2. Email Card */}
          <a
            href="mailto:princejii2607@gmail.com"
            className="group p-6 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 rounded-3xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 block"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
              Official Email
            </span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-1 break-all">
              princejii2607@gmail.com
            </h3>
            <p className="text-xs text-neutral-600">
              Send us inquiries, feedback, or business proposals anytime.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-neutral-900 mt-4 group-hover:underline">
              Send an Email →
            </span>
          </a>

          {/* 3. Instagram Card */}
          <a
            href="https://instagram.com/moshahid_ji"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 border border-pink-200 hover:border-pink-400 rounded-3xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 block"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block">
              Follow Us on Instagram
            </span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-1">
              @moshahid_ji
            </h3>
            <p className="text-xs text-neutral-600">
              Check out our new lookbooks, styling reels, and customer tags.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-rose-700 mt-4 group-hover:underline">
              Visit @moshahid_ji →
            </span>
          </a>

        </div>

        {/* Quick Message Form */}
        <div className="max-w-2xl mx-auto bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8">
          <h4 className="text-base font-bold text-neutral-950 mb-1">Drop a Quick Note</h4>
          <p className="text-xs text-neutral-500 mb-5">Have a question? We will respond within a few hours.</p>

          {formSubmitted ? (
            <div className="text-center py-6 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h5 className="font-bold text-neutral-900 text-sm">Message Received!</h5>
              <p className="text-xs text-neutral-600">We will reach back out on your phone or email shortly.</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-3 text-xs font-bold text-neutral-950 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phoneOrEmail}
                    onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Message / Order Query
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what size or clothing piece you need..."
                  className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Query</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
