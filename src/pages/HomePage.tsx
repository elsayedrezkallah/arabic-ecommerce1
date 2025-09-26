import React, { useState, useEffect, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Sparkles, Award, Shield } from 'lucide-react';
import { categories, sampleProducts } from '../data/sampleData';

const HomePage: React.FC = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Memoize expensive calculations
  const featuredProducts = useMemo(() => sampleProducts.slice(0, 4), []);
  const bestSellers = useMemo(() => sampleProducts.filter(product => product.rating >= 4.7).slice(0, 3), []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-gradient-radial from-arabic-gold/5 to-transparent rounded-full animate-pulse floating-element"></div>
              <div className="absolute w-64 h-64 bg-gradient-radial from-luxury-gold-400/3 to-transparent rounded-full animate-pulse delay-1000 floating-element"></div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-6 glass-morphism rounded-full px-6 py-3 animate-bounceIn">
                <Sparkles className="w-6 h-6 text-arabic-gold animate-pulse" />
                <span className="text-luxury-gold-300 font-arabic text-sm font-semibold">منتج فاخر</span>
                <Award className="w-6 h-6 text-arabic-gold animate-rotateIn" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold modern-heading font-calligraphy mb-6 animate-fadeInScale floating-element">
                عطور الشرق الفاخرة
              </h1>
              
              <p className="text-xl md:text-2xl modern-subheading font-arabic mb-8 animate-slideInFromRight floating-element">
                Eastern Luxury Fragrances
              </p>
              
              <p className="text-lg text-luxury-gold-400 font-arabic max-w-3xl mx-auto leading-relaxed animate-slideInFromLeft arabic-body mb-8">
                اكتشف عالم العطور والبخور الفاخرة من أجود المكونات الطبيعية. منتجات أصلية 100% من أفضل العلامات التجارية العالمية.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-luxury-gold-400 animate-fadeInScale">
                <div className="flex items-center space-x-2 rtl:space-x-reverse glass-morphism rounded-full px-4 py-2 hover-lift">
                  <Shield className="w-5 h-5 text-arabic-gold" />
                  <span className="font-arabic text-sm font-medium">منتجات أصلية 100%</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse glass-morphism rounded-full px-4 py-2 hover-lift">
                  <Award className="w-5 h-5 text-arabic-gold" />
                  <span className="font-arabic text-sm font-medium">جودة مضمونة</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse glass-morphism rounded-full px-4 py-2 hover-lift">
                  <Sparkles className="w-5 h-5 text-arabic-gold" />
                  <span className="font-arabic text-sm font-medium">شحن سريع</span>
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                to="/category/incense"
                className="modern-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse group animate-bounceIn"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="font-arabic font-semibold">تصفح البخور</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/category/perfume"
                className="modern-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse group animate-bounceIn"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="font-arabic font-semibold">تصفح العطور</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-6 glass-morphism rounded-full px-6 py-3 animate-bounceIn">
              <Sparkles className="w-6 h-6 text-arabic-gold animate-pulse" />
              <span className="text-luxury-gold-300 font-arabic text-sm font-semibold">فئات المنتجات</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold modern-heading font-calligraphy mb-6 animate-fadeInScale">
              فئات المنتجات
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic max-w-2xl mx-auto animate-slideInUp">
              اختر من مجموعتنا المتنوعة من العطور والبخور الفاخرة المصنوعة من أجود المكونات الطبيعية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`group modern-card p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden ${index === 0 ? 'animate-slideInFromLeft' : 'animate-slideInFromRight'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-arabic-gold to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-luxury-gold-400 to-transparent rounded-full blur-xl"></div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulseGlow group-hover:scale-110 transition-transform duration-300 shadow-lg animate-rotateIn">
                    <span className="text-luxury-dark-900 font-bold text-3xl font-calligraphy">
                      {category.id === 'incense' ? 'ب' : 'ع'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold modern-heading font-calligraphy mb-3 group-hover:text-luxury-gold-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-luxury-gold-300 font-arabic mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-luxury-gold-400 group-hover:text-arabic-gold transition-colors">
                    <span className="font-arabic font-medium">عرض المنتجات</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-arabic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold modern-heading font-calligraphy mb-6 animate-fadeInScale">
              منتجات مميزة
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic animate-slideInUp">
              أفضل المنتجات المختارة بعناية من مجموعتنا الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="enhanced-product-card p-6 group relative overflow-hidden animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge for Discount */}
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 z-10 modern-badge bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounceIn">
                    خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
                
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center group-hover:animate-pulseGlow transition-all duration-300 shadow-lg animate-rotateIn">
                    <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="modern-button p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold modern-heading font-calligraphy mb-4 line-clamp-2 group-hover:text-luxury-gold-300 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-colors ${
                          i < Math.floor(product.rating)
                            ? 'text-arabic-gold fill-current'
                            : 'text-luxury-gold-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-luxury-gold-400 mr-2 rtl:mr-0 rtl:ml-2">
                    ({product.reviews})
                  </span>
                       </div>

                       <div className="flex items-center justify-between mb-6">
                         <div className="flex items-center space-x-2 rtl:space-x-reverse">
                           <span className="text-xl font-bold luxury-text">
                             {product.price} ر.س
                           </span>
                    {product.originalPrice && (
                      <span className="text-sm text-luxury-gold-600 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="w-full modern-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="font-arabic font-semibold">عرض التفاصيل</span>
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold modern-heading font-calligraphy mb-6 animate-fadeInScale">
              الأكثر مبيعاً
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic animate-slideInUp">
              المنتجات الأكثر طلباً من عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="enhanced-product-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group relative animate-fadeInScale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 modern-badge bg-gradient-to-r from-arabic-gold to-luxury-gold-500 text-luxury-dark-900 px-4 py-2 rounded-full text-sm font-bold animate-bounceIn">
                    الأكثر مبيعاً
                  </div>
                )}
                
                <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center group-hover:animate-pulseGlow transition-all duration-300 shadow-lg animate-rotateIn">
                    <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold modern-heading font-calligraphy mb-3 group-hover:text-luxury-gold-300 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-luxury-gold-300 font-arabic text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-colors ${
                            i < Math.floor(product.rating)
                              ? 'text-arabic-gold fill-current'
                              : 'text-luxury-gold-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-luxury-gold-400 mr-2 rtl:mr-0 rtl:ml-2 font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <span className="text-lg font-bold modern-heading">
                    {product.price} ر.س
                  </span>
                </div>

                <div className="flex gap-4 rtl:gap-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 modern-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse group"
                  >
                    <span className="font-arabic font-semibold">عرض التفاصيل</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="modern-button p-3 group hover:scale-105 transition-transform flex-shrink-0">
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-dark-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-4 bg-luxury-gold-600/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-arabic-gold fill-current" />
              <span className="text-luxury-gold-300 font-arabic text-sm">آراء العملاء</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              آراء عملائنا الكرام
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic max-w-2xl mx-auto">
              اكتشف ما يقوله عملاؤنا عن منتجاتنا الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                rating: 5,
                comment: "منتجات رائعة جداً، الجودة ممتازة والرائحة تدوم طويلاً. أنصح الجميع بتجربتها.",
                product: "بخور العود الأصلي"
              },
              {
                name: "فاطمة علي",
                rating: 5,
                comment: "خدمة عملاء ممتازة وشحن سريع. المنتجات أصلية 100% كما وعدوا.",
                product: "عطر الياسمين الأبيض"
              },
              {
                name: "خالد السعد",
                rating: 5,
                comment: "أفضل متجر للعطور والبخور في المنطقة. منتجات فاخرة وأسعار مناسبة.",
                product: "عطر العود الملكي"
              }
            ].map((testimonial, index) => (
              <div key={index} className="luxury-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-arabic-gold fill-current" />
                  ))}
                </div>
                <p className="text-luxury-gold-300 font-arabic mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="text-luxury-gold-400 font-arabic text-sm font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-luxury-gold-500 font-arabic text-xs">
                  {testimonial.product}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-arabic-gold/10 to-luxury-gold-500/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-gradient-radial from-arabic-gold/5 to-transparent rounded-full animate-pulse floating-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-6 bg-luxury-gold-600/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Sparkles className="w-6 h-6 text-arabic-gold animate-pulse" />
            <span className="text-luxury-gold-300 font-arabic font-semibold">ابدأ رحلتك الآن</span>
            <Award className="w-6 h-6 text-arabic-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold luxury-text font-calligraphy mb-6 bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
            ابدأ رحلتك في عالم العطور الفاخرة
          </h2>
          <p className="text-lg text-luxury-gold-300 font-arabic mb-8 max-w-2xl mx-auto leading-relaxed">
            اكتشف مجموعتنا المتنوعة من العطور والبخور الأصيلة، منتجات مختارة بعناية من أفضل المكونات الطبيعية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/category/incense"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span className="font-arabic">تصفح البخور</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              to="/category/perfume"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span className="font-arabic">تصفح العطور</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
