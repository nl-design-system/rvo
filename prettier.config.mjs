/**
 * @type {import('prettier').Config}
 */
export default {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.jsx', '*.tsx'],
      options: {
        parser: 'flow',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
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
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.html'],
      options: {
        parser: 'html',
      },
    },
    {
      // match pnpm CLI-driven changes behavior
      files: ['pnpm-workspace.yaml'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
