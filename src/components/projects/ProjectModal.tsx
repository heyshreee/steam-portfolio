import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { assetUrl } from '../../lib/utils';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  /** Paragraphs rendered in the modal body. */
  details: string[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  imgSrc,
  code,
  projectLink,
  tech,
  details,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
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
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/75 backdrop-blur-md overflow-y-auto flex justify-center cursor-pointer select-none"
        onClick={() => setIsOpen(false)}
      >
        <button
          className="fixed top-4 md:top-6 right-4 md:right-6 text-2xl text-zinc-400 hover:text-white bg-zinc-800/80 p-2 rounded-full transition-colors cursor-pointer z-50"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          <FiX />
        </button>

        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl h-fit rounded-xl overflow-hidden bg-zinc-900 border border-zinc-700/60 shadow-2xl cursor-auto my-auto"
        >
          <div className="w-full aspect-video bg-zinc-800 overflow-hidden relative border-b border-zinc-800">
            <img
              src={assetUrl(imgSrc)}
              alt={`Preview of the ${title} project`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h4 className="text-3xl font-bold mb-2 text-zinc-100">{title}</h4>
            <div className="flex flex-wrap gap-2 text-sm text-indigo-300 font-medium">
              {tech.join(' - ')}
            </div>

            <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
              {details.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {(code || projectLink) && (
              <div className="border-t border-zinc-800 pt-6">
                <p className="font-bold mb-3 text-xl text-zinc-100">
                  Project Links<span className="text-indigo-500">.</span>
                </p>
                <div className="flex items-center gap-6 text-sm">
                  {code && (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-2 font-medium"
                      href={code}
                    >
                      <AiFillGithub className="text-xl" /> Source Code
                    </a>
                  )}
                  {projectLink && (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-2 font-medium"
                      href={projectLink}
                    >
                      <AiOutlineExport className="text-xl" /> Live Project
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};