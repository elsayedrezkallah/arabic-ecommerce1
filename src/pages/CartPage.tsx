import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { sampleProducts } from '../data/sampleData';
import { CartItem } from '../types';

const CartPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock cart data - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: sampleProducts[0],
      quantity: 2
    },
    {
      product: sampleProducts[4],
      quantity: 1
    },
    {
      product: sampleProducts[1],
      quantity: 3
    }
  ]);

  const updateQuantity = (productId: string, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold-600 to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-luxury-dark-900" />
            </div>
            <h1 className="text-3xl font-bold luxury-text font-calligraphy mb-4">
              سلة التسوق فارغة
            </h1>
            <p className="text-lg text-luxury-gold-300 font-arabic mb-8">
              لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
            </p>
            <Link to="/" className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-arabic">ابدأ التسوق</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`flex items-center justify-between mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-2 bg-luxury-gold-600/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ShoppingBag className="w-5 h-5 text-arabic-gold" />
              <span className="text-luxury-gold-300 font-arabic text-sm">سلة التسوق</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
              سلة التسوق
            </h1>
            <p className="text-luxury-gold-400 font-arabic mt-2">
              {cartItems.length} منتج في السلة
            </p>
          </div>
          <Link
            to="/"
            className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-arabic">متابعة التسوق</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="luxury-card p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-luxury-dark-900 font-bold text-lg font-calligraphy">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-luxury-gold-300 font-arabic mb-2">
                      {item.product.categoryName}
                    </p>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <span className="text-lg font-bold luxury-text">
                        {item.product.price} ر.س
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-luxury-gold-600 line-through">
                          {item.product.originalPrice} ر.س
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="w-8 h-8 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded hover:bg-luxury-gold-600 hover:text-luxury-dark-900 transition-colors"
                    >
                      <Minus className="w-4 h-4 mx-auto" />
                    </button>
                    <span className="w-8 text-center text-luxury-gold-300 font-arabic">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="w-8 h-8 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded hover:bg-luxury-gold-600 hover:text-luxury-dark-900 transition-colors"
                    >
                      <Plus className="w-4 h-4 mx-auto" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <div className="text-lg font-bold luxury-text">
                      {(item.product.price * item.quantity)} ر.س
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="luxury-card p-6 sticky top-8">
              <h2 className="text-xl font-bold luxury-text font-calligraphy mb-6">
                ملخص الطلب
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold-300 font-arabic">المجموع الفرعي:</span>
                  <span className="luxury-text font-bold">{subtotal} ر.س</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold-300 font-arabic">الشحن:</span>
                  <span className="luxury-text font-bold">
                    {shipping === 0 ? 'مجاني' : `${shipping} ر.س`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold-300 font-arabic">ضريبة القيمة المضافة (15%):</span>
                  <span className="luxury-text font-bold">{tax.toFixed(2)} ر.س</span>
                </div>
                
                <div className="border-t border-luxury-gold-600/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold luxury-text font-calligraphy">المجموع الكلي:</span>
                    <span className="text-2xl font-bold luxury-text">{total.toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <input
                    type="text"
                    placeholder="كود الخصم"
                    className="flex-1 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded-lg px-3 py-2 font-arabic"
                  />
                  <button className="luxury-button px-4 py-2">
                    <span className="font-arabic">تطبيق</span>
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              {subtotal < 200 && (
                <div className="bg-luxury-gold-600/20 border border-luxury-gold-600 rounded-lg p-4 mb-6">
                  <p className="text-luxury-gold-300 font-arabic text-sm">
                    أضف {200 - subtotal} ر.س أكثر للحصول على شحن مجاني
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button className="w-full luxury-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse mb-4">
                <CreditCard className="w-5 h-5" />
                <span className="font-arabic">إتمام الطلب</span>
              </button>

              {/* Security Info */}
              <div className="text-center">
                <p className="text-xs text-luxury-gold-400 font-arabic">
                  🔒 معاملات آمنة ومحمية
                </p>
                <p className="text-xs text-luxury-gold-400">
                  Secure & Protected Transactions
                </p>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>متابعة التسوق</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold luxury-text font-calligraphy mb-8 text-center">
            منتجات مقترحة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="luxury-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold luxury-text">
                    {product.price} ر.س
                  </span>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="w-full luxury-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span className="font-arabic">عرض التفاصيل</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
