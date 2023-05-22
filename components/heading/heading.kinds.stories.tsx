import { defaultArgs } from './defaultArgs';
import { argTypes, Heading } from './template';

export default {
  title: 'Componenten/Heading/Kinds',
  component: Heading,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
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
    textContent: 'Heading 1',
  },
};

export const Heading2 = {
  render: Heading.bind({}),
  name: 'Heading 2',

  args: {
    ...defaultArgs,
    type: 'h2',
    distanced: false,
    textContent: 'Heading 2',
  },
};

export const Heading3 = {
  render: Heading.bind({}),
  name: 'Heading 3',

  args: {
    ...defaultArgs,
    type: 'h3',
    distanced: false,
    textContent: 'Heading 3',
  },
};

export const Heading4 = {
  render: Heading.bind({}),
  name: 'Heading 4',

  args: {
    ...defaultArgs,
    type: 'h4',
    distanced: false,
    textContent: 'Heading 4',
  },
};

export const Heading5 = {
  render: Heading.bind({}),
  name: 'Heading 5',

  args: {
    ...defaultArgs,
    type: 'h5',
    distanced: false,
    textContent: 'Heading 5',
  },
};

export const Heading6 = {
  render: Heading.bind({}),
  name: 'Heading 6',

  args: {
    ...defaultArgs,
    type: 'h6',
    distanced: false,
    textContent: 'Heading 6',
  },
};
