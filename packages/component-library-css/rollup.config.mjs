import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import fs from 'fs';
import path, { resolve } from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');

const packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const getWorkspaceDependenciesInDirectory = (packageJSON, parentDir) =>
  Object.entries(packageJSON.dependencies)
    // Find all dependencies that are in this workspace
    .filter(([_packageName, version]) => version === 'workspace:*')
    .map(([packageName, _version]) => ({
      packageName,
      resolvedPath: import.meta.resolve(packageName),
    }))
    // Find all dependencies that are __a component__ in this workspace
    .filter(({ resolvedPath }) => resolvedPath.includes(`/${parentDir}/`))
    // For each npm package, find the name of the directory the package is in.
    // This will serve as the slug for the component.
    .map(({ resolvedPath, ...restProperties }) => {
      // Find the directory above the `/dist/` folder, so `{component-name}` in `/components/{component-name}/dist/`
      const match = /\/([^/]+)\/([^/]+)\/dist\/[^\\]+$/i.exec(resolvedPath);

      return {
        ...restProperties,
        resolvedPath,
        slug: match && match[1] === parentDir ? match[2] : null,
      };
    })
    .filter(({ slug }) => slug !== null);

const components = getWorkspaceDependenciesInDirectory(packageJSON, 'components');
const utilities = getWorkspaceDependenciesInDirectory(packageJSON, 'utilities');

const useStatementsUtil = [];

// Create individual component configurations
const componentBundles = components.flatMap(({ slug }) => [
  {
    input: `${repoRoot}/components/${slug}/src/index.scss`,
    output: {
      file: `dist/components/${slug}.css`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: false,
      }),
      filesize(),
    ],
  },
  {
    input: `../../components/${slug}/src/index.scss`,
    output: {
      file: `dist/components/${slug}.min.css`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
      }),
      filesize(),
    ],
  },
]);

// Main bundle configurations
const mainBundles = [
  {
    input: 'src/index.scss',
    output: [
      {
        file: 'dist/index.css',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: false,
        use: {
          sass: { includePaths: ['node_modules', path.join(repoRoot, 'utilities'), path.join(repoRoot, 'components')] },
        },
      }),
      filesize(),
    ],
  },
  {
    input: 'src/index.scss',
    output: {
      file: 'dist/index.min.css',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        use: {
          sass: { includePaths: ['node_modules', path.join(repoRoot, 'utilities'), path.join(repoRoot, 'components')] },
        },
        plugins: [
          cssnano({
            preset: ['default', { discardComments: { removeAll: true } }],
          }),
        ],
      }),
      filesize(),
    ],
  },
];

// Util bundle configuration
const utilBundle = utilities.flatMap(({ slug }) => [
  {
    input: `${repoRoot}/utilities/${slug}/src/index.scss`,
    output: {
      file: `dist/utilities/${slug}.css`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: false,
      }),
      filesize(),
    ],
  },
]);

// Base bundle configuration
const baseBundles = [
  {
    input: 'src/base.scss',
    output: {
      file: 'dist/components/base.css',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: false,
      }),
      filesize(),
    ],
  },
  {
    input: 'src/base.scss',
    output: {
      file: 'dist/components/base.min.css',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        plugins: [
          cssnano({
            preset: ['default', { discardComments: { removeAll: true } }],
          }),
        ],
      }),
      filesize(),
    ],
  },
];

export default [...mainBundles, ...componentBundles, ...utilBundle, ...baseBundles];
