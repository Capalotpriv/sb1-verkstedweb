import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hjem')} className="text-white hover:text-blue-400 transition-colors">
                Hjem
              </button>
              <button onClick={() => scrollToSection('tjenester')} className="text-white hover:text-blue-400 transition-colors">
                Tjenester
              </button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-blue-400 transition-colors">
                Om oss
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-white hover:text-blue-400 transition-colors">
                Kontakt
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('hjem')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-400"
            >
              Hjem
            </button>
            <button
              onClick={() => scrollToSection('tjenester')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-400"
            >
              Tjenester
            </button>
            <button
              onClick={() => scrollToSection('om-oss')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-400"
            >
              Om oss
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-400"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;