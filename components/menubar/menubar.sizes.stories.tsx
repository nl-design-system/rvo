import { defaultArgs } from './src/defaultArgs';
import { argTypes, MenuBar } from './src/template';

export default {
  title: 'Componenten/Menubar/Sizes',
  component: MenuBar,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'menubar',
    },
  },
};

export const Small = {
  render: MenuBar.bind({}),
  name: 'Small',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
    size: 'sm',
  },
};

export const Medium = {
  render: MenuBar.bind({}),
  name: 'Medium',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
    size: 'md',
  },
};

export const Large = {
  render: MenuBar.bind({}),
  name: 'Large',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
    size: 'lg',
  },
};
