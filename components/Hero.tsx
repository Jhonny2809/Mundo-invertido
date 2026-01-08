
import React from 'react';
import { Ghost, Bike, Zap, ChevronDown } from 'lucide-react';
import { ImageSlider } from './ImageSlider';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative floating icons */}
      <div className="absolute top-20 left-10 md:left-20 text-white/5 animate-float">
        <Bike size={64} />
      </div>
      <div className="absolute bottom-20 right-10 md:right-20 text-white/5 animate-float" style={{ animationDelay: '1s' }}>
        <Ghost size={64} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-[0.2em] mb-8 text-glow-cyan">
          COLEÇÃO Stranger Things
        </span>
        
        <h1 className="font-spooky text-6xl md:text-8xl lg:text-9xl text-red-600 font-black leading-none mb-4 text-glow-red uppercase tracking-tight">
          Mundo <br /> Invertido
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-12 tracking-wide">
          Para Colorir
        </h2>

        {/* Image Comparison Slider */}
        <div className="mb-12">
          <ImageSlider 
            beforeImage="https://i.ibb.co/0Rqn5xsx/Stranger-Things-01.png"
            afterImage="https://i.ibb.co/5xxsbBbm/Stranger-Things-02.png"
          />
        </div>
        
        <p className="max-w-lg mx-auto text-gray-400 text-lg leading-relaxed mb-12">
          Prepare seus lápis de cor e sua coragem. Uma aventura misteriosa espera por você em cada página.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={scrollToPricing}
            className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 rounded-lg text-white font-bold uppercase tracking-widest transition-all duration-500 hover:bg-red-600/10 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Quero Colorir</span>
            <Zap size={20} className="relative z-10 fill-current" />
            <div className="absolute -left-16 group-hover:left-[120%] duration-1000 top-0 bottom-0 w-8 bg-white/10 skew-x-[35deg] transition-all" />
          </button>

          <div className="animate-bounce mt-4 opacity-40">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
