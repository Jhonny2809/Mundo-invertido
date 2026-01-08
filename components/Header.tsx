
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-spooky text-red-600 font-bold text-xl tracking-wider hover:text-red-500 transition-colors cursor-default">
            MUNDO INVERTIDO
          </span>
        </div>
        
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-1.5 rounded-md text-sm font-bold transition-all duration-300 transform active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          Comprar Agora
        </button>
      </div>
    </header>
  );
};
