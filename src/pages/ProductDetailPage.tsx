import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Plus, Minus, Check, Sparkles, Award } from 'lucide-react';
import { sampleProducts } from '../data/sampleData';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const product = sampleProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold luxury-text font-calligraphy mb-4">
            المنتج غير موجود
          </h1>
          <Link to="/" className="luxury-button">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 rtl:space-x-reverse mb-8 text-luxury-gold-300">
          <Link to="/" className="hover:text-arabic-gold transition-colors font-arabic">
            الرئيسية
          </Link>
          <span>/</span>
          <Link 
            to={`/category/${product.category}`} 
            className="hover:text-arabic-gold transition-colors font-arabic"
          >
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="luxury-text font-arabic">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-luxury-dark-900 font-bold text-4xl font-calligraphy">
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-arabic-gold'
                      : 'border-transparent hover:border-luxury-gold-600'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-luxury-dark-900 font-bold text-sm font-calligraphy">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Badge */}
              {product.originalPrice && (
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-4 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-red-500/30">
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 font-arabic text-sm font-semibold">
                    خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold luxury-text font-calligraphy mb-2 bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-xl text-luxury-gold-300 font-arabic mb-4">
                {product.nameEn}
              </p>
              
              {/* Quality Badge */}
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-luxury-gold-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-luxury-gold-600/30">
                <Award className="w-4 h-4 text-arabic-gold" />
                <span className="text-luxury-gold-300 font-arabic text-sm">منتج فاخر</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-arabic-gold fill-current'
                        : 'text-luxury-gold-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-luxury-gold-400 font-arabic">
                {product.rating} ({product.reviews} تقييم)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-3xl font-bold luxury-text">
                {product.price} ر.س
              </span>
              {product.originalPrice && (
                <span className="text-xl text-luxury-gold-600 line-through">
                  {product.originalPrice} ر.س
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-arabic-gold text-luxury-dark-900 px-2 py-1 rounded text-sm font-bold">
                  خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-3">
                الوصف
              </h3>
              <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-3">
                المميزات
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold-300 font-arabic">
                    <Check className="w-4 h-4 text-arabic-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <div>
                <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-3">
                  المكونات
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-luxury-gold-600/20 text-luxury-gold-300 px-3 py-1 rounded-full text-sm font-arabic"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4">
              {product.size && (
                <div className="luxury-card p-4">
                  <h4 className="text-sm font-semibold luxury-text font-calligraphy mb-1">الحجم</h4>
                  <p className="text-luxury-gold-300 font-arabic">{product.size}</p>
                </div>
              )}
              {product.weight && (
                <div className="luxury-card p-4">
                  <h4 className="text-sm font-semibold luxury-text font-calligraphy mb-1">الوزن</h4>
                  <p className="text-luxury-gold-300 font-arabic">{product.weight}</p>
                </div>
              )}
              {product.origin && (
                <div className="luxury-card p-4">
                  <h4 className="text-sm font-semibold luxury-text font-calligraphy mb-1">المنشأ</h4>
                  <p className="text-luxury-gold-300 font-arabic">{product.origin}</p>
                </div>
              )}
              <div className="luxury-card p-4">
                <h4 className="text-sm font-semibold luxury-text font-calligraphy mb-1">التوفر</h4>
                <p className={`font-arabic ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                  {product.inStock ? 'متوفر' : 'غير متوفر'}
                </p>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="text-luxury-gold-300 font-arabic">الكمية:</span>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded-lg hover:bg-luxury-gold-600 hover:text-luxury-dark-900 transition-colors"
                  >
                    <Minus className="w-4 h-4 mx-auto" />
                  </button>
                  <span className="w-12 text-center text-luxury-gold-300 font-arabic">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded-lg hover:bg-luxury-gold-600 hover:text-luxury-dark-900 transition-colors"
                  >
                    <Plus className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
                     <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                    isAddedToCart ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  disabled={!product.inStock}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="font-arabic">تم الإضافة للسلة</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span className="font-arabic">أضف للسلة</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`luxury-button p-4 ${
                    isFavorited ? 'bg-red-600 hover:bg-red-700' : ''
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
                
                <button className="luxury-button p-4">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-6">
              <Link
                to={`/category/${product.category}`}
                className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-arabic">العودة للفئة</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold luxury-text font-calligraphy mb-8 text-center">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="luxury-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">
                        {relatedProduct.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold luxury-text">
                      {relatedProduct.price} ر.س
                    </span>
                  </div>

                  <Link
                    to={`/product/${relatedProduct.id}`}
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

export default ProductDetailPage;
