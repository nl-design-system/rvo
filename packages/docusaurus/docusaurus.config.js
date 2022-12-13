// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ROOS Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  url: 'https://nl-design-system.github.io',
  baseUrl: '/rvo',
  customFields: {
    storybookUrl: process.env['NODE_ENV'] === 'development' ? 'http://localhost:6006/' : '.rvo/storybook/',
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nl-rvo',
  plugins: ['docusaurus-plugin-sass'],
  projectName: 'rvo',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  staticDirectories: ['static', '../../proprietary/assets'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/nl-design-system/rvo/tree/main/documentation',
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve('@utrecht/design-tokens/dist/index.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      metadata: [
        {
          name: 'Content-Security-Policy',
          content: `frame-ancestors 'none'; object-src 'none'; base-uri 'none'; default-src 'self'; media-src 'none'; form-action 'self'; img-src 'self' data:; script-src 'self'; style-src 'unsafe-inline' 'self'; connect-src 'self' https://*.algolia.net https://*.algolianet.com; frame-src 'self' https://nl-design-system.github.io; font-src 'self';`,
        },
      ],
      prism: {
        theme: require('prism-react-renderer/themes/github'),
      },
      navbar: {
        title: 'ROOS ',
        logo: {
          alt: 'RVO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/nl-design-system/rvo',
            label: 'GitHub',
            position: 'right',
          },
          {
            prependBaseUrlToHref: true,
            href: './storybook/',
            label: 'Storybook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
      },
    },
};

module.exports = config;
