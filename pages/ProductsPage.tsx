
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../constants';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-hc-bg">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-dark dark:text-hc-text sm:text-5xl">Nuestro Catálogo de Productos</h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Una selección curada de productos de alta calidad listos para el mercado australiano.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
