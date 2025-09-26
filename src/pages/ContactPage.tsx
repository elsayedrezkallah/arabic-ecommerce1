import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      description: "متاح من 9 صباحاً حتى 10 مساءً"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@easternfragrances.com", "support@easternfragrances.com"],
      description: "نرد خلال 24 ساعة"
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["شارع الملك فهد، الرياض", "المملكة العربية السعودية"],
      description: "مفتوح يومياً من 9 صباحاً حتى 10 مساءً"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 9 صباحاً - 10 مساءً", "الجمعة: 2 ظهراً - 10 مساءً"],
      description: "خدمة العملاء متاحة على مدار الساعة"
    }
  ];

  const faqs = [
    {
      question: "هل المنتجات أصلية 100%؟",
      answer: "نعم، جميع منتجاتنا أصلية 100% ونحصل عليها من موردين معتمدين ومضمونين."
    },
    {
      question: "ما هي مدة التوصيل؟",
      answer: "التوصيل داخل الرياض خلال 24 ساعة، وباقي مدن المملكة خلال 2-3 أيام عمل."
    },
    {
      question: "هل يمكن إرجاع المنتجات؟",
      answer: "نعم، يمكن إرجاع المنتجات خلال 7 أيام من تاريخ الاستلام مع الحفاظ على العبوة الأصلية."
    },
    {
      question: "هل تقدمون توصيل مجاني؟",
      answer: "نعم، التوصيل مجاني للطلبات التي تزيد عن 200 ريال سعودي."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-4 bg-luxury-gold-600/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MessageCircle className="w-5 h-5 text-arabic-gold" />
            <span className="text-luxury-gold-300 font-arabic text-sm">اتصل بنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold luxury-text font-calligraphy mb-4 bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
            اتصل بنا
          </h1>
          <p className="text-xl text-luxury-gold-300 font-arabic mb-6 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في أي استفسار أو طلب. تواصل معنا وسنكون سعداء بخدمتك
          </p>
        </div>

        {/* Contact Info Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`luxury-card p-6 text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <info.icon className="w-8 h-8 text-luxury-dark-900" />
                </div>
                <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-luxury-gold-300 font-arabic text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-luxury-gold-400 font-arabic text-xs">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`luxury-card p-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-2xl font-bold luxury-text font-calligraphy mb-6">
                أرسل لنا رسالة
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-arabic">تم إرسال رسالتك بنجاح!</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-luxury-gold-300 font-arabic mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-gold-300 font-arabic mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-luxury-gold-300 font-arabic mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-gold-300 font-arabic mb-2">
                      الموضوع *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عن منتج">استفسار عن منتج</option>
                      <option value="مشكلة في الطلب">مشكلة في الطلب</option>
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="شكوى">شكوى</option>
                      <option value="اقتراح">اقتراح</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-gold-300 font-arabic mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-luxury-dark-800/50 border border-luxury-gold-600/30 rounded-lg px-4 py-3 text-luxury-gold-300 placeholder-luxury-gold-500 focus:border-luxury-gold-400 focus:ring-2 focus:ring-luxury-gold-400/20 transition-all duration-300 backdrop-blur-sm font-arabic resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-arabic">إرسال الرسالة</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className={`luxury-card p-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
              <h2 className="text-2xl font-bold luxury-text font-calligraphy mb-6">
                موقعنا
              </h2>
              <div className="bg-luxury-dark-800/50 rounded-lg h-80 flex items-center justify-center border border-luxury-gold-600/30">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-luxury-gold-400 mx-auto mb-4" />
                  <p className="text-luxury-gold-300 font-arabic mb-2">
                    شارع الملك فهد، الرياض
                  </p>
                  <p className="text-luxury-gold-400 font-arabic text-sm">
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-luxury-gold-300 font-arabic">
                  <MapPin className="w-5 h-5 text-arabic-gold" />
                  <span>شارع الملك فهد، حي النرجس، الرياض</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-luxury-gold-300 font-arabic">
                  <Clock className="w-5 h-5 text-arabic-gold" />
                  <span>مفتوح يومياً من 9 صباحاً حتى 10 مساءً</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً من عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`luxury-card p-6 hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-3">
                  {faq.question}
                </h3>
                <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-arabic">العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
