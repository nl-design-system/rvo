import { defaultArgs } from './src/defaultArgs';
import { argTypes, Link } from './src/template';

export default {
  title: 'Componenten/Link/States',
  component: Link,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'link',
    },
  },
};

export const Hover = {
  render: Link.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: Link.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: Link.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
  },
};
