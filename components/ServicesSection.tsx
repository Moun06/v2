"use client";

import { Key, Lock, DoorClosed, Briefcase, Phone } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <div className="w-24 h-1 bg-[#f40b75] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions professionnelles pour tous vos besoins en serrurerie à Nice et ses environs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<Key className="h-8 w-8 text-[#f40b75]" />}
            title="Ouverture de Porte"
            price="à partir de 100 €"
            description="Porte claquée ou clés perdues ? Notre équipe intervient en urgence pour une ouverture sans dégâts, avec des techniques professionnelles adaptées à tous types de serrures."
            isVisible={isVisible}
            delay={0}
          />
          
          <ServiceCard 
            icon={<Lock className="h-8 w-8 text-[#f40b75]" />}
            title="Changement de Serrure"
            price="à partir de 94 €"
            description="Sécurisez votre domicile avec un changement de serrure professionnel. Nous installons des serrures de haute qualité pour une protection optimale contre les tentatives d'effraction."
            isVisible={isVisible}
            delay={200}
          />
          
          <ServiceCard 
            icon={<DoorClosed className="h-8 w-8 text-[#f40b75]" />}
            title="Porte Blindée & Installation"
            price="à partir de 1 395 €"
            description="Protection maximale pour votre domicile avec nos portes blindées certifiées. Installation professionnelle garantissant sécurité, isolation thermique et acoustique."
            isVisible={isVisible}
            delay={400}
          />
          
          <ServiceCard 
            icon={<Briefcase className="h-8 w-8 text-[#f40b75]" />}
            title="Coffre-Fort & Installation"
            price="à partir de 154,90 €"
            description="Protégez vos objets de valeur avec nos coffres-forts de qualité. Installation sécurisée et conseils personnalisés pour choisir le modèle adapté à vos besoins."
            isVisible={isVisible}
            delay={600}
          />
        </div>
        
        <div 
          className={`text-center mt-12 transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
         
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  price, 
  description,
  isVisible,
  delay
}: { 
  icon: React.ReactNode, 
  title: string, 
  price: string, 
  description: string,
  isVisible: boolean,
  delay: number
}) => {
  return (
    <div 
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-1000 hover:scale-[1.02] hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-[#f40b75]/10 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold text-[#f40b75] mb-4">{price}</p>
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        <a 
          href="tel:0699060699" 
          className="inline-flex items-center justify-center px-4 py-2 bg-[#f40b75] text-base font-medium rounded-md text-white hover:bg-[#f40b75]/80 transition-all duration-300 hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5 text-white" /> Appelez maintenant
        </a>
      </div>
    </div>
  );
};

export default ServicesSection;