import React, { useState } from 'react';
import { OutlineButton } from '../buttons/OutlineButton';
import { ResumeModal } from '../resume/ResumeModal';
import { portfolio } from '../../config/portfolio';
import { getSocialLinks } from '../../lib/social';

/** The header shows the first few configured links — the rest live in About. */
const MAX_VISIBLE_LINKS = 4;

export const Header: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const socialLinks = getSocialLinks().slice(0, MAX_VISIBLE_LINKS);

  return (
    <>
      <header className="h-[72px] px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800/30">
        <div className="flex items-center text-xl gap-4">
          {socialLinks.map(({ key, label, href, icon: Icon }) => (
            <a
              key={key}
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="noreferrer noopener"
              href={href}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        {portfolio.resume.enabled && (
          <OutlineButton onClick={() => setIsResumeOpen(true)}>
            {portfolio.resume.buttonLabel}
          </OutlineButton>
        )}
      </header>

      {portfolio.resume.enabled && (
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      )}
    </>
  );
};