"use client"

import React, { useState, useEffect, useRef } from 'react';
import bg3 from '../../../public/Group1.png';

interface CounterState {
  professionals: number;
  countries: number;
  compliance: number;
  partners: number;
}

interface CounterData {
  value: number;
  suffix: string;
  label: string;
  formatter: (val: number) => string;
}

const StoryCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [counters, setCounters] = useState<CounterState>({
    professionals: 0,
    countries: 0,
    compliance: 0,
    partners: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, we can stop observing to prevent re-triggering
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation logic
  useEffect(() => {
    if (!isVisible) return;

    const targets: CounterState = {
      professionals: 500,
      countries: 2,
      compliance: 99.9,
      partners: 80
    };

    const duration = 2500; // 2.5 seconds for smoother animation
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Using easeOutCubic for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCounters({
        professionals: Math.floor(targets.professionals * easeOutCubic),
        countries: Math.floor(targets.countries * easeOutCubic),
        compliance: Math.floor(targets.compliance * easeOutCubic),
        partners: Math.floor(targets.partners * easeOutCubic)
      });

      if (frame >= totalFrames) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const counterData: CounterData[] = [
    {
      value: counters.professionals,
      suffix: '+',
      label: 'Firms successfully managing compliance',
      formatter: (val: number) => formatNumber(val) + '+'
    },
    {
      value: counters.countries,
      suffix: 'M',
      label: 'Countries Served',
      formatter: (val: number) => val + 'M'
    },
    {
      value: counters.compliance,
      suffix: '%',
      label: 'Regulatory Compliant',
      formatter: (val: number) => val + '%'
    },
    {
      value: counters.partners,
      suffix: '%',
      label: 'Trusted Partners & Integrations',
      formatter: (val: number) => val + '%'
    }
  ];

  return (
    <section 
      ref={sectionRef}
    //   className="bg-cover bg-center bg-no-repeat  py-20 px-6" style={{ backgroundImage: `url(${bg3.src})` }}
    >
      <div className="max-w-6xl mx-auto pt-16 pb-10 ">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-gray-500">Data Tells </span>{' '}
            <span className="text-black">The Story </span>
         
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {counterData.map((counter, index) => (
            <div 
              key={index}
              className="text-center"
            >
              {/* Counter Number */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 block leading-none">
                  {counter.formatter(counter.value)}
                </span>
              </div>

              {/* Thin horizontal line */}
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>

              {/* Counter Label */}
              <div className="text-black text-base md:text-lg font-normal leading-relaxed max-w-xs mx-auto">
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCounter;