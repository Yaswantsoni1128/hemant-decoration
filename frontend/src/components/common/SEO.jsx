import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CONTACT_DETAILS } from '../../constants/contact';
import { SITE_CONFIG } from '../../config/site.config';

const DEFAULT_KEYWORDS =
  'event decoration, balloon decoration, birthday decoration, anniversary decor, proposal setup, room decoration, Noida, Delhi NCR, Khushi Decorations';

/**
 * Page-level SEO: title, description, canonical, OG, Twitter, robots.
 */
const SEO = ({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd,
}) => {
  const { pathname } = useLocation();
  const siteTitle = title
    ? `${title} | ${CONTACT_DETAILS.companyName}`
    : `${CONTACT_DETAILS.companyName} | Event & Balloon Decorations`;
  const metaDesc =
    description ||
    `${CONTACT_DETAILS.companyName} — balloon arches, birthday decorations, proposal setups, and room decor in Noida & Delhi NCR.`;
  const canonical = `${SITE_CONFIG.siteUrl}${pathname === '/' ? '' : pathname}`;
  const resolveImage = (src) => {
    if (!src) return SITE_CONFIG.defaultOgImage;
    if (src.startsWith('http')) return src;
    return `${SITE_CONFIG.siteUrl}${src}`;
  };
  const imageUrl = resolveImage(ogImage || SITE_CONFIG.defaultOgImage);

  return (
    <Helmet>
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={CONTACT_DETAILS.companyName} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={imageUrl} />
      {SITE_CONFIG.twitterHandle && (
        <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      )}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
