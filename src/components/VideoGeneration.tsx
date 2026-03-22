import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Upload, Wand2, Crown } from 'lucide-react';
import { sampleVideos } from '../data/sampleVideos';
import { VideoData } from '../types';
import VideoLoadingScreen from './VideoLoadingScreen';

const VideoGeneration = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleVideoSelect = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateVideo = () => {
    if (!uploadedImage || !prompt.trim()) {
      alert('Por favor, faça upload de uma imagem e digite um prompt');
      return;
    }
    
    setShowLoading(true);
  };

  const handleUpgradeToPro = () => {
    navigate('/premium');
  };

  if (showLoading) {
    return <VideoLoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="mb-12">
      {/* Video Generation Header */}
      <div className="relative w-full mb-8">
        <div className="aspect-[21/9] md:aspect-[21/6]">
          <img 
            src="https://t4.ftcdn.net/jpg/05/19/80/25/360_F_519802561_SQwF4PYgry25b2Lj3xSwl9Xi5Vnb5e8s.jpg"
            alt="Video Generation"
            className="w-full h-full object-cover brightness-[0.3] rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center">
            Crie vídeos <span className="text-[#f90]">realistas</span>
          </h2>
          <p className="text-base md:text-xl text-center text-white/80 max-w-2xl">
            Veja aquela sua vizinha do jeito que quiser
          </p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Geração de <span className="text-[#f90]">Vídeos</span> com IA
      </h2>

      {/* Sample Videos */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Exemplos de <span className="text-[#f90]">vídeos gerados</span>
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {sampleVideos.map((video) => (
            <div 
              key={video.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
              onClick={() => handleVideoSelect(video)}
            >
              <div className="relative pb-[125%]">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-[#f90] text-black px-2 py-1 rounded text-xs font-bold">
                  DEMO
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-white text-sm md:text-base">{video.title}</h4>
                <p className="text-xs md:text-sm text-[#8f8f8f]">{video.description}</p>
                <p className="text-xs text-[#f90] mt-1">"{video.prompt}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Generation Form */}
      <div className="bg-[#1a1a1a] p-4 md:p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Wand2 className="w-6 h-6 text-[#f90] mr-2" />
          <h3 className="text-xl font-bold">Crie seu próprio vídeo</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload */}
          <div>
            <h4 className="font-medium mb-3">1. Escolha uma foto</h4>
            <div className="bg-[#272727] p-4 rounded border border-[#3a3a3a] text-center">
              {uploadedImage ? (
                <div className="relative">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
                  >
                    Trocar Foto
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-3">
                  <Upload className="w-8 h-8 text-[#f90]" />
                  <p className="text-sm">Faça upload de uma foto</p>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
                  >
                    ESCOLHER FOTO
                  </button>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                ref={fileInputRef}
                className="hidden"
              />
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <h4 className="font-medium mb-3">2. Descreva o que você quer</h4>
            <div className="space-y-3">
              <textarea
                placeholder="Ex: Uma pessoa dançando de forma sensual, movimentos suaves e provocantes..."
                className="w-full bg-[#272727] rounded p-3 text-white h-32 resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="text-xs text-[#8f8f8f]">
                <p>Exemplos de prompts:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>"Dançando de forma sensual e provocante"</li>
                  <li>"Fazendo gestos sedutores com as mãos"</li>
                  <li>"Movimentos íntimos e expressivos"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button 
            onClick={handleGenerateVideo}
            disabled={!uploadedImage || !prompt.trim()}
            className="bg-[#f90] hover:bg-[#ff8c00] disabled:bg-[#3a3a3a] disabled:text-[#8f8f8f] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            GERAR VÍDEO COM IA
          </button>
          <p className="text-sm text-[#8f8f8f] mt-2">
            Processamento pode levar de 30 segundos a 2 minutos
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-[#8f8f8f] hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-4">
              <video 
                controls 
                className="w-full rounded-lg"
                poster={selectedVideo.thumbnail}
              >
                <source src={selectedVideo.video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            <div className="text-center">
              <p className="text-[#8f8f8f] mb-4">
                Prompt usado: "{selectedVideo.prompt}"
              </p>
              <button
                onClick={handleUpgradeToPro}
                className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-6 rounded transition-colors"
              >
                <Crown className="w-4 h-4 inline mr-2" />
                CRIAR SEUS PRÓPRIOS VÍDEOS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGeneration;