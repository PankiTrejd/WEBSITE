import React from 'react';
import logo from './logograndpartner.png';

// Example gallery data (replace with your real images and descriptions)
const gallery = [
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+1',
    alt: 'Изработка на рекламен пано',
    desc: 'Изработка и монтажа на рекламен пано на фасадата.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+2',
    alt: 'Брендирање на ентериер',
    desc: 'Брендирање на ентериерот со корпоративни бои и лого.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+3',
    alt: 'Поставување на информативни табли',
    desc: 'Поставување на информативни табли и насоки.'
  },
];

export default function ProjectGrandPartner() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Grand Partner AS Logo" className="h-36 w-auto rounded-lg shadow-lg bg-white p-4" />
      </div>
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#1B3A6B', fontFamily: 'serif' }}>
        Grand Partner AS
      </h1>
      {/* Description */}
  
      {/* Gallery Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#1B3A6B' }}>Погледни ги изработките:</h2>
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