import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar } from './template';

export default {
  title: 'Componenten/Menubar/Icons',
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

export const WithIconsLeft = {
  render: MenuBar.bind({}),
  name: 'With icons left',

  args: {
    ...defaultArgs,
    iconPlacement: 'before',
  },
};

export const WithIconsRight = {
  render: MenuBar.bind({}),
  name: 'With icons right',

  args: {
    ...defaultArgs,
    iconPlacement: 'after',
  },
};
