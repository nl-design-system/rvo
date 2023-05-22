import { defaultArgs } from './defaultArgs';
import { argTypes, RadioButton } from './template';

export default {
  title: 'Componenten/Form/Radio button/States',
  component: RadioButton,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-radio-button',
    },
  },
};

export const Hover = {
  render: RadioButton.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
  },
};

export const Checked = {
  render: RadioButton.bind({}),
  name: 'Checked',

  args: {
    ...defaultArgs,
    checked: true,
  },
};

export const Disabled = {
  render: RadioButton.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Active = {
  render: RadioButton.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
  },
};

export const Focus = {
  render: RadioButton.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};
