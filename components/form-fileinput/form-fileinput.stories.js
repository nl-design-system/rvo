// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, FileInput as FileInputComponent } from './template';

export default {
  title: 'Componenten/Form/File input',
  component: FileInputComponent,
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

export const FileInput = {
  render: FileInputComponent.bind({}),
  name: 'File input',
  args: defaultArgs,
};
