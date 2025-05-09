import React from 'react';
import logo from './logoemili.jpg';

// Example gallery data (replace with your real images and descriptions)
const gallery = [
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+1',
    alt: 'Изработка на рекламен пано',
    desc: 'Изработка и монтажа на рекламен пано за Emily Exclusive.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+2',
    alt: 'Брендирање на ентериер',
    desc: 'Брендирање на ентериерот со уникатен дизајн.'
  },
];

export default function ProjectEmilyExclusive() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Emily Exclusive Logo" className="h-36 w-auto rounded-lg shadow-lg bg-white p-4" />
      </div>
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-pink-700" style={{ fontFamily: 'serif' }}>
        Emily Exclusive
      </h1>
   
      {/* Gallery Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-pink-700">Погледни ги изработките:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
              <img src={item.src} alt={item.alt} className="w-full h-48 object-cover rounded mb-3" />
              <p className="text-gray-700 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-400 text-sm">* Додајте фотографии и описи од проектот тука</p>
      </div>
    </section>
  );
} 