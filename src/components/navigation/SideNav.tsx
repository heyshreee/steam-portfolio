import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../../config/portfolio';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  value: string;
  selected: string;
  setSelected: (val: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  value,
  selected,
  setSelected,
}) => {
  const isSelected = selected === value;

  return (
    <motion.a
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      href={href}
      onClick={() => setSelected(value)}
      className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full cursor-pointer select-none ${
        isSelected
          ? 'bg-zinc-800 border-indigo-500 opacity-100 text-white font-medium'
          : 'border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900 text-zinc-300'
      }`}
    >
      {children}
    </motion.a>
  );
};

export const SideNav: React.FC = () => {
  const [selected, setSelected] = useState<string>(portfolio.navigation[0]?.id ?? '');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="no-scrollbar bg-zinc-950 h-screen sticky top-0 left-0 z-30 flex flex-col items-center overflow-y-auto select-none border-r border-zinc-800/40"
    >
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4 text-zinc-100">
        {portfolio.site.monogram}
        <span className="text-indigo-500">.</span>
      </span>

      {portfolio.navigation.map((item) => (
        <NavLink
          key={item.id}
          selected={selected}
          setSelected={setSelected}
          value={item.id}
          href={`#${item.id}`}
        >
          {item.label}
        </NavLink>
      ))}
    </motion.nav>
  );
};