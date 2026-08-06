import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_DETAILS } from '../../constants/contact';
import { SITE_CONFIG } from '../../config/site.config';
import { SOCIAL_LINKS } from '../../constants/socialLinks';

/**
 * Global JSON-LD: Organization, WebSite, LocalBusiness.
 * Person schema optional via founderName.
 */
const JsonLd = ({ founderName }) => {
  const sameAs = SOCIAL_LINKS.map((s) => s.url).filter(Boolean);

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CONTACT_DETAILS.companyName,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/favicon.svg`,
    email: CONTACT_DETAILS.email,
    telephone: CONTACT_DETAILS.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_DETAILS.address,
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    sameAs,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: CONTACT_DETAILS.companyName,
    url: SITE_CONFIG.siteUrl,
    description: CONTACT_DETAILS.tagline,
    publisher: {
      '@type': 'Organization',
      name: CONTACT_DETAILS.companyName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.siteUrl}/services`,
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: CONTACT_DETAILS.companyName,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
    url: SITE_CONFIG.siteUrl,
    telephone: CONTACT_DETAILS.phoneDisplay,
    email: CONTACT_DETAILS.email,
    address: organization.address,
    openingHours: 'Mo-Su 09:00-21:00',
    priceRange: '₹₹',
    areaServed: ['Noida', 'Delhi', 'NCR', 'Gurgaon'],
  };

  const schemas = [organization, website, localBusiness];

  if (founderName) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: founderName,
      jobTitle: 'Founder',
      worksFor: {
        '@type': 'Organization',
        name: CONTACT_DETAILS.companyName,
      },
      url: SITE_CONFIG.siteUrl,
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default JsonLd;
