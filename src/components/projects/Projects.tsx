import React from 'react';
import { SectionHeader } from '../utils/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { portfolio } from '../../config/portfolio';

export const Projects: React.FC = () => {
  const { projects } = portfolio;

  return (
    <section id="projects" className="section-wrapper py-16">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};