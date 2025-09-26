import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Toaster } from './components/ui/toaster';
import { UserProvider } from './contexts/UserContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy load heavy components
const BackgroundAnimation = lazy(() => import('./components/BackgroundAnimation'));
const LightBackgroundAnimation = lazy(() => import('./components/LightBackgroundAnimation'));

// Enhanced loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-dark-900 via-luxury-dark-800 to-luxury-dark-900">
    <div className="flex flex-col items-center space-y-6">
      {/* Enhanced logo with animation */}
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center animate-pulseGlow shadow-2xl">
          <span className="text-luxury-dark-900 font-bold text-3xl font-calligraphy">ع</span>
        </div>
        {/* Rotating ring around logo */}
        <div className="absolute inset-0 w-20 h-20 border-2 border-transparent border-t-arabic-gold rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
      </div>
      
      {/* Enhanced loading text */}
      <div className="text-center">
        <p className="text-luxury-gold-300 font-arabic font-semibold text-lg animate-pulse">
          جاري التحميل...
        </p>
        <p className="text-luxury-gold-400 font-arabic text-sm mt-2">
          Loading...
        </p>
        
        {/* Loading progress dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  // Use lightweight background by default for better performance
  // Change to BackgroundAnimation for full 3D effects
  const useLightBackground = true;
  
  return (
    <UserProvider>
      <Router>
        <div className="relative min-h-screen">
          <Suspense fallback={null}>
            {useLightBackground ? <LightBackgroundAnimation /> : <BackgroundAnimation />}
          </Suspense>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Layout>
          <Toaster />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
