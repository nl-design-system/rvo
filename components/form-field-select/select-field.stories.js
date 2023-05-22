// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, SelectField as SelectFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Select field',
  component: SelectFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-select',
    },
  },
};

export const SelectField = {
  render: SelectFieldComponent.bind({}),
  name: 'Select field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
