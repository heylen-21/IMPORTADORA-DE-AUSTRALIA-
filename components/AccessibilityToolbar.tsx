
import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityToolbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleHighContrast, increaseFontSize, decreaseFontSize, resetFontSize, isHighContrast } = useAccessibility();

    const iconStyle = "w-6 h-6";

    return (
        <div className="fixed bottom-4 right-4 z-[100]">
            {isOpen && (
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-2xl mb-2 flex flex-col items-center gap-4 border dark:border-slate-600 w-48">
                    <div className="text-center">
                        <span className="font-bold text-sm text-dark dark:text-hc-text">Accesibilidad</span>
                    </div>
                    <div className="flex items-center justify-around w-full">
                        <button onClick={decreaseFontSize} title="Disminuir texto" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-dark dark:text-hc-text">
                            <span className="text-xl font-bold">A-</span>
                        </button>
                        <button onClick={resetFontSize} title="Restablecer texto" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-dark dark:text-hc-text">
                             <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </button>
                        <button onClick={increaseFontSize} title="Aumentar texto" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-dark dark:text-hc-text">
                            <span className="text-xl font-bold">A+</span>
                        </button>
                    </div>
                    <button onClick={toggleHighContrast} className={`w-full text-sm font-semibold p-2 rounded-md transition-colors ${isHighContrast ? 'bg-hc-primary text-hc-bg' : 'bg-dark text-white'}`}>
                        {isHighContrast ? 'Modo Normal' : 'Alto Contraste'}
                    </button>
                </div>
            )}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="w-16 h-16 bg-primary dark:bg-hc-primary rounded-full shadow-lg flex items-center justify-center text-white dark:text-hc-bg transform hover:scale-110 transition-transform"
                aria-label="Toggle Accessibility Menu"
                aria-expanded={isOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM5.134 6.134a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.06L5.134 7.195a.75.75 0 010-1.06zm9.732 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zm-3.866 2.866a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zm9.732 0a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06a.75.75 0 010 1.06z" />
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default AccessibilityToolbar;
