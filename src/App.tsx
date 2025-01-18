import React from 'react';
import { Car, Package2, Hammer, Phone, Mail, Instagram, Facebook, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;