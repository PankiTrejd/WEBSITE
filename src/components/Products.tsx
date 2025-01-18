import React from 'react';

export default function Products() {
  const products = [
    {
      name: 'Custom Car Silhouette',
      price: 'From €29.99',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
      category: 'Carsculp.com',
    },
    {
      name: 'Decorative Letters',
      price: 'From €19.99',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
      category: 'CNC Decorates',
    },
    {
      name: 'Handcrafted Decor',
      price: 'From €24.99',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      category: 'BelneD Crafts',
    },
  ];

  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-xl text-white/80">Explore our most popular items</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">{product.category}</span>
                <h3 className="text-xl font-semibold text-secondary mt-2">{product.name}</h3>
                <p className="text-secondary/80 mt-2">{product.price}</p>
                <button className="mt-4 btn-primary w-full">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}