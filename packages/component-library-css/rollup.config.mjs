import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import fs from 'fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');

// Read and parse @use statements from index.scss
const indexContent = fs.readFileSync('src/index.scss', 'utf-8');
const useStatements = indexContent
  .split('\n')
  .filter((line) => line.trim().startsWith('@use'))
  .map((line) => {
    const match = line.match(/@use "([^"]+)"/);
    return match ? match[1] : null;
  })
  .filter((path) => path && !path.includes('node_modules'))
  .map((componentPath) => {
    // Convert paths like "../../../components/accordion/src" to just "accordion"
    const parts = componentPath.split('/');
    const componentIndex = parts.indexOf('components');
    return componentIndex !== -1 ? parts[componentIndex + 1] : null;
  })
  .filter(Boolean);

// Create individual component configurations
const componentBundles = useStatements.flatMap((component) => [
  {
    input: `${repoRoot}/components/${component}/src/index.scss`,
    output: {
      file: `dist/components/${component}.css`,
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
    input: `../../components/${component}/src/index.scss`,
    output: {
      file: `dist/components/${component}.min.css`,
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

export default [...mainBundles, ...componentBundles, ...baseBundles];
