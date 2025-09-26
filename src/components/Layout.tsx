import React, { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Heart, Bell, LogOut, ChevronDown, Globe, Settings } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Layout: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount] = useState(3); // This would come from context/state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('ar');
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true }); // Add passive for better performance
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsSearchOpen(false);
        setIsUserMenuOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  }, [searchQuery, navigate]);

  const handleLogout = useCallback(() => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  }, [logout, navigate]);

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    setIsLanguageMenuOpen(false);
  }, []);

  const navigationItems = [
    { name: 'الرئيسية', nameEn: 'Home', path: '/' },
    { name: 'البخور', nameEn: 'Incense', path: '/category/incense' },
    { name: 'العطور', nameEn: 'Perfumes', path: '/category/perfume' },
    { name: 'عنا', nameEn: 'About', path: '/about' },
    { name: 'اتصل بنا', nameEn: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark-900 via-luxury-dark-800 to-luxury-dark-900">
      {/* Header */}
      <header className={`sticky top-0 z-50 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-2xl border-b border-arabic-gold/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 rtl:space-x-reverse group flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:animate-glow transition-all duration-300">
                <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">ع</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold luxury-text font-calligraphy group-hover:text-luxury-gold-300 transition-colors">عطور الشرق</h1>
                <p className="text-sm text-luxury-gold-300 font-arabic">Eastern Fragrances</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse flex-1 justify-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item text-sm font-medium transition-colors duration-300 px-4 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-arabic-gold bg-luxury-gold-600/20'
                      : 'text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10'
                  }`}
                >
                  <span className="font-arabic arabic-subheading">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0">
              {/* Search */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Search Bar */}
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-luxury-dark-800/95 backdrop-blur-xl border border-luxury-gold-600/30 rounded-lg shadow-2xl z-50 animate-slideDown">
                    <form onSubmit={handleSearch} className="p-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={currentLanguage === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
                          className="flex-1 bg-luxury-dark-700/50 border border-luxury-gold-600/30 rounded-lg px-3 py-2 text-luxury-gold-300 placeholder-luxury-gold-500 focus:outline-none focus:border-arabic-gold focus:ring-1 focus:ring-arabic-gold/50 font-arabic"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="p-2 bg-gradient-to-r from-arabic-gold to-luxury-gold-500 text-luxury-dark-900 rounded-lg hover:from-luxury-gold-400 hover:to-luxury-gold-600 transition-all duration-300"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Favorites */}
              <button className="p-2 text-luxury-gold-300 hover:text-red-400 transition-colors hover:bg-red-500/20 rounded-lg relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
              </button>

              {/* Notifications */}
              <button className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-arabic-gold text-luxury-dark-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">1</span>
              </button>

              {/* Language Switcher */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold">{currentLanguage === 'ar' ? 'ع' : 'EN'}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-luxury-dark-800/95 backdrop-blur-xl border border-luxury-gold-600/30 rounded-lg shadow-2xl z-50 animate-slideDown">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setCurrentLanguage('ar');
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-sm text-right rtl:text-right hover:bg-luxury-gold-600/20 transition-colors ${
                          currentLanguage === 'ar' ? 'text-arabic-gold bg-luxury-gold-600/10' : 'text-luxury-gold-300'
                        }`}
                      >
                        العربية
                      </button>
                      <button
                        onClick={() => {
                          setCurrentLanguage('en');
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-sm text-right rtl:text-right hover:bg-luxury-gold-600/20 transition-colors ${
                          currentLanguage === 'en' ? 'text-arabic-gold bg-luxury-gold-600/10' : 'text-luxury-gold-300'
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User */}
              <div className="relative dropdown-container">
                {user?.isLoggedIn ? (
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg flex items-center space-x-1 rtl:space-x-reverse"
                    title={`مرحباً ${user.firstName}`}
                  >
                    <User className="w-5 h-5" />
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                )}
                
                {/* User Dropdown Menu */}
                {user?.isLoggedIn && isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-luxury-dark-800/95 backdrop-blur-xl border border-luxury-gold-600/30 rounded-lg shadow-2xl z-50 animate-slideDown">
                    <div className="py-2">
                      <div className="px-3 py-2 border-b border-luxury-gold-600/20">
                        <p className="text-sm font-semibold text-arabic-gold font-arabic">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-luxury-gold-400">{user.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/20 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        <span className="font-arabic">الملف الشخصي</span>
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/20 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        <span className="font-arabic">الطلبات</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 rtl:space-x-reverse w-full px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="font-arabic">تسجيل الخروج</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors hover:bg-luxury-gold-600/20 rounded-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-arabic-gold to-luxury-gold-500 text-luxury-dark-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark-800/95 backdrop-blur-xl border-t border-luxury-gold-600/20 shadow-2xl animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Mobile Search */}
              <div className="px-6 py-4 mb-4">
                <form onSubmit={handleSearch} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentLanguage === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
                    className="flex-1 bg-luxury-dark-700/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 placeholder-luxury-gold-500 focus:outline-none focus:border-arabic-gold focus:ring-1 focus:ring-arabic-gold/50 font-arabic text-sm"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-gradient-to-r from-arabic-gold to-luxury-gold-500 text-luxury-dark-900 rounded-lg hover:from-luxury-gold-400 hover:to-luxury-gold-600 transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {navigationItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-4 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 animate-fadeInUp ${
                    location.pathname === item.path
                      ? 'text-arabic-gold bg-luxury-gold-600/20 shadow-lg border border-luxury-gold-600/30'
                      : 'text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10'
                  }`}
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-arabic flex items-center justify-between">
                    {item.name}
                    <span className="text-xs text-luxury-gold-500">{item.nameEn}</span>
                  </span>
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-luxury-gold-600/20">
                <Link
                  to="/cart"
                  className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-arabic text-sm">السلة</span>
                  {cartItemsCount > 0 && (
                    <span className="bg-arabic-gold text-luxury-dark-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                
                <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg text-luxury-gold-300 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                  <span className="font-arabic text-sm">المفضلة</span>
                  <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
                </button>
                
                {user?.isLoggedIn ? (
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-arabic text-sm">حسابي</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-arabic text-sm">تسجيل الدخول</span>
                  </Link>
                )}
                
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10 transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-arabic text-sm">{currentLanguage === 'ar' ? 'English' : 'العربية'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark-900 border-t border-luxury-gold-600/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-lg flex items-center justify-center">
                  <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">ع</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold luxury-text font-calligraphy">عطور الشرق</h3>
                  <p className="text-luxury-gold-300 font-arabic">Eastern Fragrances</p>
                </div>
              </div>
              <p className="text-luxury-gold-300 font-arabic text-sm leading-relaxed mb-4">
                متجرنا يقدم أجود أنواع العطور والبخور العربي والأجنبي، منتجات أصلية 100% من أفضل المكونات الطبيعية.
              </p>
              <p className="text-luxury-gold-400 font-arabic text-sm">
                Our store offers the finest Arabic and foreign perfumes and incense, 100% original products from the best natural ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold luxury-text font-calligraphy mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link to="/category/incense" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">البخور</Link></li>
                <li><Link to="/category/perfume" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">العطور</Link></li>
                <li><Link to="/about" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">عنا</Link></li>
                <li><Link to="/contact" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">اتصل بنا</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold luxury-text font-calligraphy mb-4">معلومات الاتصال</h4>
              <div className="space-y-2 text-luxury-gold-300 font-arabic text-sm">
                <p>📞 +966 50 123 4567</p>
                <p>✉️ info@easternfragrances.com</p>
                <p>📍 الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-gold-600/20 mt-8 pt-8 text-center">
            <p className="text-luxury-gold-400 font-arabic text-sm">
              © 2024 عطور الشرق. جميع الحقوق محفوظة.
            </p>
            <p className="text-luxury-gold-300 text-sm mt-1">
              © 2024 Eastern Fragrances. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
