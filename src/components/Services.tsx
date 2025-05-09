import { motion } from 'framer-motion';
import { Package, Home, Lightbulb, BadgePercent } from 'lucide-react';
import React from 'react';

export default function Services() {
  return (
    <motion.section
      className="max-w-7xl mx-auto my-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
        <Package className="h-12 w-12 text-orange-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">Увоз и продажба на плексиглас</h3>
        <p className="text-gray-600 text-sm">Висококвалитетен плексиглас за изработка, занаетчиство и индустриска употреба. Стабилна набавка и достава низ цела Македонија.</p>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
        <Home className="h-12 w-12 text-orange-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">Декорации за дом и канцеларија</h3>
        <p className="text-gray-600 text-sm">Модерни, рачно изработени декорации што внесуваат стил, боја и уникатен карактер во секој простор.</p>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
        <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">Светлечки реклами</h3>
        <p className="text-gray-600 text-sm">Изработка на LED реклами, 3D букви и осветлени знаци за бизниси кои сакаат да се истакнат — и дење и ноќе.</p>
      </div>
      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
        <BadgePercent className="h-12 w-12 text-orange-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">Брендинг</h3>
        <p className="text-gray-600 text-sm">Дизајн и визуелен идентитет за компании: од лого и визит карти до целосен визуелен концепт што остава впечаток.</p>
      </div>
    </motion.section>
  );
} 