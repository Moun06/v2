"use client";

import { Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const WhyUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [animateItems, setAnimateItems] = useState({
    icon: false,
    title: false,
    divider: false,
    checkItems: false,
    mainContent: false,
    cta: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Séquence d'animation
          setTimeout(() => setAnimateItems(prev => ({ ...prev, icon: true })), 100);
          setTimeout(() => setAnimateItems(prev => ({ ...prev, title: true })), 300);
          setTimeout(() => setAnimateItems(prev => ({ ...prev, divider: true })), 500);
          setTimeout(() => setAnimateItems(prev => ({ ...prev, checkItems: true })), 700);
          setTimeout(() => setAnimateItems(prev => ({ ...prev, mainContent: true })), 900);
          setTimeout(() => setAnimateItems(prev => ({ ...prev, cta: true })), 1100);
          
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
    <section id="why-us-section" ref={sectionRef} className="py-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Icône et titre */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div 
              className={`mb-6 p-4 bg-[#f40b75]/10 rounded-full inline-flex transition-all duration-700 ease-out transform ${
                animateItems.icon ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-50'
              }`}
            >
              <Shield className="h-16 w-16 text-[#f40b75]" />
            </div>
            
            <h2 
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out transform ${
                animateItems.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Pourquoi Nous ?
            </h2>
            
            <div 
              className={`w-24 h-1 bg-[#f40b75] mb-6 transition-all duration-700 ease-out transform ${
                animateItems.divider ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            ></div>
            
            <div className="flex flex-col gap-4">
              {['Entreprise éthique', 'Référencée par les assurances', 'Serruriers certifiés'].map((text, index) => (
                <div 
                  key={index}
                  className={`flex items-center transition-all duration-700 ease-out transform ${
                    animateItems.checkItems ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-[#f40b75] mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Texte principal */}
          <div 
            className={`md:w-2/3 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl transition-all duration-1000 ease-out transform ${
              animateItems.mainContent ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-1'
            }`}
          >
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              N'hésitez pas, nous sommes une équipe de serruriers professionnels à Nice, une entreprise éthique, référencée et certifiée par toutes les assurances.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              En effet, votre assurance habitation pourra prendre en charge cette intervention, que ce soit pour une ouverture de porte ou un changement de serrure suite à un dégât.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Nous vous invitons à les contacter pour vous assurer qu'ils prendront en charge vos travaux de serrurerie. Notre serrurier pourra vous aider dans cette démarche et vous remettra tous les documents nécessaires pour la prise en charge.
            </p>
            <div 
              className={`mt-6 transition-all duration-700 ease-out transform ${
                animateItems.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="tel:0699060699"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-white" /> Contactez-nous pour plus d'informations
                  <ArrowRight 
                    className={`ml-2 transition-all duration-500 ease-out transform ${
                      isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-70'
                    }`} 
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f40b75] to-[#f40b75]/80 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f40b75]/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f40b75]/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default WhyUsSection;