/**
 * ==============================================================================
 * SHOP WEB DEVELOPER — CENTRAL CONFIGURATION FILE
 * ==============================================================================
 * 
 * Hey there! 👋 You can customize your entire business information, contact details,
 * services, prices, and portfolio items right here in this single file without 
 * touching complex UI code.
 * 
 * TABLE OF CONTENTS:
 * 1. BUSINESS & CONTACT DETAILS (Phone, WhatsApp, Email, Address)
 * 2. PRICING PACKAGES (Starter, Business, Pro)
 * 3. SERVICES (8 Services)
 * 4. WHY CHOOSE US (6 Key Differentiators)
 * 5. HOW IT WORKS (4 Simple Steps)
 * 6. PORTFOLIO ITEMS (Showcase projects with details)
 * 7. FREQUENTLY ASKED QUESTIONS (FAQ)
 * 8. TESTIMONIALS
 * ==============================================================================
 */

export interface ContactInfo {
  businessName: string;
  tagline: string;
  subheading: string;
  phone: string;              // 👉 EDIT: Replace with your actual phone number
  phoneDisplay: string;       // 👉 EDIT: Display format for phone
  whatsappNumber: string;     // 👉 EDIT: Enter with country code without '+', e.g. '919876543210'
  whatsappDisplay: string;    // 👉 EDIT: Friendly display of WhatsApp number
  email: string;              // 👉 EDIT: Replace with your business email
  location: string;           // 👉 EDIT: Your city/state or 'India / Worldwide'
  workingHours: string;
  responseTime: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  badge?: string;
  description: string;
  features: string[];
  deliveryTime: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badgeText: string;
  features: string[];
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: string;
  clientType: string;
  description: string;
  liveUrlPlaceholder: string;
  technologies: string[];
  features: string[];
  previewTheme: 'tech' | 'store' | 'cafe' | 'corporate' | 'creative';
  impactMetric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// -----------------------------------------------------------------------------
// 1. BUSINESS & CONTACT DETAILS
// Change your business contact details here!
// -----------------------------------------------------------------------------
export const businessInfo: ContactInfo = {
  businessName: "Shop Web Developer",
  tagline: "Your Business Deserves a Professional Website",
  subheading: "We create modern, fast and affordable websites for businesses, shops and professionals.",
  
  // ⚠️ Phone number: used for tel: links (opens phone dialer)
  phone: "+918292335799",
  phoneDisplay: "+91 82923 35799", // Displayed on the website
  
  // ⚠️ WhatsApp number: used for https://wa.me/ links (opens WhatsApp chat)
  whatsappNumber: "918292335799", // Country code 91 + 10-digit number
  whatsappDisplay: "+91 82923 35799",
  
  // ⚠️ Business Email: used for mailto: links (opens email client)
  email: "princejii2607@gmail.com",
  
  // Business location & response promise:
  location: "Ranchi, Jharkhand, India",
  workingHours: "Mon – Sat: 9:00 AM – 8:00 PM IST",
  responseTime: "Within 30 minutes on WhatsApp"
};

// -----------------------------------------------------------------------------
// 2. PRICING PACKAGES
// You can adjust prices, features, or add new packages here!
// -----------------------------------------------------------------------------
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹999",
    originalPrice: "₹1,999",
    description: "Ideal for local shops, solo creators, or single-product launches needing a solid online presence.",
    features: [
      "1 Page Website",
      "Mobile Responsive",
      "WhatsApp Button",
      "Basic Design",
      "Free Domain & Hosting Setup Assistance",
      "Google Maps Location Integration",
      "Fast 24-48 Hours Turnaround"
    ],
    deliveryTime: "24 – 48 Hours",
    isPopular: false
  },
  {
    id: "business",
    name: "BUSINESS",
    price: "₹1,999",
    originalPrice: "₹3,999",
    badge: "MOST POPULAR",
    description: "Perfect for retail shops, service providers, clinics, restaurants, and growing businesses.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "WhatsApp Integration",
      "Contact Form",
      "Modern Design",
      "Product / Service Catalog Gallery",
      "Social Media Links Integration",
      "Basic On-Page SEO",
      "Free 30 Days Technical Support"
    ],
    deliveryTime: "3 – 5 Days",
    isPopular: true
  },
  {
    id: "pro",
    name: "PRO",
    price: "₹4,999",
    originalPrice: "₹8,999",
    badge: "BEST VALUE",
    description: "Complete full-scale website for ambitious businesses, e-commerce stores, and high-converting brands.",
    features: [
      "Up to 10 Pages",
      "Advanced Design & Animations",
      "WhatsApp Integration",
      "Contact Form with Email Notifications",
      "Basic SEO & Google Search Console Setup",
      "Custom Features & Interactive Elements",
      "Fast Speed & Performance Optimization",
      "Payment Gateway / UPI QR Integration",
      "Free 60 Days Technical Support"
    ],
    deliveryTime: "5 – 7 Days",
    isPopular: false
  }
];

