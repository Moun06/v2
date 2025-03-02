"use client";

import { Clock, Shield, Award, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const AdvantagesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('advantages-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Déclencher une fois au chargement
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="advantages-section" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <div className="w-24 h-1 bg-[#f40b75] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des serruriers professionnels à votre service pour toutes vos urgences
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <AdvantageCard 
            icon={<Clock className="h-12 w-12 text-[#f40b75]" />}
            title="Intervention rapide"
            description="En moins de 15 minutes"
            delay={0}
            isVisible={isVisible}
          />
          
          <AdvantageCard 
            icon={<Shield className="h-12 w-12 text-[#f40b75]" />}
            title="Garantie 1 an"
            description="Sur toutes nos prestations"
            delay={200}
            isVisible={isVisible}
          />
          
          <AdvantageCard 
            icon={<Award className="h-12 w-12 text-[#f40b75]" />}
            title="Certifié"
            description="Artisan qualifié"
            delay={400}
            isVisible={isVisible}
          />
          
          <AdvantageCard 
            icon={<MapPin className="h-12 w-12 text-[#f40b75]" />}
            title="Nice et alentours"
            description="Service de proximité"
            delay={600}
            isVisible={isVisible}
          />
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="tel:0699060699"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            📞 Contactez-nous maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

const AdvantageCard = ({ 
  icon, 
  title, 
  description,
  delay,
  isVisible
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: number,
  isVisible: boolean
}) => {
  return (
    <div 
      className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl transition-all duration-1000 hover:transform hover:scale-105 hover:bg-gray-800/80 hover:border-[#f40b75]/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-[#f40b75]/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default AdvantagesSection;