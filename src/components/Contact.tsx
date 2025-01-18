import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Contact Us</h2>
          <p className="text-xl text-secondary/80">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-lg text-secondary">+389 76 907 707</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-lg text-secondary">info@pankitrejd.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="h-6 w-6 text-primary" />
              <a href="https://instagram.com/PankiTrejd" className="text-lg text-secondary hover:text-primary">
                @PankiTrejd
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="h-6 w-6 text-primary" />
              <a href="https://facebook.com/PankiTrejd" className="text-lg text-secondary hover:text-primary">
                @PankiTrejd
              </a>
            </div>
          </div>

          <form className="space-y-6 bg-secondary p-8 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-white border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-white border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-white border-0 focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}