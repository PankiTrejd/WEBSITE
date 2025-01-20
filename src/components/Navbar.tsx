import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/src/components/logo.png'; // Import the logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // State for "Проекти" dropdown

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo with link to homepage */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="focus:outline-none">
              <img src={logo} alt="Panki Trade Logo" className="h-10 cursor-pointer" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-secondary hover:text-primary transition-colors"
            >
              Дома
            </a>
            <a
              href="#brands"
              className="text-secondary hover:text-primary transition-colors"
            >
              Брендови
            </a>
            <a
              href="#products"
              className="text-secondary hover:text-primary transition-colors"
            >
              Изработки
            </a>

            {/* Проекти Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="text-secondary hover:text-primary transition-colors"
              >
                Проекти
              </button>
              {isProjectsOpen && (
                <div className="absolute mt-2 bg-white shadow-md rounded-md w-48">
                  <a
                    href="#project1"
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors"
                  >
                    Hotel Termal Lux & Spa
                  </a>
                  <a
                    href="#project2"
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors"
                  >
                    Grand Partner AS
                  </a>
                  <a
                    href="#project3"
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors"
                  >
                    Бони интерградба
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              Контакт
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Дома
            </a>
            <a
              href="#brands"
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Брендови
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Изработки
            </a>
            {/* Проекти for Mobile */}
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Проекти
            </button>
            {isProjectsOpen && (
              <div className="pl-4 space-y-1">
                <a
                  href="#project1"
                  className="block px-3 py-2 text-secondary hover:text-primary"
                >
                  Hotel Termal Lux & Spa
                </a>
                <a
                  href="#project2"
                  className="block px-3 py-2 text-secondary hover:text-primary"
                >
                  Grand Partner AS
                </a>
                <a
                  href="#project3"
                  className="block px-3 py-2 text-secondary hover:text-primary"
                >
                  Бони интерградба
                </a>
              </div>
            )}
            <a
              href="#contact"
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Контакт
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
