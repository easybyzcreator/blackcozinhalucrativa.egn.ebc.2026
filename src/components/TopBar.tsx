import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface TopBarProps {
  onOpenCheckout: () => void;
  onOpenDemo: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCheckout, onOpenDemo }) => {
  return (
    <>
      {/* Black Friday Urgency Ribbon */}
      <div className="bg-[#1f2c22] text-[#f4f8f4] text-xs sm:text-sm py-2 px-4 border-b border-[#2d3e30]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E28D44] animate-pulse" />
            <span className="font-semibold text-[#E28D44] uppercase tracking-wider text-[11px] sm:text-xs">
              BLACK Cozinha Lucrativa Oficial EGN
            </span>
            <span className="text-[#a8b8aa] hidden md:inline">·</span>
            <span className="text-[#e2ece3] hidden md:inline">
              1ª Mensalidade Grátis · Configuração e Personalização de <span className="line-through text-[#ef4444] decoration-[#ef4444] decoration-2">R$ 1.497</span> por apenas 5x de R$ 97
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCheckout}
              className="text-[#E28D44] hover:text-[#f3a462] font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
            >
              Garantir Condição Especial
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar Contract: 3 zones */}
      <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e8e2d4] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1f2c22] hover:opacity-90 transition-opacity"
          >
            EGN <span className="font-normal text-[#8d4a22]">×</span> EASY BYZ
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#494F46]">
            <a href="#beneficios" className="hover:text-[#1f2c22] transition-colors">
              Benefícios
            </a>
            <a href="#metodologia" className="hover:text-[#1f2c22] transition-colors">
              O Aplicativo
            </a>
            <a href="#depoimentos" className="hover:text-[#1f2c22] transition-colors">
              Depoimentos
            </a>
            <a href="#fundadora" className="hover:text-[#1f2c22] transition-colors">
              A Fundadora
            </a>
            <a href="#oferta" className="text-[#8d4a22] font-semibold hover:text-[#b05c2a] transition-colors">
              Oferta BLACK Cozinha Lucrativa
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <PWAInstallButton />
            <button
              onClick={onOpenCheckout}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1f2c22] hover:bg-[#2d3e30] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              <span>Garantir meu App</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
