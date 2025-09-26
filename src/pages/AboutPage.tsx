import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Clock, Star, Shield, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Award,
      title: "جودة عالية",
      description: "منتجات أصلية 100% من أفضل المكونات الطبيعية"
    },
    {
      icon: Shield,
      title: "أمان وثقة",
      description: "معاملات آمنة ومحمية بأعلى معايير الأمان"
    },
    {
      icon: Users,
      title: "خدمة عملاء متميزة",
      description: "فريق متخصص لخدمتك على مدار الساعة"
    },
    {
      icon: Clock,
      title: "شحن سريع",
      description: "توصيل سريع وآمن لجميع أنحاء المملكة"
    }
  ];

  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "مؤسس الشركة",
      image: "أ",
      description: "خبير في العطور والبخور مع خبرة تزيد عن 15 عاماً"
    },
    {
      name: "فاطمة علي",
      role: "مديرة الجودة",
      image: "ف",
      description: "متخصصة في ضمان جودة المنتجات والأمان"
    },
    {
      name: "خالد السعد",
      role: "مدير العمليات",
      image: "خ",
      description: "خبير في إدارة سلسلة التوريد والشحن"
    }
  ];

  const stats = [
    { number: "500+", label: "منتج متوفر" },
    { number: "10K+", label: "عميل سعيد" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "99%", label: "معدل الرضا" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-4 bg-luxury-gold-600/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Heart className="w-5 h-5 text-arabic-gold" />
            <span className="text-luxury-gold-300 font-arabic text-sm">عنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold luxury-text font-calligraphy mb-4 bg-gradient-to-r from-arabic-gold via-luxury-gold-400 to-arabic-gold bg-clip-text text-transparent">
            من نحن
          </h1>
          <p className="text-xl text-luxury-gold-300 font-arabic mb-6 max-w-3xl mx-auto leading-relaxed">
            نحن متجر عطور الشرق، رائدون في تقديم أجود أنواع العطور والبخور العربي والأجنبي
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-luxury-gold-300 font-arabic leading-relaxed">
                <p>
                  بدأت رحلتنا منذ أكثر من 5 سنوات بهدف واحد: تقديم أجود أنواع العطور والبخور العربي والأجنبي لعملائنا الكرام. نحن نؤمن بأن العطور ليست مجرد منتجات، بل هي تجربة حقيقية تعكس شخصيتك وأسلوبك.
                </p>
                <p>
                  نقوم بانتقاء منتجاتنا بعناية فائقة من أفضل الموردين حول العالم، مع ضمان الجودة والأصالة. كل منتج في متجرنا يحمل معه قصة من التراث العربي الأصيل والحداثة العالمية.
                </p>
                <p>
                  نحن ملتزمون بتقديم تجربة تسوق استثنائية، من المنتجات عالية الجودة إلى خدمة العملاء المتميزة والتوصيل السريع والآمن.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="luxury-card p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <span className="text-luxury-dark-900 font-bold text-4xl font-calligraphy">ع</span>
                </div>
                <h3 className="text-2xl font-bold luxury-text font-calligraphy mb-4">
                  عطور الشرق
                </h3>
                <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                  نافذتك على عالم العطور الفاخرة والبخور الأصيل
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="luxury-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold luxury-text font-calligraphy mb-2 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    {stat.number}
                  </div>
                  <p className="text-luxury-gold-300 font-arabic text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              لماذا نحن؟
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic max-w-2xl mx-auto">
              نقدم لك أفضل تجربة تسوق مع ضمان الجودة والأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`luxury-card p-6 text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <feature.icon className="w-8 h-8 text-luxury-dark-900" />
                </div>
                <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-3">
                  {feature.title}
                </h3>
                <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              فريقنا
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic max-w-2xl mx-auto">
              فريق من الخبراء المتخصصين في خدمتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`luxury-card p-6 text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">
                    {member.image}
                  </span>
                </div>
                <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-2">
                  {member.name}
                </h3>
                <p className="text-luxury-gold-400 font-arabic mb-3">
                  {member.role}
                </p>
                <p className="text-luxury-gold-300 font-arabic text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`luxury-card p-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-luxury-dark-900" />
                </div>
                <h3 className="text-2xl font-bold luxury-text font-calligraphy">
                  رؤيتنا
                </h3>
              </div>
              <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                أن نكون الوجهة الأولى في المملكة العربية السعودية للعطور والبخور الفاخرة، وأن نقدم تجربة تسوق استثنائية تعكس التراث العربي الأصيل والحداثة العالمية.
              </p>
            </div>

            <div className={`luxury-card p-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-luxury-dark-900" />
                </div>
                <h3 className="text-2xl font-bold luxury-text font-calligraphy">
                  مهمتنا
                </h3>
              </div>
              <p className="text-luxury-gold-300 font-arabic leading-relaxed">
                تقديم أجود أنواع العطور والبخور العربي والأجنبي لعملائنا الكرام، مع ضمان الجودة والأصالة، وتقديم خدمة عملاء متميزة تسعى لإرضاء كل عميل.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className={`luxury-card p-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1000ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-6">
              انضم إلى رحلتنا
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic mb-8 max-w-2xl mx-auto leading-relaxed">
              اكتشف عالم العطور الفاخرة وانضم إلى آلاف العملاء الراضين عن منتجاتنا وخدماتنا
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
    </div>
  );
};

export default AboutPage;
