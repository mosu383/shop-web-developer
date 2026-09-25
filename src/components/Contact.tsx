import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  AlertCircle 
} from 'lucide-react';
import { businessInfo, servicesList, pricingPlans } from '../siteConfig';

interface ContactProps {
  initialSelectedInterest?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSelectedInterest = '' }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phoneOrWhatsApp: '',
    businessName: '',
    interest: initialSelectedInterest || 'Business Website (₹1,999)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Update interest if prop changes
  React.useEffect(() => {
    if (initialSelectedInterest) {
      setFormData(prev => ({ ...prev, interest: initialSelectedInterest }));
    }
  }, [initialSelectedInterest]);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormError('');
  };

  // Submit via Web Form (Client-side handled, no paid backend required)
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrWhatsApp.trim()) {
      setFormError('Please enter your name and phone/WhatsApp number.');
      return;
    }

    // In a live static deployment, this can easily be hooked to Formspree, EmailJS, or server API.
    setSubmitted(true);
  };

  // Instant WhatsApp Send: Generates pre-formatted message
  const handleSendViaWhatsApp = () => {
    if (!formData.name.trim()) {
      setFormError('Please enter your name first so we can address you properly.');
      return;
    }

    const text = `*New Website Inquiry for ${businessInfo.businessName}*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone/WhatsApp:* ${formData.phoneOrWhatsApp || 'Not provided'}\n` +
      `🏪 *Business/Shop:* ${formData.businessName || 'New Startup/Shop'}\n` +
      `📦 *Package/Service:* ${formData.interest}\n` +
      `💬 *Details:* ${formData.message || 'Looking forward to discussing website details.'}`;

    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /* 
   * ===========================================================================
   * ⚠️ PLACEHOLDER CONTACT DETAILS (Easily edit in src/siteConfig.ts)
   * 
   * Phone: ${businessInfo.phone}
   * WhatsApp: ${businessInfo.whatsappNumber}
   * Email: ${businessInfo.email}
   * ===========================================================================
   */
  const directWhatsAppUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello! I want to inquire about creating a website for my business.`
  )}`;
  const directCallUrl = `tel:${businessInfo.phone}`;
  const directEmailUrl = `mailto:${businessInfo.email}?subject=${encodeURIComponent(
    `Website Inquiry for ${businessInfo.businessName}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-slate-900/70 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strong CTA Header as requested */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Fast Direct Response</span>
          </div>
          
          {/* Main Required CTA Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Ready to Take Your Business Online?
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Contact us today. We will understand your needs, suggest the best structure, and launch your modern website in 24-48 hours.
          </p>

          {/* Location & Presence */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>{businessInfo.location}</span>
          </div>
        </div>

        {/* Quick Direct Action Buttons Row (WhatsApp, Call, Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-4xl mx-auto">
          {/* WhatsApp button */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-950/60 hover:border-emerald-500/60 transition-all duration-200 flex items-center gap-4 text-left shadow-lg shadow-emerald-950/20"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">Fastest Response</span>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Chat on WhatsApp
              </h4>
              <p className="text-xs text-slate-400 truncate font-mono mt-0.5">
                {businessInfo.whatsappDisplay}
              </p>
            </div>
          </a>

          {/* Call button */}
          <a
            href={directCallUrl}
            className="group p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 hover:bg-blue-950/60 hover:border-blue-500/60 transition-all duration-200 flex items-center gap-4 text-left shadow-lg shadow-blue-950/20"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block">Direct Voice Call</span>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                Call Us Directly
              </h4>
              <p className="text-xs text-slate-400 truncate font-mono mt-0.5">
                {businessInfo.phoneDisplay}
              </p>
            </div>
          </a>

          {/* Email button */}
          <a
            href={directEmailUrl}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all duration-200 flex items-center gap-4 text-left shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-slate-300" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Email Inquiries</span>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                Send an Email
              </h4>
              <p className="text-xs text-slate-400 truncate font-mono mt-0.5">
                {businessInfo.email}
              </p>
            </div>
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative">
            {submitted ? (
              /* Success Screen */
              <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  We have received your website inquiry for <span className="font-semibold text-white">{formData.interest}</span>. 
                  Our team will contact you within {businessInfo.responseTime}.
                </p>
                
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-left text-xs space-y-1 font-mono text-slate-400">
                  <p><span className="text-slate-500">Contact:</span> {formData.phoneOrWhatsApp}</p>
                  <p><span className="text-slate-500">Selected:</span> {formData.interest}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send on WhatsApp for Faster Reply</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Simple Contact Form */
              <form onSubmit={handleSubmitForm} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out this quick form or click "Send via WhatsApp" below.
                  </p>
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label htmlFor="phoneOrWhatsApp" className="block text-xs font-semibold text-slate-300">
                      Phone or WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneOrWhatsApp"
                      name="phoneOrWhatsApp"
                      value={formData.phoneOrWhatsApp}
                      onChange={handleChange}
                      placeholder="e.g. 8292335799 or +91 82923 35799"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Business / Shop Name */}
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="block text-xs font-semibold text-slate-300">
                      Business or Shop Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Kumar Cloth Store / Clinic"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Service or Package */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-xs font-semibold text-slate-300">
                      Package or Service Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    >
                      <optgroup label="Pricing Packages">
                        {pricingPlans.map(plan => (
                          <option key={plan.id} value={`${plan.name} (${plan.price})`}>
                            {plan.name} Package — {plan.price}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Specific Services">
                        {servicesList.map(srv => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title} ({srv.startingPrice})
                          </option>
                        ))}
                        <option value="Custom Website Project">Custom Tailored Project</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Message / Requirements */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
                    Brief Requirements or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what kind of website you need, number of pages, or any specific reference websites..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Directly via WhatsApp</span>
                  </button>
                </div>

                {/* Response guarantee note */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Typical response time: &lt; 30 minutes
                  </span>
                  <span>100% Privacy Protected</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Developer note clearly showing placeholder customization location */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          <p className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 font-mono text-[11px]">
            💡 <span className="text-slate-400">Admin Note:</span> You can easily change your phone number, WhatsApp number, and business email inside <code className="text-blue-400 font-bold">src/siteConfig.ts</code>.
          </p>
        </div>

      </div>
    </section>
  );
};
