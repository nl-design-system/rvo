import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar } from './template';

export default {
  title: 'Componenten/Menubar/Max width',
  component: MenuBar,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
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
    maxWidth: 'sm',
  },
};

export const Medium = {
  render: MenuBar.bind({}),
  name: 'Medium',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
    maxWidth: 'md',
  },
};

export const Large = {
  render: MenuBar.bind({}),
  name: 'Large',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
    maxWidth: 'lg',
  },
};
