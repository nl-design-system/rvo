// .storybook/main.mjs
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = (() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // // Custom Sass Importer to handle legacy tilde (~) dependencies cleanly
  // const webpackStyleImporter = {
  //   findFileUrl(url, { _containingUrl }) {
  //     if (url.startsWith('~')) {
  //       const normalizedUrl = url.slice(1);
  //       try {
  //         const basePath = _containingUrl.pathname.split('/src')[0];
  //         return new URL(`file://${path.join(basePath, 'node_modules', normalizedUrl)}`);
  //       } catch {
  //         return null;
  //       }
  //     }
  //     return null;
  //   },
  // };

  return {
    framework: { name: '@storybook/react-vite', options: {} },

    core: {
      disableTelemetry: true,
      disableWhatsNewNotifications: true,
      disableOnboarding: true,
    },

    // Simplified Stories Array using standard relative lookups
    stories: [
      '../documentation/pages/**/*.docpage.mdx',
      '../documentation/demopages/**/*.stories.@(jsx|tsx)',
      '../utilities/*/docs/*.docpage.mdx',
      '../utilities/*/stories/*.stories.@(jsx|tsx)',
      '../components/*/*.docpage.mdx',
      '../components/*/*.stories.@(jsx|tsx)',
    ],

    addons: [
      '@storybook/addon-a11y',
      '@storybook/preset-scss',
      '@storybook/addon-themes',
      '@storybook/addon-links',
      '@storybook/addon-designs',
      '@storybook/addon-webpack5-compiler-babel',
      '@chromatic-com/storybook',
      '@storybook/addon-docs',
      '@etchteam/storybook-addon-status',
    ],

    staticDirs: ['../documentation/demopages/common', '../node_modules/@nl-rvo/assets/'],

    typescript: {
      check: false, // Performance Fix: Keeps the compilation fast and in a single thread
      reactDocgen: 'react-docgen-typescript',
    },

    viteFinal: async (config) => {
      return {
        ...config,
        // Fixes the ".md missing semicolon" crash by telling Vite to read markdown as raw assets
        assetsInclude: ['**/*.md'],

        css: {
          preprocessorOptions: {
            scss: {
              api: 'modern',
              implementation: await import('sass-embedded').then((m) => m.default || m),
            },
          },
        },
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve?.alias,
            // Replaces your old Webpack tilde (~) resolution logic natively
            '~': path.resolve(__dirname, '../node_modules'),
          },
        },
      };
    },

    viewMode: 'story',

    docs: {
      autodocs: false,
      mdxPluginOptions: {
        mdxCompileOptions: { remarkPlugins: [remarkGfm] }, // Injects Remark-GFM cleanly into all pages natively
      },
    },
  };
})();

export default config;
