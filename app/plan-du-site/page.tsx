import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';

export default function PlanDuSite() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Plan du Site</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Pages principales</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#f40b75] hover:underline text-lg">
                  Accueil
                </Link>
                <p className="text-gray-300 mt-1">
                  Page d'accueil de Super Serrurier, serrurier d'urgence à Nice
                </p>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Sections de la page d'accueil</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/#why-us-section" className="text-[#f40b75] hover:underline text-lg">
                  Pourquoi Nous ?
                </Link>
                <p className="text-gray-300 mt-1">
                  Découvrez pourquoi choisir Super Serrurier pour vos besoins en serrurerie
                </p>
              </li>
              <li>
                <Link href="/#services" className="text-[#f40b75] hover:underline text-lg">
                  Nos Services
                </Link>
                <p className="text-gray-300 mt-1">
                  Tous nos services de serrurerie à Nice : ouverture de porte, changement de serrure, etc.
                </p>
              </li>
              <li>
                <Link href="/#avis" className="text-[#f40b75] hover:underline text-lg">
                  Avis Clients
                </Link>
                <p className="text-gray-300 mt-1">
                  Témoignages de nos clients satisfaits
                </p>
              </li>
              <li>
                <Link href="/#contact" className="text-[#f40b75] hover:underline text-lg">
                  Contact
                </Link>
                <p className="text-gray-300 mt-1">
                  Formulaire de contact et coordonnées pour nous joindre
                </p>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Pages légales</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-[#f40b75] hover:underline text-lg">
                  Mentions Légales
                </Link>
                <p className="text-gray-300 mt-1">
                  Informations légales concernant Super Serrurier
                </p>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-[#f40b75] hover:underline text-lg">
                  Politique de Confidentialité
                </Link>
                <p className="text-gray-300 mt-1">
                  Comment nous protégeons vos données personnelles
                </p>
              </li>
              <li>
                <Link href="/plan-du-site" className="text-[#f40b75] hover:underline text-lg">
                  Plan du Site
                </Link>
                <p className="text-gray-300 mt-1">
                  Vue d'ensemble de toutes les pages du site
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      
      <FooterSection />
    </main>
  );
}