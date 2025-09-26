import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Clock, CheckCircle, Truck, Star, Eye, Download } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'all' | 'pending' | 'shipped' | 'delivered'>('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 450,
      items: [
        { name: 'بخور العود الأصلي', quantity: 1, price: 300 },
        { name: 'عطر الياسمين الأبيض', quantity: 1, price: 150 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 200,
      items: [
        { name: 'بخور العنبر الملكي', quantity: 2, price: 100 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-08',
      status: 'pending',
      total: 350,
      items: [
        { name: 'عطر العود الملكي', quantity: 1, price: 350 }
      ]
    },
    {
      id: 'ORD-004',
      date: '2024-01-05',
      status: 'delivered',
      total: 180,
      items: [
        { name: 'بخور الورد الجوري', quantity: 3, price: 60 }
      ]
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { 
          label: 'في الانتظار', 
          icon: Clock, 
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-500/20'
        };
      case 'shipped':
        return { 
          label: 'تم الشحن', 
          icon: Truck, 
          color: 'text-blue-400',
          bgColor: 'bg-blue-500/20'
        };
      case 'delivered':
        return { 
          label: 'تم التسليم', 
          icon: CheckCircle, 
          color: 'text-green-400',
          bgColor: 'bg-green-500/20'
        };
      default:
        return { 
          label: 'غير معروف', 
          icon: Package, 
          color: 'text-gray-400',
          bgColor: 'bg-gray-500/20'
        };
    }
  };

  const filteredOrders = selectedTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedTab);

  const tabs = [
    { id: 'all', label: 'جميع الطلبات', count: orders.length },
    { id: 'pending', label: 'في الانتظار', count: orders.filter(o => o.status === 'pending').length },
    { id: 'shipped', label: 'تم الشحن', count: orders.filter(o => o.status === 'shipped').length },
    { id: 'delivered', label: 'تم التسليم', count: orders.filter(o => o.status === 'delivered').length }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-24 h-24 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <Package className="w-12 h-12 text-luxury-dark-900" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
            طلباتي
          </h1>
          <p className="text-luxury-gold-300 font-arabic max-w-2xl mx-auto">
            تتبع جميع طلباتك وإدارة حالتها
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {tabs.map((tab, index) => (
            <div 
              key={tab.id}
              className={`luxury-card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${selectedTab === tab.id ? 'ring-2 ring-arabic-gold' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedTab(tab.id as any)}
            >
              <div className="text-2xl font-bold luxury-text font-calligraphy mb-2">
                {tab.count}
              </div>
              <p className="text-luxury-gold-300 font-arabic text-sm">
                {tab.label}
              </p>
            </div>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="luxury-card p-12 text-center">
              <Package className="w-16 h-16 text-luxury-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-4">
                لا توجد طلبات
              </h3>
              <p className="text-luxury-gold-300 font-arabic mb-6">
                لم تجد أي طلبات تطابق المعايير المحددة
              </p>
              <Link
                to="/category/incense"
                className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span className="font-arabic">ابدأ التسوق</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            filteredOrders.map((order, index) => {
              const statusInfo = getStatusInfo(order.status);
              const StatusIcon = statusInfo.icon;
              
              return (
                <div 
                  key={order.id}
                  className={`luxury-card p-6 hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold luxury-text font-calligraphy">
                            طلب #{order.id}
                          </h3>
                          <p className="text-luxury-gold-400 font-arabic text-sm">
                            {new Date(order.date).toLocaleDateString('ar-SA')}
                          </p>
                        </div>
                        <div className={`inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full ${statusInfo.bgColor}`}>
                          <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                          <span className={`font-arabic text-sm ${statusInfo.color}`}>
                            {statusInfo.label}
                          </span>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between text-sm">
                            <span className="text-luxury-gold-300 font-arabic">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="text-luxury-gold-400 font-arabic">
                              {item.price * item.quantity} ر.س
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold luxury-text">
                          إجمالي: {order.total} ر.س
                        </span>
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <Eye className="w-4 h-4" />
                        <span className="font-arabic">عرض التفاصيل</span>
                      </button>
                      
                      {order.status === 'delivered' && (
                        <button className="luxury-button bg-green-600 hover:bg-green-700 inline-flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <Star className="w-4 h-4" />
                          <span className="font-arabic">تقييم</span>
                        </button>
                      )}
                      
                      <button className="luxury-button bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <Download className="w-4 h-4" />
                        <span className="font-arabic">فاتورة</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
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

export default OrdersPage;
