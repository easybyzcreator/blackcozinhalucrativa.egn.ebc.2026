import React, { useRef, useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { REELS_DATA } from '../data/testimonialsData';
import { TestimonialReel } from '../types';

interface ReelsTestimonialsProps {
  onSelectReel: (reel: TestimonialReel) => void;
  onOpenCheckout: () => void;
}

export const ReelsTestimonials: React.FC<ReelsTestimonialsProps> = ({ onSelectReel, onOpenCheckout }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#fbf9f5] border-b border-[#e8e2d4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Somente o título */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2c22] leading-tight">
            Alunas que já profissionalizaram as suas marmitarias, contam a sua experiência
          </h2>
        </div>

        {/* Carousel de Vídeos em Linha Horizontal */}
        <div className="relative group">
          {/* Floating Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="flex absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1f2c22]/95 hover:bg-[#1f2c22] text-white backdrop-blur-md border border-white/20 items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Floating Right Arrow: em destaque no meio da tela para o mobile */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="flex absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1f2c22]/95 hover:bg-[#1f2c22] text-[#E28D44] hover:text-white backdrop-blur-md border-2 border-[#E28D44] items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer animate-pulse"
              aria-label="Rolar para ver mais vídeos"
            >
              <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Trilha dos Cards com os Vídeos */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin [scrollbar-color:#3b503f_transparent]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {REELS_DATA.map((reel) => (
              <div
                key={reel.id}
                onClick={() => onSelectReel(reel)}
                className="group/card shrink-0 w-[240px] sm:w-[260px] md:w-[280px] snap-start relative rounded-3xl overflow-hidden bg-[#18211a] border border-[#d8d2c4] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col aspect-[9/16]"
              >
                {/* Background Thumbnail or Poster */}
                {reel.thumbnailUrl ? (
                  <img
                    src={reel.thumbnailUrl}
                    alt={`${reel.studentName} - ${reel.businessName}`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 opacity-85"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#243528]" />
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30" />

                {/* Central Play Button */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover/card:bg-[#E28D44] group-hover/card:text-black group-hover/card:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Information: Somente Nome, Marmitaria e @ do Instagram (sem redirecionar) */}
                <div className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-black via-black/85 to-transparent">
                  <div className="text-white text-base sm:text-lg font-bold leading-tight font-serif-display">
                    {reel.studentName}
                  </div>
                  
                  <div className="text-[#e3cb98] text-xs sm:text-sm font-medium mt-1">
                    {reel.businessName}
                  </div>

                  {/* @ do Instagram estático, não clicável */}
                  <div className="mt-1 text-[11px] sm:text-xs text-[#a5bca8] font-mono select-none">
                    {reel.instagramHandle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador no mobile para sinalizar mais vídeos para o lado */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-3 text-xs text-[#525a4f]">
          <span>Arraste ou clique na setinha</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#E28D44] inline" />
          <span>para ver mais depoimentos</span>
        </div>

        {/* Mantém somente o botão "garantir meu app" */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={onOpenCheckout}
            className="px-8 py-3.5 sm:py-4 bg-[#1f2c22] hover:bg-[#2d3e30] text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            Garantir meu App
          </button>
        </div>

      </div>
    </section>
  );
};
