import React from 'react';
import { X, ExternalLink, Smartphone, RefreshCw, ChefHat } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  if (!isOpen) return null;

  const demoUrl = 'https://egn-chefgabipaludo.vercel.app/';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-x-hidden">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl h-[94vh] max-h-[820px] bg-[#fbf9f5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#ded8cb] flex flex-col">
        
        {/* Top Header */}
        <div className="p-3.5 sm:px-6 bg-[#1f2c22] text-white flex items-center justify-between shrink-0 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#2d3e30] flex items-center justify-center text-[#E28D44] shrink-0">
              <ChefHat className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <span>Simulação: Escola de Gastronomia &amp; Negócios</span>
                <span className="hidden sm:inline-block text-[10px] bg-[#E28D44] text-black px-1.5 py-0.2 rounded font-semibold uppercase shrink-0">
                  Ao Vivo
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#a5bca8] truncate">
                Metodologia Chef Gabi Paludo · Tecnologia Easy Byz
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] sm:text-xs text-[#cfded0] hover:text-white px-2.5 py-1.5 rounded-lg border border-[#3b503f] hover:bg-[#2d3e30] transition-colors"
              title="Abrir em Nova Aba"
            >
              <span className="hidden xs:inline">Abrir</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer shrink-0"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area: Smartphone Frame Preview + Benefits Panel */}
        <div className="flex-1 bg-[#ede8e0] p-3 sm:p-6 flex flex-col lg:flex-row items-center justify-start lg:justify-center gap-6 sm:gap-8 overflow-y-auto overflow-x-hidden w-full">
          
          {/* Smartphone Simulator - Responsivo para qualquer tela mobile */}
          <div className="relative w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[380px] h-[480px] sm:h-[640px] bg-[#141c15] rounded-[36px] sm:rounded-[48px] p-2.5 sm:p-3.5 shadow-2xl border-2 sm:border-4 border-[#2d3e30] shrink-0 mx-auto">
            {/* Notch */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-3.5 sm:h-4 bg-[#141c15] rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[#2a3a2d] mr-1.5" />
              <div className="w-8 sm:w-10 h-1 bg-[#233126] rounded-full" />
            </div>

            {/* IFrame container */}
            <div className="w-full h-full rounded-[28px] sm:rounded-[38px] overflow-hidden bg-white shadow-inner">
              <iframe
                src={demoUrl}
                title="Demonstração do Aplicativo da Marmitaria EGN"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </div>
          </div>

          {/* Side Info & CTA */}
          <div className="max-w-md space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d4a22]">
              <Smartphone className="w-4 h-4" />
              <span>Experiência Real no Celular</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1f2c22] leading-tight">
              É exatamente assim que os seus clientes vão ver e pedir
            </h3>

            <p className="text-sm text-[#4a5247] leading-relaxed">
              O aplicativo carrega na hora, sem downloads lentos. As fotos dos pratos enchem os olhos, os acompanhamentos são personalizados e o pedido sai limpo direto para o seu WhatsApp e para o sistema do app.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#ded8cb] space-y-2 text-xs text-[#3b503f]">
              <div className="font-semibold text-[#1f2c22] text-sm">
                Condição Oficial BLACK Cozinha Lucrativa:
              </div>
              <div>✓ 1. Taxa de configuração e personalização em 5x de R$ 97,00 (paga apenas 1 vez)</div>
              <div>✓ 2. Primeira mensalidade gratuita (início 30 dias após assinatura do contrato)</div>
              <div>✓ Depois apenas R$ 69,00/mês fixos congelados por 2 anos completos</div>
              <div>✓ Zero comissões sobre suas marmitas e pedidos ilimitados</div>
              <div>✓ Contrato anual com renovação automática</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3.5 px-6 bg-[#1f2c22] hover:bg-[#2d3e30] text-white text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer text-center"
              >
                Garantir meu App na BLACK Cozinha Lucrativa
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
