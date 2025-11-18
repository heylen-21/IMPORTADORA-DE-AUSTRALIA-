
import React, { useState, useEffect, useRef } from 'react';

const KPIItem: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const duration = 2000;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = value;
                    if (start === end) return;

                    const incrementTime = (duration / end);
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) clearInterval(timer);
                    }, incrementTime);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl font-extrabold text-primary dark:text-hc-primary">
                {count}{suffix}
            </p>
            <p className="text-lg font-medium text-slate-200 dark:text-slate-300 mt-2">{label}</p>
        </div>
    );
};

const KPIs: React.FC = () => {
  return (
    <div className="bg-dark text-white dark:bg-black py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <KPIItem value={50} label="Marcas Globales" suffix="+" />
          <KPIItem value={200} label="Productos Exclusivos" suffix="+" />
          <KPIItem value={98} label="Satisfacción del Cliente" suffix="%" />
        </div>
      </div>
    </div>
  );
};

export default KPIs;
