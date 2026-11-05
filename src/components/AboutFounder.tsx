import React from 'react';
import { 
  BrainCircuit, 
  ArrowRight
} from 'lucide-react';

interface AboutFounderProps {
  onOpenDemo?: () => void;
  onOpenCheckout: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenCheckout }) => {
  return (
    <section id="fundadora" className="py-12 sm:py-16 bg-white border-b border-[#ece7dc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center justify-center text-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf3ed] border border-[#d2e2d4] text-xs font-semibold text-[#2d3e30] mb-2.5 mx-auto sm:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8d4a22] shrink-0" />
            <span className="text-center">Tecnologia &amp; Estratégia</span>
            <span className="text-[#a5bca8]">·</span>
            <span className="font-bold text-[#8d4a22] text-center">EASY BYZ CREATOR</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2c22] leading-tight">
            Quem está por trás da tecnologia da sua marmitaria?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5a6256] leading-relaxed">
            Conheça Patrícia (Pati), fundadora da Easy Byz Creator, especialista em processos, consumo e negócios.
          </p>
        </div>

        {/* Layout com foto reduzida pela metade */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Foto da Pati: Reduzida à metade do tamanho original */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative rounded-2xl overflow-hidden border border-[#ded8cb] shadow-md bg-[#f7f5ef] w-[180px] sm:w-[200px] h-[190px] sm:h-[210px] mx-auto md:mx-0">
              <img
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/b5ec21f6b0a870fae542791bdb93b9d5e626853d/patiebc.jpg"
                alt="Patrícia (Pati) - Fundadora da Easy Byz Creator"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-2.5 inset-x-2.5 text-white text-center sm:text-left">
                <div className="text-sm font-bold font-serif-display leading-tight">Patrícia (Pati)</div>
                <div className="text-[10px] text-[#d8e3d9] leading-tight mt-0.5">
                  Fundadora da Easy Byz
                </div>
              </div>
            </div>

            <div className="mt-2.5 text-center sm:text-left max-w-[200px]">
              <span className="text-[11px] text-[#6e786b] italic leading-tight block">
                "Processos inteligentes desenhados para devolver tempo e lucro para você."
              </span>
            </div>
          </div>

          {/* Trajetória & Autoridade */}
          <div className="md:col-span-8 space-y-3.5">
            <p className="text-sm sm:text-base text-[#4a5247] leading-relaxed">
              Há mais de duas décadas, atuo na liderança da <strong className="text-[#1f2c22]">Patitour</strong>, gerenciando operações e logística pedagógica de alta responsabilidade. Essa experiência consolidou minha obsessão por <strong className="text-[#1f2c22]">processos milimétricos</strong>, organização e excelência operacional.
            </p>

            <p className="text-sm sm:text-base text-[#4a5247] leading-relaxed">
              Com o projeto <strong className="text-[#1f2c22]">Geração Literária</strong> e como <strong className="text-[#1f2c22]">autora best-seller na Amazon</strong>, especializei-me em traduzir métodos em ações práticas para empreendedores executarem no dia a dia.
            </p>

            {/* Psicanálise & Negócios */}
            <div className="p-3.5 rounded-xl bg-[#f4f8f4] border border-[#d2e2d4]">
              <div className="flex items-center gap-2 text-[#3b503f] font-bold text-xs uppercase tracking-wider mb-1">
                <BrainCircuit className="w-3.5 h-3.5 text-[#8d4a22]" />
                <span>Psicanálise aplicada ao consumo e aos negócios</span>
              </div>
              <p className="text-xs sm:text-sm text-[#444c41] leading-relaxed">
                Busquei na Psicanálise a compreensão de como os clientes compram e decidem. A união entre a mente humana e automações práticas torna o app irresistível para seus clientes comprarem mais.
              </p>
            </div>

            {/* Parceria com a Chef Gabi */}
            <p className="text-sm sm:text-base text-[#4a5247] leading-relaxed">
              Na <strong className="text-[#1f2c22]">Easy Byz Creator</strong>, nos unimos à metodologia da <strong className="text-[#1f2c22]">Chef Gabi Paludo (EGN)</strong> para entregar a você um aplicativo profissional pronto, eliminando intermediários e taxas abusivas.
            </p>

            {/* Somente o botão Garantir meu App (centralizado) */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenCheckout}
                className="px-8 py-3.5 bg-[#1f2c22] hover:bg-[#2d3e30] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Garantir meu App</span>
                <ArrowRight className="w-4 h-4 text-[#E28D44]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
