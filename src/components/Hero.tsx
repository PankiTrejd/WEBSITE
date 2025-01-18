import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
          Welcome to <span className="text-primary">Panki Trade</span>
        </h1>
        <p className="text-xl text-secondary/80 mb-8 max-w-2xl mx-auto">
          Discover our unique brands: Carsculp.com, CNC Decorates, and BelneD Crafts. 
          We create custom vehicle silhouettes, CNC decorations, and handcrafted products.
        </p>
        <div className="space-x-4">
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
          <a href="#brands" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full text-center animate-bounce">
        <ChevronDown className="mx-auto text-primary" size={32} />
      </div>
    </section>
  );
}