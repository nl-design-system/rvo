import { argTypes, TextInput } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-textinput/defaultArgs';

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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=1313-17903&embed-host=share',
    },
  },
};

export const Invalid = {
  render: TextInput.bind({}),

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: TextInput.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: TextInput.bind({}),

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
