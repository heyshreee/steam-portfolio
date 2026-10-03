import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Reveal } from '../utils/Reveal';
import { ProjectModal } from './ProjectModal';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { assetUrl } from '../../lib/utils';
import type { Project } from '../../types';

export const ProjectCard: React.FC<Project> = ({
  title,
  imgSrc,
  code,
  projectLink,
  tech,
  description,
  details,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={cardRef}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="w-full"
      >
        {/* Project Image Card with Hover Zoom & Tilt */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-800 hover:bg-zinc-700/80 cursor-pointer relative rounded-xl overflow-hidden transition-colors border border-zinc-700/60 shadow-xl group"
        >
          <img
            src={assetUrl(imgSrc)}
            alt={`Screenshot of the ${title} project.`}
            style={{
              width: hovered ? '90%' : '85%',
              transform: `translateX(-50%) translateY(25%) rotate(${hovered ? '2deg' : '0deg'}) scale(${hovered ? 1.04 : 1})`,
            }}
            className="absolute bottom-0 left-1/2 transition-all duration-300 rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Project Meta Details */}
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-3 w-full">
              <h4
                onClick={() => setIsOpen(true)}
                className="font-bold text-xl shrink-0 cursor-pointer hover:text-indigo-400 transition-colors"
              >
                {title}
              </h4>
              <div className="w-full h-[1px] bg-zinc-700" />
              <div className="flex items-center gap-3 shrink-0">
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${title} source code`}
                    className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors"
                  >
                    <AiFillGithub />
                  </a>
                )}
                {projectLink && (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${title} live demo`}
                    className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors"
                  >
                    <AiOutlineExport />
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2 text-sm text-indigo-300 font-medium my-2">
              {tech.join(' - ')}
            </div>
          </Reveal>

          <Reveal>
            <p className="text-zinc-300 leading-relaxed text-sm">
              {description}{' '}
              <span
                className="inline-block text-sm text-indigo-300 hover:text-indigo-200 font-semibold cursor-pointer underline underline-offset-4 ml-1"
                onClick={() => setIsOpen(true)}
              >
                Learn more &gt;
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        imgSrc={imgSrc}
        code={code}
        projectLink={projectLink}
        tech={tech}
        details={details}
      />
    </>
  );
};