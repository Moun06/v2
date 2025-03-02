import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Super Serrurier Nice',
  description: 'Mentions légales de Super Serrurier, entreprise de serrurerie à Nice. Informations légales, conditions générales et politique de confidentialité.',
  alternates: {
    canonical: 'https://super-serrurier.fr/mentions-legales',
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="canonical" href="https://super-serrurier.fr/mentions-legales" />
      </head>
      {children}
    </>
  );
}