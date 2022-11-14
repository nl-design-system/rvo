module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          '../components/alert/css/template.tsx',
          '../components/breadcrumbs/css/template.tsx',
          '../components/button/css/template.tsx',
          '../components/button-group/css/template.tsx',
          '../components/data-list/css/template.tsx',
          '../components/expandable-text/css/template.tsx',
          '../components/footer/css/template.tsx',
          '../components/form-checkbox/css/template.tsx',
        ],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
