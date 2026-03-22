import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import AccountModal from './AccountModal';

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user } = useAppContext();

  const handleUserClick = () => {
    if (user) {
      setShowAccountModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthModeChange = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
  };

  return (
    <header className="bg-[#0f0f0f] border-b border-[#272727] py-3 px-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://raw.githubusercontent.com/eliezer-guimaraes/Kiwifyas/refs/heads/main/Nudefacil.png"
            alt="Logo"
            className="h-8"
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            FREE
          </Link>
          <Link
            to="/premium"
            className="bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            PRO
          </Link>
          <button
            onClick={handleUserClick}
            className="p-2 hover:bg-[#272727] rounded-full transition-colors relative"
          >
            <User className="w-6 h-6" />
            {user && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f90] rounded-full"></div>
            )}
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">
                {authMode === 'login' ? 'Fazer Login' : 'Criar Conta'}
              </h3>
              <button
                onClick={() => setShowAuthModal(false)}
                className="p-1 hover:bg-[#272727] rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex mb-6 bg-[#272727] rounded-lg p-1">
              <button
                onClick={() => handleAuthModeChange('login')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  authMode === 'login' 
                    ? 'bg-[#f90] text-black font-bold' 
                    : 'text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleAuthModeChange('signup')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  authMode === 'signup' 
                    ? 'bg-[#f90] text-black font-bold' 
                    : 'text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Criar Conta
              </button>
            </div>

            <AuthForm 
              mode={authMode} 
              onClose={() => setShowAuthModal(false)} 
            />
          </div>
        </div>
      )}

      {/* Account Modal */}
      {showAccountModal && user && (
        <AccountModal onClose={() => setShowAccountModal(false)} />
      )}
    </header>
  );
};

interface AuthFormProps {
  mode: 'login' | 'signup';
  onClose: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: ''
  });
  const { login, signup } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'login') {
      login(formData.username, formData.password);
    } else {
      if (formData.email !== formData.confirmEmail) {
        alert('Os emails não coincidem');
        return;
      }
      signup(formData.username, formData.email, formData.password);
    }
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Nome de usuário</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full bg-[#272727] rounded p-2 text-white"
          placeholder="Seu nome de usuário"
          required
        />
      </div>

      {mode === 'signup' && (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#272727] rounded p-2 text-white"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirmar Email</label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className="w-full bg-[#272727] rounded p-2 text-white"
              placeholder="seu@email.com"
              required
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Senha</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-[#272727] rounded p-2 text-white"
          placeholder="********"
          required
        />
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 bg-[#272727] hover:bg-[#3a3a3a] text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#f90] hover:bg-[#ff8c00] text-black font-bold py-2 px-4 rounded transition-colors"
        >
          {mode === 'login' ? 'Entrar' : 'Criar Conta'}
        </button>
      </div>
    </form>
  );
};

export default Header;