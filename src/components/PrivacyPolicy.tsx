import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-[#1a1a1a] p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Política de <span className="text-[#f90]">Privacidade</span>
          </h1>
          
          <div className="space-y-6 text-[#e0e0e0] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">1. Informações que Coletamos</h2>
              <div className="space-y-2">
                <p><strong>Informações de Conta:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nome de usuário e email (quando você cria uma conta)</li>
                  <li>Informações de pagamento (processadas por terceiros seguros)</li>
                  <li>Preferências de uso e configurações</li>
                </ul>
                
                <p className="mt-4"><strong>Informações de Uso:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Dados de navegação e interação com o site</li>
                  <li>Endereço IP e informações do dispositivo</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>

                <p className="mt-4"><strong>Conteúdo Enviado:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Imagens enviadas para processamento</li>
                  <li>Prompts e instruções de texto</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">2. Como Usamos suas Informações</h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos e gerenciar contas</li>
                <li>Comunicar sobre atualizações e suporte</li>
                <li>Analisar uso para melhorias do serviço</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">3. Processamento de Imagens</h2>
              <div className="bg-[#272727] p-4 rounded-lg">
                <p className="font-semibold text-[#f90] mb-2">Importante sobre suas imagens:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Processamento temporário:</strong> Imagens são processadas apenas durante o uso ativo</li>
                  <li><strong>Não armazenamento:</strong> Não mantemos suas imagens após o processamento</li>
                  <li><strong>Exclusão automática:</strong> Todas as imagens são deletadas automaticamente</li>
                  <li><strong>Sem backup:</strong> Não criamos cópias ou backups de suas imagens</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">4. Compartilhamento de Informações</h2>
              <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais, exceto:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Com processadores de pagamento (para transações)</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos ou segurança</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">5. Segurança dos Dados</h2>
              <div className="space-y-2">
                <p>Implementamos medidas de segurança para proteger suas informações:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Criptografia SSL/TLS para transmissão de dados</li>
                  <li>Servidores seguros e protegidos</li>
                  <li>Acesso restrito a informações pessoais</li>
                  <li>Monitoramento regular de segurança</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">6. Cookies e Tecnologias Similares</h2>
              <div className="space-y-2">
                <p>Usamos cookies para:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Manter você logado em sua conta</li>
                  <li>Lembrar suas preferências</li>
                  <li>Analisar o uso do site</li>
                  <li>Melhorar a experiência do usuário</li>
                </ul>
                <p className="mt-2">Você pode controlar cookies através das configurações do seu navegador.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">7. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar exclusão de sua conta</li>
                <li>Retirar consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">8. Retenção de Dados</h2>
              <div className="space-y-2">
                <p><strong>Imagens:</strong> Deletadas imediatamente após processamento</p>
                <p><strong>Dados de conta:</strong> Mantidos enquanto sua conta estiver ativa</p>
                <p><strong>Dados de pagamento:</strong> Mantidos conforme exigências legais</p>
                <p><strong>Logs de uso:</strong> Mantidos por até 12 meses para análise</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">9. Menores de Idade</h2>
              <div className="bg-[#272727] p-4 rounded-lg">
                <p className="font-semibold text-red-400 mb-2">Importante:</p>
                <p>
                  Nosso serviço não é destinado a menores de 18 anos. Não coletamos intencionalmente 
                  informações de menores de idade. Se descobrirmos que coletamos informações de um menor, 
                  tomaremos medidas para deletar essas informações imediatamente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">10. Transferências Internacionais</h2>
              <p>
                Seus dados podem ser transferidos e processados em países fora do Brasil. 
                Garantimos que essas transferências atendam aos padrões de proteção adequados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">11. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. 
                Notificaremos sobre mudanças significativas através do site ou email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">12. Contato</h2>
              <p>
                Para questões sobre privacidade ou para exercer seus direitos, 
                entre em contato através do chat de suporte no site ou email: 
                <span className="text-[#f90]"> privacidade@nudefacil.com</span>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-[#272727] text-center text-[#8f8f8f]">
            <p>Última atualização: Janeiro de 2025</p>
            <p className="mt-2">Esta política está em conformidade com a LGPD (Lei Geral de Proteção de Dados)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;