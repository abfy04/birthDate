import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-sm">
      <p className="flex items-center justify-center">
        Made with <Heart className="mx-1 text-pink-500" size={16} /> for your special day
      </p>
    </footer>
  );
};