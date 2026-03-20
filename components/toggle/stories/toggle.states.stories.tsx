import { Toggle } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/toggle/defaultArgs';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Toggle/States',
  component: Toggle,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'toggle',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3038&embed-host=share',
    },
  },
};

export const Hover = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
  },
};
