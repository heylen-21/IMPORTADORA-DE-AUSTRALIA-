
import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="bg-dark text-white dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 dark:text-hc-text">International New Market</h3>
            <p className="text-slate-300 dark:text-slate-400">Su socio estratégico para la importación y distribución en el mercado australiano.</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 dark:text-hc-text">Contacto</h3>
            <ul className="space-y-2 text-slate-300 dark:text-slate-400">
              <li>Email: <a href="mailto:contact@inm-au.com" className="hover:text-primary dark:hover:text-hc-primary transition">contact@inm-au.com</a></li>
              <li>Teléfono: <a href="tel:+61-2-9999-8888" className="hover:text-primary dark:hover:text-hc-primary transition">+61 (2) 9999 8888</a></li>
              <li>Dirección: 123 Global Way, Sydney NSW 2000, Australia</li>
            </ul>
          </div>
          <div className="col-span-1">
             <h3 className="text-xl font-bold mb-4 dark:text-hc-text">¿Tiene una consulta?</h3>
             <button
               onClick={() => setShowForm(!showForm)}
               className="bg-primary text-white dark:bg-hc-primary dark:text-hc-bg font-bold py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105"
             >
               Contáctenos
             </button>
          </div>
        </div>
         {showForm && (
            <div className="mt-8 bg-sky-800 dark:bg-slate-900 p-8 rounded-lg">
                <ContactForm />
            </div>
         )}
        <div className="mt-12 border-t border-slate-700 dark:border-slate-600 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} International New Market — Australia. Todos los derechos reservados.</p>
          <p className="mt-2">Sitio web diseñado y desarrollado con tecnologías web modernas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
