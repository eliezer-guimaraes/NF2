import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#272727] py-4 text-[#8f8f8f]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Nudefacil. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-[#f90] transition-colors"
            >
              Termos
            </a>
            <a 
              href="/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-[#f90] transition-colors"
            >
              Privacidade
            </a>
            <a href="#" className="text-sm hover:text-[#f90] transition-colors">Suporte</a>
            <a href="#" className="text-sm hover:text-[#f90] transition-colors">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;