import { defaultArgs } from './src/defaultArgs';
import { Heading } from './src/template';
import { iconNames as iconOptions } from '../icon/src/template';

const argTypes = {
  type: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'select' },
  },
  title: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  iconAriaLabel: { control: 'text' },
  noMargins: {
    control: 'boolean',
  },
  fontWeightNormal: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Componenten/Heading/Kinds',
  component: Heading,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'heading',
    },
  },
};

export const Heading1 = {
  render: Heading.bind({}),
  name: 'Heading 1',

  args: {
    ...defaultArgs,
    type: 'h1',
    distanced: false,
    title: 'Heading 1',
  },
};

export const Heading2 = {
  render: Heading.bind({}),
  name: 'Heading 2',

  args: {
    ...defaultArgs,
    type: 'h2',
    distanced: false,
    title: 'Heading 2',
  },
};

export const Heading3 = {
  render: Heading.bind({}),
  name: 'Heading 3',

  args: {
    ...defaultArgs,
    type: 'h3',
    distanced: false,
    title: 'Heading 3',
  },
};

export const Heading4 = {
  render: Heading.bind({}),
  name: 'Heading 4',

  args: {
    ...defaultArgs,
    type: 'h4',
    distanced: false,
    title: 'Heading 4',
  },
};

export const Heading5 = {
  render: Heading.bind({}),
  name: 'Heading 5',

  args: {
    ...defaultArgs,
    type: 'h5',
    distanced: false,
    title: 'Heading 5',
  },
};

export const Heading6 = {
  render: Heading.bind({}),
  name: 'Heading 6',

  args: {
    ...defaultArgs,
    type: 'h6',
    distanced: false,
    title: 'Heading 6',
  },
};
