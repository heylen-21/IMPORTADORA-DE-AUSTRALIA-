
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const activeLinkClass = 'text-primary dark:text-hc-primary border-b-2 border-primary dark:border-hc-primary';
  const inactiveLinkClass = 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-hc-primary transition duration-300';

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-white/80 dark:bg-hc-bg/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to="/" onClick={closeMenu} className="text-2xl font-bold text-dark dark:text-hc-text hover:text-primary dark:hover:text-hc-primary transition duration-300">
            INM<span className="text-primary dark:text-hc-primary">.</span>AU
          </NavLink>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium pb-1`}>
              Inicio
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium pb-1`}>
              Productos
            </NavLink>
            <NavLink to="/brands" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium pb-1`}>
              Marcas y Aliados
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark dark:text-hc-text focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-hc-bg z-40 pt-20 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
          <NavLink to="/" onClick={closeMenu} className="text-3xl font-bold text-dark dark:text-hc-text hover:text-primary dark:hover:text-hc-primary transition-colors">
            Inicio
          </NavLink>
          <NavLink to="/products" onClick={closeMenu} className="text-3xl font-bold text-dark dark:text-hc-text hover:text-primary dark:hover:text-hc-primary transition-colors">
            Productos
          </NavLink>
          <NavLink to="/brands" onClick={closeMenu} className="text-3xl font-bold text-dark dark:text-hc-text hover:text-primary dark:hover:text-hc-primary transition-colors">
            Marcas y Aliados
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