// -----------------------------------------------------------------------------
// 3. SERVICES (8 Cards required by specification)
// -----------------------------------------------------------------------------
export const servicesList: ServiceItem[] = [
  {
    id: "business-website",
    title: "Business Website",
    description: "Professional corporate websites that establish credibility, showcase services, and turn visitors into regular paying clients.",
    iconName: "Briefcase",
    badgeText: "Most Requested",
    startingPrice: "₹1,999",
    features: ["Company Profile & Story", "Service Showcase & Inquiries", "Team & Testimonial Section", "Lead Capture Form"]
  },
  {
    id: "shop-store-website",
    title: "Shop / Store Website",
    description: "Digital storefront for physical retail shops, grocery stores, clothing boutiques, and electronics shops with direct WhatsApp orders.",
    iconName: "Store",
    badgeText: "High ROI for Shops",
    startingPrice: "₹1,999",
    features: ["Product Showcase Catalog", "Direct 1-Click WhatsApp Ordering", "Store Location & Timings", "Local Google SEO Ready"]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Sleek, visually engaging portfolio websites designed for freelancers, photographers, designers, doctors, and consultants.",
    iconName: "Palette",
    badgeText: "Personal Brand",
    startingPrice: "₹999",
    features: ["Work Case Studies", "High-Resolution Gallery", "Client Reviews & Resume", "Direct Booking CTA"]
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Ultra-fast, high-converting single-page websites dedicated to advertising campaigns, specific products, or event registrations.",
    iconName: "Target",
    badgeText: "Fast Turnaround",
    startingPrice: "₹999",
    features: ["Distraction-Free Funnel", "High-Conversion Copy Layout", "Call-to-Action Buttons", "Lead Generation Form"]
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description: "Appetizing digital menus, photo showcases, and instant table reservation or delivery order connections for cafes and food outlets.",
    iconName: "Utensils",
    badgeText: "Food & Cafe",
    startingPrice: "₹1,999",
    features: ["Digital QR Menu Ready", "Online Reservation / Inquiries", "Location & Directions Map", "Photo Gallery of Dishes"]
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description: "Feature-packed online shopping websites with product carts, categories, coupon codes, and UPI / credit card payment options.",
    iconName: "ShoppingBag",
    badgeText: "Sell Online",
    startingPrice: "₹4,999",
    features: ["Cart & Checkout System", "Secure Online Payment / UPI", "Inventory & Order Management", "Mobile Friendly Checkout"]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Transform outdated, slow, or broken websites into ultra-modern, high-speed, mobile-optimized digital powerhouses.",
    iconName: "RefreshCw",
    badgeText: "Modernize",
    startingPrice: "₹1,499",
    features: ["Modern UI/UX Refresh", "Speed & Performance Boost", "Full Mobile Responsiveness", "SEO Structure Retained"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Hassle-free monthly maintenance, content updates, banner changes, backups, and security monitoring so you can focus on business.",
    iconName: "ShieldCheck",
    badgeText: "Peace of Mind",
    startingPrice: "₹499/mo",
    features: ["Regular Content Updates", "Daily/Weekly Backups", "Speed & Security Checks", "Priority WhatsApp Support"]
  }
];

// -----------------------------------------------------------------------------
// 4. WHY CHOOSE US (6 Points)
// -----------------------------------------------------------------------------
export const whyChooseUsList = [
  {
    title: "Affordable Pricing",
    highlight: "Starting at just ₹999",
    description: "No hidden charges, no crazy agency markups. Transparent, small-business friendly pricing that gives you maximum value for every rupee.",
    iconName: "DollarSign"
  },
  {
    title: "Mobile Friendly",
    highlight: "100% Responsive on all screens",
    description: "Over 80% of customers browse on smartphones. Every website we craft looks flawless on iPhone, Android phones, tablets, and desktop computers.",
    iconName: "Smartphone"
  },
  {
    title: "Modern Design",
    highlight: "Premium dark & tech aesthetic",
    description: "Say goodbye to 90s outdated templates. We design custom, modern layouts with sleek typography and subtle animations that impress your customers.",
    iconName: "Sparkles"
  },
  {
    title: "Fast Loading",
    highlight: "Under 1.5s load speeds",
    description: "Nobody likes slow websites. Optimized clean code, compressed images, and lightweight structures ensure near-instant page loading.",
    iconName: "Zap"
  },
  {
    title: "WhatsApp Support",
    highlight: "Direct 1-on-1 developer access",
    description: "No robotic ticketing systems. Talk directly with your developer on WhatsApp for quick edits, questions, and ongoing guidance.",
    iconName: "MessageCircle"
  },
  {
    title: "Custom Website",
    highlight: "Tailored to your specific shop",
    description: "No generic copy-paste templates. We understand your unique products, services, and branding to deliver a bespoke website that stands out.",
    iconName: "Sliders"
  }
];

// -----------------------------------------------------------------------------
// 5. HOW IT WORKS (4 Simple Steps)
// -----------------------------------------------------------------------------
export const howItWorksSteps = [
  {
    stepNumber: "01",
    title: "Tell us your requirements",
    subtitle: "Share your business name, photos, and what you want to achieve through WhatsApp or our simple form.",
    timeframe: "10 Minutes",
    deliverable: "Requirement checklist & plan confirmation"
  },
  {
    stepNumber: "02",
    title: "We design your website",
    subtitle: "We create a modern, high-speed, mobile-responsive layout crafted specifically for your target audience.",
    timeframe: "24 – 48 Hours",
    deliverable: "Interactive draft preview link"
  },
  {
    stepNumber: "03",
    title: "You review the website",
    subtitle: "You check the preview on your own phone and computer, and we make any text or color changes you want.",
    timeframe: "Same Day",
    deliverable: "Revisions completed until satisfaction"
  },
  {
    stepNumber: "04",
    title: "Your website goes live",
    subtitle: "We connect your custom domain name, set up WhatsApp chat buttons, and launch your website to the world!",
    timeframe: "Instant Launch",
    deliverable: "Live website link & admin guidance"
  }
];

// -----------------------------------------------------------------------------
// 6. PORTFOLIO ITEMS
// ⚠️ You can add, edit, or remove sample projects here!
// -----------------------------------------------------------------------------
export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-1",
    title: "Keshava Textiles & Saree Boutique",
    category: "Shops & Stores",
    type: "Retail Store Showcase",
    clientType: "Traditional Clothing Retailer",
    description: "A digital catalog website featuring silk sarees and designer ethnic wear with direct WhatsApp ordering and Google Maps store direction.",
    liveUrlPlaceholder: "https://demo-textiles.shopwebdev.com",
    technologies: ["React", "Tailwind CSS", "WhatsApp API", "Google Maps"],
    features: [
      "Categorized saree & fabric gallery",
      "1-Click 'Order on WhatsApp' with item name pre-filled",
      "Store opening hours & live Google Maps directions",
      "Customer video review carousel"
    ],
    previewTheme: "store",
    impactMetric: "+220% WhatsApp inquiries in 30 days"
  },
  {
    id: "project-2",
    title: "Aroma Cafe & Artisanal Bistro",
    category: "Restaurants",
    type: "Food & Beverage Website",
    clientType: "Gourmet Cafe & Roastery",
    description: "A dark-themed, modern restaurant website featuring interactive digital QR menus, online table booking, and customer photo gallery.",
    liveUrlPlaceholder: "https://demo-aroma-cafe.shopwebdev.com",
    technologies: ["React", "Fast CDN", "WhatsApp Reservations", "Mobile QR"],
    features: [
      "Interactive digital food & drink menu with prices",
      "Instant table reservation via WhatsApp form",
      "Chef specialities & daily dessert updates",
      "Instagram feed integration"
    ],
    previewTheme: "cafe",
    impactMetric: "45+ table reservations per week online"
  },
  {
    id: "project-3",
    title: "Apex Logistics & Supply Chain",
    category: "Business",
    type: "Corporate Service Website",
    clientType: "B2B Freight & Transport Agency",
    description: "A high-credibility corporate portal with freight quote calculator, fleet showcase, and instant lead capture form.",
    liveUrlPlaceholder: "https://demo-apex-logistics.shopwebdev.com",
    technologies: ["Next-Gen UI", "Interactive Quote Calculator", "SEO Schema"],
    features: [
      "Instant freight pricing estimation widget",
      "Fleet & warehouse network showcase",
      "Client testimonial section & certification display",
      "Email & WhatsApp notification on inquiries"
    ],
    previewTheme: "corporate",
    impactMetric: "3.4x more corporate quote submissions"
  },
  {
    id: "project-4",
    title: "Dr. Sharma Dental & Implant Center",
    category: "Healthcare",
    type: "Clinic & Appointment Website",
    clientType: "Healthcare Professional",
    description: "A trustworthy, clean healthcare portal where patients can view treatments, check doctor timings, and book appointments in 30 seconds.",
    liveUrlPlaceholder: "https://demo-sharma-dental.shopwebdev.com",
    technologies: ["Mobile-First UI", "Fast Booking", "SSL Certified"],
    features: [
      "Doctor qualification & clinic photo tour",
      "Treatment cost transparency & FAQ",
      "Instant appointment booking via WhatsApp",
      "Before/After patient treatment showcases"
    ],
    previewTheme: "tech",
    impactMetric: "85% patients now book visits online"
  },
  {
    id: "project-5",
    title: "IronPeak Fitness & Gym Club",
    category: "Fitness & Wellness",
    type: "Landing Page & Membership Site",
    clientType: "Fitness Center",
    description: "A dynamic dark tech-styled fitness club landing page with membership plan comparisons, trainer bios, and free trial pass booking.",
    liveUrlPlaceholder: "https://demo-ironpeak.shopwebdev.com",
    technologies: ["Modern Dark Theme", "Smooth Transitions", "Lead Capture"],
    features: [
      "Membership tier comparison (Monthly, Annual)",
      "Free 1-Day Trial workout booking form",
      "Trainer certifications & fitness schedule",
      "Gym equipment video tour"
    ],
    previewTheme: "tech",
    impactMetric: "140 new gym trials generated in Month 1"
  },
  {
    id: "project-6",
    title: "Craftwood Interior & Modular Furniture",
    category: "Shops & Stores",
    type: "Interior Design & Shop Showcase",
    clientType: "Modular Kitchen & Home Decor Studio",
    description: "A visual lookbook website showcasing completed interior design projects, 3D modular kitchen models, and consultation scheduling.",
    liveUrlPlaceholder: "https://demo-craftwood.shopwebdev.com",
    technologies: ["High-Res Photo Gallery", "Filterable Showcase", "WhatsApp Lead Flow"],
    features: [
      "Room-by-room design showcase (Kitchen, Living, Bedroom)",
      "Direct consultation booking form",
      "Client testimonial videos & reviews",
      "Downloadable catalog PDF"
    ],
    previewTheme: "store",
    impactMetric: "4x increase in high-ticket interior inquiries"
  }
];

