import { portfolio } from '../config/portfolio';

/**
 * Applies `portfolio.seo` to <head> at runtime.
 *
 * index.html ships with the same generic defaults so the page still has a
 * sensible title before JavaScript runs; this keeps both in sync after you
 * edit the config. For a purely static build you can also edit index.html
 * directly — just keep the two in sync.
 */

type Attrs = Record<string, string>;

const upsertMeta = (selector: string, attrs: Attrs): void => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
};

const upsertCanonical = (href: string): void => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
};

export const applySeoMetadata = (): void => {
  const { seo } = portfolio;
  const url = seo.url.replace(/\/$/, '');

  document.title = seo.title;

  upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
  upsertMeta('meta[name="author"]', { name: 'author', content: seo.author });

  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: seo.title });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description,
  });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });

  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: seo.image ? 'summary_large_image' : 'summary',
  });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description,
  });

  if (seo.image) {
    const image = seo.image.startsWith('http') ? seo.image : `${url}${seo.image}`;
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
  }

  if (seo.twitter) {
    upsertMeta('meta[name="twitter:creator"]', { name: 'twitter:creator', content: seo.twitter });
  }

  if (url) upsertCanonical(url);
};