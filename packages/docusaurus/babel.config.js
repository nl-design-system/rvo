module.exports = {
  presets: [
    '@docusaurus/core/lib/babel/preset',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
