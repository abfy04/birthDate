import React, { useState } from 'react';
import { Cake } from './Cake';
import { GiftBox } from './GiftBox';
import { Sparkles, Heart, Stars, Music, PartyPopper } from 'lucide-react';

export const BirthdayCard: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <div className="w-full max-w-lg">
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 rounded-t-3xl"></div>
        
        <div className="relative pt-32 pb-12 px-8">
          <div className="flex justify-center -mt-24">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-pink-500 animate-sparkle">
                <Sparkles size={24} />
              </div>
              <div className="absolute -top-4 -right-4 text-purple-500 animate-sparkle" style={{ animationDelay: '0.5s' }}>
                <Stars size={24} />
              </div>
              <div className="absolute -bottom-4 -right-4 text-pink-500 animate-heart-float" style={{ animationDelay: '1s' }}>
                <Heart size={24} fill="#EC4899" />
              </div>
              <div className="absolute -bottom-4 -left-4 text-purple-500 animate-bounce-rotate" style={{ animationDelay: '1.5s' }}>
                <Music size={24} />
              </div>
              <h1 dir='rtl' className="text-center  font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 animate-bounce-rotate">
              عيد ميلاد سعيد يا ملكة
              </h1>
            </div>
          </div>
          
          <div className="text-center mb-5">
            <p className="text-lg text-gray-700 leading-relaxed" dir='rtl'>
            لرفيقتي الغالية لما كل سنة و انتي بخير ، اتمنى تحظي بيوم ممتع و مفرح ، العقبة ل 1000 سنة ان شاء الله 😊😍
              <span className="inline-block animate-heart-float ml-1">
                <Heart size={16} fill="#EC4899" className="inline" />
              </span>
            </p>
          </div>
          
          <div className="flex justify-center mb-5">
            <Cake />
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowMessage(!showMessage)}
              className="group px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none"
            >
              <span className="flex items-center justify-center " dir='rtl'>
                {showMessage ? "اخفي الرسالة" : "اضغطي لتشوفي رسالتي "}
                <PartyPopper size={20} className="ml-2 transform transition-transform group-hover:rotate-12" />
              </span>
            </button>
          </div>
          
          {showMessage && (
            <div className="mt-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 animate-fadeIn">
              <p dir='rtl' className="text-center text-gray-700 leading-relaxed">
              شوفت الستوري تبعك بالغلط ، و كان احسن غلط ، خلاني اتعرف على انسانة كثير لطيفة و حبوبة ، اتمنى الك حياة سعيدة، احب الحديث معك ، اتمنى نبقى مع بعض
                <span className="block mt-3">
                  <Heart className="inline-block text-pink-500 animate-heart-float" size={24} fill="#EC4899" />
                </span>
              </p>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mb-5 z-10 relative">
          <GiftBox />
        </div>
      </div>
    </div>
  );
};