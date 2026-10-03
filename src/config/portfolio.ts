/**
 * ============================================================================
 *  PORTFOLIO CONFIG — the only file you need to edit to make this yours.
 * ============================================================================
 *
 *  Everything below is EXAMPLE CONTENT. Replace it with your own details,
 *  then delete the "example content" banner by setting
 *  `site.showExampleBanner` to false below.
 *
 *  ── Rules of the road ────────────────────────────────────────────────────────
 *  • Every entry is typed, so your editor will tell you if something's wrong.
 *  • Anything left as an empty string (`''`) is treated as "not configured"
 *    and is hidden from the UI (this is how social links work).
 *  • Images live in `public/assets/...` and are referenced from the site root,
 *    e.g. '/assets/projects/my-project.svg'.
 *  • You do NOT need to touch any component to customise the site.
 */

import type { ExperienceItem, NavItem, Project, SkillGroup, SocialKey } from '../types';

export const portfolio = {
  /* ----------------------------------------------------------------------- */
  /* Site-wide settings                                                       */
  /* ----------------------------------------------------------------------- */
  site: {
    /** 1–2 character monogram shown in the top-left of the side rail.        */
    monogram: 'A',
    /** Dismissible "this is example content" strip. Set to false once you  */
    /* have replaced the example copy.                                      */
    showExampleBanner: true,
  },

  /* ----------------------------------------------------------------------- */
  /* Page title, meta description and social preview cards.                  */
  /* Applied to <head> on load (see src/lib/seo.ts) and kept in sync with the  */
  /* static defaults in index.html.                                           */
  /* ----------------------------------------------------------------------- */
  seo: {
    title: 'Alex Morgan — Full-Stack Developer',
    description:
      'Example developer portfolio built with React, TypeScript, Vite and Tailwind CSS. Edit one config file and ship your own.',
    author: 'Alex Morgan',
    /** Your deployed URL, used for canonical + OpenGraph URLs. */
    url: 'https://example.com',
    /** Optional 1200×630 preview image, e.g. '/assets/profile/og-image.png'. */
    image: '',
    /** Optional X/Twitter handle, e.g. '@yourhandle'. Leave '' to omit.       */
    twitter: '@example',
  },

  /* ----------------------------------------------------------------------- */
  /* Personal information                                                     */
  /* ----------------------------------------------------------------------- */
  personal: {
    name: 'Alex Morgan',
    role: 'Full-Stack Developer',
    location: 'Chennai, India',
  },

  /* ----------------------------------------------------------------------- */
  /* Hero section                                                            */
  /* ----------------------------------------------------------------------- */
  hero: {
    /** Rendered before your first name: "Hi, I'm Alex."                      */
    greeting: "Hi, I'm",
    /** Rendered as "I'm a Full-Stack Developer".                             */
    rolePrefix: "I'm a",
    description:
      'I design and build fast, accessible web products — from the database schema to the last pixel of the interface. Everything below is example content, so make it yours.',
    primaryButton: {
      label: 'Contact Me',
      /** id of a section on the page, or an external URL.                    */
      target: '#contact',
    },
  },

  /* ----------------------------------------------------------------------- */
  /* Side navigation                                                         */
  /* Each `id` must match the `id` attribute of the matching <section>.      */
  /* ----------------------------------------------------------------------- */
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Exp.' },
    { id: 'contact', label: 'Contact' },
  ] satisfies NavItem[],

  /* ----------------------------------------------------------------------- */
  /* Social links                                                            */
  /* Remove a line (or set it to '') to hide that platform everywhere.        */
  /* Supported keys: github, linkedin, x, instagram, youtube, discord,        */
  /* devto, codepen, website, email                                          */
  /* ----------------------------------------------------------------------- */
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username',
    x: 'https://x.com/your-username',
    email: 'hello@example.com',
  } satisfies Partial<Record<SocialKey, string>>,

  /* ----------------------------------------------------------------------- */
  /* About section                                                           */
  /* The first paragraph automatically gets the drop cap, so make sure it     */
  /* starts with the word you want highlighted.                              */
  /* ----------------------------------------------------------------------- */
  about: {
    paragraphs: [
      "Hey! I'm Alex — the placeholder name on this template. I'm a full-stack developer who likes typed APIs, fast interfaces, and shipping things that stay up. Swap this whole section for your own story.",
      'Most of my day is spent in TypeScript, Node and Postgres, with the occasional detour into design systems to make sure an interface still feels right after the third round of feedback.',
      'Outside of work you will find me walking far too much, shooting photos, and tinkering with side projects that solve problems nobody has complained about yet.',
      'I am always happy to talk about new roles, freelance work, or a genuinely interesting engineering problem. If something above sounds like fun, get in touch.',
    ],
    /** Label above the icon row. */
    socialsLabel: 'My links',
  },

  /* ----------------------------------------------------------------------- */
  /* Skills                                                                  */
  /* Add or remove chips freely. Duplicate an object to add a third group.    */
  /* icon: 'terminal' | 'smile'                                               */
  /* ----------------------------------------------------------------------- */
  skills: [
    {
      id: 'work',
      title: 'Use at work',
      icon: 'terminal',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Git & GitHub',
        'AWS',
        'CI/CD',
      ],
    },
    {
      id: 'fun',
      title: 'Use for fun',
      icon: 'smile',
      items: [
        'Rust',
        'Go',
        'Python',
        'FastAPI',
        'Tailwind CSS',
        'GraphQL',
        'SQLite',
        'Figma',
        'Blender',
      ],
    },
  ] satisfies SkillGroup[],

  /* ----------------------------------------------------------------------- */
  /* Projects                                                                */
  /* Add, remove or reorder objects. `imgSrc` should be a 16:9 mockup; see     */
  /* public/assets/README.md for where to put your own images.                */
  /* ----------------------------------------------------------------------- */
  projects: [
    {
      title: 'TaskFlow',
      imgSrc: '/assets/projects/taskflow.svg',
      code: 'https://github.com/your-username/taskflow',
      projectLink: 'https://your-username.github.io/taskflow',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      description:
        'A Kanban-style project tracker built around keyboard-first workflows, offline drafts and a small sync engine.',
      details: [
        'TaskFlow is a project tracker where the keyboard is the primary interface: create, assign and reorder work without leaving the home row.',
        'Drafts are written to IndexedDB first and reconciled in the background, so the UI stays usable on a flaky connection.',
        'The API is a small Node service with a schema-validated contract layer, which kept frontend and backend refactors independent.',
        'Worth copying: the board is rendered from a single normalised state tree, which made undo/redo almost free.',
      ],
    },
    {
      title: 'DevMetrics',
      imgSrc: '/assets/projects/devmetrics.svg',
      code: 'https://github.com/your-username/devmetrics',
      projectLink: 'https://your-username.github.io/devmetrics',
      tech: ['Next.js', 'Python', 'FastAPI', 'Redis'],
      description:
        'A developer analytics dashboard that turns raw CI and issue-tracker data into charts a team will actually read.',
      details: [
        'DevMetrics ingests CI runs, review latency and issue flow, then condenses them into a handful of charts instead of a wall of counters.',
        'Ingestion jobs are idempotent and checkpointed, so a re-run never double-counts a build.',
        'A FastAPI service serves pre-aggregated windows from Redis; the Next.js frontend only ever queries one endpoint per chart.',
        'Every chart links back to the underlying records, which turned out to be the feature people actually wanted.',
      ],
    },
    {
      title: 'CloudNotes',
      imgSrc: '/assets/projects/cloudnotes.svg',
      code: 'https://github.com/your-username/cloudnotes',
      projectLink: 'https://your-username.github.io/cloudnotes',
      tech: ['React', 'WebSockets', 'Node.js', 'MongoDB'],
      description:
        'Collaborative markdown notes with CRDT-based editing, so two people can never overwrite each other.',
      details: [
        'CloudNotes is a small collaborative editor: open the same note in two browsers and type in both at once.',
        'Conflicts are resolved with a CRDT rather than last-write-wins, which removed an entire class of "my text disappeared" bugs.',
        'Presence, cursors and connection state are broadcast over a single WebSocket channel per document.',
        'Documents are stored as plain markdown in MongoDB, so the data stays readable long after the app is gone.',
      ],
    },
    {
      title: 'FormForge',
      imgSrc: '/assets/projects/formforge.svg',
      code: 'https://github.com/your-username/formforge',
      projectLink: 'https://your-username.github.io/formforge',
      tech: ['SvelteKit', 'Go', 'PostgreSQL', 'Docker'],
      description:
        'A no-code form builder with conditional logic and a webhook-driven workflow engine behind it.',
      details: [
        'FormForge lets you compose a form visually, add conditional branches, and publish it with a hosted URL.',
        'Submissions run through a small workflow engine that fans out to webhooks, with retries and a dead-letter queue.',
        'The API is written in Go and shipped as a single static binary in a distroless container.',
        'Schema changes are versioned, so older forms keep working after you redesign the builder.',
      ],
    },
  ] satisfies Project[],

  /* ----------------------------------------------------------------------- */
  /* Experience                                                              */
  /* ----------------------------------------------------------------------- */
  experience: [
    {
      company: 'Northwind Labs',
      period: '2022 - Present',
      role: 'Senior Software Engineer',
      location: 'Remote',
      description:
        'Building the customer-facing dashboard and the services behind it. Own the design system, review most of the code that ships, and keep the deployment pipeline boring.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      company: 'Harbor Systems',
      period: '2020 - 2022',
      role: 'Full-Stack Engineer',
      location: 'Bengaluru, India',
      description:
        'Joined as the second engineer on a small product team. Took the first version of the API from a spreadsheet to a documented, tested service and set up CI from scratch.',
      tech: ['Express', 'MongoDB', 'Redis', 'GraphQL', 'GitHub Actions'],
    },
    {
      company: 'Lumen Analytics',
      period: '2018 - 2020',
      role: 'Junior Web Developer',
      location: 'Chennai, India',
      description:
        'Cut my teeth on marketing sites and internal reporting tools. Learned that most "hard" problems are data-modelling problems wearing a trench coat.',
      tech: ['JavaScript', 'PHP', 'MySQL', 'SCSS', 'Linux'],
    },
  ] satisfies ExperienceItem[],

  /* ----------------------------------------------------------------------- */
  /* Contact                                                                 */
  /* ----------------------------------------------------------------------- */
  contact: {
    title: 'Contact',
    description: 'Send me an email if you would like to connect.',
    /** Rendered before the list of featured social links.                   */
    socialLeadIn: 'You can also find me on',
    /** Rendered after the list of featured social links.                     */
    socialOutro: 'if that is more your speed.',
    /** Which social links to mention in the sentence above. Defaults to the  */
    /* first two configured links when left empty.                            */
    featuredSocials: ['linkedin', 'x'] as SocialKey[],
  },

  /* ----------------------------------------------------------------------- */
  /* Resume                                                                  */
  /* ----------------------------------------------------------------------- */
  resume: {
    /** Set to false to hide the resume button in the header entirely.       */
    enabled: true,
    /** Header button label.                                                  */
    buttonLabel: 'My Resume',
    /* Drop a PDF in public/assets/resume/ and point this at it, e.g.:        */
    /*   url: '/assets/resume/resume.pdf'                                     */
    /* Leave it as '' to generate a plain-text file from the data above.       */
    url: '',
    /** Name used for the generated .txt download.                           */
    fileName: 'Alex_Morgan_Resume.txt',
    /** Short paragraph shown at the top of the resume modal.                */
    summary:
      'Full-stack engineer focused on product-grade web applications: typed APIs, accessible interfaces, and deployments that stay quiet at 3am.',
  },
};

export default portfolio;