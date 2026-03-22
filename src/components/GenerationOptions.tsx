import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GenerationOptionsProps {
  onClose: () => void;
  onContinue: () => void;
}

const GenerationOptions: React.FC<GenerationOptionsProps> = ({ onClose, onContinue }) => {
  const [additionalDetails, setAdditionalDetails] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Opções de Geração</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#272727] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="generation"
                checked={true}
                readOnly
                className="text-[#f90]"
              />
              <span>Geração Avançada</span>
            </label>
            <label className="flex items-center space-x-2 opacity-50">
              <input
                type="radio"
                name="generation"
                disabled
                className="text-[#f90]"
              />
              <span>Geração Básica</span>
            </label>
          </div>

          <div className="pt-4 border-t border-[#272727]">
            <h4 className="font-medium mb-2">Detalhes Adicionais (PRO)</h4>
            <textarea
              placeholder="Descreva detalhes específicos para a geração..."
              className="w-full bg-[#272727] rounded p-3 text-white opacity-50"
              rows={4}
              disabled
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
            />
            <p className="text-sm text-[#8f8f8f] mt-2">
              <a href="/premium" className="text-[#f90] hover:text-[#ff8c00]">
                Torne-se PRO
              </a>
              {' '}para adicionar instruções personalizadas
            </p>
          </div>

          <div className="pt-4 border-t border-[#272727]">
            <h4 className="font-medium mb-2">Estilos (PRO)</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 opacity-50">
                <input
                  type="checkbox"
                  disabled
                  className="text-[#f90]"
                />
                <span>Fantasia</span>
              </label>
              <label className="flex items-center space-x-2 opacity-50">
                <input
                  type="checkbox"
                  disabled
                  className="text-[#f90]"
                />
                <span>Shibari</span>
              </label>
              <label className="flex items-center space-x-2 opacity-50">
                <input
                  type="checkbox"
                  disabled
                  className="text-[#f90]"
                />
                <span>Lingerie</span>
              </label>
            </div>
            <p className="text-sm text-[#8f8f8f] mt-2">
              <a href="/premium" className="text-[#f90] hover:text-[#ff8c00]">
                Torne-se PRO
              </a>
              {' '}para desbloquear todas as opções
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onContinue}
            className="flex-1 bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerationOptions;