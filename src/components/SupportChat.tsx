import React, { useState } from 'react';
import { MessageCircle, X, ChevronDown, ChevronUp } from 'lucide-react';

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showFAQ, setShowFAQ] = useState(true);

  const faqItems = [
    {
      question: "Como funciona a geração de nudes?",
      answer: "Nossa IA analisa a foto enviada e remove as roupas de forma realista. O processo leva alguns segundos e o resultado é muito convincente."
    },
    {
      question: "É seguro usar o site?",
      answer: "Sim! Todas as imagens são processadas de forma segura e não armazenamos nenhuma foto após o processamento. Sua privacidade é nossa prioridade."
    },
    {
      question: "Qual a diferença entre FREE e PRO?",
      answer: "Na versão FREE você pode testar com nossas imagens de exemplo. Na versão PRO você pode fazer upload de qualquer foto e gerar quantos nudes quiser."
    },
    {
      question: "Como faço para virar PRO?",
      answer: "Clique no botão 'PRO' no topo da página ou 'VIRAR PRO AGORA' em qualquer lugar do site. O pagamento é único de R$19,90 e você tem acesso vitalício."
    },
    {
      question: "Posso usar fotos de qualquer pessoa?",
      answer: "Tecnicamente sim, mas recomendamos não postá-la em nenhuma rede social."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim! Utilizamos processadores de pagamento seguros e criptografados. Não armazenamos nenhum dos seus dados e todo o suporte após pagamento pode ser feito através do WhatsApp.."
    },
    {
      question: "Posso cancelar minha assinatura?",
      answer: "Não há assinatura! O pagamento é único e você tem acesso vitalício. Caso queira cancelar sua compra, você tem até 7 dias para fazer isso."
    },
    {
      question: "Não recebi meu token PRO",
      answer: "Verifique sua caixa de spam. Se não encontrar, entre em contato conosco pelo WhatsApp que resolveremos imediatamente."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#f90] hover:bg-[#ff8c00] text-black p-4 rounded-full shadow-lg transition-all duration-200 z-50 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-[#1a1a1a] rounded-lg shadow-xl border border-[#272727] z-50">
      {/* Header */}
      <div className="bg-[#f90] text-black p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold">Suporte</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-black hover:bg-opacity-20 p-1 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat Content */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {/* Initial Message */}
        <div className="mb-4">
          <div className="bg-[#272727] p-3 rounded-lg rounded-bl-none">
            <p className="text-white">Oi, em que posso ajudar? 😊</p>
          </div>
        </div>

        {/* FAQ Section */}
        {showFAQ && (
          <div className="space-y-2">
            <p className="text-sm text-[#8f8f8f] mb-3">Perguntas frequentes:</p>
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#272727] rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-3 text-left hover:bg-[#272727] transition-colors rounded-lg flex justify-between items-center"
                >
                  <span className="text-sm text-white">{item.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-4 h-4 text-[#8f8f8f]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8f8f8f]" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-3 pb-3">
                    <p className="text-sm text-[#8f8f8f] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Contact Button */}
        <div className="mt-4 pt-4 border-t border-[#272727]">
          <button
            onClick={() => window.open('https://wa.me/5522945742239', '_blank')}
            className="w-full bg-[#25D366] hover:bg-[#20b358] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            💬 Falar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;