import { defaultArgs } from './defaultArgs';
import { argTypes, TextInput } from './template';

export default {
  title: 'Componenten/Form/Text input/Prefix Suffix',
  component: TextInput,
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

export const Prefix = {
  render: TextInput.bind({}),
  name: 'Prefix',

  args: {
    ...defaultArgs,
    valueType: 'currency',
    prefix: '€',
  },
};

export const Suffix = {
  render: TextInput.bind({}),
  name: 'Suffix',

  args: {
    ...defaultArgs,
    valueType: 'number',
    suffix: 'm³',
  },
};
