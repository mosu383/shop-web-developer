import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, INITIAL_PRODUCTS, FALLBACK_PRODUCT_IMAGE } from '../data/products';

export const FARHAN_PRODUCTS_KEY = 'farhanProducts';
export const STORAGE_KEY = 'farhan_clothing_products_in_v1';
export const ADMIN_AUTH_KEY = 'farhan_clothing_admin_auth_v1';
export const CUSTOMER_AUTH_KEY = 'farhan_customer_user_v1';
export const CUSTOMER_ORDERS_KEY = 'farhan_customer_orders_v1';
export const ADMIN_PIN = '252525'; // Owner Passcode (252525)

export type ActiveSection = 'storefront' | 'customer-login' | 'admin-login' | 'admin-dashboard';

export interface CustomerUser {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  savedDate: number;
}

export interface CustomerOrder {
  id: string;
  date: string;
  items: Array<{ name: string; price: number; quantity: number; image?: string }>;
  total: number;
  status: 'Confirmed' | 'Dispatched' | 'Delivered';
  trackingNumber: string;
}

interface ProductContextType {
  products: Product[];
  currentView: ActiveSection;
  showSection: (section: ActiveSection) => void;
  // Customer Auth
  customerUser: CustomerUser | null;
  customerOrders: CustomerOrder[];
  loginCustomer: (email: string, name?: string, phone?: string, address?: string) => void;
  logoutCustomer: () => void;
  addCustomerOrder: (order: Omit<CustomerOrder, 'id' | 'date' | 'status' | 'trackingNumber'>) => CustomerOrder;
  // Admin Auth
  isAdminAuthenticated: boolean;
  loginAdmin: (pin: string) => boolean;
  checkAdminPin: (pin: string) => boolean;
  logoutAdmin: () => void;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  isAdminModalOpen: boolean;
  switchToCustomerView: () => void;
  // Product Operations
  addProduct: (product: {
    name: string;
    price: number;
    imageUrl?: string;
    category?: 'Men' | 'Women' | 'Accessories' | 'Streetwear';
    description?: string;
    tag?: string;
  }) => Product;
  deleteProduct: (id: string | number) => void;
  resetToDefault: () => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ActiveSection>('storefront');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Customer session
  const [customerUser, setCustomerUser] = useState<CustomerUser | null>(() => {
    try {
      const stored = localStorage.getItem(CUSTOMER_AUTH_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return null;
  });

  // Customer orders
  const [customerOrders, setCustomerOrders] = useState<CustomerOrder[]>(() => {
    try {
      const stored = localStorage.getItem(CUSTOMER_ORDERS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'FC-9842',
        date: 'Recent Order',
        items: [
          { name: 'Premium White Shirt', price: 1200, quantity: 1, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500' }
        ],
        total: 1200,
        status: 'Delivered',
        trackingNumber: 'DEL-92847192',
      }
    ];
  });

  // Check if admin is currently authenticated in session
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Load products from LocalStorage (checking both farhanProducts and farhan_clothing_products_in_v1)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const storedFP = localStorage.getItem(FARHAN_PRODUCTS_KEY);
      if (storedFP) {
        const parsed = JSON.parse(storedFP);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Normalize structure if coming from raw snippet format: { id, name, price, img }
          return parsed.map((item: any, idx: number) => ({
            id: String(item.id || `fp-${idx}`),
            name: item.name || 'Farhan Apparel',
            price: Number(item.price) || 999,
            imageUrl: item.img || item.imageUrl || FALLBACK_PRODUCT_IMAGE,
            category: item.category || 'Men',
            description: item.description || `Signature handcrafted piece from Farhan Clothing.`,
            tag: item.tag || 'Popular',
            sizes: item.sizes || ['S', 'M', 'L', 'XL'],
            inStock: item.inStock !== false,
            createdAt: item.createdAt || Date.now(),
          }));
        }
      }

      const storedMain = localStorage.getItem(STORAGE_KEY);
      if (storedMain) {
        const parsed = JSON.parse(storedMain);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load products from localStorage:', e);
    }
    return INITIAL_PRODUCTS;
  });

