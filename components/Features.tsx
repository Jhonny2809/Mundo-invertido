
import React from 'react';
import { Ghost, Bike, Sparkles, Printer, Mail, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-red-600/30 transition-all duration-500 group relative overflow-hidden hover:bg-white/[0.04]">
    <div className="absolute -right-8 -bottom-8 text-white/5 rotate-12 group-hover:text-red-600/5 transition-colors duration-500">
      {icon}
    </div>
    <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm relative z-10">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Benefícios</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">O Mistério nas Suas Mãos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Não é apenas um livro de colorir. É um portal para a criatividade, desenvolvido especialmente para quem adora aventuras retro e mistérios sobrenaturais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            icon={<Ghost size={24} />}
            title="Monstros Incríveis"
            description="Criaturas icônicas do Mundo Invertido desenhadas com detalhes para proporcionar horas de diversão."
          />
          <FeatureCard 
            icon={<Printer size={24} />}
            title="Imprima em Casa"
            description="Receba arquivos em PDF prontos para impressão em papel A4. Imprima quantas vezes quiser!"
          />
          <FeatureCard 
            icon={<Mail size={24} />}
            title="Acesso Instantâneo"
            description="Nada de esperar pelos correios. Após a confirmação, o link chega direto no seu e-mail."
          />
          <FeatureCard 
            icon={<ShieldCheck size={24} />}
            title="Qualidade Premium"
            description="Linhas nítidas e alta resolução garantem que seu trabalho artístico fique perfeito."
          />
          <FeatureCard 
            icon={<Bike size={24} />}
            title="Cenas Clássicas"
            description="Reviva os momentos mais marcantes da série através dos seus lápis de cor."
          />
          <FeatureCard 
            icon={<Sparkles size={24} />}
            title="Desenvolvimento"
            description="Estimule a criatividade, o foco e a coordenação motora com uma atividade relaxante."
          />
        </div>
      </div>
    </section>
  );
};
