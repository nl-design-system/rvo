import { defaultArgs } from './defaultArgs';
import { argTypes, Checkbox } from './template';

export default {
  title: 'Componenten/Form/Checkbox/States',
  component: Checkbox,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-checkbox',
    },
  },
};

export const Hover = {
  render: Checkbox.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
  },
};

export const Checked = {
  render: Checkbox.bind({}),
  name: 'Checked',

  args: {
    ...defaultArgs,
    checked: true,
  },
};

export const Indeterminate = {
  render: Checkbox.bind({}),
  name: 'Indeterminate',

  args: {
    ...defaultArgs,
    checked: true,
    indeterminate: true,
  },
};

export const Disabled = {
  render: Checkbox.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Active = {
  render: Checkbox.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
  },
};

export const Focus = {
  render: Checkbox.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};
