import { argTypes, Paragraph } from './src/template';

export default {
  title: 'Componenten/Paragraph/Sizes',
  component: Paragraph,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'paragraph',
    },
  },
};

export const Small = {
  render: Paragraph.bind({}),
  name: 'Small',
  args: {
    size: 'sm',
  },
};

export const Medium = {
  render: Paragraph.bind({}),
  name: 'Medium',
  args: {
    size: 'md',
  },
};

export const Large = {
  render: Paragraph.bind({}),
  name: 'Large',
  args: {
    size: 'lg',
  },
};
