import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { readFileSync } from 'node:fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import path from 'node:path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

/**
 * @type {import('rollup').RollupOptions}
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
        extensions: ['.css'],
        minimize: true,
        extract: false,
        inject: false,
      }),
      copy({
        targets: [
          {
            src: 'src/**/*.css',
            dest: 'dist',
            rename: (name, extension, fullPath) => {
              return path.relative('src', fullPath);
            },
          },
        ],
        hook: 'writeBundle',
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
