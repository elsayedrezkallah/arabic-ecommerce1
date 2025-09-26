export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'incense' | 'perfume';
  categoryName: string;
  categoryNameEn: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
  ingredients?: string[];
  size?: string;
  weight?: string;
  origin?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  products: Product[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: string;
  paymentMethod: string;
}
