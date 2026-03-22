import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Search, Check, Camera, Play } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { sampleImages } from '../data/sampleImages';
import GenerationOptions from './GenerationOptions';
import VideoGeneration from './VideoGeneration';

const ImageSelection = () => {
  const { setSelectedImage } = useAppContext();
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImageTemp, setSelectedImageTemp] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (image: any) => {
    setSelectedImageTemp(image);
    setShowOptions(true);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        const customImage = {
          id: 999,
          title: 'Sua Imagem',
          description: 'Imagem personalizada',
          before: imageUrl,
          after: imageUrl,
          tags: ['custom']
        };
        setSelectedImageTemp(customImage);
        setShowOptions(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    setSelectedImage(selectedImageTemp);
    navigate('/loading');
  };

  const filteredImages = selectedTag === 'all' 
    ? sampleImages 
    : sampleImages.filter(image => image.tags.includes(selectedTag));

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Banner */}
      <div className="relative w-full mb-8">
        <div className="aspect-[21/9] md:aspect-[21/6]">
          <img 
            src="https://66.media.tumblr.com/555f9ea83be7eda8c1bb56c38ed28c19/tumblr_p4z752Uo6i1uds101o2_r4_1280.gif"
            alt="AI Technology"
            className="w-full h-full object-cover brightness-[0.3] rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center">
            Gere <span className="text-[#f90]">nudes</span> com IA
          </h2>
          <p className="text-base md:text-xl text-center text-white/80 max-w-2xl">
            Agora você pode ver aquela sua crush pelada
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Crie <span className="text-[#f90]">nudes</span> realistas em segundos
      </h1>
      
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6 justify-center">
        <button 
          onClick={() => setSelectedTag('all')}
          className={`px-3 md:px-4 py-2 rounded-full transition-colors ${
            selectedTag === 'all' 
              ? 'bg-[#f90] text-black' 
              : 'bg-[#272727] text-white hover:bg-[#3a3a3a]'
          }`}
        >
          Todos
        </button>
        <button 
          onClick={() => setSelectedTag('influencer')}
          className={`px-3 md:px-4 py-2 rounded-full transition-colors ${
            selectedTag === 'influencer' 
              ? 'bg-[#f90] text-black' 
              : 'bg-[#272727] text-white hover:bg-[#3a3a3a]'
          }`}
        >
          Influencer
        </button>
        <button 
          onClick={() => setSelectedTag('atriz')}
          className={`px-3 md:px-4 py-2 rounded-full transition-colors ${
            selectedTag === 'atriz' 
              ? 'bg-[#f90] text-black' 
              : 'bg-[#272727] text-white hover:bg-[#3a3a3a]'
          }`}
        >
          Atriz
        </button>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Selecione e faça o <span className="text-[#f90]">teste grátis</span> 
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
        {filteredImages.map((image) => (
          <div 
            key={image.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => handleImageSelect(image)}
          >
            <div className="relative pb-[125%]">
              <img 
                src={image.before} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#f90] text-black px-2 py-1 rounded text-xs font-bold">
                FREE
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-white text-sm md:text-base">{image.title}</h3>
              <p className="text-xs md:text-sm text-[#8f8f8f]">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shortcut Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <button
          onClick={() => {
            const uploadSection = document.getElementById('upload-section');
            uploadSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center space-x-2"
        >
          <Camera className="w-6 h-6" />
          <span>CRIAR NUDES</span>
        </button>
        <button
          onClick={() => {
            const videoSection = document.getElementById('video-section');
            videoSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center space-x-2"
        >
          <Play className="w-6 h-6" />
          <span>CRIAR VÍDEOS</span>
        </button>
      </div>

      {/* Middle Banner */}
      <div className="relative w-full mb-8">
        <div className="aspect-[21/9] md:aspect-[21/6]">
          <img 
            src="https://www.perizona.it/wp-content/uploads/sites/6/2023/05/Maddalena-Svevi-Foto-Instagram-e1684149178275.jpg"
            alt="Premium Features"
            className="w-full h-full object-cover brightness-[0.3] rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center">
            Criação <span className="text-[#f90]">Ilimitada</span> de Imagens
          </h2>
          <p className="text-base md:text-xl text-center text-white/80 max-w-2xl">
            Transforme qualquer foto em arte com nossa IA avançada
          </p>
        </div>
      </div>

      {/* Video Generation Section */}
      <div id="video-section">
        <VideoGeneration />
      </div>

      <div id="upload-section" className="bg-[#1a1a1a] p-4 md:p-5 rounded-lg">
        <div className="flex items-center mb-4">
          <Upload className="w-6 h-6 text-[#f90] mr-2" />
          <h2 className="text-xl font-bold">Escolha uma imagem</h2>
        </div>
        
        <div className="bg-[#272727] p-4 md:p-6 rounded border border-[#3a3a3a] text-center">
          <div className="flex flex-col items-center space-y-4">
            <Camera className="w-12 h-12 text-[#f90]" />
            <p className="mb-4">Faça upload de uma foto da galeria do seu dispositivo</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              ESCOLHER FOTO
            </button>
          </div>
        </div>
      </div>

      {showOptions && (
        <GenerationOptions
          onClose={() => setShowOptions(false)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default ImageSelection;