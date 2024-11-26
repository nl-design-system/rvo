import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

/**
 * @type {import('rollup').RollupOptions}
 */

export default [
  {
    input: 'src/index.scss',
    output: [
      {
        file: 'dist/index.css',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.min.css',
        format: 'es',
        sourcemap: true,
      },
    ],
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
