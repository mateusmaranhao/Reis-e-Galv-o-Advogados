import { FIRM_DATA, SERVICES } from './site-data';

export function getLegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${FIRM_DATA.baseUrl}/#legalservice`,
    name: FIRM_DATA.name,
    legalName: FIRM_DATA.name,
    url: FIRM_DATA.baseUrl,
    logo: `${FIRM_DATA.baseUrl}/images/og-reis-galvao.webp`,
    image: `${FIRM_DATA.baseUrl}/images/hero-legal-office.webp`,
    description:
      'Escritório de Advocacia em Campinas para orientação e defesa jurídica especializada em Direito Bancário, Família e Sucessões, Consumidor, Trabalhista e Previdenciário.',
    telephone: FIRM_DATA.phoneRaw,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${FIRM_DATA.address.street} - ${FIRM_DATA.address.complement}`,
      addressLocality: FIRM_DATA.address.city,
      addressRegion: FIRM_DATA.address.state,
      postalCode: FIRM_DATA.address.postalCode,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -22.9056,
      longitude: -47.0608,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Campinas',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Região Metropolitana de Campinas (RMC)',
      },
      {
        '@type': 'State',
        name: 'São Paulo',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: FIRM_DATA.authority.reviewsCount,
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Jurídicos Especializados',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${FIRM_DATA.baseUrl}/servicos/${service.slug}/`,
          description: service.metaDescription,
        },
        position: index + 1,
      })),
    },
  };
}

export function getFaqSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${FIRM_DATA.baseUrl}${item.item}`,
    })),
  };
}
