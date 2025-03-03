"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, Clock, Shield } from 'lucide-react';

const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" ref={footerRef} className="bg-gray-900 pt-16 pb-8 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Colonne 1 - Branding */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/Super-Serrurier.png" 
                alt="Super Serrurier Logo" 
                width={180} 
                height={50} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 text-lg">
              Super Serrurier – Assistance & Dépannage à Nice 24/7
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-[#f40b75]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-3">
                <Clock className="h-5 w-5 text-[#f40b75] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Service d'urgence disponible 24h/24 et 7j/7 pour tous vos besoins en serrurerie à Nice et ses environs
                </p>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-[#f40b75] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Intervention garantie en moins de 15 minutes par des professionnels certifiés
                </p>
              </div>
            </div>
          </div>
          
          {/* Colonne 2 - Coordonnées */}
          <div 
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Coordonnées</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#f40b75] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">9 avenue de la Vallière, 06100 Nice</span>
              </li>
              <li>
                <a 
                  href="tel:0699060699" 
                  className="flex items-center hover:text-[#f40b75] transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 text-[#f40b75] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 hover:text-white">📞 06 99 06 06 99</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@super-serrurier.fr" 
                  className="flex items-center hover:text-[#f40b75] transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 text-[#f40b75] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 hover:text-white">📧 contact@super-serrurier.fr</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-white">Horaires</h3>
              <p className="text-gray-300 mb-2">Lundi - Dimanche</p>
              <p className="text-white font-semibold">24h/24 et 7j/7</p>
            </div>
          </div>
          
          {/* Colonne 3 - CTA & Formulaire */}
          <div 
            className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Besoin d'une intervention immédiate ?</h3>
            <p className="text-gray-300 mb-6">
              Contactez-nous maintenant pour une assistance rapide et professionnelle !
            </p>
            
            <a
              href="tel:0699060699"
              className="inline-flex items-center justify-center px-6 py-3 mb-8 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" /> Urgence 24/7
            </a>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f40b75] text-white placeholder-gray-400 transition-all duration-300 focus:border-[#f40b75]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f40b75] text-white placeholder-gray-400 transition-all duration-300 focus:border-[#f40b75]"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f40b75] text-white placeholder-gray-400 resize-none transition-all duration-300 focus:border-[#f40b75]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                  isSubmitting ? 'bg-gray-600' : 'bg-[#f40b75] hover:bg-[#f40b75]/90 hover:scale-[1.02]'
                } transition-all duration-300`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Envoyer
                  </span>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-2 text-sm text-green-400 bg-green-900/20 p-2 rounded animate-pulse">
                  Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
              
              {submitError && (
                <div className="mt-2 text-sm text-red-400 bg-red-900/20 p-2 rounded">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Séparateur */}
        <div 
          className={`border-t border-gray-800 pt-8 mt-8 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Super Serrurier Nice. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link href="/plan-du-site" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