// -----------------------------------------------------------------------------
// 7. FREQUENTLY ASKED QUESTIONS (FAQ)
// Required questions + helpful small business answers
// -----------------------------------------------------------------------------
export const faqList: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Our website packages start at just ₹999 for a clean 1-page website (ideal for local shops and personal brands). We have a ₹1,999 Business package for multi-page websites and a ₹4,999 Pro package for advanced e-commerce or custom solutions. There are no hidden fees or surprise charges."
  },
  {
    question: "How long does it take?",
    answer: "For our Starter package (1-page), we deliver your working website in 24 to 48 hours. For standard 5-page Business websites, it usually takes 3 to 5 working days once you provide your business details, photos, and text."
  },
  {
    question: "Can I request custom features?",
    answer: "Yes, absolutely! Whether you want a customized WhatsApp ordering system, Google Maps store locator, custom lead inquiry forms, product catalogs, photo sliders, or UPI QR code payments, we can build custom features tailored specifically to your business."
  },
  {
    question: "Will the website work on mobile?",
    answer: "Yes, 100%! All our websites are built mobile-first. They automatically adapt and look stunning on smartphones, iPhones, iPads, laptops, and desktop screens with fast tap response and smooth scrolling."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us directly via WhatsApp (+91 82923 35799) for the fastest response (typically under 30 minutes). You can also call us directly at +91 82923 35799 or send an email to princejii2607@gmail.com."
  },
  {
    question: "Do I need to buy domain and hosting myself?",
    answer: "You don't have to worry about complicated technical steps! We guide you step-by-step to get an affordable domain (like .com or .in) and hosting. We can handle all the DNS and server setup for you at zero extra stress."
  },
  {
    question: "Can I make changes to my website later?",
    answer: "Yes! All our websites come with free post-launch support (30 days for Business, 60 days for Pro). If you ever need to change your phone number, address, product photos, or prices, just message us on WhatsApp and we will update it promptly."
  }
];

