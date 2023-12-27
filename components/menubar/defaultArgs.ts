import { IconType } from '@nl-rvo/assets/icons/types';
import { IMenuBarProps } from './template';

export const defaultItems = [
  { label: 'Home', icon: 'home' as IconType, link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie' as IconType, useDivider: true, link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus' as IconType, link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen' as IconType, link: '#', align: 'right' as const },
];

export const defaultArgs: IMenuBarProps = {
  size: 'md',
  direction: 'horizontal',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  menuMaxWidth: 'none',
  type: 'primary',
  useDeltaForActiveItem: false,
};
