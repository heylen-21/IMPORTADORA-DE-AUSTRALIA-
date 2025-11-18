
import React from 'react';
import type { Brand, Ally } from '../types';

interface BrandLogoProps {
  item: Brand | Ally;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ item }) => {
  return (
    <div className="group relative flex justify-center items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img
        src={item.logoUrl}
        alt={item.name}
        className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 dark:invert-[.8] dark:group-hover:invert-0"
      />
      <div className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-2 text-sm font-medium text-white bg-dark dark:bg-slate-700 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {item.description}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-dark dark:border-t-slate-700"></div>
      </div>
    </div>
  );
};

export default BrandLogo;
