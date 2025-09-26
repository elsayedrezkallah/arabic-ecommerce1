import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, LogIn } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const LoginPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const { login, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    // If user is already logged in, redirect to profile
    if (user?.isLoggedIn) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/profile');
      } else {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } catch (error) {
      setError('حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className={`luxury-card p-8 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '200ms' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">ع</span>
            </div>
            <h1 className="text-3xl font-bold luxury-text font-calligraphy mb-2">
              تسجيل الدخول
            </h1>
            <p className="text-luxury-gold-300 font-arabic">
              مرحباً بك مرة أخرى في عطور الشرق
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-arabic text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-luxury-gold-300 font-arabic mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-luxury-gold-300 font-arabic mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 pl-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 hover:text-arabic-gold transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-arabic-gold bg-luxury-dark-800 border-luxury-gold-600 rounded focus:ring-luxury-gold-400 focus:ring-2"
                />
                <span className="text-luxury-gold-300 font-arabic text-sm">تذكرني</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-arabic-gold hover:text-luxury-gold-300 transition-colors font-arabic text-sm"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogIn className="w-5 h-5" />
              <span className="font-arabic">
                {isSubmitting ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-luxury-gold-600/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-luxury-dark-800 text-luxury-gold-400 font-arabic">أو</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-3 rtl:space-x-reverse p-3 border border-luxury-gold-600/30 rounded-lg text-luxury-gold-300 hover:bg-luxury-gold-600/20 transition-colors font-arabic">
              <User className="w-5 h-5" />
              <span>تسجيل الدخول بـ Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-luxury-gold-300 font-arabic">
              ليس لديك حساب؟{' '}
              <Link
                to="/register"
                className="text-arabic-gold hover:text-luxury-gold-300 transition-colors font-semibold"
              >
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
