import { AllButtonKinds, argTypes } from './template';

export default {
  title: 'Componenten/Button/States',
  component: AllButtonKinds,
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

export const Hover = {
  render: AllButtonKinds.bind({}),
  name: 'Hover',

  args: {
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: AllButtonKinds.bind({}),
  name: 'Active',

  args: {
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: AllButtonKinds.bind({}),
  name: 'Focus',

  args: {
    focus: true,
    showIcon: 'before',
  },
};

export const FocusVisible = {
  render: AllButtonKinds.bind({}),
  name: 'Focus visible',

  args: {
    focus: true,
    focusVisible: true,
    showIcon: 'before',
  },
};

export const Disabled = {
  render: AllButtonKinds.bind({}),
  name: 'Disabled',

  args: {
    disabled: true,
    showIcon: 'before',
  },
};

export const Busy = {
  render: AllButtonKinds.bind({}),
  name: 'Busy',

  args: {
    busy: true,
    showIcon: 'before',
  },
};
