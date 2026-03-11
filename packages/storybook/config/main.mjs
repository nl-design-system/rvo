// This file has been automatically migrated to valid ESM format by Storybook.
// .storybook/main.mjs
import path, { dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import remarkGfm from 'remark-gfm';

/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = (() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const require = createRequire(import.meta.url);

  /* set path */
  const docsPath = path.resolve(__dirname, '../../../documentation');
  const componentsPath = path.resolve(__dirname, '../../../components');
  const utilitiesPath = path.resolve(__dirname, '../../../utilities');

  function getPackageDir(filepath) {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
      if (fs.existsSync(path.join(currDir, 'package.json'))) return currDir;
      const { dir, root } = path.parse(currDir);
      if (dir === root) {
        throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
      }
      currDir = dir;
    }
  }

  const webpackStyleImporter = {
    findFileUrl(url, { _containingUrl }) {
      if (url.startsWith('~')) {
        const normalizedUrl = url.slice(1);
        try {
          const basePath = _containingUrl.pathname.split('/src')[0];
          const resolvedPath = path.join(basePath, 'node_modules', normalizedUrl);
          return new URL(`file://${resolvedPath}`);
        } catch {
          console.warn(`Warning: Could not resolve ${url}`);
          return null;
        }
      }
      return null;
    },
  };

  return {
    framework: { name: '@storybook/react-webpack5', options: {} },

    core: {
      disableTelemetry: true,
      disableWhatsNewNotifications: true,
      disableOnboarding: true,
    },

    stories: [
      `${docsPath}/pages/**/*.docpage.mdx`,
      `${docsPath}/demopages/**/*.stories.@(jsx|tsx)`,
      `${componentsPath}/**!(node_modules)/*.docpage.mdx`,
      `${componentsPath}/**!(node_modules)/*.stories.@(jsx|tsx)`,
      `${utilitiesPath}/**!(node_modules)/*.docpage.mdx`,
      `${utilitiesPath}/**!(node_modules)/*.stories.@(jsx|tsx)`,
    ],

    addons: [
      '@storybook/addon-a11y',
      '@storybook/preset-scss',
      'storybook-addon-themes',
      '@storybook/addon-links',
      '@storybook/addon-designs',
      '@storybook/addon-webpack5-compiler-babel',
      '@chromatic-com/storybook',
      '@storybook/addon-docs',
    ],

    staticDirs: ['../../../documentation/demopages/common', '../node_modules/@nl-rvo/assets/'],

    typescript: {
      check: true,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
    },

    webpackFinal: async (config) => {
      const rules = config.module?.rules || [];

      const scssRule = rules.find((rule) => rule.test?.toString().replace(/\\/g, '') === '/.s[ca]ss$/');
      if (scssRule) {
        scssRule.use = [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                api: 'modern',
                implementation: 'sass-embedded',
                importers: [webpackStyleImporter],
              },
            },
          },
        ];
      }

      const mdxRules = rules.filter((rule) => rule.test && String(rule.test).includes('mdx'));
      mdxRules.forEach((rule) => {
        (rule.use || []).forEach((u) => {
          if (typeof u === 'object' && u.loader?.includes('@storybook/mdx2-csf')) {
            u.options = {
              ...u.options,
              mdxCompileOptions: {
                ...(u.options?.mdxCompileOptions || {}),
                remarkPlugins: [...(u.options?.mdxCompileOptions?.remarkPlugins || []), remarkGfm],
              },
            };
          }
        });
      });

      const svgRule = rules.find((rule) => rule.type === 'asset/resource');
      if (svgRule?.generator?.filename) delete svgRule.generator.filename;

      config.output.assetModuleFilename = (pathData) => {
        const m = path.dirname(pathData.filename).match(/(?<=assets\/).*/);
        const filepath = m ? m[0] : '';
        return `static/${filepath}/[name][ext][query]`;
      };

      rules.push({ test: /\.md$/, type: 'asset/source' });

      return {
        ...config,
        performance: { hints: false },
        module: { ...(config.module || {}), rules },
        resolve: {
          ...config.resolve,
          alias: {
            ...(config.resolve?.alias || {}),
            '@emotion/core': getPackageDir('@emotion/react'),
            '@emotion/styled': getPackageDir('@emotion/styled'),
            'emotion-theming': getPackageDir('@emotion/react'),
          },
        },
      };
    },

    viewMode: 'story',

    docs: {
      autodocs: false,
      mdxPluginOptions: {
        mdxCompileOptions: { remarkPlugins: [remarkGfm] },
      },
    },
  };
})();

export default config;
