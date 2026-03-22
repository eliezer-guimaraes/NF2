import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Eye, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ComparisonViewer() {
  const { selectedImage } = useAppContext();
  const navigate = useNavigate();
  const [showFullscreen, setShowFullscreen] = useState(false);

  if (!selectedImage) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(selectedImage.after);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}-resultado.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      navigate('/premium');
    } catch (error) {
      console.error('Error downloading image:', error);
      navigate('/premium');
    }
  };

  const handleViewFullscreen = () => {
    setShowFullscreen(true);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-[#f90] hover:text-[#ff8c00] transition-colors"
        >
          <ArrowLeft className="mr-1 w-5 h-5" />
          Escolher outra 
        </button>
        
        <div className="flex space-x-3">
          <button 
            onClick={handleViewFullscreen}
            className="flex items-center bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            <Eye className="mr-1 w-4 h-4" />
            Ver em tela cheia
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
          >
            <Download className="mr-1 w-4 h-4" />
            Salvar resultado
          </button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Veja sua <span className="text-[#f90]">comparação</span>
        </h2>
        
        {selectedImage.id === 7 && (
          <div className="mb-4 bg-[#272727] p-4 rounded-lg">
            <p className="text-center text-lg">
              Foi necessário fazer algumas modificações no corpo da modelo para conseguir o melhor resultado possível.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img 
              src={selectedImage.before} 
              alt="Before" 
              className="w-full rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
              Antes
            </div>
          </div>
          
          <div className="relative cursor-pointer" onClick={handleViewFullscreen}>
            <img 
              src={selectedImage.after} 
              alt="After" 
              className="w-full rounded-lg hover:opacity-90 transition-opacity"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
              Depois
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/premium')}
            className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            UPGRADE PARA CRIAR SEUS PRÓPRIOS NUDES
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img 
              src={selectedImage.after} 
              alt="Resultado em tela cheia" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              {selectedImage.title} - Resultado
            </div>
          </div>
        </div>
      )}
    </div>
  );
}