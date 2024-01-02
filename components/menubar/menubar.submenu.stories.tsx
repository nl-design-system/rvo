import { argTypes, MenuBarWithSubmenu } from './template';

export default {
  title: 'Componenten/Menubar/Submenu',
  component: MenuBarWithSubmenu,

  argTypes: {
    primary: argTypes,
    sub: argTypes,
  },

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'menubar',
    },
  },
};

export const Submenu = {
  render: MenuBarWithSubmenu.bind({}),
  name: 'Submenu',

  args: {
    primary: {
      size: 'md',
      direction: 'horizontal',
      items: [
        {
          label: 'Home',
          link: '#',
        },
        {
          label: 'Expanded menu item',
          link: '#',
          active: true,
        },
        {
          label: 'Uitloggen',
          icon: 'versleutelen',
          link: '#',
          align: 'right',
        },
      ],

      useIcons: true,
      iconPlacement: 'before',
      maxWidth: 'none',
      type: 'primary',
      deltaForActiveItem: true,
    },

    sub: {
      size: 'md',
      direction: 'horizontal',
      items: [
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
          align: 'right',
        },
      ],

      useIcons: true,
      iconPlacement: 'before',
      maxWidth: 'none',
      type: 'sub',
    },
  },
};

export const SubmenuGrid = {
  render: MenuBarWithSubmenu.bind({}),
  name: 'Submenu grid',

  args: {
    primary: {
      size: 'md',

      items: [
        {
          label: 'Home',
          link: '#',
        },
        {
          label: 'Expanded menu item',
          link: '#',
          active: true,
        },
        {
          label: 'Uitloggen',
          icon: 'versleutelen',
          link: '#',
          align: 'right',
        },
      ],

      useIcons: true,
      iconPlacement: 'before',
      maxWidth: 'none',
      type: 'primary',
      deltaForActiveItem: true,
    },

    sub: {
      size: 'md',

      items: [
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
        {
          label: 'Submenu item',
          link: '#',
          icon: 'plus',
        },
      ],

      useIcons: true,
      iconPlacement: 'before',
      maxWidth: 'none',
      type: 'sub-grid',
    },
  },
};
