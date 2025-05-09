import React from 'react';
import logo from './logotermallux.jpg';

// Example gallery data (replace with your real images and descriptions)
const gallery = [
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+1',
    alt: 'Изработка на светлечка реклама',
    desc: 'Изработка и монтажа на светлечка реклама на влезот од хотелот.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+2',
    alt: 'Брендирање на спа центар',
    desc: 'Брендирање на ентериерот во спа центарот со уникатни декоративни елементи.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+3',
    alt: 'Поставување на информативни табли',
    desc: 'Поставување на информативни табли низ целиот објект.'
  },
  {
    src: 'https://via.placeholder.com/400x300?text=Слика+4',
    alt: 'Дизајн на мени',
    desc: 'Дизајн и печатење на менија за ресторанот.'
  },
];

export default function ProjectHotelTermal() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Hotel Termal Lux & Spa Logo" className="h-40 w-auto rounded-lg shadow-lg bg-white p-4" />
      </div>
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-primary" style={{ fontFamily: 'serif' }}>
        Hotel Termal Lux & Spa
      </h1>
      {/* Description */}
      {/* Gallery Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-secondary">Погледни ги изработките:</h2>
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