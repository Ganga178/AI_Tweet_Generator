import React from 'react';
import { Zap, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Nexora
              </h1>
              <p className="text-sm text-secondary-600">AI Tweet Generator</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Twitter className="w-5 h-5 text-primary-600" />
            <span className="text-sm text-secondary-600">https://nexoraofficial.netlify.app</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;