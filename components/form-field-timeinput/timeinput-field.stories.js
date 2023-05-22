// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, TimeInputField as TimeInputFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/Time input field',
  component: TimeInputFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-timeinput',
    },
  },
};

export const TimeInputField = {
  render: TimeInputFieldComponent.bind({}),
  name: 'Time input field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
