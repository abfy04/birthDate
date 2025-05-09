import React, { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  delay: number;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
  rotation: number;
}

export const Animations: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  
  useEffect(() => {
    // Generate balloons
    const colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585'];
    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 110 + Math.random() * 20,
      size: 30 + Math.random() * 20,
      speed: 0.5 + Math.random() * 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5
    }));
    setBalloons(newBalloons);
    
    // Generate confetti
    const confettiColors = ['#FF69B4', '#DA70D6', '#DDA0DD', '#EE82EE', '#FF00FF', '#BA55D3'];
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 10,
      size: 5 + Math.random() * 7,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      angle: Math.random() * 360,
      speed: 1 + Math.random() * 3,
      rotation: Math.random() * 360
    }));
    setConfetti(newConfetti);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Balloons */}
      {balloons.map((balloon) => (
        <div 
          key={`balloon-${balloon.id}`}
          className="absolute rounded-full"
          style={{
            left: `${balloon.x}%`,
            bottom: `${balloon.y}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            backgroundColor: balloon.color,
            animation: `float ${20 / balloon.speed}s infinite alternate ease-in-out`,
            animationDelay: `${balloon.delay}s`,
            opacity: 0.7,
          }}
        >
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1 h-20"
            style={{
              backgroundColor: '#8B8B8B',
            }}
          ></div>
        </div>
      ))}
      
      {/* Confetti */}
      {confetti.map((piece) => (
        <div 
          key={`confetti-${piece.id}`}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size / 2}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.angle}deg)`,
            animation: `fall ${8 / piece.speed}s infinite linear`,
            animationDelay: `${piece.id * 0.1}s`,
            opacity: 0.8,
          }}
        ></div>
      ))}
    </div>
  );
};