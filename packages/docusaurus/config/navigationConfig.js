module.exports = {
  navbar: {
    title: 'ROOS',
    logo: {
      src: 'img/logo.svg',
      href:
        process.env['NODE_ENV'] === 'development'
          ? 'http://localhost:3000/rvo/docs'
          : 'https://nl-design-system.github.io/rvo/docs',
    },
    items: [
      {
        type: 'doc',
        docId: 'getting-started/introduction',
        position: 'left',
        label: 'ROOS',
      },
      {
        type: 'doc',
        docId: 'design-tokens-roos1/color',
        position: 'left',
        label: 'Huisstijl',
      },
      {
        type: 'doc',
        docId: 'components/accordion',
        position: 'left',
        label: 'Componenten',
      },
      {
        type: 'doc',
        docId: 'patterns/layout/app-layout',
        position: 'left',
        label: 'Patronen',
      },
      {
        type: 'doc',
        docId: 'best-practices/overview-and-navigation',
        position: 'left',
        label: 'Best practices',
      },
      {
        type: 'doc',
        docId: 'schrijfwijzer/waarom-deze-schrijfwijzer',
        position: 'left',
        label: 'Schrijfwijzer',
      },
      {
        href: 'https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0',
        label: 'Figma',
        position: 'right',
      },
      {
        href: 'https://github.com/nl-design-system/rvo',
        label: 'GitHub',
        position: 'right',
      },
      {
        prependBaseUrlToHref: true,
        href:
          process.env.NODE_ENV === 'development' ? 'http://localhost:6006' : 'https://nl-design-system.github.io/rvo/',
        label: 'Storybook',
        position: 'right',
      },
    ],
  },
  footer: {
    links: [
      { title: "<em style='font-weight: var(--rvo-font-weight-normal);'>Wij helpen u graag vooruit!</em>" },
      // {
      //   title: 'RVO',
      //   items: [
      //     {
      //       label: 'Over ons',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Onze klantbelofte',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Contact',
      //       to: '/docs/intro',
      //     },
      //   ],
      // },
      // {
      //   title: 'Over deze site',
      //   items: [
      //     {
      //       label: 'Over ons',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Onze klantbelofte',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Contact',
      //       to: '/docs/intro',
      //     },
      //   ],
      // },
      // {
      //   title: 'Snel naar',
      //   items: [
      //     {
      //       label: 'Over ons',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Onze klantbelofte',
      //       to: '/docs/intro',
      //     },
      //     {
      //       label: 'Contact',
      //       to: '/docs/intro',
      //     },
      //   ],
      // },
    ],
  },
};
