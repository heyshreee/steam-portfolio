/**
 * Small helpers that keep image paths working no matter where the site is
 * deployed (root domain, Vercel, Netlify or a GitHub Pages sub-path).
 */

/**
 * Resolves a configured image path.
 * - '/assets/projects/foo.svg'  -> prefixed with Vite's BASE_URL
 * - 'https://cdn...'           -> returned untouched
 */
export const assetUrl = (path: string): string => {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};

/** Scrolls to a section id (or navigates if the target is an external URL). */
export const scrollToTarget = (target: string): void => {
  if (/^(https?:)?\/\//.test(target) || target.startsWith('mailto:')) {
    window.open(target, '_blank', 'noopener,noreferrer');
    return;
  }

  const id = target.replace(/^#/, '');
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth' });
  window.history.replaceState(null, '', `#${id}`);
};