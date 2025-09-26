import React, { memo } from 'react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  showText?: boolean;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = memo(({ 
  size = 'md', 
  text = 'جاري التحميل...', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {/* Enhanced Spinner */}
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-luxury-gold-600/20 rounded-full animate-spin`}>
          <div className="absolute inset-0 border-4 border-transparent border-t-arabic-gold rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
        </div>
        
        {/* Inner ring */}
        <div className={`absolute inset-2 ${sizeClasses[size === 'sm' ? 'sm' : 'sm']} border-2 border-transparent border-t-luxury-gold-400 rounded-full animate-spin`} style={{ animationDuration: '0.8s', animationDirection: 'reverse' }}></div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-arabic-gold rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      {showText && (
        <div className="text-center">
          <p className={`${textSizeClasses[size]} text-luxury-gold-300 font-arabic font-medium animate-pulse`}>
            {text}
          </p>
          {/* Loading dots animation */}
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-arabic-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
});

EnhancedLoadingSpinner.displayName = 'EnhancedLoadingSpinner';

export default EnhancedLoadingSpinner;
