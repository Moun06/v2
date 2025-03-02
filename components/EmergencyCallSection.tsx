"use client";

import { Phone } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const EmergencyCallSection = () => {
  const [isRinging, setIsRinging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation de l'icône du téléphone
    const interval = setInterval(() => {
      setIsRinging(prev => !prev);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-r from-gray-900 to-black border-t border-b border-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`bg-[#f40b75]/10 rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f40b75]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f40b75]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center">
              <div className={`mr-6 transition-all duration-300 ${isRinging ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                <div className="relative">
                  <Phone className="h-12 w-12 text-[#f40b75]" />
                  {isRinging && (
                    <>
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#f40b75]/30"></span>
                      <span className="absolute -inset-1 animate-pulse rounded-full bg-[#f40b75]/20"></span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  🚨 Besoin d'un serrurier en urgence ?
                </h3>
                <p className="text-lg md:text-xl text-gray-300">
                  Nous intervenons en moins de 15 minutes à Nice et ses alentours 24h/24 et 7j/7 !
                </p>
              </div>
            </div>
            
            <a
              href="tel:0699060699"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              <Phone className="mr-2 h-5 w-5 text-white" /> Appelez un serrurier maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCallSection;