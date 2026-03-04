import { defaultArgs } from '@nl-rvo/component-library-react/src/components/button/defaultArgs';
import { argTypes, Button } from '@nl-rvo/component-library-react';

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
  name: 'Primary',

  args: {
    ...defaultArgs,
    kind: 'primary',
  },
};

export const Secondary = {
  render: Button,
  name: 'Secondary',

  args: {
    ...defaultArgs,
    kind: 'secondary',
  },
};

export const Tertiary = {
  render: Button,
  name: 'Tertiary',

  args: {
    ...defaultArgs,
    kind: 'tertiary',
  },
};

export const Quaternary = {
  render: Button,
  name: 'Quaternary',

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
  name: 'Warning',

  args: {
    ...defaultArgs,
    kind: 'warning',
  },
};
