import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  AlertCircle, 
  CreditCard, 
  Zap, 
  Gift 
} from 'lucide-react';

interface OfferBlackFridayProps {
  onOpenCheckout: () => void;
}

export const OfferBlackFriday: React.FC<OfferBlackFridayProps> = ({ onOpenCheckout }) => {
  // Countdown timer for authentic Black Friday urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-[#1f2c22] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#cf6e35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#49634e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center text-center gap-2 px-4 py-1.5 rounded-full bg-[#2d3e30] border border-[#49634e] text-xs font-semibold text-[#E28D44] mb-4 mx-auto max-w-full">
            <Gift className="w-3.5 h-3.5 text-[#E28D44] shrink-0" />
            <span className="text-center font-bold">condição exclusiva LIMITADA - somente enquanto durar a BLACK Cozinha Lucrativa da EGN</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Chegou a hora de ter o seu próprio aplicativo com a metodologia EGN
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#cfded0] leading-relaxed">
            Uma oferta desenhada exclusivamente para as alunas da Chef Gabi Paludo começarem com o pé direito e sem custos pesados. Aproveite a <strong className="text-white">condição exclusiva LIMITADA - somente enquanto durar a BLACK Cozinha Lucrativa da EGN</strong>.
          </p>

          {/* Countdown Clock & Dates */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 bg-[#141c15] px-4 sm:px-5 py-2.5 rounded-2xl border border-[#2d3e30] max-w-full text-center">
            <div className="flex items-center justify-center gap-2 text-center">
              <Clock className="w-4 h-4 text-[#E28D44] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#E28D44] text-center">
                condição exclusiva LIMITADA - somente enquanto durar a BLACK Cozinha Lucrativa da EGN
              </span>
            </div>
            <span className="text-[#3b503f] hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base font-bold text-white shrink-0">
              <span className="text-xs font-sans text-[#a5bca8] font-normal mr-1">Tempo restante:</span>
              <span className="bg-[#2a3b2d] px-2 py-0.5 rounded text-[#E28D44]">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span className="bg-[#2a3b2d] px-2 py-0.5 rounded text-[#E28D44]">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span className="bg-[#2a3b2d] px-2 py-0.5 rounded text-[#E28D44]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* The Two Distinct Core Blocks: Setup Fee vs Fixed Monthly Fee */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Taxa de Configuração e Personalização */}
          <div className="bg-[#26372a] rounded-3xl p-5 sm:p-8 border border-[#3b503f] flex flex-col justify-between relative shadow-xl">
            {/* Tag centralizada no topo */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#374d3b] text-[#E28D44] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-[#49634e] shadow-md whitespace-nowrap text-center">
              Paga apenas 1 vez
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a5bca8] block mb-4 mt-2 sm:mt-0 text-center sm:text-left">
                  1. TAXA DE CONFIGURAÇÃO E PERSONALIZAÇÃO
                </span>

                {/* Preço DE: 1.497,00 com "X" / Riscado por cima */}
                <div className="inline-flex items-center gap-2 mb-4 bg-[#1b271e] px-3.5 py-2 rounded-xl border border-[#374d3b]">
                  <span className="text-xs font-bold text-[#a5bca8] uppercase tracking-wider">DE:</span>
                  <span className="relative text-base sm:text-lg font-bold text-white/50 line-through decoration-[#ef4444] decoration-[3px]">
                    R$ 1.497,00
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#ef4444] bg-[#ef4444]/10 px-2 py-0.5 rounded">
                    ✕ OFF
                  </span>
                </div>

                {/* Preço POR: 5x 97,00 */}
                <div className="mt-1 mb-6 flex flex-col">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E28D44]">POR APENAS:</span>
                    <span className="text-3xl sm:text-4xl font-serif-display font-bold text-white">
                      5x de R$ 97,00
                    </span>
                  </div>
                  <span className="text-xs text-[#a5bca8] mt-1.5 font-medium">Pagamento facilitado em até 5 vezes</span>
                </div>
              </div>

              {/* O que está incluso com melhor espaçamento e distribuição */}
              <div className="my-4 pt-6 border-t border-[#374d3b] space-y-4 text-sm text-[#cfded0]">
                <div className="font-semibold text-white text-xs uppercase tracking-wider mb-2">
                  O que está incluso na sua configuração e personalização:
                </div>
                
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#1e2c21]/60 border border-[#374d3b]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#E28D44] shrink-0 mt-0.5" />
                  <span className="leading-snug">Personalização completa com seu logotipo, cores e identidade</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#1e2c21]/60 border border-[#374d3b]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#E28D44] shrink-0 mt-0.5" />
                  <span className="leading-snug">Estruturação do cardápio digital com a metodologia EGN</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#1e2c21]/60 border border-[#374d3b]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#E28D44] shrink-0 mt-0.5" />
                  <span className="leading-snug">Suporte e treinamento humanizado pela equipe Easy Byz</span>
                </div>
              </div>

              {/* Prazo de entrega estruturado */}
              <div className="mt-4 p-3 rounded-xl bg-[#18231a] border border-[#374d3b] flex items-center gap-2.5 text-xs text-[#cfded0]">
                <Clock className="w-4 h-4 text-[#8bf39c] shrink-0" />
                <span><strong>Prazo de entrega:</strong> pronto entre 7 e 10 dias úteis.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#374d3b]/50 text-xs text-[#8ca390]">
              *Valor único de implantação técnica. Você não paga taxa de configuração novamente.
            </div>
          </div>

          {/* Card 2: Primeira Mensalidade Gratuita + Mensalidade Fixa */}
          <div className="bg-gradient-to-b from-[#2e4233] to-[#243528] rounded-3xl p-5 sm:p-8 border-2 border-[#E28D44] flex flex-col justify-between relative shadow-2xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E28D44] text-[#141c15] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm whitespace-nowrap text-center">
              Presente BLACK Cozinha Lucrativa
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E28D44] block mb-2 mt-2 sm:mt-0 text-center sm:text-left">
                2. MENSALIDADE DO APLICATIVO
              </span>

              <div className="mt-2 flex flex-col">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
                    1ª Mensalidade:
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif-display font-bold text-[#8bf39c] mt-0.5">
                    R$ 0,00
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#8bf39c] uppercase tracking-wider mt-1.5">
                  100% GRATUITA NO PRIMEIRO MÊS
                </span>
                
                {/* Nota explícita: começa a pagar 30 dias após assinatura */}
                <div className="mt-3 p-3 rounded-xl bg-[#1b291e] border border-[#3b503f] text-xs text-[#d8e8da] leading-relaxed">
                  <strong className="text-white">Importante:</strong> Você começa a pagar a primeira mensalidade somente <strong className="text-[#8bf39c]">30 dias após a assinatura do contrato</strong>.
                </div>

                <span className="text-sm text-[#cfded0] mt-3">
                  Depois, apenas <strong className="text-white text-base font-bold">R$ 69,00 fixos/mês</strong>.
                </span>

                {/* Garantia de 2 anos com valor fixo sem aumento */}
                <div className="mt-2.5 p-3 rounded-xl bg-[#283d2e] border border-[#E28D44]/40 text-xs text-[#f4f8f4] leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E28D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#E28D44]">Valor fixo garantido por 2 anos:</strong> Quem comprar agora na BLACK Cozinha Lucrativa tem o valor de R$ 69,00/mês congelado. Qualquer reajuste mínimo acontecerá <strong className="text-white">somente 2 anos após a data do contrato</strong>.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#3b503f] space-y-3.5 text-sm text-[#cfded0]">
                <div className="font-semibold text-white text-xs uppercase tracking-wider">
                  Liberdade total para a sua marmitaria:
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8bf39c] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">NÃO TEM taxa extra</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8bf39c] shrink-0 mt-0.5" />
                  <span>Pedidos ILIMITADOS sem nenhuma comissão sobre seu faturamento</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8bf39c] shrink-0 mt-0.5" />
                  <span>Hospedagem em nuvem de alta velocidade e link seguro</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3b503f]/50 text-xs text-[#8ca390]">
              *Contrato anual com renovação automática.
            </div>
          </div>

        </div>

        {/* Transparency Alert Box: "Lembrando que são 2 coisas distintas" */}
        <div className="mt-8 bg-[#18231a] rounded-2xl p-5 border border-[#3b503f] flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#E28D44] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#cfded0] leading-relaxed">
            <strong className="text-white font-semibold">Total transparência para você:</strong>{' '}
            A <span className="text-[#E28D44] font-medium">Taxa de Configuração e Personalização</span> (5x R$ 97) remunera a equipe que monta o seu aplicativo sob medida com a sua marca. A <span className="text-[#8bf39c] font-medium">Mensalidade</span> (com a primeira 100% gratuita na BLACK Cozinha Lucrativa e depois apenas R$ 69 fixos congelados por 2 anos) cobre a manutenção do app no ar sem nenhuma comissão sobre suas marmitas.
          </div>
        </div>

        {/* Marketplaces Comparison Card */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#26372a]/70 border border-[#3b503f] text-center">
          <div className="text-xs uppercase tracking-wider text-[#a5bca8] font-bold mb-1.5">
            Por que essa é a decisão mais inteligente para a sua marmitaria?
          </div>
          <p className="text-xs sm:text-sm text-[#cfded0] max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
            Se você vender <strong className="text-white">R$ 8.000</strong> em marmitas no mês através de apps de entrega convencionais que cobram de 20% a 27%, você entrega <strong className="text-[#E28D44]">mais de R$ 1.800 em comissões</strong> todo mês. Com seu próprio app, seu custo é de apenas R$ 69 fixos. Você economiza milhares de reais por&nbsp;ano!
          </p>
        </div>

        {/* Big Conversion Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 text-base sm:text-lg font-bold text-[#141c15] bg-[#E28D44] hover:bg-[#eb9d59] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
          >
            <span>Quero Meu Aplicativo na BLACK Cozinha Lucrativa</span>
            <ArrowRight className="w-5 h-5 text-[#141c15]" />
          </button>
          
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#a5bca8]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8bf39c]" />
              Garantia incondicional de 7 dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#8bf39c]" />
              Pagamento facilitado em até 5x
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
