import { AllButtonKinds, argTypes } from './src/template';

export default {
  title: 'Componenten/Button/Sizes',
  component: AllButtonKinds,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-529&embed-host=share',
    },
  },
};

export const ExtraSmall = {
  render: AllButtonKinds.bind({}),
  name: 'Extra small',

  args: {
    kind: 'primary',
    size: 'xs',
  },
};

export const Small = {
  render: AllButtonKinds.bind({}),
  name: 'Small',

  args: {
    kind: 'primary',
    size: 'sm',
  },
};

export const Medium = {
  render: AllButtonKinds.bind({}),
  name: 'Medium',

  args: {
    kind: 'primary',
    size: 'md',
  },
};
