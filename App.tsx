
import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-red-600/30 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-grid" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-900/5 blur-[120px] rounded-full" />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
