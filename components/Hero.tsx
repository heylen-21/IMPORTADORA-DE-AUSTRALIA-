
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-dark text-white dark:bg-hc-bg overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <img 
          src="https://picsum.photos/seed/sydney/1920/1080" 
          alt="Sydney Harbour" 
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        />
        <div className="absolute inset-0 bg-dark dark:bg-hc-bg opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-6 py-32 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 dark:text-hc-text">
          Conectando Oportunidades, <br />
          <span className="text-cyan-400 dark:text-hc-secondary">Importando Calidad a Australia</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 dark:text-slate-300 mb-8">
          Somos su puente al mercado australiano, especializados en la importación y distribución de productos de clase mundial.
        </p>
        <Link 
          to="/products"
          className="bg-primary text-white dark:bg-hc-primary dark:text-hc-bg font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105 text-lg"
        >
          Explorar Productos
        </Link>
      </div>
    </div>
  );
};

export default Hero;
