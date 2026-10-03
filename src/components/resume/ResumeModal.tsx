import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiCheck, FiMail, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';
import { PrimaryButton, OutlineButton } from '../buttons/OutlineButton';
import { portfolio } from '../../config/portfolio';
import { assetUrl } from '../../lib/utils';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const { personal, resume, experience, skills } = portfolio;
  const email = portfolio.social.email ?? '';

  const allSkills = skills.flatMap((group) => group.items);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflowY = 'scroll';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowY = 'scroll';
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /** Builds a plain-text resume from the config when no PDF is configured. */
  const buildPlainTextResume = (): string => {
    const lines: string[] = [
      personal.name.toUpperCase(),
      `${personal.role} — ${personal.location}`,
      ...(email ? [`Email: ${email}`] : []),
      '',
      'SUMMARY',
      resume.summary,
      '',
      'EXPERIENCE',
    ];

    for (const item of experience) {
      lines.push(
        `${item.company} (${item.period}) | ${item.role} (${item.location})`,
        `- ${item.description}`,
        `- Tech: ${item.tech.join(', ')}`,
        ''
      );
    }

    lines.push('', 'SKILLS', ...skills.map((group) => `${group.title}: ${group.items.join(', ')}`));

    return lines.join('\n');
  };

  const handleDownload = () => {
    if (resume.url) {
      // A real file was provided in public/assets/resume/.
      window.open(assetUrl(resume.url), '_blank', 'noopener,noreferrer');
      return;
    }

    const blob = new Blob([buildPlainTextResume()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = resume.fileName || 'resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 px-4 py-8 md:py-12 bg-zinc-950/70 backdrop-blur-md overflow-y-auto flex justify-center cursor-pointer select-none"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close resume"
          className="fixed top-5 right-5 z-50 p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer"
        >
          <FiX className="text-2xl" />
        </button>

        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl h-fit rounded-xl overflow-hidden bg-zinc-900 border border-zinc-700/60 shadow-2xl cursor-auto p-6 md:p-10 my-auto text-zinc-100"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <h2 className="text-3xl font-black">
                {portfolio.personal.name}
                <span className="text-indigo-500">.</span>
              </h2>
              <p className="text-indigo-400 font-medium text-base mt-1">{personal.role}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-2">
                {personal.location && (
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-indigo-400" /> {personal.location}
                  </span>
                )}
                {email && (
                  <span className="flex items-center gap-1.5">
                    <FiMail className="text-indigo-400" /> {email}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {email && (
                <OutlineButton onClick={handleCopyEmail} className="text-xs py-1.5 px-3">
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <FiMail /> Copy Email
                    </>
                  )}
                </OutlineButton>
              )}
              <PrimaryButton onClick={handleDownload} className="text-xs py-1.5 px-3">
                <FiDownload /> Download Resume
              </PrimaryButton>
            </div>
          </div>

          {/* Summary */}
          {resume.summary && (
            <p className="my-6 text-sm md:text-base leading-relaxed text-zinc-300">
              {resume.summary}
            </p>
          )}

          {/* Highlights */}
          <div className="my-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-3 flex items-center gap-2">
              <FiBriefcase /> Work History
            </h3>
            <div className="space-y-4">
              {experience.map((item) => (
                <div
                  key={item.company + item.period}
                  className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/40"
                >
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-bold text-zinc-100">
                      {item.company} — {item.role}
                    </span>
                    <span className="text-xs text-zinc-400 whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core competencies */}
          {allSkills.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <FiAward /> Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {allSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};