// generate-sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';

// Definer dine ruter her
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.9 },
];

// Opprett en Readable stream
const stream = new SitemapStream({ hostname: 'https://din-quiz-app-url.com' });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('sitemap.xml generert');
  })
  .catch((err) => {
    console.error('Feil ved generering av sitemap:', err);
  });

// Generer robots.txt
const robotsTxt = `
User-agent: *
Disallow:

Sitemap: https://din-quiz-app-url.com/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robotsTxt.trim());
console.log('robots.txt generert');
