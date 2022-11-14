module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          '../components/form-checkbox/css/template.tsx',
          '../components/form-dateinput/css/template.tsx',
          '../components/form-feedback/css/template.tsx',
        ],
      },
      {
        name: 'Forms',
        include: [
          '../components/form-checkbox/css/template.tsx',
          '../components/form-dateinput/css/template.tsx',
          '../components/form-feedback/css/template.tsx',
        ],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
