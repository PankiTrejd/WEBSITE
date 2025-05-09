import { Clock } from 'lucide-react';
import React from 'react';

export default function ProjectsComingSoon() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center bg-white py-24 px-4">
      <Clock className="h-20 w-20 text-orange-500 mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold text-secondary mb-4 text-center">Проекти</h1>
      <p className="text-xl text-gray-700 text-center max-w-xl mb-2">Оваа страница е во изработка.</p>
      <p className="text-lg text-gray-500 text-center max-w-xl">Наскоро ќе можете да ги погледнете нашите најнови проекти и изработки. Ви благодариме за трпението!</p>
    </section>
  );
} 