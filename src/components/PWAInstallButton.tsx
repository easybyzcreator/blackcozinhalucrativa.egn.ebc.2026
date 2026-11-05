import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`flex items-center gap-1.5 rounded-lg border border-[#3b503f] bg-[#243527] px-3 py-1.5 text-xs font-semibold text-[#8bf39c] hover:bg-[#2d4130] transition shadow-xs cursor-pointer ${className}`}
        title="Instalar aplicativo no seu celular ou computador"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Instalar App</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-1.5 rounded-lg border border-[#3b503f] bg-[#243527] px-3 py-1.5 text-xs font-semibold text-[#8bf39c] hover:bg-[#2d4130] transition shadow-xs cursor-pointer ${className}`}
          title="Como instalar no iPhone ou iPad"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Instalar no iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-[#ded8cb] text-[#1c1e1b]">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/pwa-192x192.png"
                  alt="App Marmitaria EGN"
                  className="w-12 h-12 rounded-xl object-cover shadow-sm border border-stone-200"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#1f2c22]">Instalar no iPhone / iPad</h3>
                  <p className="text-xs text-stone-500">App Marmitaria EGN</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700 mt-4 bg-[#fbf9f5] p-3.5 rounded-xl border border-[#ece7dc]">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1f2c22] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                  <span>Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima) na barra inferior do Safari.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1f2c22] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                  <span>Role para baixo e selecione <strong>Adicionar à Tela de Início</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1f2c22] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                  <span>Toque em <strong>Adicionar</strong> no canto superior direito para finalizar.</span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-[#1f2c22] hover:bg-[#2d3e30] py-2.5 text-xs font-bold text-white transition cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
