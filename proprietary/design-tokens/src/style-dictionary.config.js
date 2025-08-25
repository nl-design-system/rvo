const StyleDictionary = require('style-dictionary');
const jsonListFormat = require('./json-list-formatter.js');
const scssColorsMapFormat = require('./scss-colors-map-formatter.js');

StyleDictionary.registerFormat({
  name: 'javascript/color-token-array',
  formatter: ({ dictionary }) => {
    const entries = dictionary.allTokens
      .filter((token) => token.type === 'color')
      .map((token) => {
        const name = ['rvo', ...token.path.slice(2)].join('-').toLowerCase();
        return `  ["${token.value}", "${name}"]`;
      });

    return `// AUTO-GENERATED — DO NOT EDIT.
export const colorTokens = [
${entries.join(',\n')}
] as const;
`;
  },
});

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const destinationSort = (a, b) => stringSort(a.destination, b.destination);

module.exports = {
  format: {
    ...jsonListFormat,
    ...scssColorsMapFormat,
  },
  source: ['../../components/**/*.tokens.json', './src/**/*.tokens.json'],
  platforms: {
    js: {
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
        {
          destination: 'colors.js',
          format: 'javascript/color-token-array',
          filter: (token) => token.type === 'color',
        },
      ],
    },
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            selector: '.rvo-theme',
            outputReferences: true,
          },
        },
      ].sort(destinationSort),
    },
    json: {
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.tokens.json',
          format: 'json',
        },
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ].sort(destinationSort),
    },

    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.scss',
          format: 'scss/variables',
          filter: (token) => token.value.length > 0,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'colors.scss',
          format: 'scss/colors-map',
        },
      ].sort(destinationSort),
    },
    less: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.less',
          format: 'less/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
