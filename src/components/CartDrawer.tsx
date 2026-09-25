import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { formatINR } from '../data/products';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check, MessageCircle } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();
  const { addCustomerOrder, showSection } = useProducts();

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const orderItems = cartItems.map((item) => ({
      name: `${item.product.name} (${item.selectedSize})`,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.imageUrl,
    }));
    const newOrd = addCustomerOrder({
      items: orderItems,
      total: grandTotal,
    });
    setCreatedOrderId(newOrd.id);
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
    }, 400);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setCheckoutComplete(false);
  };

  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCharge = isFreeShipping || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal + shippingCharge;

  const orderSummaryWhatsApp = cartItems
    .map((item) => `- ${item.product.name} (Size: ${item.selectedSize}) x ${item.quantity} = ${formatINR(item.product.price * item.quantity)}`)
    .join('%0A');

  const whatsappCheckoutUrl = `https://wa.me/918292335799?text=${encodeURIComponent(
    `Hello Farhan Clothing! I would like to place an order:%0A%0A${decodeURIComponent(orderSummaryWhatsApp)}%0A%0ATotal Amount: ${formatINR(grandTotal)}%0A%0APlease share delivery timeline and payment/COD options.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-neutral-900 stroke-[1.8]" />
              <h2 className="text-base font-bold uppercase tracking-wider text-neutral-900">
                Farhan Bag ({totalCount})
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* India Free Shipping Progress */}
          <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200 text-xs">
            {isFreeShipping ? (
              <p className="text-emerald-700 font-semibold flex items-center space-x-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>You unlocked Free Express Shipping across India!</span>
              </p>
            ) : (
              <p className="text-neutral-600">
                Add <span className="font-bold text-neutral-950">{formatINR(amountToFreeShipping)}</span> more to get <strong>Free Delivery</strong>.
              </p>
            )}
            <div className="w-full bg-neutral-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-neutral-950 h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutComplete ? (
              <div className="text-center py-14 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Order Placed Successfully!</h3>
                {createdOrderId && (
                  <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 py-1 px-3 rounded-full inline-block">
                    Order #{createdOrderId}
                  </p>
                )}
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Thank you for shopping with Farhan Clothing! Your order details have been saved to your Customer Portal.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      handleClose();
                      showSection('customer-login');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800"
                  >
                    View in Customer Portal
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Your bag is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Explore our Latest Collection and add your favorite apparel.
                </p>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="divide-y divide-neutral-100 space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="pt-4 first:pt-0 flex gap-4">
                    {/* Item Image */}
                    <div className="w-20 h-24 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-sm text-neutral-950 line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-neutral-400 hover:text-rose-600 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          Size: <span className="font-bold text-neutral-900">{item.selectedSize}</span>
                        </p>
                        <p className="text-xs font-black text-neutral-950 mt-1">
                          {formatINR(item.product.price * item.quantity)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center border border-neutral-200 rounded-lg bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1, item.selectedSize)}
                            className="p-1 hover:bg-neutral-100 text-neutral-600 rounded-l-lg transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1, item.selectedSize)}
                            className="p-1 hover:bg-neutral-100 text-neutral-600 rounded-r-lg transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-neutral-400">
                          @ {formatINR(item.product.price)} each
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-neutral-900">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping (India)</span>
                  <span className="font-semibold text-neutral-900">
                    {shippingCharge === 0 ? 'FREE' : formatINR(shippingCharge)}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-black text-neutral-950">
                  <span>Total Amount</span>
                  <span>{formatINR(grandTotal)}</span>
                </div>
              </div>

              {/* Order via WhatsApp (Favorite for Indian Customers) */}
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Complete Order on WhatsApp</span>
              </a>

              {/* Standard Checkout Simulation */}
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow transition-all"
              >
                <span>Direct Online Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                Empty Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
