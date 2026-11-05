import React from 'react';
import { ArrowRight, CheckCircle2, Smartphone, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenDemo: () => void;
}

const SmartphoneMockup: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => (
  <div className="relative group max-w-[280px] sm:max-w-[310px] mx-auto">
    {/* Glow ring */}
    <div className="absolute -inset-2 bg-gradient-to-tr from-[#8d4a22]/20 via-[#49634e]/15 to-[#8d4a22]/10 rounded-[44px] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

    {/* Smartphone Device Frame */}
    <div className="relative w-[280px] sm:w-[310px] rounded-[40px] p-3.5 bg-[#18211a] shadow-2xl border-4 border-[#2d3e30]">
      {/* Speaker & camera notch */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#141c15] rounded-full z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2a3a2d] mr-2" />
        <div className="w-10 h-1 bg-[#233126] rounded-full" />
      </div>

      {/* App Screen Container */}
      <div className="relative rounded-[28px] overflow-hidden bg-white aspect-[9/18.5] flex flex-col shadow-inner">
        <img
          src="https://raw.githubusercontent.com/easybyzcreator/imagens/cb407713f18d81287783f0bcedb5c338116fada9/WhatsApp%20Image%202026-10-01%20at%201.42.38%20PM.jpeg"
          alt="Tela de entrada do App Escola de Gastronomia e Negócios"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
        />

        {/* Interactive overlay on phone mockup */}
        <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#e8e2d4] shadow-md text-center">
          <div className="text-[11px] font-bold text-[#1f2c22]">Simulação Oficial da Escola</div>
          <button
            onClick={onOpenDemo}
            className="mt-1 w-full py-1.5 text-[11px] font-semibold text-white bg-[#3b503f] hover:bg-[#2d3e30] rounded-lg transition-colors cursor-pointer"
          >
            Clique para Testar o App
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#fbf9f5] via-[#f7f3ec] to-[#fbf9f5]">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-[#3b503f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 2-Column Split: Text/Price on Left, Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Desktop) / Main Stack (Mobile) */}
          <div className="lg:col-span-7 text-left">
            {/* Editorial Pill Kicker (Imagem 9) */}
            <div className="inline-flex flex-wrap items-center justify-center text-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-[#ecf3ed] border border-[#d2e2d4] text-xs font-semibold text-[#2d3e30] mb-3.5 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49634e] shrink-0" />
              <span className="text-center">Metodologia oficial EGN & tecnologia EASY BYZ</span>
              <span className="text-[#a5bca8] hidden sm:inline">·</span>
              <span className="text-[#8d4a22] font-bold text-center">Edição BLACK Cozinha Lucrativa</span>
            </div>

            {/* Main Headline (Imagem 9) */}
            <h1 className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-bold tracking-tight text-[#1f2c22] leading-[1.14] break-words">
              Transforme sua Marmitaria em uma Operação Profissional e Escalável
            </h1>

            {/* MOCKUP DO CELULAR NO MOBILE (Imagem 8: logo após o trecho de texto da Imagem 9) */}
            <div className="my-7 lg:hidden flex justify-center">
              <SmartphoneMockup onOpenDemo={onOpenDemo} />
            </div>

            {/* Subtitle (Imagem 10) */}
            <p className="mt-4 text-base sm:text-lg text-[#494F46] leading-relaxed">
              O aplicativo exclusivo desenvolvido sob a metodologia oficial da{' '}
              <strong className="text-[#1f2c22] font-semibold">
                Escola de Gastronomia e Negócios (EGN) da Chef Gabi Paludo
              </strong>{' '}
              e tecnologia <strong className="text-[#1f2c22] font-semibold">EASY BYZ</strong>.
            </p>

            {/* Destaque Maior para os Preços e Condição de Black Friday (Imagem 10) */}
            <div className="mt-6 bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#1f2c22]/15 shadow-md">
              <div className="inline-flex items-center justify-center text-center gap-1.5 px-3 py-1 rounded-full bg-[#E28D44]/15 text-[#9e5719] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#E28D44] shrink-0" />
                <span className="text-center">Condição Exclusiva BLACK Cozinha Lucrativa</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {/* Card 1: Taxa de Configuração */}
                <div className="bg-[#fbf9f5] p-3 sm:p-3.5 rounded-xl border border-[#ded8cb] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b7367] block">
                      Configuração e Personalização
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#8a9486] font-semibold">DE:</span>
                      <span className="text-xs text-stone-400 font-bold line-through decoration-[#ef4444] decoration-[2px]">
                        R$ 1.497,00
                      </span>
                      <span className="text-[10px] font-bold text-[#ef4444] bg-[#ef4444]/10 px-1.5 py-0.2 rounded">
                        ✕ OFF
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-[#8d4a22]">POR:</span>
                      <span className="text-xl sm:text-2xl font-bold font-serif-display text-[#1f2c22]">
                        5x de R$ 97,00
                      </span>
                    </div>
                    <div className="text-[11px] text-[#49634e] font-semibold mt-0.5">Pagamento facilitado em até 5x</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#e8e2d4] text-[11px] text-[#49634e] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#49634e] shrink-0" />
                    <span>Paga apenas 1 única vez</span>
                  </div>
                </div>

                {/* Card 2: 1ª Mensalidade Gratuita */}
                <div className="bg-[#1f2c22] text-white p-3 sm:p-3.5 rounded-xl flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E28D44] block">
                      Mensalidade do Aplicativo
                    </span>
                    <div className="text-base sm:text-lg font-bold font-serif-display text-white mt-1">
                      1ª Mensalidade: <span className="text-[#8bf39c]">GRÁTIS</span>
                    </div>
                    <div className="text-[11px] text-[#cfded0] mt-0.5">
                      Começa 30 dias após assinar
                    </div>
                    <div className="text-xs text-white/90 mt-1 font-medium">
                      Depois: apenas <strong className="text-white font-bold">R$ 69,00/mês</strong> fixos
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/15 text-[11px] text-[#8bf39c] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8bf39c] shrink-0" />
                    <span>Valor fixo garantido por 2 anos</span>
                  </div>
                </div>
              </div>

              {/* Zero comissão note */}
              <div className="mt-2.5 text-xs text-[#525a4f] flex items-center gap-1.5 font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#49634e]" />
                <span>Zero comissão sobre suas marmitas · Contrato anual com renovação automática</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs (Imagem 10) */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenCheckout}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1f2c22] hover:bg-[#2d3e30] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Garantir meu App na BLACK Cozinha Lucrativa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-5 py-3.5 text-sm font-medium text-[#2d3e30] bg-[#ffffff] hover:bg-[#f3efe6] border border-[#d8d0c2] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-[#8d4a22]" />
                <span>Ver Demonstração do App</span>
              </button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <SmartphoneMockup onOpenDemo={onOpenDemo} />
          </div>

        </div>

        {/* Bottom Two Pillar Cards: Gestão Prática & Método EGN */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Gestão Prática */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#e8e2d4] shadow-sm hover:border-[#3b503f]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8d4a22] flex items-center gap-1.5 mb-2">
                <span className="w-3 h-0.5 bg-[#8d4a22]" />
                GESTÃO PRÁTICA
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#1f2c22] mb-2">
                Uma ferramenta prática para organizar, gerir e profissionalizar sua marmitaria.
              </h3>
            </div>
            <p className="text-sm text-[#5a6256] leading-relaxed">
              Centralize os pedidos que chegam pelo WhatsApp, controle suas rotas de entrega e tenha o valor total do dia na ponta dos dedos sem planilhas confusas.
            </p>
          </div>

          {/* Card: Método EGN */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#e8e2d4] shadow-sm hover:border-[#3b503f]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#3b503f] flex items-center gap-1.5 mb-2">
                <span className="w-3 h-0.5 bg-[#3b503f]" />
                MÉTODO EGN
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#1f2c22] mb-2">
                Desenvolvido com a metodologia e as ferramentas práticas da Chef Gabi.
              </h3>
            </div>
            <p className="text-sm text-[#5a6256] leading-relaxed">
              Tudo o que você aprende nas aulas da escola agora traduzido em um sistema simples, ágil e feito especialmente para a rotina intensa da cozinha de marmitas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
