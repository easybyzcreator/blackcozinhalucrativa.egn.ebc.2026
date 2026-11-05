/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { AboutAppMethodology } from './components/AboutAppMethodology';
import { OfferBlackFriday } from './components/OfferBlackFriday';
import { ReelsTestimonials } from './components/ReelsTestimonials';
import { AboutFounder } from './components/AboutFounder';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { DemoModal } from './components/DemoModal';
import { CheckoutModal } from './components/CheckoutModal';
import { TestimonialReel } from './types';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [selectedReel, setSelectedReel] = useState<TestimonialReel | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#FBF9F5] text-[#1C1E1B] flex flex-col selection:bg-[#3b503f] selection:text-white overflow-x-hidden">
      {/* Top Navigation */}
      <TopBar
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* Bloco 2: Sobre o App & A Parceria (Metodologia EGN & Chef Gabi) */}
        <AboutAppMethodology
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* Bloco 1: A Oferta de Black Friday (1ª Mensalidade Grátis + Taxa 5x 97) */}
        <OfferBlackFriday
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Bloco 3: Depoimentos em Vídeo (Reels Verticais) */}
        <ReelsTestimonials
          onSelectReel={(reel) => setSelectedReel(reel)}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Bloco 4: Sobre a Fundadora (Pati / Easy Byz Creator) */}
        <AboutFounder
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Perguntas Frequentes / Objeções */}
        <FAQSection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Floating Sticky Quick Action for Mobile & Desktop */}
      <aside aria-label="Ação rápida BLACK Cozinha Lucrativa" className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:bottom-6 sm:right-6 z-30 max-w-md sm:max-w-none mx-auto sm:mx-0">
        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 bg-[#1f2c22] hover:bg-[#2d3e30] text-white rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 transition-all flex items-center justify-center text-xs sm:text-sm font-bold cursor-pointer text-center"
        >
          <span className="truncate">Garantir App: 1ª Mensalidade Grátis</span>
        </button>
      </aside>

      {/* Interactive Modals */}
      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
        onSelectReel={(reel) => setSelectedReel(reel)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
