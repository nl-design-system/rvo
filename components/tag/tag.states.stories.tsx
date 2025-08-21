import { defaultArgs } from './src/defaultArgs';
import { Tag } from './src/template';
import { options as iconOptions } from '../icon/src/template';

const argTypes = {
  content: {
    control: 'text',
  },
  type: {
    options: ['info', 'bevestiging', 'foutmelding', 'waarschuwing'],
    control: { type: 'radio' },
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'select' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  isPill: {
    control: 'boolean',
  },
  showHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  link: {
    control: 'text',
  },
  linkTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: 'radio' },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Componenten/Tag/States',
  component: Tag,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
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
