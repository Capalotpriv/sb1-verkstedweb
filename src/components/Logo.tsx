import React from 'react';
import { Cpu, Layers } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Cpu className="w-8 h-8 text-blue-500" />
        <Layers className="w-8 h-8 text-purple-500 absolute top-0 left-0 opacity-50 animate-pulse" />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        VerkstedWeb
      </span>
    </div>
  );
};

export default Logo;