import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Products />
        <MenuSection /> {/* New Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
