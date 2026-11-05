import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Gift, 
  User, 
  Phone, 
  Instagram,
  MessageCircle
} from 'lucide-react';
import { PAYMENT_LINK, WHATSAPP_SUPPORT_URL, GOOGLE_SHEETS_WEBHOOK_URL } from '../config/payment';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  // Formata o número de WhatsApp automaticamente no padrão brasileiro (11) 99999-9999
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
  };

  const handleInstagramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    if (value && !value.startsWith('@')) {
      value = `@${value}`;
    }
    setInstagram(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setValidationError('Por favor, informe seu nome completo.');
      return;
    }

    if (!whatsapp.trim() || whatsapp.replace(/\D/g, '').length < 10) {
      setValidationError('Por favor, informe seu WhatsApp com DDD.');
      return;
    }

    setValidationError('');

    const leadData = {
      fullName: fullName.trim(),
      nome: fullName.trim(),
      nomeCompleto: fullName.trim(),
      whatsapp: whatsapp.trim(),
      telefone: whatsapp.trim(),
      instagram: instagram.trim(),
      dataHora: new Date().toLocaleString('pt-BR'),
      registeredAt: new Date().toISOString()
    };

    // Salva os dados do lead no localStorage para segurança
    try {
      localStorage.setItem('egn_lead_registration', JSON.stringify(leadData));
    } catch {
      // Ignora erro de storage se indisponível
    }

    // Se houver Webhook do Google Sheets configurado, envia para a planilha
    if (GOOGLE_SHEETS_WEBHOOK_URL && GOOGLE_SHEETS_WEBHOOK_URL.trim() !== '') {
      try {
        const targetUrl = new URL(GOOGLE_SHEETS_WEBHOOK_URL);
        targetUrl.searchParams.set('nome', leadData.nome);
        targetUrl.searchParams.set('fullName', leadData.fullName);
        targetUrl.searchParams.set('whatsapp', leadData.whatsapp);
        targetUrl.searchParams.set('telefone', leadData.telefone);
        targetUrl.searchParams.set('instagram', leadData.instagram);
        targetUrl.searchParams.set('dataHora', leadData.dataHora);

        fetch(targetUrl.toString(), {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(leadData)
        }).catch((err) => {
          console.warn('Erro ao registrar no Google Sheets:', err);
        });
      } catch (err) {
        console.warn('Erro na requisição para Google Sheets:', err);
      }
    }

    // Direciona imediatamente para o link de pagamento Asaas
    window.open(PAYMENT_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#ded8cb] flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-[#1f2c22] pt-4 pb-5 px-5 sm:px-6 text-white relative text-center">
          {/* Top Bar with Close Button - fully cleared from the tag below */}
          <div className="flex items-center justify-end -mr-1 mb-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered tag */}
          <div className="inline-flex items-center justify-center text-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2d3e30] border border-[#3b503f] text-xs font-semibold text-[#E28D44] mb-3 mx-auto max-w-full">
            <Gift className="w-3.5 h-3.5 shrink-0" />
            <span className="text-center">condição exclusiva LIMITADA - somente enquanto durar a BLACK Cozinha Lucrativa da EGN</span>
          </div>

          <h3 className="font-serif-display text-lg sm:text-2xl font-bold leading-tight max-w-lg mx-auto">
            <span className="block">Quero garantir para a minha marmitaria</span>
            <span className="block mt-0.5 sm:mt-1 text-[#E28D44]">o aplicativo da EGN - Easy Menu</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#cfded0] mt-2 max-w-lg mx-auto leading-relaxed">
            <span className="block sm:inline">Metodologia da Chef Gabi Paludo</span>
            <span className="hidden sm:inline"> com </span>
            <span className="block sm:inline">Tecnologia e Suporte Easy Byz</span>
          </p>
        </div>

        {/* Modal Body: Formulário Direto com Nome, WhatsApp, Instagram e Botão */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-5">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-[#8d4a22] uppercase tracking-wider block">
                Dados para ativação do seu aplicativo:
              </span>
              <p className="text-xs text-[#525a4f] mt-0.5">
                Preencha os campos abaixo para vincularmos seu app e prosseguir para a condição exclusiva.
              </p>
            </div>

            {/* Campo 1: Nome Completo */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="lead-name" className="text-xs sm:text-sm font-semibold text-[#1f2c22] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8d4a22]" />
                <span>Nome completo *</span>
              </label>
              <input
                id="lead-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Maria da Silva"
                className="w-full px-4 py-3 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] focus:bg-white focus:border-[#E28D44] focus:ring-2 focus:ring-[#E28D44]/20 outline-none text-sm text-[#1f2c22] transition-all"
              />
            </div>

            {/* Campo 2: WhatsApp */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="lead-whatsapp" className="text-xs sm:text-sm font-semibold text-[#1f2c22] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp com DDD *</span>
              </label>
              <input
                id="lead-whatsapp"
                type="tel"
                required
                value={whatsapp}
                onChange={handleWhatsappChange}
                placeholder="Ex: (11) 99999-9999"
                className="w-full px-4 py-3 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] focus:bg-white focus:border-[#E28D44] focus:ring-2 focus:ring-[#E28D44]/20 outline-none text-sm text-[#1f2c22] transition-all"
              />
            </div>

            {/* Campo 3: Instagram */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="lead-instagram" className="text-xs sm:text-sm font-semibold text-[#1f2c22] flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-[#E28D44]" />
                <span>Instagram</span>
              </label>
              <input
                id="lead-instagram"
                type="text"
                value={instagram}
                onChange={handleInstagramChange}
                placeholder="Ex: @minhamarmitaria"
                className="w-full px-4 py-3 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] focus:bg-white focus:border-[#E28D44] focus:ring-2 focus:ring-[#E28D44]/20 outline-none text-sm text-[#1f2c22] transition-all"
              />
            </div>

            {/* Mensagem de Erro de Validação */}
            {validationError && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium text-center">
                {validationError}
              </div>
            )}

            {/* NA SEQUÊNCIA O BOTÃO: "quero meu app agora!" */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#E28D44] hover:bg-[#d87f34] text-[#141c15] text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group text-center"
              >
                <span>quero meu app agora!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </form>

          {/* ABAIXO DO BOTÃO: MANTENHA ESSE BOX COM ESSAS INSTRUÇÕES (IMAGEM 2) */}
          <div className="p-4 rounded-2xl bg-[#ecf3ed] border border-[#d2e2d4] text-xs text-[#2d3e30] space-y-1.5 text-left">
            <div className="font-bold flex items-center gap-2 text-[#1f2c22] text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-[#E28D44] shrink-0" />
              <span>O que acontece após o pagamento:</span>
            </div>
            <p className="text-xs text-[#3b503f] leading-relaxed">
              Nossa equipe entrará em contato para a <strong>assinatura do contrato</strong>. Em seguida, solicitaremos seu logotipo, cores e informações da sua marmitaria para montar seu cardápio, com entrega rápida entre 7 a 10 dias úteis.
            </p>
          </div>

          {/* Garantia e Segurança */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-[#6b7367] text-center pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#49634e]" />
              Garantia de 7 dias
            </span>
            <span>•</span>
            <span>Ambiente 100% Seguro</span>
            <span>•</span>
            <span>Sem fidelidade oculta</span>
          </div>

          {/* Suporte WhatsApp Opcional se tiver dúvidas - sem o número escrito no botão */}
          <div className="pt-2 text-center border-t border-[#ece7dc]">
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3b503f] hover:text-[#1f2c22] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Dúvidas? Fale conosco: <strong>chamar no whats</strong></span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
