import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';
import ProjectHotelTermal from './components/ProjectHotelTermal';
import ProjectGrandPartner from './components/ProjectGrandPartner';
import ProjectBoni from './components/ProjectBoni';
import ProjectEmilyExclusive from './components/ProjectEmilyExclusive';
import Services from './components/Services';
import ProjectsComingSoon from './components/ProjectsComingSoon';
import { motion } from 'framer-motion';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Wait for page to render
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <Hero />
              </motion.div>
              <Services />
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                <Brands />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                <Products />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
                <MenuSection />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                <Contact />
              </motion.div>
            </>
          } />
          <Route path="/projects/hotel-termal-lux-spa" element={<ProjectHotelTermal />} />
          <Route path="/projects/grand-partner-as" element={<ProjectGrandPartner />} />
          <Route path="/projects/boni-integrgradba" element={<ProjectBoni />} />
          <Route path="/projects/emily-exclusive" element={<ProjectEmilyExclusive />} />
          <Route path="/projects" element={<ProjectsComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
