import { defaultArgs } from './src/defaultArgs';
import { argTypes, Textarea } from './src/template';

export default {
  title: 'Componenten/Textarea/States',
  component: Textarea,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'form-textarea',
    },
  },
};

export const Invalid = {
  render: Textarea.bind({}),
  name: 'Invalid',

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: Textarea.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: Textarea.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const ReadOnly = {
  render: Textarea.bind({}),
  name: 'Read-only',

  args: {
    ...defaultArgs,
    readOnly: true,
  },
};
