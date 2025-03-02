import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan du Site - Super Serrurier Nice',
  description: 'Plan du site de Super Serrurier. Retrouvez facilement toutes les pages de notre site de services de serrurerie à Nice.',
  alternates: {
    canonical: 'https://super-serrurier.fr/plan-du-site',
  },
};

export default function PlanDuSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="canonical" href="https://super-serrurier.fr/plan-du-site" />
      </head>
      {children}
    </>
  );
}