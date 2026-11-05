/**
 * Configuração do Link de Pagamento Oficial
 * Quando o cliente enviar o link de pagamento final, basta substituir o valor da constante PAYMENT_LINK abaixo.
 */
export const PAYMENT_LINK = 'https://www.asaas.com/000/c/9g1nm9z8rnu912xr';

/**
 * URL do Webhook do Google Sheets (Google Apps Script)
 * Basta colar a URL gerada no Google Apps Script aqui para gravar os leads automaticamente na planilha.
 */
export const GOOGLE_SHEETS_WEBHOOK_URL: string =
  'https://script.google.com/macros/s/AKfycbxVlR4p_OMXI7_9PjzXFvfIraRoQtOKfxICA_5IdjsaT4umHo_EjzvLW_V59z_k4zeu/exec';

export const WHATSAPP_SUPPORT_PHONE = '18038889018';
export const WHATSAPP_SUPPORT_DISPLAY = '+1 803 888 9018';
export const WHATSAPP_SUPPORT_URL = `https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encodeURIComponent(
  'Olá Pati e equipe Easy Byz! Sou aluna da Chef Gabi Paludo e quero tirar dúvidas sobre o aplicativo EGN - Easy Menu e a condição especial da BLACK Cozinha Lucrativa!'
)}`;
