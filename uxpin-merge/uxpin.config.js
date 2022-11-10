module.exports = {
  components: {
    categories: [
      {
        name: 'Test',
        include: [
          '../components/alert/css/template.tsx',
          '../components/breadcrumbs/css/template.tsx',
          '../components/button/css/template.tsx',
          '../components/button-group/css/template.tsx',
          '../components/data-list/css/template.tsx',
        ],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
