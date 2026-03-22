import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageData } from '../types';

interface User {
  username: string;
  email: string;
  avatar?: string;
}

interface AppContextType {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  user: User | null;
  login: (username: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Simulate login - in real app, this would make an API call
    const userData: User = {
      username,
      email: `${username}@example.com`, // Simulated email
    };
    setUser(userData);
  };

  const signup = (username: string, email: string, password: string) => {
    // Simulate signup - in real app, this would make an API call
    const userData: User = {
      username,
      email,
    };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        isLoading,
        setIsLoading,
        user,
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};