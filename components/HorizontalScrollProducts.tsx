
import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';

const HorizontalScrollProducts: React.FC = () => {
    // Show a selection of featured products
    const featuredProducts = products.slice(0, 8);

    return (
        <section className="bg-light dark:bg-slate-900 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-hc-text sm:text-4xl">Productos Destacados</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">Explore una selección de nuestras importaciones más populares. Deslice para ver más.</p>
                </div>
            </div>
            {/* On smaller screens, allow scroll container to bleed out for better UX */}
            <div className="pl-6 lg:pl-0 lg:container lg:mx-auto">
                <div className="flex space-x-8 pb-8 custom-scrollbar overflow-x-auto snap-x snap-mandatory">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="snap-start flex-shrink-0 w-72 md:w-80">
                            <ProductCard product={product} />
                        </div>
                    ))}
                     <div className="flex-shrink-0 w-1"></div> {/* Spacer at the end */}
                </div>
            </div>
        </section>
    );
};

export default HorizontalScrollProducts;
