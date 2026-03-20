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
      href: process.env.NODE_ENV === 'development' ? '/rvo/docs' : 'https://nl-design-system.github.io/rvo/docs',
      label: 'Home',
      position: 'left' as const,
    },
    {
      type: 'doc',
      docId: 'over-roos/introductie',
      position: 'left' as const,
      label: 'Over ROOS',
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
