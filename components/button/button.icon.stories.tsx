import { AllButtonKinds, argTypes } from './src/template';

export default {
  title: 'Componenten/Button/Icons',
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

export const WithIconBefore = {
  render: AllButtonKinds.bind({}),
  name: 'With icon before',

  args: {
    kind: 'primary',
    showIcon: 'before',
  },
};

export const WithIconAfter = {
  render: AllButtonKinds.bind({}),
  name: 'With icon after',

  args: {
    kind: 'primary',
    showIcon: 'after',
  },
};
