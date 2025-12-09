import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import navigationConfig from './config/navigationConfig';
import sidebarItemsGenerator from './config/sidebarItemsGenerator';

const includeList = ['**/*.docusaurus.{md,mdx}'];
const excludeList = ['node_modules/**/*', '**/!(*.docusaurus)*'];

const config: Config = {
  title: 'ROOS Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  favicon: 'img/favicon.ico',
  url: process.env.DOCUSAURUS_URL || 'https://nl-design-system.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/rvo/docs/',
  organizationName: 'nl-rvo',
  projectName: 'rvo',
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  plugins: [
    process.env.RSDOCTOR === 'true' && 'rsdoctor',
    './plugins/docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        sidebarPath: require.resolve('./config/docsSidebarConfig.js'),
        sidebarItemsGenerator,
        path: path.resolve(__dirname, '../../documentation/pages'),
        routeBasePath: '/',
        editUrl: undefined,
        breadcrumbs: false,
        include: includeList,
        exclude: excludeList,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: path.resolve(__dirname, '../../components'),
        routeBasePath: 'componenten',
        editUrl: undefined,
        breadcrumbs: false,
        sidebarPath: require.resolve('./config/componentsSidebarConfig.js'),
        sidebarItemsGenerator,
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
            require.resolve('./src/scss/custom.scss'),
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
  future: {
    experimental_faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
};

export default config;
