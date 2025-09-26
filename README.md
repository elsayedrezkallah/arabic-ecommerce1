# عطور الشرق - Eastern Fragrances Ecommerce Website

A modern Arabic ecommerce website built with React, TypeScript, and TailwindCSS, featuring luxury Gulf-style design with RTL support for incense and perfume products.

## 🌟 Features

- **RTL Support**: Full right-to-left layout support for Arabic content
- **Luxury Design**: Gulf-style design with gold accents and dark themes
- **Arabic Typography**: Beautiful Arabic fonts (Amiri, Cairo) with calligraphy styling
- **3D Animations**: Smooth 3D background effects using Three.js
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Product Categories**: Incense (البخور) and Perfumes (العطور)
- **Shopping Cart**: Complete cart functionality with quantity management
- **Product Details**: Detailed product pages with Arabic descriptions
- **Modern UI**: Smooth transitions and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd arabic-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website.

## 📁 Project Structure

```
arabic-ecommerce/
├── public/
│   ├── images/                 # Product images directory
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BackgroundAnimation.tsx    # 3D animated background
│   │   └── Layout.tsx                # Main layout with navigation
│   ├── pages/
│   │   ├── HomePage.tsx              # Homepage with hero section
│   │   ├── CategoryPage.tsx           # Category listing page
│   │   ├── ProductDetailPage.tsx      # Product detail page
│   │   └── CartPage.tsx               # Shopping cart page
│   ├── data/
│   │   └── sampleData.ts             # Sample Arabic products
│   ├── types/
│   │   └── index.ts                  # TypeScript type definitions
│   ├── App.tsx                       # Main app component with routing
│   ├── index.css                     # TailwindCSS styles with RTL support
│   └── index.tsx                     # App entry point
├── tailwind.config.js                 # TailwindCSS configuration
├── postcss.config.js                  # PostCSS configuration
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Primary Gold**: `#D4AF37` (Arabic Gold)
- **Secondary Gold**: `#FFD700` (Luxury Gold)
- **Bronze**: `#CD7F32` (Arabic Bronze)
- **Dark Background**: `#1a1a1a` (Arabic Dark)
- **Luxury Dark**: Various shades of dark grays

### Typography
- **Arabic Fonts**: Amiri (calligraphy), Cairo (modern)
- **RTL Support**: Full right-to-left text direction
- **Font Weights**: 200-900 for Cairo, 400-700 for Amiri

### Animations
- **3D Background**: Floating particles and orbs using Three.js
- **Hover Effects**: Scale transforms and glow effects
- **Transitions**: Smooth 300ms transitions throughout
- **Custom Animations**: Float, glow, shimmer, fadeIn effects

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛍️ Product Categories

### البخور (Incense)
- Original Oud Incense (بخور العود الأصلي)
- Royal Jasmine Incense (بخور الياسمين الملكي)
- Damascus Rose Incense (بخور الورد الدمشقي)
- Black Musk Incense (بخور المسك الأسود)

### العطور (Perfumes)
- Royal Oud Perfume (عطر العود الملكي)
- White Jasmine Perfume (عطر الياسمين الأبيض)
- Damascus Rose Perfume (عطر الورد الدمشقي)
- Black Musk Perfume (عطر المسك الأسود)
- Blue Amber Perfume (عطر العنبر الأزرق)
- Royal Lavender Perfume (عطر اللافندر الملكي)

## 🛠️ Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## 🔧 Customization

### Adding New Products
Edit `src/data/sampleData.ts` to add new products:

```typescript
{
  id: 'new-product-id',
  name: 'اسم المنتج بالعربية',
  nameEn: 'Product Name in English',
  description: 'وصف المنتج بالعربية...',
  descriptionEn: 'Product description in English...',
  price: 150,
  image: '/images/product-image.jpg',
  category: 'incense', // or 'perfume'
  // ... other properties
}
```

### Styling
- Modify `tailwind.config.js` for color schemes and animations
- Update `src/index.css` for custom CSS classes
- Use Tailwind utility classes for component styling

### RTL Support
The website automatically supports RTL layout. To add new Arabic content:
- Use `font-arabic` class for Arabic text
- Use `font-calligraphy` class for decorative Arabic text
- Ensure proper RTL spacing with `rtl:space-x-reverse`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@easternfragrances.com
- Phone: +966 50 123 4567

---

**عطور الشرق - Eastern Fragrances**  
*Luxury Arabic Ecommerce Experience*