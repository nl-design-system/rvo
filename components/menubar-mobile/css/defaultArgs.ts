import { defaultItems } from '../../menubar/css/defaultArgs';
import { IMobileMenuBarProps } from './template';

export const defaultArgs: IMobileMenuBarProps = {
  size: 'md',
  items: defaultItems,
  submenuItems: [],
  useIcons: true,
  iconPlacement: 'before',
  isOpen: true,
};
