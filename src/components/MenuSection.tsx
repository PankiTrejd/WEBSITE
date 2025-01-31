import React from 'react';

const DigitalMenuSection = () => {
  return (
    <section id="digital-menu" className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Дигитално Мени</h2>
      <p className="text-lg text-secondary mb-4">
        *со моментално достапни продукти и моментално достапни бои*
      </p>
      <div className="flex justify-center">
        <iframe
          src="https://digimeni.com/venue/panki"
          title="Digital Menu"
          className="border-2 border-gray-300 rounded-md shadow-md"
          style={{ width: '80%', height: '600px', maxWidth: '1200px', maxHeight: '80vh' }}
        ></iframe>
      </div>
    </section>
  );
};

export default DigitalMenuSection;
