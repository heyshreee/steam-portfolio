import React from 'react';
import { SectionHeader } from '../utils/SectionHeader';
import { Reveal } from '../utils/Reveal';
import { portfolio } from '../../config/portfolio';

export const Experience: React.FC = () => {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-wrapper py-16">
      <SectionHeader title="Experience" dir="l" />

      <div className="space-y-10">
        {experience.map((item) => (
          <div
            key={item.company + item.period}
            className="border-b pb-8 border-zinc-800 last:border-b-0"
          >
            <div className="flex items-center justify-between mb-2">
              <Reveal>
                <span className="font-bold text-xl text-zinc-100">{item.company}</span>
              </Reveal>
              <Reveal>
                <span className="text-sm text-zinc-400 font-mono">{item.period}</span>
              </Reveal>
            </div>

            <div className="flex items-center justify-between mb-4">
              <Reveal>
                <span className="text-indigo-300 font-bold text-base">{item.role}</span>
              </Reveal>
              <Reveal>
                <span className="text-sm text-zinc-400">{item.location}</span>
              </Reveal>
            </div>

            <Reveal>
              <p className="mb-6 text-zinc-300 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50 select-none"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};