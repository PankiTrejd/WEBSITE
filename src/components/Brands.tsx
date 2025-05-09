import { Car, Package2, Hammer } from 'lucide-react';
import carsculpImage from './carsculp.jpg';
import cncDecoratesImage from './cncdecorates.jpg';
import belnedImage from './belned.jpg';

export default function Brands() {
  const brands = [
    {
      name: 'Carsculp.com',
      description: 'Декоративни силуети од возила изработени од дрво и плексиглас.',
      icon: Car,
      image: carsculpImage,
      link: 'https://carsculp.com',
    },
    {
      name: 'CNC Decorates',
      description: 'Изработка и продажба на декорации од плексиглас и дрво.',
      icon: Package2,
      image: cncDecoratesImage,
      link: 'https://www.instagram.com/cnc_decorates/',
    },
    {
      name: 'BelneD Crafts',
      description: 'Елементи од премиум плексиглас и дрво, ласерско сечени и рачно изработени.',
      icon: Hammer,
      image: belnedImage,
      link: 'https://www.instagram.com/belned.crafts/',
    },
  ];

  return (
    <section id="brands" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-secondary mb-4">Наши Брендови</h2>
          <p className="text-lg text-gray-600">Дознајте повеќе за нас:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <brand.icon className="h-8 w-8 text-primary mr-2" />
                  <h3 className="text-2xl font-semibold text-secondary">{brand.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white text-lg font-medium rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  Дознај Повеќе
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
