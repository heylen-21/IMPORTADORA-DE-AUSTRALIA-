
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BrandsPage from './pages/BrandsPage';
import { AccessibilityProvider } from './context/AccessibilityContext';
import AccessibilityToolbar from './components/AccessibilityToolbar';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-light dark:bg-hc-bg">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/brands" element={<BrandsPage />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityToolbar />
        </div>
      </HashRouter>
    </AccessibilityProvider>
  );
};

export default App;
