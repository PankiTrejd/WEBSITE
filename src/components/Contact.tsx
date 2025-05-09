import { useState } from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_4vo1nhl', // Provided Service ID
        'template_bqerzgg', // Provided Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'glKWTE_PKdXvV8eGB' // Provided Public Key
      );
      setSuccessMessage('Вашето барање е успешно испратено!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Настана грешка при испраќањето на барањето.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form className="space-y-6 bg-secondary p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white">
                Име
              </label>
              <input
                type="text"
                id="name"
                placeholder="Вашето име"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
                required
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
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
                required
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
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none p-3"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Се испраќа...' : 'Испрати Барање'}
            </button>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
