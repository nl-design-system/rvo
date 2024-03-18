import { IMobileMenuBarProps } from './template';
import { IconType } from '../icon/types';

export const defaultArgs: IMobileMenuBarProps = {
  size: 'md',
  items: [
    { label: 'Home', icon: 'home' as IconType, link: '#' },
    { label: 'Mijn aanvragen', icon: 'publicatie' as IconType, link: '#' },
    { label: 'Nieuwe aanvraag', icon: 'plus' as IconType, link: '#' },
    { label: 'Uitloggen', icon: 'versleutelen' as IconType, link: '#', useDivider: true, align: 'right' as const },
  ],
  submenuItems: [],
  useIcons: true,
  iconPlacement: 'before',
  isOpen: false,
  horizontalRule: true,
};
