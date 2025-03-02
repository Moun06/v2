import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Super Serrurier Nice',
  description: 'Politique de confidentialité de Super Serrurier. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
  alternates: {
    canonical: 'https://super-serrurier.fr/politique-de-confidentialite',
  },
};

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="canonical" href="https://super-serrurier.fr/politique-de-confidentialite" />
      </head>
      {children}
    </>
  );
}