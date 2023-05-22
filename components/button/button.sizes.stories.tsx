import { AllButtonKinds, argTypes } from './template';

export default {
  title: 'Componenten/Button/Sizes',
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
