import React, { useState } from 'react';
import { Reveal } from '../utils/Reveal';
import { AiOutlineMail, AiOutlineCheck } from 'react-icons/ai';
import { portfolio } from '../../config/portfolio';
import { getSocialLinks } from '../../lib/social';
import type { SocialKey, SocialLink } from '../../types';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { contact } = portfolio;
  const email = portfolio.social.email ?? '';

  const allLinks = getSocialLinks();
  const featured = portfolio.contact.featuredSocials
    .map((key: SocialKey) => allLinks.find((link) => link.key === key))
    .filter((link): link is SocialLink => link !== undefined);
  const visibleLinks = featured.length > 0 ? featured : allLinks;

  const handleCopyEmail = () => {
    // Also copy to clipboard for convenience
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper py-20">
      <div className="max-w-xl mx-auto bg-zinc-800/90 px-8 py-12 rounded-2xl border border-zinc-700/60 shadow-2xl backdrop-blur-sm">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black text-zinc-100">
            {contact.title}
            <span className="text-indigo-500">.</span>
          </h4>
        </Reveal>

        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed text-sm md:text-base">
            {contact.description} {visibleLinks.length > 0 && contact.socialLeadIn}{' '}
            {visibleLinks.map((link, index) => (
              <React.Fragment key={link.key}>
                {index > 0 && ' or '}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-indigo-300 hover:text-indigo-200 hover:underline font-medium"
                  href={link.href}
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}{' '}
            {contact.socialOutro}
          </p>
        </Reveal>

        {email && (
          <Reveal width="w-full">
            <div className="flex flex-col items-center justify-center gap-2">
              <a
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                className="group flex items-center justify-center gap-3 w-fit text-lg md:text-2xl whitespace-normal mx-auto text-zinc-200 hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-zinc-700/40"
              >
                <AiOutlineMail className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">{email}</span>
              </a>

              {copied && (
                <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-mono transition-all animate-fade-in">
                  <AiOutlineCheck /> Copied email to clipboard!
                </span>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};