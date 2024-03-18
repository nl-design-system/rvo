import { IMenuBarProps } from './template';
import { IconType } from '../icon/types';

export const defaultItems = [
  { label: 'Home', icon: 'home' as IconType, link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie' as IconType, link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus' as IconType, link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen' as IconType, link: '#', align: 'right' as const },
];

export const defaultArgs: IMenuBarProps = {
  size: 'md',
  direction: 'horizontal',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  maxWidth: 'none',
  type: 'primary',
  deltaForActiveItem: false,
  horizontalRule: true,
  linkColor: 'logoblauw',
  useBackgroundColor: false,
};
