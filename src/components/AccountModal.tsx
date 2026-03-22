import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Upload, User, Mail, Crown, Camera, Key } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface AccountModalProps {
  onClose: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ onClose }) => {
  const { user, updateUser, logout } = useAppContext();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.username || '');
  const [token, setToken] = useState('');
  const [tokenMessage, setTokenMessage] = useState('');
  const [tokenMessageType, setTokenMessageType] = useState<'success' | 'error'>('error');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const handleSaveUsername = () => {
    if (newUsername.trim()) {
      updateUser({ username: newUsername.trim() });
      setIsEditing(false);
    }
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatarUrl = e.target?.result as string;
        updateUser({ avatar: avatarUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTokenChange = (value: string) => {
    // Allow any alphanumeric characters, convert to uppercase
    const cleanValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setToken(cleanValue.slice(0, 5));
    // Clear message when user starts typing
    if (tokenMessage) {
      setTokenMessage('');
    }
  };

  const isValidToken = (token: string): boolean => {
    if (token.length !== 5) return false;
    if (!token.startsWith('N')) return false;
    
    // Check if it contains both letters and numbers
    const hasLetter = /[A-Z]/.test(token);
    const hasNumber = /[0-9]/.test(token);
    
    return hasLetter && hasNumber;
  };

  const handleTokenSubmit = () => {
    if (token.length !== 5) {
      setTokenMessage('O token deve ter exatamente 5 caracteres');
      setTokenMessageType('error');
      return;
    }
    
    if (!token.startsWith('N')) {
      setTokenMessage('O token deve ser válido');
      setTokenMessageType('error');
      return;
    }
    
    if (!isValidToken(token)) {
      setTokenMessage('O token deve conter números e letras');
      setTokenMessageType('error');
      return;
    }
    
    // Simulate token validation - accept tokens like N1A2B, N3X4Y, etc.
    if (token === 'N1A2B' || token === 'N3X4Y') {
      setTokenMessage('Token válido! Conta atualizada para PRO.');
      setTokenMessageType('success');
      // Here you would update the user's PRO status
    } else {
      setTokenMessage('Token inválido. Verifique e tente novamente.');
      setTokenMessageType('error');
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleUpgradeToPro = () => {
    navigate('/premium');
    onClose();
  };

  // Create display value with underscores
  const getDisplayValue = () => {
    const chars = token.split('');
    const display = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < chars.length) {
        display.push(chars[i]);
      } else {
        display.push('_');
      }
    }
    
    return display.join(' ');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Minha Conta</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#272727] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-[#272727] rounded-full flex items-center justify-center overflow-hidden">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-[#8f8f8f]" />
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-1 -right-1 bg-[#f90] p-2 rounded-full hover:bg-[#ff8c00] transition-colors"
              >
                <Camera className="w-4 h-4 text-black" />
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                ref={fileInputRef}
                className="hidden"
              />
            </div>
            <p className="text-sm text-[#8f8f8f] mt-2">Clique na câmera para alterar</p>
          </div>

          {/* Username Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Nome de usuário</label>
            {isEditing ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="flex-1 bg-[#272727] rounded p-2 text-white"
                  placeholder="Novo nome de usuário"
                />
                <button
                  onClick={handleSaveUsername}
                  className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
                >
                  Salvar
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center bg-[#272727] rounded p-2">
                <span>{user.username}</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-[#f90] hover:text-[#ff8c00] text-sm"
                >
                  Editar
                </button>
              </div>
            )}
          </div>

          {/* Email Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <div className="flex items-center bg-[#272727] rounded p-2">
              <Mail className="w-4 h-4 text-[#8f8f8f] mr-2" />
              <span>{user.email}</span>
            </div>
          </div>

          {/* Token Section */}
          <div className="bg-[#272727] p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Key className="w-5 h-5 text-[#f90]" />
              <span className="font-medium">Token de Acesso PRO</span>
            </div>
            <p className="text-sm text-[#8f8f8f] mb-3">
              Já possui um token? Insira aqui para ativar sua conta PRO
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={token}
                    onChange={(e) => handleTokenChange(e.target.value)}
                    className="w-full bg-[#3a3a3a] rounded p-2 text-white text-center text-lg tracking-widest opacity-0 absolute inset-0"
                    maxLength={5}
                  />
                  <div className="bg-[#3a3a3a] rounded p-2 text-white text-center text-lg tracking-widest pointer-events-none">
                    {getDisplayValue()}
                  </div>
                </div>
                <button
                  onClick={handleTokenSubmit}
                  disabled={token.length !== 5}
                  className="bg-[#f90] hover:bg-[#ff8c00] disabled:bg-[#3a3a3a] disabled:text-[#8f8f8f] text-black font-bold py-2 px-4 rounded transition-colors"
                >
                  Ativar
                </button>
              </div>
              {tokenMessage && (
                <p className={`text-sm ${tokenMessageType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {tokenMessage}
                </p>
              )}
              <p className="text-xs text-[#8f8f8f] animate-pulse">
                Adquira o acesso PRO abaixo
              </p>
            </div>
          </div>

          {/* Pro Upgrade Section */}
          <div className="bg-[#272727] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-[#f90]" />
                <span className="font-medium">Status da Conta</span>
              </div>
              <span className="text-sm bg-[#3a3a3a] px-2 py-1 rounded">FREE</span>
            </div>
            <p className="text-sm text-[#8f8f8f] mb-3">
              Upgrade para PRO e desbloqueie recursos ilimitados
            </p>
            <button
              onClick={handleUpgradeToPro}
              className="w-full bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
            >
              VIRAR PRO AGORA
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;