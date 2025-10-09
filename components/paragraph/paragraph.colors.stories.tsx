import { argTypes, Paragraph } from './src/template';

export default {
  title: 'Componenten/Paragraph/Colors',
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

export const Zwart = {
  render: Paragraph.bind({}),
  name: 'Zwart',
  args: {
    color: 'zwart',
  },
};

export const lintblauw = {
  render: Paragraph.bind({}),
  name: 'lintblauw',
  args: {
    color: 'lintblauw',
  },
};

export const Wit = {
  render: Paragraph.bind({}),
  name: 'Wit',
  args: {
    color: 'wit',
  },
};

export const Grijs500 = {
  render: Paragraph.bind({}),
  name: 'Grijs 500',
  args: {
    color: 'grijs-500',
  },
};

export const Grijs900 = {
  render: Paragraph.bind({}),
  name: 'Grijs 900',
  args: {
    color: 'grijs-900',
  },
};
