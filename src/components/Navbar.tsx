import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/src/components/logo.png'; // Import the logo
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // State for "Проекти" dropdown
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to handle navigation and scroll
  const handleNav = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage and scroll after navigation
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

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
            <button
              onClick={() => handleNav('home')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Дома
            </button>
            <button
              onClick={() => handleNav('brands')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Брендови
            </button>
            <button
              onClick={() => handleNav('products')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Изработки
            </button>

            {/* Проекти Link (locked, not dropdown) */}
            <Link
              to="/projects"
              className="text-secondary hover:text-primary transition-colors font-semibold"
              onClick={() => { setIsOpen(false); setIsProjectsOpen(false); }}
            >
              Проекти
            </Link>

            <button
              onClick={() => handleNav('contact')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Контакт
            </button>
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
            <button
              onClick={() => handleNav('home')}
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Дома
            </button>
            <button
              onClick={() => handleNav('brands')}
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Брендови
            </button>
            <button
              onClick={() => handleNav('products')}
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Изработки
            </button>
            {/* Проекти for Mobile (locked, not dropdown) */}
            <Link
              to="/projects"
              className="block px-3 py-2 text-secondary hover:text-primary font-semibold"
              onClick={() => { setIsOpen(false); setIsProjectsOpen(false); }}
            >
              Проекти
            </Link>
            <button
              onClick={() => handleNav('contact')}
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Контакт
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
