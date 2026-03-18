import { Footer, Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  title: 'ROOS',
  hideOnScroll: false,
  logo: {
    src: 'img/logo.svg',
    href: process.env.NODE_ENV === 'development' ? '/rvo/docs' : 'https://nl-design-system.github.io/rvo/docs',
  },
  items: [
    {
      type: 'doc',
      docId: 'over-roos/introductie',
      position: 'left' as const,
      label: 'Over ROOS',
    },
    {
      to: '/blog',
      position: 'left' as const,
      label: 'Blog',
    },
    {
      type: 'doc',
      docId: 'design-tokens/kleuren',
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
      docId: 'patronen/paginas/basispagina',
      position: 'left' as const,
      label: 'Patronen',
    },
    // {
    //   type: 'doc',
    //   docId: 'best-practices/informatiebehoefte-per-doelgroep',
    //   position: 'left' as const,
    //   label: 'Best practices',
    // },
    {
      type: 'doc',
      docId: 'schrijfwijzer/waarom-deze-schrijfwijzer',
      position: 'left' as const,
      label: 'Schrijfwijzer',
    },
    {
      type: 'doc',
      docId: 'beeldstrategie/beeldstrategie-op-roos',
      position: 'left' as const,
      label: 'Beeldstrategie',
    },
    {
      type: 'dropdown',
      position: 'right' as const,
      label: 'Tools',
      items: [
        {
          href: 'https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0',
          label: 'Figma',
        },
        {
          href: 'https://github.com/nl-design-system/rvo',
          label: 'GitHub',
        },
        {
          prependBaseUrlToHref: true,
          href:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:6006'
              : 'https://nl-design-system.github.io/rvo/',
          label: 'Storybook',
        },
      ],
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
