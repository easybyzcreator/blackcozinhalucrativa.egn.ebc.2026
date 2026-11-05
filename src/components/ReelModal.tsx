import React, { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';
import { TestimonialReel } from '../types';
import { REELS_DATA } from '../data/testimonialsData';

interface ReelModalProps {
  reel: TestimonialReel | null;
  onClose: () => void;
  onSelectReel: (reel: TestimonialReel) => void;
  onOpenCheckout: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ 
  reel, 
  onClose, 
  onSelectReel, 
  onOpenCheckout 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && reel) navigateReel(1);
      if (e.key === 'ArrowLeft' && reel) navigateReel(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reel]);

  if (!reel) return null;

  const currentIndex = REELS_DATA.findIndex(r => r.id === reel.id);

  const navigateReel = (direction: number) => {
    const newIndex = (currentIndex + direction + REELS_DATA.length) % REELS_DATA.length;
    onSelectReel(REELS_DATA[newIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Navigation Arrow Left */}
      <button
        onClick={() => navigateReel(-1)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white items-center justify-center z-20 transition-colors cursor-pointer"
        title="Vídeo anterior"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={() => navigateReel(1)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white items-center justify-center z-20 transition-colors cursor-pointer"
        title="Próximo vídeo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Modal Container (Vertical 9:16 layout) */}
      <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] h-[90vh] max-h-[760px] rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/20 flex flex-col">
        
        {/* Top Controls Bar */}
        <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between text-white pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
            <span className="text-xs font-bold text-[#E28D44]">{reel.studentName}</span>
            <span className="text-white/60 text-xs mx-1.5">·</span>
            <span className="text-xs text-white/90">{reel.businessName}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition cursor-pointer border border-white/15"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area: Google Drive Embed */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
          <iframe
            src={`https://drive.google.com/file/d/${reel.driveId}/preview`}
            title={`Depoimento de ${reel.studentName}`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* Bottom Student Information: Somente Nome, Marmitaria e @ do Instagram */}
        <div className="relative z-30 p-4 sm:p-5 bg-gradient-to-t from-black via-black/95 to-transparent text-white border-t border-white/10">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="font-bold text-base text-white">{reel.studentName}</div>
              <div className="text-xs text-[#E28D44] font-medium">{reel.businessName}</div>
            </div>
            
            {/* Instagram estático sem redirecionamento */}
            <div className="text-[11px] sm:text-xs text-[#a5bca8] font-mono select-none px-2 py-1 rounded-md bg-white/5 border border-white/10">
              {reel.instagramHandle}
            </div>
          </div>

          <div className="mt-3.5">
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full py-3 bg-[#E28D44] hover:bg-[#eb9d59] text-black text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Garantir meu App</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
