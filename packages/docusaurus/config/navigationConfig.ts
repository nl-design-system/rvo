import { Footer, Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  title: 'ROOS',
  hideOnScroll: false,
  logo: {
    src: 'img/logo.svg',
    href:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/rvo/docs'
        : 'https://nl-design-system.github.io/rvo/docs',
  },
  items: [
    {
      type: 'doc',
      docId: 'aan-de-slag/introductie',
      position: 'left' as const,
      label: 'ROOS',
    },
    {
      type: 'doc',
      docId: 'design-tokens/kleur',
      position: 'left' as const,
      label: 'Huisstijl',
    },
    {
      type: 'doc',
      docId: 'componenten/accordion',
      position: 'left' as const,
      label: 'Componenten',
    },
    {
      type: 'doc',
      docId: 'patronen/layout/applicatie-layout',
      position: 'left' as const,
      label: 'Patronen',
    },
    {
      type: 'doc',
      docId: 'best-practices/overzicht-en-navigatie',
      position: 'left' as const,
      label: 'Best practices',
    },
    {
      type: 'doc',
      docId: 'schrijfwijzer/waarom-deze-schrijfwijzer',
      position: 'left' as const,
      label: 'Schrijfwijzer',
    },
    {
      href: 'https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0',
      label: 'Figma',
      position: 'right' as const,
    },
    {
      href: 'https://github.com/nl-design-system/rvo',
      label: 'GitHub',
      position: 'right' as const,
    },
    {
      prependBaseUrlToHref: true,
      href:
        process.env.NODE_ENV === 'development' ? 'http://localhost:6006' : 'https://nl-design-system.github.io/rvo/',
      label: 'Storybook',
      position: 'right' as const,
    },
  ],
};

const footer: Footer = {
  links: [],
  style: 'light',
};

const navigationConfig = {
  navbar,
  footer,
};

export default navigationConfig;
