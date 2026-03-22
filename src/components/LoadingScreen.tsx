import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import ProRequiredModal from './ProRequiredModal';

const loadingMessages = [
  'Escaneando contornos de corpo...',
  'Identificando tipo de corpo...',
  'Aplicando filtro removedor...',
  'Aumentando os detalhes...',
  'Deixando mais realista...',
  'Aplicando filtro de pele...',
  'Curvas físicas carregadas com EdgeWaves...',
  'Finalizando...',
  'Deixando impecável...',
  'Quase lá... só um momento...',
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showProModal, setShowProModal] = useState(false);
  const { selectedImage } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      navigate('/');
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Check if it's a custom uploaded image
          if (selectedImage.id === 999) {
            setTimeout(() => setShowProModal(true), 500);
          } else {
            setTimeout(() => navigate('/comparison'), 500);
          }
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [navigate, selectedImage]);

  if (!selectedImage) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
        <div className="w-full max-w-md bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="text-[#f90]">Processando</span> sua imagem
          </h2>
          
          <div className="mb-6">
            <div className="h-40 sm:h-52 rounded-lg overflow-hidden relative">
              <img 
                src={selectedImage.before}
                alt="Processing" 
                className="w-full h-full object-cover opacity-75 blur-md"
              />
              <div className="absolute inset-0 bg-[#0f0f0f] bg-opacity-50 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-[#f90] border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="h-6 bg-[#272727] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#f90] transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-right text-sm">{progress}%</div>
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg text-center font-medium animate-pulse">
              {loadingMessages[messageIndex]}
            </p>
          </div>
        </div>
      </div>

      {showProModal && (
        <ProRequiredModal onClose={() => navigate('/')} />
      )}
    </>
  );
};

export default LoadingScreen;