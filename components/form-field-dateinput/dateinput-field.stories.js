// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, DateInputField as DateInputFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Date input field',
  component: DateInputFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-dateinput',
    },
  },
};

export const DateInputField = {
  render: DateInputFieldComponent.bind({}),
  name: 'Date input field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
