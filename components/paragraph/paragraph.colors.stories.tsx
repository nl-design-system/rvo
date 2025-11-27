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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=605-19508&embed-host=share',
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

export const Lintblauw = {
  render: Paragraph.bind({}),
  name: 'Lintblauw',
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