// -----------------------------------------------------------------------------
// 8. TESTIMONIALS (Social Proof)
// -----------------------------------------------------------------------------
export const testimonialsList = [
  {
    name: "Rajesh Sharma",
    role: "Proprietor",
    business: "Sharma Electronics & Mobile",
    location: "Jaipur",
    quote: "Earlier customers only asked for prices on phone calls. Shop Web Developer made a modern catalog website for our shop in 48 hours. Now customers browse all products online and message directly on WhatsApp to order. Inquiries doubled within our first month!",
    rating: 5,
    packageChosen: "Business Package"
  },
  {
    name: "Pooja Verma",
    role: "Founder",
    business: "Pooja Boutique & Couture",
    location: "Delhi NCR",
    quote: "I was quoted ₹25,000 by local agencies which was too much for a small boutique. Shop Web Developer built a gorgeous mobile website for just ₹1,999. The WhatsApp button makes it effortless for clients to book styling appointments.",
    rating: 5,
    packageChosen: "Business Package"
  },
  {
    name: "Vikram Mehta",
    role: "Co-Owner",
    business: "Urban Crust Pizzeria & Cafe",
    location: "Bengaluru",
    quote: "Super fast turnaround and clean dark design! Our customers scan the QR code to check the menu on their phone, and the online table reservation has saved us hours of phone tag every weekend.",
    rating: 5,
    packageChosen: "Pro Package"
  }
];
