import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoProRequiredModal from './VideoProRequiredModal';

const loadingMessages = [
  'Analisando a imagem enviada...',
  'Processando prompt de vídeo...',
  'Gerando frames iniciais...',
  'Aplicando movimentos de IA...',
  'Criando transições suaves...',
  'Renderizando sequências...',
  'Aplicando efeitos visuais...',
  'Sincronizando movimentos...',
  'Finalizando o vídeo...',
  'Quase pronto...',
];

interface VideoLoadingScreenProps {
  onComplete: () => void;
}

const VideoLoadingScreen: React.FC<VideoLoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showProModal, setShowProModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowProModal(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 steps * 50ms = 5000ms)

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
    }, 500); // Faster message changes for 5-second duration

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
        <div className="w-full max-w-md bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="text-[#f90]">Gerando</span> seu vídeo
          </h2>
          
          <div className="mb-6">
            <div className="h-40 sm:h-52 rounded-lg overflow-hidden relative bg-[#272727]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-[#f90] border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                  🎬 Processando vídeo...
                </div>
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
        <VideoProRequiredModal onClose={onComplete} />
      )}
    </>
  );
};

export default VideoLoadingScreen;