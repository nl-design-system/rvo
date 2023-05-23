import { defaultArgs } from './defaultArgs';
import { argTypes, Tag } from './template';

export default {
  title: 'Componenten/Tag/States',
  component: Tag,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'tag',
    },
  },
};

export const Hover = {
  render: Tag.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: Tag.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: Tag.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
  },
};
