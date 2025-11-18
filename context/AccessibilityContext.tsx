
import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

const FONT_SIZE_STEP = 0.1;
const MIN_FONT_SIZE_STEP = -3; // -30%
const MAX_FONT_SIZE_STEP = 4;  // +40%
const BASE_FONT_SIZE = 16; // Assumes base font size in browser is 16px

interface AccessibilityContextType {
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSizeStep, setFontSizeStep] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isHighContrast]);

  useEffect(() => {
    const root = document.documentElement;
    // Use clamp to ensure value stays within bounds
    const newSize = BASE_FONT_SIZE * (1 + fontSizeStep * FONT_SIZE_STEP);
    root.style.fontSize = `${newSize}px`;
  }, [fontSizeStep]);

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev);
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSizeStep(prev => Math.min(prev + 1, MAX_FONT_SIZE_STEP));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSizeStep(prev => Math.max(prev - 1, MIN_FONT_SIZE_STEP));
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSizeStep(0);
  }, []);

  return (
    <AccessibilityContext.Provider value={{ isHighContrast, toggleHighContrast, increaseFontSize, decreaseFontSize, resetFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
