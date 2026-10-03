import React from 'react';
import { Reveal } from '../utils/Reveal';
import { WaterDropGrid } from './WaterDropGrid';
import { PrimaryButton } from '../buttons/OutlineButton';
import { portfolio } from '../../config/portfolio';
import { scrollToTarget } from '../../lib/utils';

export const Hero: React.FC = () => {
  const { hero, personal } = portfolio;
  const firstName = personal.name.split(' ')[0];

  return (
    <section className="text-zinc-100 overflow-hidden py-20 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl tracking-tight">
              {hero.greeting} {firstName}
              <span className="text-indigo-500">.</span>
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              {hero.rolePrefix}{' '}
              <span className="font-semibold text-indigo-500">{personal.role}</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
              {hero.description}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-4 md:mt-6 pointer-events-auto">
              <PrimaryButton onClick={() => scrollToTarget(hero.primaryButton.target)}>
                {hero.primaryButton.label}
              </PrimaryButton>
            </div>
          </Reveal>
        </div>

        <WaterDropGrid />
      </div>
    </section>
  );
};