import React, { useEffect, useState } from 'react';
import { shouldRedirect, redirectToFallback } from '../utils/cloaker';

interface CloakingWrapperProps {
  children: React.ReactNode;
}

const CloakingWrapper: React.FC<CloakingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowContent, setShouldShowContent] = useState(false);

  useEffect(() => {
    const checkAndRedirect = async () => {
      try {
        const needsRedirect = await shouldRedirect();
        
        if (needsRedirect) {
          redirectToFallback();
          return;
        }
        
        // User passed all checks, show content
        setShouldShowContent(true);
      } catch (error) {
        console.warn('Cloaking check failed:', error);
        // On error, show content to avoid blocking legitimate users
        setShouldShowContent(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkAndRedirect();
  }, []);

  // Show loading screen while checking
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#f90] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  // Show content only if user passed all checks
  if (shouldShowContent) {
    return <>{children}</>;
  }

  // This should never be reached due to redirect, but just in case
  return null;
};

export default CloakingWrapper;