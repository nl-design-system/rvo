/**
 * @type {import('prettier').Config}
 */
export default {
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.jsx', '*.tsx'],
      options: {
        parser: 'flow',
        printWidth: 120,
        singleQuote: true,
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
        printWidth: 120,
      },
    },
    {
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        printWidth: 120,
        singleQuote: true,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        parser: 'css',
      },
    },
    {
      files: ['*.html'],
      options: {
        parser: 'html',
        printWidth: 120,
      },
    },
  ],
};
