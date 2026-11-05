import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { WHATSAPP_SUPPORT_URL, WHATSAPP_SUPPORT_DISPLAY } from '../config/payment';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Qual a diferença entre a Taxa de Configuração e a Mensalidade?',
    answer: 'São duas coisas totalmente distintas e transparentes: a Taxa de Configuração (de R$ 1.497,00 por apenas 5x de R$ 97 ou R$ 485 à vista) é paga apenas UMA VEZ. Ela remunera os designers e técnicos da Easy Byz que vão estruturar seu aplicativo, colocar seu logotipo, cores e cardápio. Já a Mensalidade (que é 100% GRATUITA no primeiro mês e depois apenas R$ 69 fixos congelados por 2 anos) mantém o aplicativo rodando em servidores rápidos sem que você pague nenhuma comissão sobre suas marmitas vendidas.',
  },
  {
    question: 'Como funciona o contrato e a 1ª mensalidade gratuita?',
    answer: 'A primeira mensalidade é 100% gratuita na BLACK Cozinha Lucrativa e o primeiro pagamento ocorre somente 30 dias após a assinatura do contrato. O contrato é anual com renovação automática, garantindo a você a segurança do valor fixo de R$ 69,00/mês congelado e sem qualquer aumento por 2 anos completos (reajuste mínimo somente 2 anos após a data do contrato).',
  },
  {
    question: 'Eu não entendo muito de tecnologia ou computador. Vou conseguir mexer?',
    answer: 'Com certeza! O aplicativo foi desenhado especialmente para a rotina de quem cozinha e vive com a mão na massa. A interface é extremamente limpa, prática e intuitiva. Além disso, a equipe da Easy Byz entrega seu app praticamente pronto e você recebe todo o acompanhamento.',
  },
  {
    question: 'Minhas clientes precisam baixar algum aplicativo na Play Store ou App Store?',
    answer: 'Não! Esse é um dos maiores diferenciais do nosso app. O cliente apenas clica no seu link (que você coloca no Instagram ou na biografia do WhatsApp) e ele abre instantaneamente no navegador do celular, com visual de aplicativo profissional. Se o cliente quiser, ele pode salvar o ícone na tela inicial com um toque.',
  },
  {
    question: 'Como chegam os pedidos e como recebo o pagamento dos clientes?',
    answer: 'O cliente escolhe os pratos, adiciona acompanhamentos e finaliza o pedido. O pedido é recebido no seu WhatsApp e também dentro do sistema do aplicativo para você gerenciar a produção. O app não tem integração de pagamento: o dinheiro das vendas é recebido 100% diretamente por você (via PIX, dinheiro ou cartão na entrega/retirada), sem nenhuma comissão retida.',
  },
  {
    question: 'Quanto tempo leva para meu aplicativo estar no ar?',
    answer: 'Após você garantir sua vaga, nossa equipe entra em contato com você para a assinatura do contrato. Em seguida, recolhemos os dados da sua marmitaria (logo, cores, fotos e pratos), e nossa equipe de implantação entrega seu aplicativo pronto para você começar a vender no prazo de 7 a 10 dias úteis.',
  },
  {
    question: 'O aplicativo segue a metodologia que a Chef Gabi ensina no curso da EGN?',
    answer: 'Sim! Ele foi concebido e estruturado exatamente em cima da metodologia de gestão e comercialização da Escola de Gastronomia e Negócios da Chef Gabi Paludo, integrando precificação, cardápio atraente e fluxo de vendas.',
  },
  {
    question: 'Se eu precisar de mais algum recurso ou função exclusiva para a rotina da minha marmitaria, é possível personalizar?',
    answer: 'Sim! Todos os aplicativos já são personalizados de acordo com a metodologia da Escola e dentro da identidade visual da marca de cada marmitaria (seu logotipo, suas cores e seus pratos). Se no dia a dia da sua operação você sentir que precisa de mais algum recurso ou função diferente que não esteja no aplicativo padrão, é totalmente possível personalizar: basta entrar em contato com a equipe da Easy Byz e solicitar um orçamento para fazermos o ajuste e a adaptação que você precisar.',
  },
];

export const FAQSection: React.FC<{ onOpenCheckout: () => void }> = ({ onOpenCheckout }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#fbf9f5] border-b border-[#e8e2d4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center text-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ecf3ed] border border-[#d2e2d4] text-xs font-semibold text-[#2d3e30] mb-3 mx-auto">
            <HelpCircle className="w-3.5 h-3.5 text-[#49634e] shrink-0" />
            <span className="text-center">Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1f2c22]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-[#5a6256]">
            Tudo o que você precisa saber para tomar sua decisão com 100% de segurança.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#ded8cb] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-[#1f2c22] hover:text-[#8d4a22] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#8d4a22] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4a5247] leading-relaxed border-t border-[#f0ebe0]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#ecf3ed] border border-[#d2e2d4] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck className="w-8 h-8 text-[#3b503f] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[#1f2c22]">Ainda tem alguma dúvida pontual?</div>
              <div className="text-xs text-[#525a4f]">
                Nossa equipe da Easy Byz está pronta para te atender no WhatsApp.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>chamar no whats</span>
            </a>
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#1f2c22] hover:bg-[#2d3e30] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Garantir meu App
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
