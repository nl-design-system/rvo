import { defaultArgs } from './src/defaultArgs';
import { argTypes, TextInput } from './src/template';

export default {
  title: 'Componenten/Text input/States',
  component: TextInput,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'form-textinput',
    },
  },
};

export const Invalid = {
  render: TextInput.bind({}),
  name: 'Invalid',

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: TextInput.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: TextInput.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const ReadOnly = {
  render: TextInput.bind({}),
  name: 'Read-only',

  args: {
    ...defaultArgs,
    readOnly: true,
  },
};
