import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, MapPin, Edit, Save, X, Package, Heart, CreditCard, LogOut } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const ProfilePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: ''
  });
  
  const { user, updateProfile, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // If user is not logged in, redirect to login
    if (!user?.isLoggedIn) {
      navigate('/login');
    } else {
      // Load user data
      setUserData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        country: user.country || ''
      });
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateProfile(userData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original user data
    if (user) {
      setUserData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        country: user.country || ''
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { label: 'إجمالي الطلبات', value: '24', icon: Package },
    { label: 'المفضلة', value: '12', icon: Heart },
    { label: 'نقاط المكافآت', value: '1,250', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-24 h-24 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <span className="text-luxury-dark-900 font-bold text-3xl font-calligraphy">أ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-2">
            الملف الشخصي
          </h1>
          <p className="text-luxury-gold-300 font-arabic">
            إدارة معلوماتك الشخصية وتفضيلاتك
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`luxury-card p-6 text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-luxury-dark-900" />
              </div>
              <div className="text-2xl font-bold luxury-text font-calligraphy mb-2">
                {stat.value}
              </div>
              <p className="text-luxury-gold-300 font-arabic text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Profile Information */}
        <div className="luxury-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold luxury-text font-calligraphy">
              المعلومات الشخصية
            </h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Edit className="w-4 h-4" />
                <span className="font-arabic">تعديل</span>
              </button>
            ) : (
              <div className="flex space-x-3 rtl:space-x-reverse">
                <button
                  onClick={handleSave}
                  className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4" />
                  <span className="font-arabic">حفظ</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse bg-red-600 hover:bg-red-700"
                >
                  <X className="w-4 h-4" />
                  <span className="font-arabic">إلغاء</span>
                </button>
              </div>
            )}
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  الاسم الأول
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <User className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.firstName}</span>
                  </div>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  الاسم الأخير
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <User className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.lastName}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  البريد الإلكتروني
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <Mail className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.email}</span>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  رقم الهاتف
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <Phone className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.phone}</span>
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  العنوان
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.address}</span>
                  </div>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  المدينة
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.city}</span>
                  </div>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-luxury-gold-300 font-arabic mb-2">
                  الدولة
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={userData.country}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                  />
                ) : (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-luxury-dark-800/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-luxury-gold-400" />
                    <span className="text-luxury-gold-300 font-arabic">{userData.country}</span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/orders"
            className="luxury-card p-6 text-center hover:scale-105 transition-all duration-300"
          >
            <Package className="w-8 h-8 text-arabic-gold mx-auto mb-3" />
            <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2">
              طلباتي
            </h3>
            <p className="text-luxury-gold-300 font-arabic text-sm">
              عرض جميع طلباتك
            </p>
          </Link>

          <Link
            to="/favorites"
            className="luxury-card p-6 text-center hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-8 h-8 text-arabic-gold mx-auto mb-3" />
            <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2">
              المفضلة
            </h3>
            <p className="text-luxury-gold-300 font-arabic text-sm">
              المنتجات المفضلة لديك
            </p>
          </Link>

          <Link
            to="/addresses"
            className="luxury-card p-6 text-center hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-8 h-8 text-arabic-gold mx-auto mb-3" />
            <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2">
              العناوين
            </h3>
            <p className="text-luxury-gold-300 font-arabic text-sm">
              إدارة عناوين التوصيل
            </p>
          </Link>
        </div>

        {/* Back to Home and Logout */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-arabic">العودة للرئيسية</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="luxury-button bg-red-600 hover:bg-red-700 inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-arabic">تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
