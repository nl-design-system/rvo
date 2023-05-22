// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, TextInput as TextInputComponent } from './template';

export default {
  title: 'Componenten/Form/Text input',
  component: TextInputComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-textinput',
    },
  },
};

export const TextInput = {
  render: TextInputComponent.bind({}),
  name: 'Text input',
  args: defaultArgs,
};
