import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Crown } from 'lucide-react';

interface ProRequiredModalProps {
  onClose: () => void;
}

const ProRequiredModal: React.FC<ProRequiredModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/premium');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-[#f90]" />
            <h3 className="text-2xl font-bold">Upgrade Necessário</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#272727] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="bg-[#272727] p-4 rounded-lg mb-4">
            <p className="text-lg mb-2">🎉 Processamento Concluído!</p>
            <p className="text-[#8f8f8f]">
              Sua imagem foi processada com sucesso, para visualizá-la torne-se PRO.
            </p>
          </div>

          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#f90] rounded-full"></div>
              <span>Promoção por tempo limitado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#f90] rounded-full"></div>
              <span>Crie nudes de qualquer pessoa</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#f90] rounded-full"></div>
              <span>Upload ilimitado de fotos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#f90] rounded-full"></div>
              <span>Resultados em alta resolução</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-3 px-4 rounded transition-colors"
          >
            Voltar
          </button>
          <button
            onClick={handleUpgrade}
            className="flex-1 bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-3 px-4 rounded transition-colors"
          >
            VIRAR PRO AGORA
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProRequiredModal;