import { AllButtonKinds, argTypes } from './template';

export default {
  title: 'Componenten/Button/Icons',
  component: AllButtonKinds,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'button',
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
