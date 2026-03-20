import { FileInput } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-fileinput/defaultArgs';
import { argTypes } from './argTypes';

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

  args: {
    ...defaultArgs,
    invalid: true,
  },
};

export const Focus = {
  render: FileInput.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
  },
};

export const Disabled = {
  render: FileInput.bind({}),

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Required = {
  render: FileInput.bind({}),

  args: {
    ...defaultArgs,
    required: true,
  },
};
