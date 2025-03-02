"use client";

import { useEffect, useState, useRef } from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const InterventionZonesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllQuarters, setShowAllQuarters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        threshold: 0.1,
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
      className="py-16 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-8">
            <MapPin className="h-8 w-8 text-[#f40b75] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Zones d'intervention</h2>
          </div>
          
          <div className="w-24 h-1 bg-[#f40b75] mx-auto mb-8"></div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Serrurier en urgence à Nice 
            </h3>
            
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Vous recherchez un serrurier en urgence à Nice ? Super Serrurier intervient 24h/24 et 7j/7, avec une arrivée rapide en moins de 15 minutes dans tous les quartiers de Nice et ses alentours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div 
                className={`transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#f40b75]/10 rounded-full mr-4">
                    <Navigation className="h-6 w-6 text-[#f40b75]" />
                  </div>
                  <h4 className="text-xl font-bold">Intervention rapide dans tous les quartiers de Nice</h4>
                </div>
                <p className="text-gray-300 mb-4 pl-16">
                  Basés à Nice Centre, nous couvrons tous les arrondissements et secteurs :
                </p>
                <div className="pl-16 space-y-2">
                  <p className="text-gray-300 flex items-start">
                    <span className="text-[#f40b75] mr-2">👉</span> Nice Nord, Nice Ouest, Nice Est, Nice Centre
                  </p>
                  <p className="text-gray-300 flex items-start">
                    <span className="text-[#f40b75] mr-2">👉</span> Nice 06000, 06100, 06200, 06300
                  </p>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-1000 ease-out delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#f40b75]/10 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#f40b75]" />
                  </div>
                  <h4 className="text-xl font-bold">Tous les quartiers desservis</h4>
                </div>
                <p className="text-gray-300 mb-4 pl-16">
                  Notre équipe de serruriers professionnels intervient dans tous les quartiers de Nice :
                </p>
                <button 
                  className="inline-flex items-center justify-center px-4 py-2 ml-16 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 transition-all duration-300 hover:scale-105"
                  onClick={() => setShowAllQuarters(!showAllQuarters)}
                >
                  {showAllQuarters ? "Masquer les quartiers" : "Voir tous les quartiers"}
                </button>
              </div>
            </div>
            
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-6 transition-all duration-500 ease-in-out ${
                showAllQuarters ? 'opacity-100 max-h-96 overflow-y-auto' : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                Aéroport de Nice, Nice Gare, Arénas, Ariane, Baumettes, Carabacel, Caucade, Cimiez, Crémat, Fabron, Gairaut, Gambetta, Jean-Médecin, Libération, Lingostière, Magnan, La Madeleine, Mantega, Mont-Boron, Pasteur, Pessicart, Le Piol, Le Port, Le Ray, Rimiez, Riquier, Roquebillière, Rue de France, Saint-Antoine, Saint-Augustin, Saint-Isidore, Saint-Maurice, Saint-Pancrace, Saint-Philippe, Saint-Pierre-de-Féric, Saint-Roch, Saint-Roman-de-Bellet, Saint-Sylvestre, Sainte-Marguerite, Thiers, Ventabrun, Vernier, Vieux-Nice, Vinaigrier.
              </p>
            </div>
            
            <div 
              className={`mt-8 text-center transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="tel:0699060699"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" /> Appelez un serrurier maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZonesSection;