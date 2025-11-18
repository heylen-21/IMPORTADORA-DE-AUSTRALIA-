
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    inquiryType: 'general',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    const { name, company, inquiryType, message } = formData;
    const subject = `Consulta de ${name} (${company}) - Tipo: ${inquiryType}`;
    const body = `Nombre: ${name}\nEmpresa: ${company}\nTipo de Consulta: ${inquiryType}\n\nMensaje:\n${message}`;
    return `mailto:contact@inm-au.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-slate-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-slate-900 dark:bg-slate-700 dark:text-white dark:border-slate-600" required />
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-200">Empresa</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full bg-slate-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-slate-900 dark:bg-slate-700 dark:text-white dark:border-slate-600" />
            </div>
        </div>
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-200">Tipo de Consulta</label>
        <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="mt-1 block w-full bg-slate-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-slate-900 dark:bg-slate-700 dark:text-white dark:border-slate-600">
          <option value="general">Consulta General</option>
          <option value="products">Información de Productos</option>
          <option value="partnership">Alianzas / Marcas</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-200">Mensaje</label>
        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-slate-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-slate-900 dark:bg-slate-700 dark:text-white dark:border-slate-600" required></textarea>
      </div>
      <div>
        <a 
          href={generateMailtoLink()}
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-dark bg-white hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Enviar Consulta
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
