// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, RadioButtonField as RadioButtonFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Radio button field',
  component: RadioButtonFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-radio-button',
    },
  },
};

export const RadioButtonField = {
  render: RadioButtonFieldComponent.bind({}),
  name: 'Radio button field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
