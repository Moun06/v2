"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/slide1-Super_Serrurier.webp"
          alt="Serrurier professionnel ouvrant une porte à Nice"
          fill
          priority
          className="object-cover brightness-50 transform scale-105 transition-transform duration-10000 ease-in-out"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(1.05)' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block">Serrurier d'urgence à Nice</span>
          <span className="block text-red-600 mt-2 animate-pulse">Intervention en 15 minutes</span>
        </h1>
        <p 
          className={`mt-6 text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ouverture de porte, changement de serrure, installation de porte blindée.
          <br />
          <span className="text-red-500/90 font-semibold">Service disponible 24h/24 et 7j/7.</span>
        </p>
        <div 
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="tel:0699060699"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 md:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden ${
              isHovered ? 'pl-6 pr-10' : 'px-8'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Demander un devis gratuit</span>
            <ArrowRight 
              className={`absolute right-4 transition-all duration-500 ease-out transform ${
                isHovered ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
              }`} 
            />
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        
      </div>
    </section>
  );
};

export default HeroSection;