
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary dark:bg-hc-primary mb-6 text-white dark:text-hc-bg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark dark:text-hc-text mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="bg-light dark:bg-hc-bg py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-hc-text sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Facilitamos cada paso del proceso, desde el origen hasta el consumidor final.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Importación Estratégica"
            description="Gestionamos la logística y aduanas para una importación eficiente y sin complicaciones de productos de alta demanda."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
          />
          <ServiceCard 
            title="Distribución Nacional"
            description="Contamos con una red de distribución robusta que asegura que sus productos lleguen a los puntos de venta clave en toda Australia."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <ServiceCard 
            title="Análisis de Mercado"
            description="Ofrecemos insights y análisis del mercado australiano para identificar oportunidades y posicionar su marca para el éxito."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
