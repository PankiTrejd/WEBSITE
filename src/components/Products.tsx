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
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Наши Изработки</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="h-96 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-white">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paragraph below the slider */}
        <div className="text-center mt-8">
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Погледнете дел од нашите изработки кои го истакнуваат нашиот квалитет и уникатност. Дознајте повеќе за нашите производи!
          </p>
        </div>
      </div>
    </section>
  );
}
