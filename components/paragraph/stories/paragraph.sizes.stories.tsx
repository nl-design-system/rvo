import { argTypes, Paragraph } from '@nl-rvo/component-library-react';

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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2003-19389&embed-host=share',
    },
  },
};

export const Small = {
  render: Paragraph.bind({}),
  args: {
    size: 'sm',
  },
};

export const Medium = {
  render: Paragraph.bind({}),
  args: {
    size: 'md',
  },
};

export const Large = {
  render: Paragraph.bind({}),
  args: {
    size: 'lg',
  },
};
