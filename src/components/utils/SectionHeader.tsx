import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  title: string;
  dir?: 'l' | 'r';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, dir = 'r' }) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
      style={{
        flexDirection: dir === 'r' ? 'row' : 'row-reverse',
      }}
    >
      <div className="w-full h-[1px] bg-zinc-700" />
      <h2>
        <Reveal>
          <span className="text-3xl md:text-5xl font-black whitespace-nowrap">
            {title}
            <span className="text-indigo-500">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
