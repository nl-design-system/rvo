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
        ],
      },
      {
        name: 'Forms',
        include: [
          '../components/form-checkbox/css/template.tsx',
          '../components/form-checkbox-group/css/template.tsx',
          '../components/form-field-checkbox/css/template.tsx',
          '../components/form-dateinput/css/template.tsx',
          '../components/form-fileinput/css/template.tsx',
          '../components/form-feedback/css/template.tsx',
          '../components/form-fieldset/css/template.tsx',
        ],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
