import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar } from './template';
import { IconType } from '../icon/types';

export default {
  title: 'Componenten/Menubar/Divider',
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
