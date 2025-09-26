import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle, Send } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send reset email
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className={`luxury-card p-8 text-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-2xl font-bold luxury-text font-calligraphy mb-4">
              تم الإرسال بنجاح
            </h1>
            
            <p className="text-luxury-gold-300 font-arabic mb-6 leading-relaxed">
              تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد والمتابعة.
            </p>
            
            <div className="space-y-6">
              <Link
                to="/login"
                className="w-full luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-arabic">العودة لتسجيل الدخول</span>
              </Link>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic"
              >
                إعادة المحاولة
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              نسيت كلمة المرور؟
            </h1>
            <p className="text-luxury-gold-300 font-arabic">
              لا تقلق، سنساعدك في استعادة حسابك
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-luxury-gold-300 font-arabic mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 pr-12 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <p className="text-luxury-gold-400 font-arabic text-sm mt-2">
                سنرسل لك رابطاً لإعادة تعيين كلمة المرور
              </p>
            </div>

            <button
              type="submit"
              className="w-full luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Send className="w-5 h-5" />
              <span className="font-arabic">إرسال رابط الإعادة</span>
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>العودة لتسجيل الدخول</span>
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold-400 hover:text-luxury-gold-300 transition-colors font-arabic text-sm"
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

export default ForgotPasswordPage;
