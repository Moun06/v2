"use client";

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Définition des données des témoignages
const testimonials = [
  {
    id: 1,
    name: "K. Lynch",
    rating: 5,
    text: "Personne vraiment professionnelle, efficace et très gentille : à recommander vivement ! Merci encore"
  },
  {
    id: 2,
    name: "M. Lemmar",
    rating: 5,
    text: "Équipe très professionnelle, du commercial aux ouvriers. Excellent rapport qualité-prix !"
  },
  {
    id: 3,
    name: "S. Marie",
    rating: 5,
    text: "Travail ponctuel, professionnel et sérieux. À recommander !"
  },
  {
    id: 4,
    name: "J. Dupont",
    rating: 5,
    text: "Intervention rapide et efficace en pleine nuit. Service impeccable et prix raisonnable."
  },
  {
    id: 5,
    name: "L. Martin",
    rating: 5,
    text: "Très satisfait de la prestation. Serrurier compétent et aimable. Je recommande sans hésiter."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Fonction pour passer au témoignage suivant
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Fonction pour revenir au témoignage précédent
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Effet pour le défilement automatique
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Changement toutes les 5 secondes
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Observer pour l'animation d'entrée
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
    <section id="avis" ref={sectionRef} className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <div className="w-24 h-1 bg-[#f40b75] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits à Nice et ses environs
          </p>
        </div>
        
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Indicateurs de progression */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#f40b75] w-6' : 'bg-gray-600'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Conteneur des témoignages avec effet de transition */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-[#f40b75]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f40b75]/5">
                    <div className="flex items-center mb-4">
                      {/* Étoiles de notation */}
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400">|</span>
                      <span className="ml-2 font-medium text-white">{testimonial.name}</span>
                    </div>
                    
                    <p className="text-lg text-gray-200 italic">"{testimonial.text}"</p>
                    
                    <div className="mt-6 flex justify-end">
                      <div className="w-16 h-1 bg-[#f40b75]/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black/50 hover:bg-[#f40b75]/80 rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black/50 hover:bg-[#f40b75]/80 rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Appel à l'action */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-300 mb-6">
            Rejoignez nos clients satisfaits et faites confiance à notre expertise
          </p>
          <a
            href="tel:0699060699"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contactez-nous maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;