"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-black py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/Super-Serrurier.png" 
                alt="Super Serrurier Logo" 
                width={180} 
                height={50} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#f40b75] transition-colors duration-300 font-medium">
              Accueil
            </Link>
            <Link href="#why-us-section" className="text-white hover:text-[#f40b75] transition-colors duration-300 font-medium">
              À propos
            </Link>
            <Link href="#services" className="text-white hover:text-[#f40b75] transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="#avis" className="text-white hover:text-[#f40b75] transition-colors duration-300 font-medium">
              Avis Clients
            </Link>
            <Link href="#contact" className="text-white hover:text-[#f40b75] transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="tel:0699060699" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#f40b75] hover:bg-[#f40b75]/90 transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5 text-white" /> Urgence 24/7 : 06 99 06 06 99
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#f40b75] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f40b75] hover:bg-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="#why-us-section" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f40b75] hover:bg-gray-900"
            onClick={() => setIsOpen(false)}
          >
            À propos de nous
          </Link>
          <Link 
            href="#services" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f40b75] hover:bg-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#avis" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f40b75] hover:bg-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Avis Clients
          </Link>
          <Link 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f40b75] hover:bg-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="tel:0699060699" 
            className="block px-3 py-2 rounded-md text-base font-medium bg-[#f40b75] text-white hover:bg-[#f40b75]/90 mt-4 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="mr-2 h-5 w-5 text-white" /> Urgence 24/7 : 06 99 06 06 99
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
