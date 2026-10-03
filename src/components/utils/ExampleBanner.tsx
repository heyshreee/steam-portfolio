import React, { useState } from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';
import { portfolio } from '../../config/portfolio';

const STORAGE_KEY = 'portfolio-template-banner-dismissed';

/**
 * Small dismissible strip reminding template users that the copy is example
 * content. Set `site.showExampleBanner` to false in src/config/portfolio.ts
 * (or delete this component from App.tsx) once you have written your own copy.
 */
export const ExampleBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true'
  );

  if (!portfolio.site.showExampleBanner || dismissed) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setDismissed(true);
  };

  return (
    <div className="flex items-center gap-3 px-4 md:px-8 py-2 bg-indigo-500/10 border-b border-indigo-500/30 text-xs text-indigo-200">
      <FiAlertTriangle className="shrink-0 text-indigo-400" />
      <p className="flex-1 leading-relaxed">
        <span className="font-semibold">Template mode:</span> the name, bio, projects and
        links below are example content. Edit{' '}
        <code className="font-mono text-indigo-100">src/config/portfolio.ts</code> to make it
        yours.
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss template notice"
        className="shrink-0 p-1 rounded hover:bg-indigo-500/20 transition-colors cursor-pointer"
      >
        <FiX />
      </button>
    </div>
  );
};