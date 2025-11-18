
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden lg:aspect-none">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-lg font-bold text-dark dark:text-hc-text">{product.name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{product.category}</p>
        </div>
        <div className="mt-auto pt-4">
          <p className="text-md font-semibold text-primary dark:text-hc-primary">
            {product.price ? `$${product.price.toFixed(2)} AUD` : 'Consultar Precio'}
          </p>
          <button className="mt-2 w-full bg-secondary dark:bg-hc-secondary text-white dark:text-hc-bg font-bold py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300">
            Más Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
