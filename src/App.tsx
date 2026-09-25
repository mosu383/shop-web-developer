/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { testimonialsList } from './siteConfig';
import { Star, Quote, ArrowRight } from 'lucide-react';

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState<string>('Business Website (₹1,999)');

  // Smooth scroll to Contact section with pre-filled package or service name
  const handleOpenContact = (packageOrService?: string) => {
    if (packageOrService) {
      setSelectedInterest(packageOrService);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to services
  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header & Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact('Custom Website Inquiry')}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services Section (8 Cards) */}
        <Services onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)} />

        {/* 3. Why Choose Us Section (6 Points) */}
        <WhyChooseUs onOpenContact={() => handleOpenContact('Business Starter')} />

        {/* 4. How It Works Section (4 Steps) */}
        <HowItWorks onStartProject={() => handleOpenContact('Step 1 Requirements')} />

        {/* 5. Pricing Section (3 Packages: Starter ₹999, Business ₹1,999, Pro ₹4,999) */}
        <Pricing onSelectPlan={(planName) => handleOpenContact(planName)} />

        {/* 6. Portfolio Section (Sample Projects with View Project modal) */}
        <Portfolio onSelectProjectForInquiry={(projectTitle) => handleOpenContact(`Portfolio Demo: ${projectTitle}`)} />

        {/* Social Proof: Client Reviews */}
        <section className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
                <span>Client Success</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Verified Feedback</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Loved by Local Business & Shop Owners
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialsList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-slate-400 text-[11px]">{item.business} · {item.location}</p>
                    </div>
                    <span className="font-mono text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20">
                      {item.packageChosen}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. About Section */}
        <About onOpenContact={() => handleOpenContact('General Inquiry')} />

        {/* 8. FAQ Section */}
        <FAQ />

        {/* 9. Contact Section with CTA, WhatsApp, Phone, Email & Form */}
        <Contact initialSelectedInterest={selectedInterest} />
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
