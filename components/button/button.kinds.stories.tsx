import { defaultArgs } from './defaultArgs';
import { argTypes, Button } from './template';

export default {
  title: 'Componenten/Button/Kinds',
  component: Button,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'button',
    },
  },
};

export const Primary = {
  render: Button.bind({}),
  name: 'Primary',

  args: {
    ...defaultArgs,
    kind: 'primary',
  },
};

export const Secondary = {
  render: Button.bind({}),
  name: 'Secondary',

  args: {
    ...defaultArgs,
    kind: 'secondary',
  },
};

export const Tertiary = {
  render: Button.bind({}),
  name: 'Tertiary',

  args: {
    ...defaultArgs,
    kind: 'tertiary',
  },
};

export const Quaternary = {
  render: Button.bind({}),
  name: 'Quaternary',

  args: {
    ...defaultArgs,
    kind: 'quaternary',
  },
};

export const WarningSubtle = {
  render: Button.bind({}),
  name: 'Warning subtle',

  args: {
    ...defaultArgs,
    kind: 'warning-subtle',
  },
};

export const Warning = {
  render: Button.bind({}),
  name: 'Warning',

  args: {
    ...defaultArgs,
    kind: 'warning',
  },
};
