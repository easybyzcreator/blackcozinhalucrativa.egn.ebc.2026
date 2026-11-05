import React from 'react';
import { ChefHat, Smartphone, Heart, ArrowUp, MessageCircle } from 'lucide-react';
import { WHATSAPP_SUPPORT_URL, WHATSAPP_SUPPORT_DISPLAY } from '../config/payment';
import { PWAInstallButton } from './PWAInstallButton';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onOpenDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141c15] text-[#cfded0] pt-16 pb-12 border-t border-[#233126]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#243528]">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif-display text-2xl font-bold text-white tracking-tight">
              EGN <span className="text-[#8d4a22]">×</span> EASY BYZ
            </div>
            <p className="text-sm text-[#9eb2a0] leading-relaxed max-w-sm">
              O aplicativo personalizado desenvolvido exclusivamente para marmitarias sob a metodologia da Escola de Gastronomia e Negócios (EGN) da Chef Gabi Paludo e tecnologia Easy Byz Creator.
            </p>
            <div className="text-xs text-[#7e9481]">
              Profissionalização, controle de lucro e autonomia sem intermediários abusivos.
            </div>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </div>
            <ul className="space-y-2 text-sm text-[#9eb2a0]">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  O Aplicativo
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#fundadora" className="hover:text-white transition-colors">
                  A Fundadora
                </a>
              </li>
              <li>
                <a href="#oferta" className="text-[#E28D44] hover:text-[#f3a462] font-semibold transition-colors">
                  Oferta BLACK Cozinha Lucrativa
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Simulation */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Acesso &amp; Suporte
            </div>
            <p className="text-xs text-[#9eb2a0] leading-relaxed">
              Dúvidas sobre a implantação ou regras da BLACK Cozinha Lucrativa? Fale diretamente com nossa equipe.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={onOpenCheckout}
                className="w-full py-2.5 px-4 bg-[#E28D44] hover:bg-[#eb9d59] text-black text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
              >
                Garantir meu App
              </button>
              <a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>chamar no whats</span>
              </a>
              <button
                onClick={onOpenDemo}
                className="w-full py-2.5 px-4 bg-[#243528] hover:bg-[#2d4232] text-white text-xs font-medium rounded-xl transition-colors cursor-pointer text-center"
              >
                Ver Demonstração do App
              </button>
              <div className="pt-1 flex justify-center">
                <PWAInstallButton className="w-full justify-center py-2" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e9481]">
          <div>
            © {new Date().getFullYear()} EGN &amp; Easy Byz Creator. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Metodologia Chef Gabi Paludo</span>
            <span>·</span>
            <span>Tecnologia Easy Byz</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#243528] hover:bg-[#2d4232] text-white flex items-center justify-center transition ml-2 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
