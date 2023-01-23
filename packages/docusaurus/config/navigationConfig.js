module.exports = {
  navbar: {
    title: 'ROOS',
    logo: {
      alt: 'RVO Logo',
      src: 'img/logo.svg',
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
    style: 'dark',
    links: [
      {
        items: [
          {
            label: 'Toegankelijkheid',
            to: '/docs/intro',
          },
        ],
      },
      {
        items: [
          {
            label: 'Sitemap',
            to: '/docs/intro',
          },
        ],
      },
      {
        items: [
          {
            label: 'Cookies',
            to: '/docs/intro',
          },
        ],
      },
      {
        items: [
          {
            label: 'Privacy',
            to: '/docs/intro',
          },
        ],
      },
    ],
    copyright: `Gebouwd door RVO in samenwerking met NL Design System.<br/>All content is available under the Open Government Licence v3.0, except where otherwise stated. `,
  },
};
