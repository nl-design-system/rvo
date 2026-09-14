import { IMenuBarItem } from '@nl-rvo/menubar';

export interface IMobileMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  items?: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  children?: React.ReactNode;
  isOpen?: boolean;
  horizontalRule?: boolean;
}
