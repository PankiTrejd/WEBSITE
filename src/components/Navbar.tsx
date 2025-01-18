import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/src/components/logo.png'; // Import the logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Replace text with the logo */}
            <img src={logo} alt="Panki Trade Logo" className="h-10" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Дома</a>
            <a href="#brands" className="text-secondary hover:text-primary transition-colors">Брендови</a>
            <a href="#products" className="text-secondary hover:text-primary transition-colors">Изработки</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакт</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-secondary hover:text-primary">Home</a>
            <a href="#brands" className="block px-3 py-2 text-secondary hover:text-primary">Brands</a>
            <a href="#products" className="block px-3 py-2 text-secondary hover:text-primary">Products</a>
            <a href="#contact" className="block px-3 py-2 text-secondary hover:text-primary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
