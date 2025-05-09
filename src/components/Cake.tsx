import React, { useState } from 'react';

export const Cake: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  
  return (
    <div className="relative">
      <div 
        className="cake-container cursor-pointer"
        onClick={() => setCandlesBlown(true)}
        title={candlesBlown ? "Candles blown!" : "Click to blow out the candles!"}
      >

        {/* Candles */}
        <div className="flex justify-center -mt-2 space-x-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative">
              <div className="w-2 h-10 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full"></div>
              {!candlesBlown && (
                <>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-yellow-200 to-orange-400 rounded-full animate-flicker" style={{ animationDelay: `${i * 0.3}s` }}></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-white opacity-50 rounded-full"></div>
                </>
              )}
            </div>
          ))}
        </div>
        {/* Cake top layer */}
        <div className="w-40 h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-xl mx-auto -mt-1 relative overflow-hidden">
          {/* Top layer decorations */}
          <div className="absolute top-4 left-4 w-32 h-1 bg-pink-100 rounded-full"></div>
        </div>
        {/* Cake middle layer */}
        <div className="w-48 h-12 bg-gradient-to-b from-purple-300 to-purple-400 rounded-xl mx-auto -mt-1 relative overflow-hidden">
          {/* Middle layer decorations */}
          <div className="absolute top-5 left-4 w-40 h-1 bg-purple-200 rounded-full"></div>
        </div>
        {/* Cake base */}
        <div className="w-56 h-20 bg-gradient-to-b from-pink-300 to-pink-400 rounded-xl mx-auto -mt-1 relative overflow-hidden">
          {/* Cake decorations */}
          <div className="absolute top-4 left-4 w-48 h-1 bg-pink-200 rounded-full"></div>
          <div className="absolute top-10 left-4 w-48 h-1 bg-pink-200 rounded-full"></div>
          <div className="absolute top-16 left-4 w-48 h-1 bg-pink-200 rounded-full"></div>
        </div>
        {/* Cake plate */}
        <div className="w-64 h-4 bg-gray-200 rounded-full mx-auto"></div>
        
        
        
        
        
        
        
      </div>
      
      {!candlesBlown && (
        <div className="text-center mt-4 text-gray-500 text-sm animate-bounce" dir='rtl'>
         اكبسي على الكيكة لتطفي الشمعات 🕯🕯
        </div>
      )}
      
      {candlesBlown && (
        <div className="text-center mt-4 text-pink-500 text-sm animate-fadeIn" dir='rtl'>
          ييي!! تمني أمنية !✨
        </div>
      )}
    </div>
  );
};