import { argTypes, MobileMenuBar } from './template';

export default {
  title: 'Componenten/Mobile Menubar',
  component: MobileMenuBar,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};

export const MobileSubmenu = {
  render: MobileMenuBar.bind({}),
  name: 'Mobile Submenu',

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
