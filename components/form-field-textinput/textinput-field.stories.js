// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, TextInputField as TextInputFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Text input field',
  component: TextInputFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-textinput',
    },
  },
};

export const TextInputField = {
  render: TextInputFieldComponent.bind({}),
  name: 'Text input field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
