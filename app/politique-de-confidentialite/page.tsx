import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p>
              Chez Super Serrurier, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous recueillons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Collecte des données</h2>
            <p className="mb-4">
              Nous collectons les informations que vous nous fournissez directement lorsque vous :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remplissez un formulaire de contact</li>
              <li>Demandez un devis</li>
              <li>Appelez notre service client</li>
              <li>Utilisez nos services de serrurerie</li>
            </ul>
            <p className="mt-4">
              Ces informations peuvent inclure votre nom, adresse, numéro de téléphone, adresse e-mail et les détails relatifs à votre demande de service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Utilisation des données</h2>
            <p className="mb-4">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vous fournir les services que vous avez demandés</li>
              <li>Répondre à vos questions et demandes</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. Seules les personnes autorisées ayant besoin d'accéder à vos données dans le cadre de leurs fonctions y ont accès.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise ou permise par la loi.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Vos droits</h2>
            <p className="mb-4">
              Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@super-serrurier.fr
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse email suivante : contact@super-serrurier.fr ou par téléphone au 06 99 06 06 99.
            </p>
          </section>
        </div>
      </div>
      
      <FooterSection />
    </main>
  );
}