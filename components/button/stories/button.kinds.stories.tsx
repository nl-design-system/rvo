import { argTypes, Button } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/button/defaultArgs';

export default {
  title: 'Componenten/Button/Kinds',
  component: Button,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-529&embed-host=share',
    },
  },
};

export const Primary = {
  render: Button,

  args: {
    ...defaultArgs,
    kind: 'primary',
  },
};

export const Secondary = {
  render: Button,

  args: {
    ...defaultArgs,
    kind: 'secondary',
  },
};

export const Tertiary = {
  render: Button,

  args: {
    ...defaultArgs,
    kind: 'tertiary',
  },
};

export const Quaternary = {
  render: Button,

  args: {
    ...defaultArgs,
    kind: 'quaternary',
  },
};

export const WarningSubtle = {
  render: Button,
  name: 'Warning subtle',

  args: {
    ...defaultArgs,
    kind: 'warning-subtle',
  },
};

export const Warning = {
  render: Button,

  args: {
    ...defaultArgs,
    kind: 'warning',
  },
};
