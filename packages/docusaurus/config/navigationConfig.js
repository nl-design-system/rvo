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
        docId: 'introduction/introduction.docs',
        position: 'left',
        label: 'Aan de slag',
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
