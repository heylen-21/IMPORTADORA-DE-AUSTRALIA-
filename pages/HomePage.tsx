
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import KPIs from '../components/KPIs';
import { Link } from 'react-router-dom';
import HorizontalScrollProducts from '../components/HorizontalScrollProducts';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HorizontalScrollProducts />
      <KPIs />
      <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-hc-text sm:text-4xl mb-6">Explore lo que ofrecemos</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Descubra nuestra selección curada de productos de alta calidad y las marcas prestigiosas con las que nos asociamos.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/products" className="bg-primary text-white dark:bg-hc-primary dark:text-hc-bg font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105">
                    Ver Productos
                </Link>
                <Link to="/brands" className="bg-secondary text-white dark:bg-hc-secondary dark:text-hc-bg font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105">
                    Conocer Marcas
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
