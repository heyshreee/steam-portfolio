import type { IconType } from 'react-icons';

/** Platforms supported by the social link registry (see src/lib/social.tsx). */
export type SocialKey =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'discord'
  | 'devto'
  | 'codepen'
  | 'website'
  | 'email';

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  icon: IconType;
}

/** A single project card. Rendered by Projects -> ProjectCard -> ProjectModal. */
export interface Project {
  title: string;
  /** Preview image. Local path (e.g. '/assets/projects/taskflow.svg') or full URL. */
  imgSrc: string;
  /** Repository URL shown under the GitHub icon. */
  code: string;
  /** Live demo URL shown under the export icon. */
  projectLink: string;
  tech: string[];
  /** One or two sentences, shown on the card. */
  description: string;
  /** Longer paragraphs shown inside the project modal. */
  details: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  location: string;
  description: string;
  tech: string[];
}

export type SkillIcon = 'terminal' | 'smile';

/** A titled group of skill chips, e.g. "Use at work". */
export interface SkillGroup {
  id: string;
  title: string;
  icon: SkillIcon;
  items: string[];
}

export interface NavItem {
  /** Must match the `id` of the matching <section>. */
  id: string;
  /** Short label for the vertical side rail. */
  label: string;
}