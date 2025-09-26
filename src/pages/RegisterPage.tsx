import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, UserPlus, Phone } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const RegisterPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const { register, user } = useUser();
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
    
    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      setIsSubmitting(false);
      return;
    }
    
    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.agreeToTerms) {
      setError('يجب الموافقة على الشروط والأحكام');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const success = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: '',
        city: '',
        country: ''
      });
      
      if (success) {
        navigate('/profile');
      } else {
        setError('حدث خطأ أثناء إنشاء الحساب');
      }
    } catch (error) {
      setError('حدث خطأ أثناء إنشاء الحساب');
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
              إنشاء حساب جديد
            </h1>
            <p className="text-luxury-gold-300 font-arabic">
              انضم إلى عائلة عطور الشرق
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-arabic text-sm">{error}</p>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  الاسم الأول
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                    placeholder="الاسم الأول"
                  />
                </div>
              </div>
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  الاسم الأخير
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                    placeholder="الاسم الأخير"
                  />
                </div>
              </div>
            </div>

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

            {/* Phone Field */}
            <div>
              <label className="block text-luxury-gold-300 font-arabic mb-2">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  placeholder="أدخل رقم هاتفك"
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

            {/* Confirm Password Field */}
            <div>
              <label className="block text-luxury-gold-300 font-arabic mb-2">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 pl-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  placeholder="أعد إدخال كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 hover:text-arabic-gold transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="w-4 h-4 text-arabic-gold bg-luxury-dark-800 border-luxury-gold-600 rounded focus:ring-luxury-gold-400 focus:ring-2 mt-1"
              />
              <label className="text-luxury-gold-300 font-arabic text-sm leading-relaxed">
                أوافق على{' '}
                <Link to="/terms" className="text-arabic-gold hover:text-luxury-gold-300 transition-colors">
                  الشروط والأحكام
                </Link>
                {' '}و{' '}
                <Link to="/privacy" className="text-arabic-gold hover:text-luxury-gold-300 transition-colors">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <UserPlus className="w-5 h-5" />
              <span className="font-arabic">
                {isSubmitting ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
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

          {/* Social Register */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-3 rtl:space-x-reverse p-3 border border-luxury-gold-600/30 rounded-lg text-luxury-gold-300 hover:bg-luxury-gold-600/20 transition-colors font-arabic">
              <User className="w-5 h-5" />
              <span>التسجيل بـ Google</span>
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-luxury-gold-300 font-arabic">
              لديك حساب بالفعل؟{' '}
              <Link
                to="/login"
                className="text-arabic-gold hover:text-luxury-gold-300 transition-colors font-semibold"
              >
                تسجيل الدخول
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

export default RegisterPage;
