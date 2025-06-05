import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { readFileSync } from 'node:fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import fs from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

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
const cssComponentBundles = useStatements.flatMap((component) => [
  {
    input: `../../components/${component}/src/index.scss`,
    output: {
      file: `dist/components/${component}/src/index.css`,
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
      file: `dist/components/${component}/src/index.min.css`,
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

const reactComponentBundles = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        globals: outputGlobals,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    external: [/@babel\/runtime/, 'react-dom', 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss({
        inject: false,
      }),
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      nodePolyfills(),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
    ],
  },
];

export default [...cssComponentBundles, ...reactComponentBundles];
