import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import navigationConfig from './config/navigationConfig';

// TODO: Add includeList
// const includeList = ['**/*.docusaurus.{md,mdx}'];
const includeList = ['**/getting-started/*.docusaurus.{md,mdx}'];
const excludeList = ['node_modules/**/*', '**/!(*.docusaurus)*'];

const config: Config = {
  title: 'ROOS Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  favicon: 'img/favicon.ico',
  url: 'https://nl-design-system.github.io',
  baseUrl: '/',
  organizationName: 'nl-rvo',
  projectName: 'rvo',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        // TODO: Add sidebarPath
        // sidebarPath: require.resolve('./config/docsSidebarConfig.js'),
        // sidebarItemsGenerator,
        path: path.resolve(__dirname, '../../documentation/pages'),
        routeBasePath: '/',
        editUrl: undefined,
        breadcrumbs: false,
        include: includeList,
        exclude: excludeList,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        debug: process.env['NODE_ENV'] === 'development' ? true : false,
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve('@nl-rvo/assets/fonts/index.css'),
            require.resolve('@nl-rvo/assets/icons/index.css'),
            require.resolve('@nl-rvo/assets/images/index.css'),
            require.resolve('@nl-rvo/design-tokens/dist/index.css'),
            require.resolve('../component-library-css/dist/index.css'),
            require.resolve('./src/css/custom.scss'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    ...navigationConfig,
  } satisfies Preset.ThemeConfig,
};

export default config;
