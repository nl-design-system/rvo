// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, FileInputField as FileInputFieldComponent } from './template';

export default {
  title: 'Componenten/Form/Field/File input field',
  component: FileInputFieldComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-fileinput',
    },
  },
};

export const FileInputField = {
  render: FileInputFieldComponent.bind({}),
  name: 'File input field',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
