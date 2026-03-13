import { Paragraph } from '@nl-rvo/component-library-react';
import { argTypes } from './argTypes';
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
  args: {
    color: 'zwart',
  },
};

export const Lintblauw = {
  render: Paragraph.bind({}),
  args: {
    color: 'lintblauw',
  },
};

export const Wit = {
  render: Paragraph.bind({}),
  args: {
    color: 'wit',
  },
};

export const Grijs500 = {
  render: Paragraph.bind({}),
  args: {
    color: 'grijs-500',
  },
};

export const Grijs900 = {
  render: Paragraph.bind({}),
  args: {
    color: 'grijs-900',
  },
};
