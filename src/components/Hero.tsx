import React from 'react';
import { ChevronDown } from 'lucide-react';
import weblad from '/src/components/weblad.jpg'; // Import the image

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${weblad})` }} // Set the background image
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/80 rounded-lg p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
          <span className="text-primary">Вашиот партнер за креативни решенија!</span>
        </h1>
        <p className="text-xl text-secondary/80 mb-8 max-w-2xl mx-auto">
         
        </p>
        <div className="space-x-4">
          <a href="#contact" className="btn-primary">
            Контактирајте не
          </a>
          <a href="#brands" className="btn-secondary">
            Дознај повеќе
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 w-full text-center animate-bounce">
        <ChevronDown className="mx-auto text-primary" size={32} />
      </div>
    </section>
  );
}
