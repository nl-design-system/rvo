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
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
// rollup.config.js
/**
 * @type {import("rollup").RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
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
      postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
        use: [
          [
            'sass',
            {
              includePaths: ['node_modules', path.join(repoRoot, 'utilities'), path.join(repoRoot, 'components')],
            },
          ],
        ],
      }),
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      resolve({ browser: true }),
      commonjs({
        include: /node_modules/,
      }),
      nodePolyfills(),
      typescript({ includeDependencies: false }),
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
