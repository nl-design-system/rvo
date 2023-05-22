// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, CheckboxField as CheckboxFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Checkbox field',
  component: CheckboxFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-checkbox',
    },
  },
};

export const CheckboxField = {
  render: CheckboxFieldComponent.bind({}),
  name: 'Checkbox field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
