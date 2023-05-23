import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar } from './template';

export default {
  title: 'Componenten/Menubar/Active item',
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

export const MenuActiveItem = {
  render: MenuBar.bind({}),
  name: 'Active item',

  args: {
    ...defaultArgs,

    items: [
      {
        label: 'Home',
        icon: 'home',
        link: '#',
      },
      {
        label: 'Mijn aanvragen',
        icon: 'publicatie',
        link: '#',
        active: true,
      },
      {
        label: 'Nieuwe aanvraag',
        icon: 'plus',
        link: '#',
      },
      {
        label: 'Uitloggen',
        icon: 'versleutelen',
        link: '#',
        align: 'right',
      },
    ],
  },
};
