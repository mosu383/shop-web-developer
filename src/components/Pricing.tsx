import React from 'react';
import { Check, ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { pricingPlans, PricingPlan, businessInfo } from '../siteConfig';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const getWhatsAppPlanUrl = (planName: string, price: string) => {
    const text = `Hi ${businessInfo.businessName}! I am interested in the ${planName} package (${price}) for my website. Can you help me get started?`;
    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Honest & Transparent Rates</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>No Hidden Costs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Simple, Affordable Pricing
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Choose the perfect package for your shop or business. One-time payment with clear deliverables and dedicated support.
          </p>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan: PricingPlan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 ${
                  isPopular
                    ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-600/20 md:-translate-y-2'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                } p-6 sm:p-8`}
              >
                {/* Popular highlight pill badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold tracking-wider uppercase rounded-full shadow-md shadow-blue-600/40 flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Clock className="w-3 h-3 text-blue-400" />
                      {plan.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 min-h-[36px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm font-mono text-slate-500 line-through tabular-nums">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 ml-1">one-time</span>
                    </div>
                    <p className="text-[11px] text-emerald-400 mt-1">✓ No monthly software subscription</p>
                  </div>

                  {/* Checklist of Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions: "Get Started" button on every package + WhatsApp Order */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectPlan(`${plan.name} (${plan.price})`)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppPlanUrl(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom requirements note */}
        <p className="text-center text-xs sm:text-sm text-slate-400 mt-10">
          Need custom integrations, multi-vendor marketplaces, or specific APIs?{' '}
          <button
            onClick={() => onSelectPlan('Custom Pro Project')}
            className="text-blue-400 hover:text-blue-300 underline font-semibold ml-1 inline-flex items-center"
          >
            Contact us for a tailored quotation.
          </button>
        </p>

      </div>
    </section>
  );
};
