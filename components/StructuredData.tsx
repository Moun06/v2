const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Super Serrurier",
    "image": "https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/Super-Serrurier.png",
    "telephone": "0699060699",
    "url": "https://super-serrurier.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nice",
      "addressRegion": "PACA",
      "postalCode": "06000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7102,
      "longitude": 7.2620
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "servesCuisine": "Serrurerie",
    "sameAs": [
      "https://www.facebook.com/superserrurier",
      "https://www.instagram.com/superserrurier"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData)
      }}
    />
  );
};

export default StructuredData;