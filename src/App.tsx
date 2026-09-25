import React, { useState } from 'react';
import { ProductProvider, useProducts } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LatestCollection } from './components/LatestCollection';
import { CustomerLogin } from './components/CustomerLogin';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { AdminPinModal } from './components/AdminPinModal';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CartToast } from './components/CartToast';
import { QuickViewModal } from './components/QuickViewModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './data/products';

function MainApp() {
  const { currentView, isAdminAuthenticated } = useProducts();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-neutral-950 selection:text-white font-sans antialiased">
      {/* 1. Header with Home, Customer Login, Admin Login */}
      <Navbar />

      {/* Main Content Area based on current view */}
      <main className="flex-grow">
        {/* Customer Login Section */}
        {currentView === 'customer-login' && (
          <CustomerLogin />
        )}

        {/* Admin Login Section */}
        {currentView === 'admin-login' && (
          <AdminLogin />
        )}

        {/* Admin Dashboard Section */}
        {currentView === 'admin-dashboard' && (
          isAdminAuthenticated ? <AdminPanel /> : <AdminLogin />
        )}

        {/* Customer Storefront (Main Page) */}
        {currentView === 'storefront' && (
          <div id="storefront">
            {/* Hero Banner */}
            <Hero />

            {/* Latest Collection */}
            <LatestCollection onQuickView={(prod) => setQuickViewProduct(prod)} />

            {/* About Section */}
            <About />

            {/* Contact & WhatsApp Support */}
            <Contact />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <Footer />

      {/* WhatsApp Floating Chat Button */}
      <FloatingWhatsApp />

      {/* Owner PIN Security Modal (for quick popover unlock if invoked) */}
      <AdminPinModal />

      {/* Shopping Bag Drawer with WhatsApp Checkout */}
      <CartDrawer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Notification Toast */}
      <CartToast />
    </div>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </ProductProvider>
  );
}
