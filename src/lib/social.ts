import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodepen,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaDev, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { FiGlobe, FiMail } from 'react-icons/fi';
import { portfolio } from '../config/portfolio';
import type { SocialKey, SocialLink } from '../types';

/**
 * Icon + label for every supported platform. Add a key here if you extend
 * `SocialKey` in src/types/index.ts.
 */
export const socialRegistry: Record<
  SocialKey,
  { label: string; icon: SocialLink['icon']; toHref: (value: string) => string }
> = {
  github: { label: 'GitHub', icon: AiFillGithub, toHref: (v) => v },
  linkedin: { label: 'LinkedIn', icon: AiFillLinkedin, toHref: (v) => v },
  x: { label: 'X / Twitter', icon: AiOutlineTwitter, toHref: (v) => v },
  instagram: { label: 'Instagram', icon: FaInstagram, toHref: (v) => v },
  youtube: { label: 'YouTube', icon: FaYoutube, toHref: (v) => v },
  discord: { label: 'Discord', icon: FaDiscord, toHref: (v) => v },
  devto: { label: 'Dev.to', icon: FaDev, toHref: (v) => v },
  codepen: { label: 'CodePen', icon: AiOutlineCodepen, toHref: (v) => v },
  website: { label: 'Website', icon: FiGlobe, toHref: (v) => v },
  email: { label: 'Email', icon: FiMail, toHref: (v) => `mailto:${v}` },
};

/**
 * Every social entry that has a value in the config, in registry order.
 * Platforms left empty in `portfolio.social` are simply skipped, so users
 * only have to provide the ones they actually use.
 */
export const getSocialLinks = (): SocialLink[] => {
  const configured = portfolio.social as Partial<Record<SocialKey, string>>;

  return (Object.keys(socialRegistry) as SocialKey[])
    .map((key) => {
      const value = configured[key];
      if (!value) return null;
      const entry = socialRegistry[key];
      return { key, label: entry.label, href: entry.toHref(value), icon: entry.icon };
    })
    .filter((link): link is SocialLink => link !== null);
};