import { defaultArgs } from './src/defaultArgs';
import { argTypes, FileInput } from './src/template';

export default {
  title: 'Componenten/File input/States',
  component: FileInput,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-fileinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9168-59&embed-host=share',
    },
  },
};

export const Invalid = {
  render: FileInput.bind({}),
  name: 'Invalid',

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: FileInput.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: FileInput.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Required = {
  render: FileInput.bind({}),
  name: 'Required',

  args: {
    ...defaultArgs,
    required: true,
  },
};
