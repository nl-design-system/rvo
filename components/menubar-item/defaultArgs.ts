import { IMenuBarItemProps } from './template';
import { IconType } from '../icon/types';

export const defaultArgs: IMenuBarItemProps = {
  label: 'MenuBar item',
  icon: 'home' as IconType,
  link: '#',
  align: 'left',
  active: false,
  useDivider: false,
  size: 'md',
  useIcons: true,
  iconPlacement: 'before',
  type: 'primary',
  deltaForActiveItem: false,
  linkColor: 'logoblauw',
};
