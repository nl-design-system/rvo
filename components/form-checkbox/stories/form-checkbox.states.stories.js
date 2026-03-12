import { argTypes, Checkbox } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-checkbox/defaultArgs';

export default {
  title: 'Componenten/Checkbox/States',
  component: Checkbox,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'form-checkbox',
    },
  },
};

export const Hover = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    hover: true,
  },
};

export const Checked = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    checked: true,
  },
};

export const Indeterminate = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    checked: true,
    indeterminate: true,
  },
};

export const Disabled = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Active = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    active: true,
  },
};

export const Focus = {
  render: Checkbox.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
  },
};
