import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// Import images correctly
import image1 from "./Artboard 1.jpg";
import image2 from "./Artboard 2.png";
import image3 from "./Artboard 3.png";
import image4 from "./Artboard 4.png";
import image5 from "./Artboard 11.png";
import image6 from "./Artboard 6.png";
import image7 from "./Artboard 10.png"; // New Image
import image8 from "./Artboard 5.png"; // New Image

export default function Products() {
  const products = [
    {
      image: image1,
      description: "Zebekov dental center - Шаблон Техника.",
    },
    {
      image: image2,
      description: "БАЛЏИЕВИ Стоматолошка Поликлиника - Светлечка Реклама со 3Д Букви.",
    },
    {
      image: image3,
      description: "The Public - 3Д Букви со метална позадина (ограда).",
    },
    {
      image: image4,
      description: "Гранд Партнер АС - 3Д Букви Светлчека реклама закачена на ѕид.",
    },
    {
      image: image5,
      description: "Hotel Termal Lux & Spa - 3Д Букви Светлечка Реклама.",
    },
    {
      image: image6,
      description: "Hotel Termal Lux & Spa - Декорација на цела рецепција со плексиглас и Метални изработки.",
    },
    {
      image: image7,
      description: "Ресторан за свадби „Ла Тана“ - Бројки за маса. ",
    },
    {
      image: image8,
      description: "Studio Nikolov - 3Д букви светлечка реклама со метален држач.",
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
