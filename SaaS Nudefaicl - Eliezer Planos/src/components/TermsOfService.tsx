import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-[#1a1a1a] p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Termos de <span className="text-[#f90]">Serviço</span>
          </h1>
          
          <div className="space-y-6 text-[#e0e0e0] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o Nudefacil, você concorda em cumprir e estar vinculado a estes Termos de Serviço. 
                Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">2. Descrição do Serviço</h2>
              <p>
                O Nudefacil é uma plataforma que utiliza inteligência artificial para processar imagens. 
                Oferecemos versões gratuitas limitadas e versões premium com recursos expandidos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">3. Uso Aceitável</h2>
              <div className="space-y-2">
                <p><strong>Você concorda em:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Usar o serviço apenas para fins legais</li>
                  <li>Não violar direitos de terceiros</li>
                  <li>Não usar o serviço para assédio ou intimidação</li>
                  <li>Ser responsável pelo conteúdo que você carrega</li>
                </ul>
                
                <p className="mt-4"><strong>É proibido:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Carregar imagens de menores de idade</li>
                  <li>Usar imagens sem consentimento para fins maliciosos</li>
                  <li>Distribuir conteúdo gerado sem autorização</li>
                  <li>Tentar quebrar ou contornar medidas de segurança</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">4. Conta de Usuário</h2>
              <p>
                Você é responsável por manter a confidencialidade de sua conta e senha. 
                Você concorda em aceitar responsabilidade por todas as atividades que ocorrem sob sua conta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">5. Pagamentos e Reembolsos</h2>
              <div className="space-y-2">
                <p>
                  A versão PRO requer pagamento único. Todos os pagamentos são processados por terceiros seguros.
                </p>
                <p>
                  <strong>Política de Reembolso:</strong> Oferecemos reembolso integral dentro de 7 dias da compra, 
                  desde que o uso do serviço não tenha excedido os limites razoáveis.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">6. Propriedade Intelectual</h2>
              <p>
                O serviço e todo o conteúdo original são propriedade do Nudefacil. 
                Você mantém os direitos sobre o conteúdo que carrega, mas nos concede licença para processá-lo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">7. Limitação de Responsabilidade</h2>
              <p>
                O Nudefacil não será responsável por danos indiretos, incidentais, especiais ou consequenciais 
                resultantes do uso ou incapacidade de usar o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">8. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">9. Rescisão</h2>
              <p>
                Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio, 
                por qualquer motivo, incluindo violação destes Termos de Serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">10. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis do Brasil. 
                Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-[#f90]">11. Contato</h2>
              <p>
                Para questões sobre estes Termos de Serviço, entre em contato conosco através do 
                chat de suporte disponível no site.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-[#272727] text-center text-[#8f8f8f]">
            <p>Última atualização: Janeiro de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;