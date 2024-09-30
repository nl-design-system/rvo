/* eslint-env node */

module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          '../../components/accordion/template.tsx',
          '../../components/accordion/accordion-item/template.tsx',
          '../../components/alert/template.tsx',
          '../../components/breadcrumbs/template.tsx',
          '../../components/breadcrumbs/breadcrumbs-item/template.tsx',
          '../../components/button/template.tsx',
          '../../components/button-group/template.tsx',
          '../../components/card/template.tsx',
          '../../components/heading/template.tsx',
          '../../components/data-list/template.tsx',
          '../../components/expandable-text/template.tsx',
          '../../components/header/template.tsx',
          '../../components/footer/template.tsx',
          '../../components/footer/footer-column/template.tsx',
          '../../components/footer/footer-item/template.tsx',
          '../../components/logo/template.tsx',
          '../../components/menubar/template.tsx',
          '../../components/menubar/menubar-item/template.tsx',
          '../../components/menubar-mobile/template.tsx',
          '../../components/icon/template.tsx',
          '../../components/status-icon/template.tsx',
          '../../components/status-indicator/template.tsx',
          '../../components/link/template.tsx',
          '../../components/tag/template.tsx',
          '../../components/table/template.tsx',
          '../../components/progress-tracker/template.tsx',
          '../../components/progress-tracker/progress-tracker-step/template.tsx',
          // grid
          // hero
          '../../components/horizontal-rule/template.tsx',
          // item-list
          // ordered-unordered-list
          // paginations
          '../../components/toggle/template.tsx',
        ],
      },
      {
        name: 'Forms',
        include: [
          '../../components/form-fieldset/template.tsx',
          '../../components/form-textinput/template.tsx',
          '../../components/form-field-textinput/template.tsx',
          '../../components/form-checkbox/template.tsx',
          '../../components/form-checkbox-group/template.tsx',
          '../../components/form-field-checkbox/template.tsx',
          '../../components/form-radio-button/template.tsx',
          '../../components/form-radio-button-group/template.tsx',
          '../../components/form-field-radio-button/template.tsx',
          '../../components/form-select/template.tsx',
          '../../components/form-field-select/template.tsx',
          '../../components/form-dateinput/template.tsx',
          '../../components/form-field-dateinput/template.tsx',
          '../../components/form-timeinput/template.tsx',
          '../../components/form-field-timeinput/template.tsx',
          '../../components/form-fileinput/template.tsx',
          '../../components/form-field-fileinput/template.tsx',
          '../../components/form-feedback/template.tsx',
          '../../components/form-field-label/template.tsx',
        ],
      },
      {
        name: 'Layout',
        include: [
          '../../components/max-width-layout/template.tsx',
          '../../components/form-layout/template.tsx',
          '../../components/sidebar-layout/template.tsx',
          '../../components/sidebar-layout/sidebar-layout-bar/template.tsx',
          '../../components/sidebar-layout/sidebar-layout-content/template.tsx',
          '../../components/layout-flow/template.tsx',
        ],
      },
    ],
    wrapper: './src/Wrapper/UXPinWrapper.tsx',
    webpackConfig: './webpack.config.js',
  },
  name: 'ROOS',
};
