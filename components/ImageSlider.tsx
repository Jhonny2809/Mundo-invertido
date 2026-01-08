
import React, { useState, useRef, useEffect } from 'react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? event.touches[0].clientX - rect.left 
      : (event as React.MouseEvent).clientX - rect.left;
    
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-xl aspect-[16/9] mx-auto overflow-hidden rounded-2xl border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-col-resize select-none mb-12"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Base Image (Bottom) */}
      <img 
        src={beforeImage} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Comparison Image (Top with Clipping) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-4 border-[#030712]">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-white/40 rounded-full" />
            <div className="w-1 h-4 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-white border border-white/10 pointer-events-none">
        Original
      </div>
      <div className="absolute bottom-4 right-4 z-10 bg-red-600/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-white border border-red-400/30 pointer-events-none">
        Colorido
      </div>
    </div>
  );
};
