import { argTypes } from './src/argTypes';
import MobileMenuBar from './src/template';

export default {
  title: 'Componenten/Mobile Menubar/nav',
  component: MobileMenuBar,
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
        submenu: [
          {
            label: 'Klimaat & energie',
            link: '#',
            icon: 'milieu',
          },
          {
            label: 'Landbouw',
            link: '#',
            icon: 'koe-met-tekst-co2',
          },
        ],
      },
      {
        label: 'Uitloggen',
        icon: 'versleutelen',
        link: '#',
        useDivider: true,
      },
    ],

    useIcons: true,
    iconPlacement: 'before',
    horizontalRule: true,
    isOpen: true,
  },
};
