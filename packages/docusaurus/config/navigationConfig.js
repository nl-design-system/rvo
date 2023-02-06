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
        label: 'Aan de slag met ROOS',
      },
      {
        type: 'doc',
        docId: 'design-tokens/color',
        position: 'left',
        label: 'Huisstijl',
      },
      // {
      //   type: 'doc',
      //   docId: 'design-tokens/color',
      //   position: 'left',
      //   label: 'Voorbeelden',
      // },
      {
        type: 'doc',
        docId: 'components/accordion',
        position: 'left',
        label: 'Components',
      },
      // {
      //   type: 'doc',
      //   docId: 'components/accordion',
      //   position: 'left',
      //   label: 'Patronen',
      // },
      {
        href: 'https://www.figma.com/file/NHV1JYxJ28vKZInSI9u200/ROOS-(RVO-Design-System)?node-id=282%3A5324',
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
      {
        title: 'RVO',
        items: [
          {
            label: 'Over ons',
            to: '/docs/intro',
          },
          {
            label: 'Onze klantbelofte',
            to: '/docs/intro',
          },
          {
            label: 'Contact',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Over deze site',
        items: [
          {
            label: 'Over ons',
            to: '/docs/intro',
          },
          {
            label: 'Onze klantbelofte',
            to: '/docs/intro',
          },
          {
            label: 'Contact',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Snel naar',
        items: [
          {
            label: 'Over ons',
            to: '/docs/intro',
          },
          {
            label: 'Onze klantbelofte',
            to: '/docs/intro',
          },
          {
            label: 'Contact',
            to: '/docs/intro',
          },
        ],
      },
    ],
  },
};