  // Sync to both localStorage keys whenever products change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      // Also sync standard farhanProducts array
      const simplified = products.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        img: p.imageUrl,
        category: p.category,
      }));
      localStorage.setItem(FARHAN_PRODUCTS_KEY, JSON.stringify(simplified));
    } catch (e) {
      console.error('Failed to save products to localStorage:', e);
    }
  }, [products]);

  // Sync customer orders
  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_ORDERS_KEY, JSON.stringify(customerOrders));
    } catch (e) {
      console.error(e);
    }
  }, [customerOrders]);

  const showSection = (section: ActiveSection) => {
    if (section === 'admin-dashboard' && !isAdminAuthenticated) {
      setCurrentView('admin-login');
      return;
    }
    setCurrentView(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loginCustomer = (email: string, name?: string, phone?: string, address?: string) => {
    const user: CustomerUser = {
      email: email.trim(),
      name: name?.trim() || email.split('@')[0],
      phone: phone?.trim() || '+91 8292335799',
      address: address?.trim() || '',
      savedDate: Date.now(),
    };
    setCustomerUser(user);
    try {
      localStorage.setItem(CUSTOMER_AUTH_KEY, JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  };

  const logoutCustomer = () => {
    setCustomerUser(null);
    try {
      localStorage.removeItem(CUSTOMER_AUTH_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const addCustomerOrder = (orderData: Omit<CustomerOrder, 'id' | 'date' | 'status' | 'trackingNumber'>): CustomerOrder => {
    const newOrder: CustomerOrder = {
      ...orderData,
      id: `FC-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Confirmed',
      trackingNumber: `EXP-${Math.floor(10000000 + Math.random() * 90000000)}`,
    };
    setCustomerOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const checkAdminPin = (pin: string): boolean => {
    if (pin.trim() === ADMIN_PIN) {
      setIsAdminAuthenticated(true);
      try {
        sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      } catch (e) {
        console.error(e);
      }
      setIsAdminModalOpen(false);
      setCurrentView('admin-dashboard');
      return true;
    }
    return false;
  };

  const loginAdmin = (pin: string): boolean => {
    return checkAdminPin(pin);
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
    } catch (e) {
      console.error(e);
    }
    setCurrentView('storefront');
  };

  const openAdminModal = () => {
    if (isAdminAuthenticated) {
      setCurrentView('admin-dashboard');
    } else {
      setCurrentView('admin-login');
    }
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const switchToCustomerView = () => {
    setCurrentView('storefront');
  };

  const addProduct = (item: {
    name: string;
    price: number;
    imageUrl?: string;
    category?: 'Men' | 'Women' | 'Accessories' | 'Streetwear';
    description?: string;
    tag?: string;
  }): Product => {
    const rawImg = item.imageUrl?.trim();
    const finalImg = rawImg || FALLBACK_PRODUCT_IMAGE;

    const newProduct: Product = {
      id: `farhan-in-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: item.name.trim(),
      price: Math.max(1, Math.round(Number(item.price))),
      imageUrl: finalImg,
      category: item.category || 'Men',
      description: item.description?.trim() || `Modern signature piece from Farhan Clothing. High quality fabric with tailored fit.`,
      tag: item.tag || 'New Drop',
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      createdAt: Date.now(),
    };

    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const deleteProduct = (id: string | number) => {
    const idStr = String(id);
    setProducts((prev) => prev.filter((p) => String(p.id) !== idStr));
  };

  const resetToDefault = () => {
    setProducts(INITIAL_PRODUCTS);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      localStorage.removeItem(FARHAN_PRODUCTS_KEY);
    } catch (e) {
      console.error('Failed to reset localStorage products:', e);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        currentView,
        showSection,
        customerUser,
        customerOrders,
        loginCustomer,
        logoutCustomer,
        addCustomerOrder,
        isAdminAuthenticated,
        loginAdmin,
        checkAdminPin,
        logoutAdmin,
        openAdminModal,
        closeAdminModal,
        isAdminModalOpen,
        switchToCustomerView,
        addProduct,
        deleteProduct,
        resetToDefault,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
