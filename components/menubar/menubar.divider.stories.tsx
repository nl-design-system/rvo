import { defaultArgs } from './src/defaultArgs';
import { argTypes, MenuBar } from './src/template';
import { IconType } from '../icon/src/types';

export default {
  title: 'Componenten/Menubar/Divider',
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

const items = [
  { label: 'Home', icon: 'home' as IconType, link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie' as IconType, link: '#', useDivider: true },
  { label: 'Nieuwe aanvraag', icon: 'plus' as IconType, link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen' as IconType, link: '#', align: 'right' as const },
];

export const HorizontalDivider = {
  render: MenuBar.bind({}),
  name: 'Horizontal divider',

  args: {
    ...defaultArgs,
    items,
  },
};

export const VerticalDivider = {
  render: MenuBar.bind({}),
  name: 'Vertical divider',

  args: {
    ...defaultArgs,
    items,
    direction: 'vertical',
  },
};
