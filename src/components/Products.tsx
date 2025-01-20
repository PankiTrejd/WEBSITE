import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Products() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      description: "Персонализирана Силуета од вашето возило!",
    },
    {
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      description: "Декоративни букви за секоја прилика.",
    },
    {
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
      description: "Рачно изработени украси за вашиот дом.",
    },
    {
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&q=80&w=800",
      description: "Ексклузивни 3D производи.",
    },
    {
      image: "https://images.unsplash.com/photo-1542293787938-c9e299b88010?auto=format&fit=crop&q=80&w=800",
      description: "Персонализирани реклами и декорации.",
    },
    {
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&q=80&w=800",
      description: "Уникатни производи за специјални моменти.",
    },
  ];

  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Наши Изработки</h2>
          <p className="text-lg text-white/80 mt-4">
            Уникатни производи за секоја прилика.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-lg text-white">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-next text-white text-3xl hover:text-primary transition-colors"></div>
          <div className="swiper-button-prev text-white text-3xl hover:text-primary transition-colors"></div>
        </Swiper>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Погледнете дел од нашите изработки кои го истакнуваат нашиот квалитет
            и уникатност. Дознајте повеќе за нашите производи!
          </p>
        </div>
      </div>
    </section>
  );
}
