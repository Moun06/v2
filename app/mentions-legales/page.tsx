import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Informations légales</h2>
            <p className="mb-4">
              Super Serrurier<br />
              9 avenue de la Vallière<br />
              06100 Nice<br />
              France
            </p>
            <p className="mb-4">
              Téléphone : 06 99 06 06 99<br />
              Email : contact@super-serrurier.fr
            </p>
            <p>
              SIRET : 123 456 789 00012<br />
              TVA Intracommunautaire : FR 12 123456789
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site www.super-serrurier.fr est M. Jean Dupont, en qualité de gérant de l'entreprise Super Serrurier.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Hébergement</h2>
            <p>
              Le site www.super-serrurier.fr est hébergé par la société Netlify, Inc.<br />
              44 Montgomery Street, Suite 300<br />
              San Francisco, California 94104<br />
              États-Unis
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu du site www.super-serrurier.fr (illustrations, textes, logos, icônes, images, vidéos, etc.) est la propriété exclusive de Super Serrurier à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Super Serrurier.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Conditions générales de vente</h2>
            <p>
              Les conditions générales de vente sont disponibles sur simple demande par email à contact@super-serrurier.fr ou par téléphone au 06 99 06 06 99.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Politique de confidentialité</h2>
            <p>
              Pour plus d'informations sur la façon dont nous traitons vos données personnelles, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-[#f40b75] hover:underline">politique de confidentialité</a>.
            </p>
          </section>
        </div>
      </div>
      
      <FooterSection />
    </main>
  );
}