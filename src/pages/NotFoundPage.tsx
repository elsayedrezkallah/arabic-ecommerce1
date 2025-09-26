import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <AlertCircle className="w-16 h-16 text-luxury-dark-900" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl md:text-8xl font-bold luxury-text font-calligraphy mb-4 bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold luxury-text font-calligraphy mb-4">
            الصفحة غير موجودة
          </h2>
          
          <p className="text-lg text-luxury-gold-300 font-arabic mb-8 leading-relaxed max-w-lg mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون الصفحة قد تم نقلها أو حذفها.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Home className="w-5 h-5" />
              <span className="font-arabic">العودة للرئيسية</span>
            </Link>
            
            <Link
              to="/category/incense"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Search className="w-5 h-5" />
              <span className="font-arabic">تصفح المنتجات</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="luxury-card p-8">
            <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-6">
              صفحات مفيدة
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/category/incense"
                className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg bg-luxury-dark-800/50 hover:bg-luxury-gold-600/20 transition-colors text-luxury-gold-300 hover:text-arabic-gold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-arabic">البخور</span>
              </Link>
              <Link
                to="/category/perfume"
                className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg bg-luxury-dark-800/50 hover:bg-luxury-gold-600/20 transition-colors text-luxury-gold-300 hover:text-arabic-gold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-arabic">العطور</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg bg-luxury-dark-800/50 hover:bg-luxury-gold-600/20 transition-colors text-luxury-gold-300 hover:text-arabic-gold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-arabic">عنا</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg bg-luxury-dark-800/50 hover:bg-luxury-gold-600/20 transition-colors text-luxury-gold-300 hover:text-arabic-gold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-arabic">اتصل بنا</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
