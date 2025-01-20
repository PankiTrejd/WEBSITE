import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Контактирајте не денес!</h2>
          <p className="text-xl text-secondary/80">
            Оставете ни податоци и информација за вашите потреби и нашиот тим ќе ве контактира!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex items-center space-x-4 text-xl">
                <Phone className="h-8 w-8 text-primary" />
                <span className="text-secondary font-bold">+389 76 907 707</span>
              </div>
              <div className="flex items-center space-x-4 text-xl">
                <Mail className="h-8 w-8 text-primary" />
                <span className="text-secondary font-bold">info@pankitrejd.com</span>
              </div>
              <div className="flex items-center space-x-4 text-xl">
                <Instagram className="h-8 w-8 text-primary" />
                <a
                  href="https://instagram.com/PankiTrejd"
                  className="text-secondary font-bold hover:text-primary transition-colors"
                >
                  @PankiTrejd
                </a>
              </div>
              <div className="flex items-center space-x-4 text-xl">
                <Facebook className="h-8 w-8 text-primary" />
                <a
                  href="https://facebook.com/PankiTrejd"
                  className="text-secondary font-bold hover:text-primary transition-colors"
                >
                  @PankiTrejd
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="space-y-6 bg-secondary p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white">
                Име
              </label>
              <input
                type="text"
                id="name"
                placeholder="Вашето име"
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white">
                Емаил
              </label>
              <input
                type="email"
                id="email"
                placeholder="Вашата емаил адреса"
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white">
                Порака
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Внесете ја вашата порака"
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              Испрати Барање
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
