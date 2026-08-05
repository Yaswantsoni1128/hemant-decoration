/**
 * Site-wide SEO / domain config.
 * Set VITE_SITE_URL in .env for production (e.g. https://khushidecorations.com)
 */
export const SITE_CONFIG = {
  siteUrl: (import.meta.env.VITE_SITE_URL || 'https://khushidecorations.com').replace(/\/$/, ''),
  // Absolute Unsplash fallback until a branded /og-image.jpg is uploaded to /public
  defaultOgImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
  locale: 'en_IN',
  twitterHandle: '', // optional @handle
  googleSiteVerification: '', // paste Google Search Console meta content
  bingSiteVerification: '', // paste Bing Webmaster meta content
};
