import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Panki Trade</h3>
            <p className="text-white/60">
              Creating unique and personalized products for our customers since 2020.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-white/60">
              <li>Carsculp.com</li>
              <li>CNC Decorates</li>
              <li>BelneD Crafts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#brands" className="hover:text-primary">Brands</a></li>
              <li><a href="#products" className="hover:text-primary">Products</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2 text-white/60">
              <a href="https://instagram.com/pankitrejd" className="block hover:text-primary">Instagram</a>
              <a href="https://facebook.com/PankiTrejd" className="block hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Панки Трејд ПК. Сите Права се задржани.</p>
        </div>
      </div>
    </footer>
  );
}