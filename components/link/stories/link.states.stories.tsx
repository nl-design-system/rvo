import { argTypes, Link } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/link/defaultArgs';

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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5544&embed-host=share',
    },
  },
};

export const Hover = {
  render: Link.bind({}),

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: Link.bind({}),

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: Link.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
  },
};
