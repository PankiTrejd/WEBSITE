import { ChevronDown } from 'lucide-react';
import weblad from '/src/components/weblad.jpg'; // Import the image

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${weblad})` }} // Set the background image
    >
      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wide">
          Вашиот партнер за <span className="text-primary">креативни решенија!</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Професионални услуги за изработка на реклами, декорации и уникатни производи што ги истакнуваат вашите идеи.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-white text-lg font-medium rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Контактирајте не
          </a>
          <a
            href="#brands"
            className="px-6 py-3 border border-primary text-primary text-lg font-medium rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Дознај повеќе
          </a>
        </div>
      </div>

      {/* Animated Chevron */}
      <div className="absolute bottom-6 w-full text-center">
        <ChevronDown
          className="text-white text-opacity-80 hover:text-primary cursor-pointer transition-colors"
          size={40}
        />
      </div>
    </section>
  );
}
