
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-gray-500 text-sm">
          © {currentYear} Mundo Invertido Para Colorir. Todos os direitos reservados.
        </p>
        <div className="text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest px-4">
          Este site não é afiliado à Netflix ou aos criadores da série original. 
          Produto digital (fanart) destinado para entretenimento.
        </div>
      </div>
    </footer>
  );
};
