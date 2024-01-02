import { defaultArgs } from './defaultArgs';
import { argTypes, Toggle } from './template';

export default {
  title: 'Componenten/Toggle/States',
  component: Toggle,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'toggle',
    },
  },
};

export const Hover = {
  render: Toggle.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: Toggle.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: Toggle.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
  },
};
