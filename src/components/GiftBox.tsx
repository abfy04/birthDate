import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative cursor-pointer transform transition-all duration-500"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`gift-box transition-all duration-700 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg relative">
          {/* Gift ribbon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-32 bg-gradient-to-b from-pink-300 to-pink-400"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-6 bg-gradient-to-r from-pink-300 to-pink-400"></div>
          
          {/* Gift bow */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10">
            <div className="w-10 h-5 bg-pink-400 rounded-full transform -rotate-45 absolute -left-2"></div>
            <div className="w-10 h-5 bg-pink-400 rounded-full transform rotate-45 absolute -right-2"></div>
          </div>
        </div>
      </div>
      
      <div className={`gift-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${isOpen ? 'opacity-100 scale-100 w-52' : 'opacity-0 scale-0'}`}>
        <div className="text-center p-4">
          <div className="text-pink-500 flex justify-center mb-2">
            <Gift size={32} className="animate-bounce" />
          </div>
          <p className="text-purple-600 font-medium" dir='rtl'>
          شكرا لأنك صديقة رائعة 💖💖
          </p>
        </div>
      </div>
      
      {!isOpen && (
        <div dir='rtl' className="absolute  w-full text-center text-gray-500 text-sm animate-pulse">
          اضغطي لتفتحي الهدية
        </div>
      )}
    </div>
  );
};