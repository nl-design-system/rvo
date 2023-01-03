// @ts-check
const path = require('path');
const includeList = ['**/*.docs.{md,mdx}'];
const excludeList = ['node_modules/**/*', '**/!(*.docs)*'];
const navigationConfig = require('./navigationConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ROOS Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  url: 'https://nl-design-system.github.io',
  baseUrl: '/rvo/docs',
  customFields: {
    storybookUrl: process.env['NODE_ENV'] === 'development' ? 'http://localhost:6006/' : '/storybook/',
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nl-rvo',
  plugins: [
    'docusaurus-plugin-sass',
    './plugins/AddTSAliasPlugin.js',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        sidebarPath: require.resolve('./sidebars.js'),
        path: path.resolve(__dirname, '../../documentation/pages'),
        routeBasePath: '/',
        editUrl: 'https://github.com/nl-design-system/rvo/tree/main/documentation',
        breadcrumbs: false,
        include: includeList,
        exclude: excludeList,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: path.resolve(__dirname, '../../test'),
        routeBasePath: 'components',
        editUrl: 'https://github.com/nl-design-system/rvo/tree/main/components',
        sidebarPath: require.resolve('./sidebars.js'),
        include: includeList,
        exclude: excludeList,
      },
    ],
  ],
  projectName: 'rvo',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  staticDirectories: ['static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        debug: process.env['NODE_ENV'] === 'development' ? true : false,
        docs: false,
        blog: false,
        theme: {
          customCss: [require.resolve('@nl-rvo/design-tokens/dist/index.css'), require.resolve('./src/css/custom.css')],
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
      ...navigationConfig,
    },
};

console.log(navigationConfig);
module.exports = config;
