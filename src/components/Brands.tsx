import { Car, Package2, Hammer } from 'lucide-react';

export default function Brands() {
  const brands = [
    {
      name: 'Carsculp.com',
      description: 'Декоративни силуети од возила изработени од дрво и плексиглас.',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'CNC Decorates',
      description: 'Изработка и продажба на декорации од плексиглас и дрво.',
      icon: Package2,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'BelneD Crafts',
      description: 'Елементи од премиум плексиглас и дрво, ласерско сечени и рачно изработени.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Наши Брендови</h2>
          <p className="text-xl text-secondary/80">Дознајте повеќе за нас:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <brand.icon className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-secondary">{brand.name}</h3>
                </div>
                <p className="text-secondary/80">{brand.description}</p>
                <button className="mt-4 btn-secondary w-full">Дознај Повеќе</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
