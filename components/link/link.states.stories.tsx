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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5544&embed-host=share',
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
