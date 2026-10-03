import React from 'react';
import { SectionHeader } from '../utils/SectionHeader';
import { Reveal } from '../utils/Reveal';
import { FiTerminal, FiSmile } from 'react-icons/fi';
import { portfolio } from '../../config/portfolio';
import { getSocialLinks } from '../../lib/social';
import type { SkillIcon } from '../../types';
import { AiOutlineArrowRight } from 'react-icons/ai';

const skillIcons: Record<SkillIcon, React.FC<{ className?: string }>> = {
  terminal: FiTerminal,
  smile: FiSmile,
};

export const About: React.FC = () => {
  const { about, skills } = portfolio;
  const socialLinks = getSocialLinks();
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className="section-wrapper py-16">
      <SectionHeader title="About" dir="l" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
        {/* Left column: Story */}
        <div className="space-y-4">
          {lead && (
            <Reveal>
              <p className="leading-relaxed text-zinc-300">
                <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-2 float-left text-2xl">
                  {lead.charAt(0)}
                </span>
                {lead.slice(1)}
              </p>
            </Reveal>
          )}

          {rest.map((paragraph, index) => (
            <Reveal key={index}>
              <p className="leading-relaxed text-zinc-300">{paragraph}</p>
            </Reveal>
          ))}

          {socialLinks.length > 0 && (
            <Reveal>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-indigo-300 font-medium">
                  <span>{about.socialsLabel}</span>
                  <AiOutlineArrowRight />
                </div>
                <div className="flex items-center text-lg gap-4">
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
              </div>
            </Reveal>
          )}
        </div>

        {/* Right column: Tech Badges */}
        <div className="space-y-8">
          {skills.map((group) => {
            const Icon = skillIcons[group.icon] ?? FiTerminal;

            return (
              <div key={group.id}>
                <Reveal>
                  <h4 className="flex items-center gap-2 mb-4 font-bold text-base text-zinc-100">
                    <Icon className="text-indigo-500 text-xl" />
                    <span>{group.title}</span>
                  </h4>
                </Reveal>
                <Reveal>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded bg-zinc-700 text-zinc-200 hover:bg-zinc-600 transition-colors select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};