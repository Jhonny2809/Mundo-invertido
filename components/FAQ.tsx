
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-red-600/20 group-hover:text-red-500 transition-all ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como recebo o acesso aos desenhos?",
      answer: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com o link para baixar os arquivos em formato PDF de alta resolução."
    },
    {
      question: "Posso imprimir os desenhos mais de uma vez?",
      answer: "Sim! Como o produto é digital, você pode baixar o arquivo e imprimir quantas vezes quiser para colorir novamente ou para compartilhar com seus filhos e amigos."
    },
    {
      question: "Preciso de uma impressora especial?",
      answer: "Não. Os desenhos foram otimizados para serem impressos em qualquer impressora doméstica comum (jato de tinta ou laser) em papel A4 convencional."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Totalmente. Utilizamos plataformas de pagamento líderes de mercado (Wiapy) que garantem a proteção total dos seus dados e a segurança da transação."
    },
    {
      question: "E se eu não gostar dos desenhos?",
      answer: "Oferecemos garantia incondicional. Se você não ficar satisfeito, pode solicitar o reembolso total dentro do prazo de garantia estipulado no seu plano (7 ou 30 dias)."
    }
  ];

  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="text-red-600" size={24} />
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Dúvidas Frequentes</span>
        </div>
        
        <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase">
          Perguntas <span className="text-red-600">Comuns</span>
        </h2>

        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Ainda tem dúvidas? <br />
            Entre em contato pelo e-mail de suporte.
          </p>
        </div>
      </div>
    </section>
  );
};
