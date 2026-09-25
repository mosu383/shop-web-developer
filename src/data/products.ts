export interface Product {
  id: string;
  name: string;
  price: number; // In Indian Rupees (₹)
  category: 'Men' | 'Women' | 'Accessories' | 'Streetwear';
  imageUrl: string;
  tag?: string;
  description: string;
  sizes: string[];
  inStock: boolean;
  createdAt: number;
}

// Format price in Indian Rupee format (e.g., ₹1,499)
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const FALLBACK_PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'farhan-prod-1',
    name: 'Premium White Shirt',
    price: 1200,
    category: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500',
    tag: 'Best Seller',
    description: 'Crisp, premium tailored white cotton shirt designed for everyday elegance and smart casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
  },
  {
    id: 'farhan-prod-2',
    name: 'Classic Blue Jeans',
    price: 1500,
    category: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    tag: 'Classic Must-Have',
    description: 'Timeless indigo blue denim jeans featuring a tailored tapered fit, brass rivets, and durable comfort stretch.',
    sizes: ['30', '32', '34', '36'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
  },
  {
    id: 'farhan-prod-3',
    name: 'Oversized Heavyweight Cotton T-Shirt',
    price: 699,
    category: 'Streetwear',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    description: '100% bio-washed 240 GSM combed cotton. Relaxed drop-shoulder fit engineered for hot Indian summers.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: 'farhan-prod-4',
    name: 'Streetwear Loopback French Terry Hoodie',
    price: 1899,
    category: 'Streetwear',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Winter Drop',
    description: 'Double-layered hood, ribbed side cuffs, and pure cotton terry fleece for effortless street style.',
    sizes: ['M', 'L', 'XL'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
  },
  {
    id: 'farhan-prod-4',
    name: 'Classic Raw Indigo Trucker Denim Jacket',
    price: 2499,
    category: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature Piece',
    description: 'Rugged aesthetic with reinforced stitching, dual front flap pockets, and buttoned waist adjusters.',
    sizes: ['M', 'L', 'XL'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: 'farhan-prod-5',
    name: 'Tailored Structured Charcoal Blazer',
    price: 2999,
    category: 'Women',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tag: 'Festive & Formal',
    description: 'Sharp notched lapel, lightweight summer wool blend, and streamlined silhouette for parties and business.',
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: 'farhan-prod-6',
    name: 'Relaxed Fit Ecru Pleated Chino Pants',
    price: 1299,
    category: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
    description: 'Single front pleat, breathable premium twill fabric, and a comfortable relaxed taper.',
    sizes: ['30', '32', '34'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
  },
  {
    id: 'farhan-prod-7',
    name: 'Striped Oxford Cotton Casual Shirt',
    price: 999,
    category: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    tag: 'Everyday Classic',
    description: 'Breathable pure woven cotton, tailored spread collar, and curved hem that looks great tucked or untucked.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8,
  },
  {
    id: 'farhan-prod-8',
    name: 'Artisan Full-Grain Leather Sling Bag',
    price: 1599,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    tag: 'Handcrafted',
    description: 'Indian full-grain leather, matte antique metal zips, and an adjustable nylon cross strap.',
    sizes: ['One Size'],
    inStock: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
  },
];

// Presets for Admin to easily add realistic clothing items
export const SAMPLE_IMAGE_PRESETS = [
  {
    name: 'Oversized T-Shirt',
    price: 799,
    url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Denim Jeans',
    price: 1499,
    url: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Denim Jacket',
    price: 2499,
    url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Streetwear Hoodie',
    price: 1999,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Formal Blazer',
    price: 3499,
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cotton Casual Shirt',
    price: 1199,
    url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Leather Crossbody Bag',
    price: 1699,
    url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chino Trousers',
    price: 1399,
    url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
  },
];
