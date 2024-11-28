import { argTypes, Dialog } from './src/template';

export default {
  title: 'Componenten/Dialog',
  component: Dialog,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};

export const DialogOther = {
  render: Dialog.bind({}),
  name: 'Dialog other option',

  args: {
    size: 'md',

    items: [
      {
        label: 'Home',
        icon: 'home',
        link: '#',
      },
      {
        label: 'Expanded menu item',
        icon: 'publicatie',
        link: '#',
        active: true,
      },
      {
        label: 'Uitloggen',
        icon: 'versleutelen',
        link: '#',
      },
    ],

    submenuItems: [
      {
        label: 'Submenu item',
        link: '#',
      },
      {
        label: 'Submenu item',
        link: '#',
      },
      {
        label: 'Submenu item',
        link: '#',
      },
    ],

    useIcons: true,
    iconPlacement: 'before',
    isOpen: true,
  },
};
