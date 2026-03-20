import { Textarea } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-textarea/defaultArgs';
import { argTypes } from './argTypes';

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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5910-272&embed-host=share',
    },
  },
};

export const Invalid = {
  render: Textarea.bind({}),

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: Textarea.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: Textarea.bind({}),

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
