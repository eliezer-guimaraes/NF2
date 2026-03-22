import React from 'react';
import { Check, Star, Shield, Clock, Zap } from 'lucide-react';

const testimonials = [
  {
    name: "Emanuel Serafim",
    role: "Usuário há 1 semana",
    content: "Sensacional, muito melhor do que essas IA pagas que é cara pra krl.",
    rating: 5,
    image: "https://i.redd.it/o-que-acham-do-meu-perfil-fiz-o-mesmo-perfil-tanto-no-v0-3ke6dyn2e3i91.jpg?width=720&format=pjpg&auto=webp&s=fdae230bdae1978708843a376506afd61eccbf16"
  },
  {
    name: "Josue Cascavel",
    role: "Usuário há 3 semanas",
    content: "Po e é facin de usar, só subir a foto e a punhet* tá garantida esquece kkkk.",
    rating: 4,
    image: "https://i.pinimg.com/474x/9a/55/be/9a55bec64e4e3ae3f93a723cb27b8bf2.jpg"
  },
  {
    name: "Gabriel Alencar",
    role: "Usuário há 2 meses",
    content: "Cara muito bom, minha vizinha é casada mas pensa numa mulher gostosa que sempre quis ver pelada haha tem 29 aninhos ela.",
    rating: 5,
    image: "https://conteudo.imguol.com.br/c/noticias/d0/2020/06/03/valter-teria-provocado-prejuizo-de-r-1-milhao-a-bancos-digitais-1591221370503_v2_450x450.jpg"
  }
];

const PremiumPage = () => {
  const handleUpgradeImages = () => {
    window.open('https://pay.kirvano.com/061df42b-4b11-4950-bff1-b87e4a6a263e', '_blank');
  };

  const handleUpgradeComplete = () => {
    window.open('https://pay.kirvano.com/6b8b842d-8b9e-4c5a-8e9b-7816abeb3b1a', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Banner Section */}
        <div className="relative h-[300px] rounded-lg overflow-hidden mb-12">
          <img 
            src="https://cdn.sex.com/images/pinporn/2022/07/03/27638544.gif?width=620"
            alt="Premium Banner"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Seja usuário <span className="text-[#f90]">PRO</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Escolha a ativação ideal para você
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Plan 1 - Images Only */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 text-center border border-[#272727]">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plano Imagens</h2>
            <div className="mb-2">
              <span className="text-xl line-through text-gray-500">R$ 47,00</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              R$ <span className="text-[#f90]">19,90</span>
            </div>
            <div className="text-sm text-[#f90] font-semibold mb-4 animate-pulse">
              ⚡ Promoção por tempo limitado ⚡
            </div>
            <p className="text-lg mb-6">Pagamento único • Sem mensalidades</p>
            
            <div className="mb-6">
              <h3 className="font-bold mb-4">O que está incluído:</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Criação ilimitada de imagens</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Upload de qualquer foto</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Alta resolução</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Suporte no WhatsApp</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleUpgradeImages}
              className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg w-full"
            >
              ADQUIRIR PLANO IMAGENS
            </button>
          </div>

          {/* Plan 2 - Complete */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 text-center border-2 border-[#f90] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f90] text-black px-4 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plano Completo</h2>
            <p className="text-2xl md:text-3xl font-bold mb-2">Vídeos + Imagens</p>
            <div className="mb-2">
              <span className="text-xl line-through text-gray-500">R$ 97,00</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              R$ <span className="text-[#f90]">29,90</span>
            </div>
            <div className="text-sm text-[#f90] font-semibold mb-4 animate-pulse">
              ⚡ Promoção por tempo limitado ⚡
            </div>
            <p className="text-lg mb-6">Pagamento único • Sem mensalidades</p>
            
            <div className="mb-6">
              <h3 className="font-bold mb-4">O que está incluído:</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Criação ilimitada de imagens</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span className="font-bold text-[#f90]">Criação ilimitada de vídeos</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Upload de qualquer foto</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span className="font-bold text-[#f90]">Prompts personalizados</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Alta resolução</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#f90] mr-2 flex-shrink-0" />
                  <span>Suporte no WhatsApp</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleUpgradeComplete}
              className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg w-full"
            >
              ADQUIRIR PLANO COMPLETO
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Shield className="w-6 h-6 text-[#f90]" />
            <span>Ambiente Seguro</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Clock className="w-6 h-6 text-[#f90]" />
            <span>7 Dias de Garantia</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Zap className="w-6 h-6 text-[#f90]" />
            <span>Acesso Instantâneo</span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <img 
            src="https://btaoqhtzpmaejqmvuznw.supabase.co/storage/v1/object/public/imagens//ph.png"
            alt="Premium Features"
            className="w-full rounded-lg"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Como virar PRO?</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 bg-[#f90] w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Escolha seu plano</h3>
                <p className="text-[#8f8f8f]">Selecione entre o Plano Imagens (R$ 19,90) ou Plano Completo (R$ 29,90) e finalize sua compra de forma segura.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 bg-[#f90] w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Receba seu token por email</h3>
                <p className="text-[#8f8f8f]">Um token único de 5 dígitos será enviado automaticamente para seu email.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 bg-[#f90] w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ative sua conta</h3>
                <p className="text-[#8f8f8f]">Use o token recebido para ativar sua conta PRO e começar a usar imediatamente todos os recursos do seu plano.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">O que nossos usuários estão dizendo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f90] fill-[#f90]" />
                      ))}
                    </div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[#8f8f8f]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#8f8f8f]">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;