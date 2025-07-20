import React from 'react';
import { Heart, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-xl">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-secondary-900">Nexora</h3>
              <p className="text-sm text-secondary-600">AI Tweet Generator</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-secondary-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by the Nexora team</span>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 mt-6 pt-6 text-center text-sm text-secondary-500">
          <p>&copy; 2025 Nexora. All rights reserved. Powered by advanced AI technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;