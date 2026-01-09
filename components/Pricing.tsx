
import React from 'react';
import { CheckCircle2, ShoppingCart, Lock, Zap, Flame, Crown } from 'lucide-react';

// Type Safety: Interface global para o Meta Pixel e UTMify
declare global {
  interface Window {
    fbq: any;
    pixelId?: string;
  }
}

interface PricingCardProps {
  title: string;
  price: string;
  priceNumeric: number;
  oldPrice?: string;
  features: string[];
  bonuses?: string[];
  isPremium?: boolean;
  guarantee: string;
  buttonText: string;
  badge?: string;
  checkoutUrl: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  priceNumeric,
  oldPrice, 
  features, 
  bonuses, 
  isPremium, 
  guarantee, 
  buttonText,
  badge,
  checkoutUrl
}) => {
  
  const getFinalUrl = (url: string) => {
    try {
      const currentParams = new URLSearchParams(window.location.search);
      const targetUrl = new URL(url);
      const paramsToKeep = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'src'];
      
      currentParams.forEach((value, key) => {
        if (paramsToKeep.includes(key.toLowerCase())) {
          targetUrl.searchParams.set(key, value);
        }
      });
      return targetUrl.toString();
    } catch (e) {
      return url;
    }
  };

  const handleInitiateCheckout = (e: React.MouseEvent) => {
    e.preventDefault();

    // Disparo obrigatório do InitiateCheckout seguindo regras estritas do Meta Ads
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        value: priceNumeric,
        currency: 'BRL',
        content_name: title,
        content_category: 'Livro de Colorir Digital',
        content_ids: [isPremium ? 'vecna_premium' : 'steve_basic'],
        content_type: 'product',
        // OBRIGATÓRIO: Prevenção de erro de Categoria Restrita / Domain Verification
        event_source_url: window.location.href,
      });
    }

    const finalUrl = getFinalUrl(checkoutUrl);
    
    // Pequeno delay (150ms) para garantir que a requisição do pixel saia da fila do navegador
    setTimeout(() => {
      window.location.href = finalUrl;
    }, 150);
  };

  return (
    <div className={`relative flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border ${isPremium ? 'border-red-500/50 shadow-[0_0_40px_rgba(220,38,38,0.15)]' : 'border-white/10'} rounded-[2.5rem] p-8 transition-all duration-500 hover:translate-y-[-8px]`}>
      {isPremium && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-purple-700 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
          <Crown size={12} /> {badge || "MAIS VENDIDO"}
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-black uppercase tracking-wider mb-2 ${isPremium ? 'text-glow-red text-red-500' : 'text-white'}`}>
          {title}
        </h3>
        <div className="flex flex-col items-center">
          {oldPrice && <span className="text-gray-500 line-through text-sm">{oldPrice}</span>}
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-black ${isPremium ? 'text-white' : 'text-gray-200'}`}>{price}</span>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 size={18} className={isPremium ? "text-red-500 shrink-0" : "text-cyan-500 shrink-0"} />
              <span className="text-sm text-gray-300 leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {bonuses && bonuses.length > 0 && (
          <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
            <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
              <Flame size={12} /> Bônus Exclusivos
            </p>
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Zap size={16} className="text-yellow-500 shrink-0 fill-yellow-500/20" />
                <span className="text-sm text-gray-100 font-semibold leading-tight">{bonus}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto">
        <div className="text-center mb-4">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            {guarantee} de garantia
          </span>
        </div>
        
        <button 
          onClick={handleInitiateCheckout}
          className={`w-full py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 transition-all transform active:scale-95 group ${
            isPremium 
            ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)]' 
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
          }`}
        >
          <ShoppingCart size={18} className="group-hover:translate-x-1 transition-transform" />
          {buttonText}
        </button>
        
        <div className="mt-4 flex items-center justify-center gap-2 text-gray-600 text-[10px] uppercase font-bold tracking-tighter">
          <Lock size={10} />
          Acesso Seguro & Instantâneo
        </div>
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-spooky text-4xl md:text-5xl text-white font-bold mb-4 uppercase tracking-tight">
            Escolha sua <span className="text-red-600 text-glow-red">Jornada</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pacotes digitais completos para imprimir e colorir. Escolha o que melhor combina com sua sede de aventura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard 
            title="Oferta Steve"
            price="R$ 10,00"
            priceNumeric={10.00}
            oldPrice="R$ 29,90"
            features={[
              "20 desenhos Stranger Things",
              "Alta resolução para impressão",
              "Entrega imediata via E-mail",
              "Formato PDF prático"
            ]}
            guarantee="7 dias"
            buttonText="COMEÇAR AGORA"
            checkoutUrl="https://pay.wiapy.com/i38Fc6oP4"
          />

          <PricingCard 
            isPremium
            title="Oferta Vecna"
            price="R$ 19,90"
            priceNumeric={19.90}
            oldPrice="R$ 97,00"
            badge="MELHOR CUSTO-BENEFÍCIO"
            features={[
              "50 desenhos Stranger Things",
              "Acesso Vitalício",
              "Suporte prioritário",
              "Atualizações de novos desenhos"
            ]}
            bonuses={[
              "+50 desenhos de Animes",
              "+50 desenhos de Filmes",
              "+50 desenhos de BTS",
              "+50 desenhos de Doramas",
              "+50 desenhos de Pandinha",
              "+50 desenhos de Heróis"
            ]}
            guarantee="30 dias"
            buttonText="LIBERAR TUDO AGORA"
            checkoutUrl="https://pay.wiapy.com/HbosAuiK5H"
          />
        </div>
      </div>
    </section>
  );
};
