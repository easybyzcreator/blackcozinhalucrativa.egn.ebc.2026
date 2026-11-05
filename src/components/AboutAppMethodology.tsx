import React from 'react';
import { 
  ShieldCheck, 
  SlidersHorizontal, 
  ShoppingBag, 
  TrendingUp, 
  UtensilsCrossed, 
  DollarSign, 
  Smartphone, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ChefHat 
} from 'lucide-react';

interface AboutAppMethodologyProps {
  onOpenCheckout: () => void;
  onOpenDemo: () => void;
}

export const AboutAppMethodology: React.FC<AboutAppMethodologyProps> = ({ onOpenCheckout, onOpenDemo }) => {
  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-white border-y border-[#ece7dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Sub-block A: E se você pudesse ter a sua própria estrutura? (Chef Gabi photo + Vision) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chef Gabi Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#e2dcd0] shadow-md bg-[#f7f5ef]">
              <img
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/b5ec21f6b0a870fae542791bdb93b9d5e626853d/gabi%20egn.jpeg"
                alt="Chef Gabi Paludo segurando o celular com o aplicativo da marmitaria"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center"
              />

              {/* Tag overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d6cfc0] shadow-xs flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-[#8d4a22]" />
                <span className="text-xs font-semibold text-[#1f2c22]">Chef Gabi Paludo · EGN</span>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 text-white">
                <p className="text-sm sm:text-base font-medium italic">
                  "O conhecimento na cozinha precisa ser acompanhado de uma ferramenta de vendas e gestão à altura."
                </p>
                <span className="text-xs text-[#d8e3d9] mt-1 block">
                  Metodologia oficial da Escola de Gastronomia e Negócios
                </span>
              </div>
            </div>
          </div>

          {/* Vision Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d4a22] mb-3">
              <span className="w-3 h-0.5 bg-[#8d4a22]" />
              Independência e Controle
            </div>

            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#1f2c22] leading-tight">
              E se você pudesse ter a sua própria estrutura?
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#4a5247] leading-relaxed">
              <p>
                E se, em vez de depender somente de plataformas de terceiros que cobram taxas abusivas e escondem seus clientes, você pudesse ter um <strong className="text-[#1f2c22]">aplicativo da sua própria marmitaria</strong>?
              </p>
              <p>
                Um canal direto onde o seu cliente encontra seus pratos, seus preços, suas regras de entrega e faz o pedido com facilidade e rapidez.
              </p>
              <p>
                E onde você também consegue organizar os pedidos, os custos e o caixa do seu negócio sem se perder em mensagens soltas no WhatsApp.
              </p>
              <p className="font-bold text-[#1f2c22] pt-2 text-lg">
                Foi a partir dessa necessidade que nasceu essa solução exclusiva.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenDemo}
                className="px-5 py-3 text-sm font-semibold text-[#1f2c22] bg-[#f2efe8] hover:bg-[#e9e4d8] border border-[#d6cec0] rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Ver Demonstração do App da Escola</span>
                <ExternalLink className="w-4 h-4 text-[#8d4a22]" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-block B: Da Metodologia da Escola para a Palma da sua Mão */}
        <div className="mt-20 pt-16 border-t border-[#ece7dc]">
          <div className="text-center max-w-5xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf3ed] border border-[#d2e2d4] text-xs font-semibold text-[#2d3e30] mb-3">
              <Sparkles className="w-3 h-3 text-[#49634e]" />
              <span>Metodologia Validada + Tecnologia</span>
            </div>
            
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1f2c22] tracking-tight leading-tight break-words">
              Da metodologia da escola para a <span className="underline decoration-[#49634e]/50 decoration-4 underline-offset-6">palma da sua mão</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#525a4f] max-w-3xl mx-auto">
              Como transformar o que você aprendeu com a <strong className="text-[#1f2c22]">Chef Gabi</strong> em vendas diárias, margem de lucro real e organização sem complicação.
            </p>
          </div>

          {/* 2 Big Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#fbf9f5] border border-[#e8e2d4] flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2d3e30] text-white flex items-center justify-center shrink-0">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1f2c22]">Conhecimento na prática</h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5a6256] leading-relaxed">
                  O seu conhecimento na cozinha agora com uma ferramenta de gestão à altura, alinhada com as fichas técnicas e a dinâmica de pedidos.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#fbf9f5] border border-[#e8e2d4] flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8d4a22] text-white flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1f2c22]">Tecnologia sob medida</h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5a6256] leading-relaxed">
                  A tecnologia feita sob medida para a rotina intensa da marmitaria: rápida, sem travas e fácil de operar mesmo entre fogões e panelas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-block C: Vantagens e Benefícios (4 Cards Compactos) */}
        <div id="beneficios" className="mt-14 sm:mt-20">
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1f2c22] tracking-tight leading-tight">
              Vantagens e Benefícios de ter o seu App Personalizado
            </h2>
            <div className="w-16 h-1 bg-[#49634e] mx-auto mt-3 rounded-full" />
          </div>

          {/* 4 cards compactos em formato retangular, sem excesso de espaço em branco */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
            {/* 1. Profissionalização */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-[#e5dfd3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-lg bg-[#ecf3ed] text-[#2d3e30] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#3b503f]" />
                </div>
                <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1f2c22] leading-snug">
                  Profissionalização imediata
                </h3>
              </div>
              <p className="text-xs text-[#5a6256] leading-relaxed">
                Transmita autoridade e credibilidade com a identidade oficial do método EGN.
              </p>
            </div>

            {/* 2. Gestão simplificada */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-[#e5dfd3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-lg bg-[#ecf3ed] text-[#2d3e30] flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-5 h-5 text-[#3b503f]" />
                </div>
                <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1f2c22] leading-snug">
                  Gestão simplificada
                </h3>
              </div>
              <p className="text-xs text-[#5a6256] leading-relaxed">
                Organize pedidos, cardápio digital e rotina em um só lugar, reduzindo erros e tempo.
              </p>
            </div>

            {/* 3. Experiência de compra */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-[#e5dfd3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-lg bg-[#ecf3ed] text-[#2d3e30] flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5 text-[#3b503f]" />
                </div>
                <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1f2c22] leading-snug">
                  Experiência superior
                </h3>
              </div>
              <p className="text-xs text-[#5a6256] leading-relaxed">
                Navegação prática, rápida e intuitiva para seus clientes fazerem pedidos sem atrito.
              </p>
            </div>

            {/* 4. Foco em crescimento */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-[#e5dfd3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-lg bg-[#ecf3ed] text-[#2d3e30] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#3b503f]" />
                </div>
                <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1f2c22] leading-snug">
                  Foco em crescimento
                </h3>
              </div>
              <p className="text-xs text-[#5a6256] leading-relaxed">
                A tecnologia cuida da rotina enquanto você foca na cozinha e na expansão das vendas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
