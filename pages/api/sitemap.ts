import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const articles = [
    '/articles/5-syyta-turvapalveluille',
    '/articles/[slug]', // Dynamic slug for individual articles
    '/articles/asiakastyytyvaisyys-turvapalvelut',
    '/articles/ilkivarkaudet-ja-turvapalvelut',
    '/articles/index',
    '/articles/kotitalous-turva',
    '/articles/suuret-tapahtumat-turvapalvelut',
    '/articles/tietoturva-palvelut',
    '/articles/turvapalveluiden-kilpailutus',
    '/articles/turvapalveluista',
    '/articles/valitse-oikea-turvapalvelu',
    '/articles/yrityksen-turvapalvelut'
  ];

  const baseUrl = 'https://www.turvax.fi';
  const lastmod = '2025-04-01'; // Adjust last modified date accordingly

  // Start building the sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>1.0</priority>
    </url>`;

  // Add articles to the sitemap
  articles.forEach((article) => {
    sitemap += `
    <url>
      <loc>${baseUrl}${article}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>0.8</priority>
    </url>`;
  });

  // Close the URL set
  sitemap += '</urlset>';

  // Set the response header and send the sitemap XML
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}