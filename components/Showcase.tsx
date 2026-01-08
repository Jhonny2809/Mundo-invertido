
import React from 'react';
import { Star } from 'lucide-react';

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="shrink-0 w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
      <Star size={12} className="text-red-600 fill-red-600" />
    </div>
    <span className="text-gray-300 text-sm md:text-base font-medium">{text}</span>
  </div>
);

const showcaseImages = [
  "https://i.ibb.co/XxsFZ9LR/01.png",
  "https://i.ibb.co/GvXb32SJ/02.png",
  "https://i.ibb.co/BVHncXkJ/03.png",
  "https://i.ibb.co/SF47s1n/04.png"
];

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Espie o conteúdo
          </span>
          <h2 className="font-spooky text-5xl md:text-7xl text-white font-bold leading-[0.9] mb-8 uppercase text-glow-red">
            Páginas <br /> <span className="text-red-600">Exclusivas</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <CheckItem text="Alta resolução (PDF) para impressão perfeita." />
            <CheckItem text="Pode imprimir quantas vezes quiser." />
            <CheckItem text="Desenhos variados: desde heróis a monstros." />
            <CheckItem text="Entrega imediata por e-mail após a confirmação." />
          </div>
        </div>

        {/* Overlapping Stack Effect - Now below the features */}
        <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center mb-24">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image 4 (Bottom-left) */}
            <div className="absolute transform -translate-x-16 md:-translate-x-32 translate-y-8 md:translate-y-16 -rotate-12 w-40 md:w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:rotate-0 hover:z-50 hover:scale-110 cursor-pointer">
              <img src={showcaseImages[3]} alt="Página 4" className="w-full h-full object-cover" />
            </div>
            
            {/* Image 3 (Bottom-right) */}
            <div className="absolute transform translate-x-16 md:translate-x-32 translate-y-6 md:translate-y-12 rotate-12 w-40 md:w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:rotate-0 hover:z-50 hover:scale-110 cursor-pointer">
              <img src={showcaseImages[2]} alt="Página 3" className="w-full h-full object-cover" />
            </div>

            {/* Image 2 (Middle) */}
            <div className="absolute transform -translate-x-6 md:-translate-x-12 -translate-y-6 md:-translate-y-12 -rotate-3 w-40 md:w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:rotate-0 hover:z-50 hover:scale-110 cursor-pointer">
              <img src={showcaseImages[1]} alt="Página 2" className="w-full h-full object-cover" />
            </div>

            {/* Image 1 (Top) */}
            <div className="absolute transform translate-x-4 md:translate-x-8 -translate-y-4 md:-translate-y-8 rotate-6 w-40 md:w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white transition-all duration-500 hover:rotate-0 hover:z-50 hover:scale-110 cursor-pointer">
              <img src={showcaseImages[0]} alt="Página 1" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative mx-auto lg:ml-0">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-serif text-2xl italic">
            "
          </div>
          <p className="text-gray-400 text-base md:text-lg italic leading-relaxed mb-6">
            "Os desenhos são incríveis! Meu filho amou colorir o Demogorgon e a Eleven. A qualidade da impressão é excelente, sem serrilhados. Recomendo muito para quem busca atividades criativas."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-purple-700 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center text-xs font-bold text-white uppercase">
                MS
              </div>
            </div>
            <div>
              <span className="block text-sm font-bold text-white uppercase tracking-tighter">Mariana S.</span>
              <span className="block text-[10px] text-red-500 font-bold uppercase tracking-widest">Cliente Satisfeita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
