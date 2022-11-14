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
          '../components/heading/css/template.tsx',
          '../components/data-list/css/template.tsx',
          '../components/expandable-text/css/template.tsx',
          '../components/header/css/template.tsx',
          '../components/footer/css/template.tsx',
          // '../components/logo/css/template.tsx',
          '../components/icon/css/template.tsx',
          '../components/layout-column-row/css/template.tsx',
          '../components/link/css/template.tsx',
          '../components/tag/css/template.tsx',
        ],
      },
      {
        name: 'Forms',
        include: [
          '../components/form-layout/css/template.tsx',
          '../components/form-fieldset/css/template.tsx',
          '../components/form-textinput/css/template.tsx',
          '../components/form-field-textinput/css/template.tsx',
          '../components/form-checkbox/css/template.tsx',
          '../components/form-checkbox-group/css/template.tsx',
          '../components/form-field-checkbox/css/template.tsx',
          '../components/form-radio-button/css/template.tsx',
          '../components/form-radio-button-group/css/template.tsx',
          '../components/form-field-radio-button/css/template.tsx',
          '../components/form-select/css/template.tsx',
          '../components/form-field-select/css/template.tsx',
          '../components/form-dateinput/css/template.tsx',
          '../components/form-field-dateinput/css/template.tsx',
          '../components/form-timeinput/css/template.tsx',
          '../components/form-field-timeinput/css/template.tsx',
          '../components/form-fileinput/css/template.tsx',
          '../components/form-field-fileinput/css/template.tsx',
          '../components/form-feedback/css/template.tsx',
          '../components/label/css/template.tsx',
        ],
      },
      {
        name: 'Layout',
        include: ['../components/max-width-layout/css/template.tsx', '../components/form-layout/css/template.tsx'],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
