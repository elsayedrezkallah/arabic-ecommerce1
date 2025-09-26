import React, { memo } from 'react';

// Lightweight CSS-only background animation for better performance
const LightBackgroundAnimation: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Simplified CSS animations only */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-arabic-gold/8 to-transparent rounded-full animate-pulse floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-luxury-gold-400/6 to-transparent rounded-full animate-pulse delay-1000 floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-arabic-bronze/8 to-transparent rounded-full animate-pulse delay-2000 floating-element"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-radial from-luxury-gold-300/4 to-transparent rounded-full animate-pulse delay-3000 floating-element"></div>
        
        {/* Subtle floating dots */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-arabic-gold/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-luxury-gold-400/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-arabic-bronze/35 rounded-full animate-ping delay-1500"></div>
      </div>
    </div>
  );
});

LightBackgroundAnimation.displayName = 'LightBackgroundAnimation';

export default LightBackgroundAnimation;
