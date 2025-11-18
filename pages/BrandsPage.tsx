
import React from 'react';
import BrandLogo from '../components/BrandLogo';
import { brands, allies } from '../constants';

const BrandsPage: React.FC = () => {
  return (
    <div className="bg-light dark:bg-hc-bg">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-dark dark:text-hc-text sm:text-5xl">Nuestras Marcas y Aliados</h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">Colaboramos con marcas líderes y socios estratégicos para ofrecer excelencia y confianza.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-dark dark:text-hc-text text-center mb-10">Marcas Representadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand) => (
              <BrandLogo key={brand.id} item={brand} />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-dark dark:text-hc-text text-center mb-10">Aliados Estratégicos</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            {allies.map((ally) => (
              <BrandLogo key={ally.id} item={ally} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrandsPage;
