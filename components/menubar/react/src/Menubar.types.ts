import { IconType } from '@nl-rvo/react-icon';
import { ReactNode } from 'react';

export interface IMenuBarSubItem extends Omit<IMenuBarItem, 'align' | 'submenu'> {}

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: React.MouseEvent) => void);
  align?: 'left' | 'right';
  submenu?: IMenuBarSubItem[];
}

export interface IMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  items: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'sm' | 'md' | 'lg';
  children?: ReactNode | undefined;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'lintblauw' | 'grijs-700' | 'zwart';
}

export interface SubMenuProps {
  submenu: IMenuBarSubItem[];
  useIcons: boolean;
  size: 'sm' | 'md' | 'lg';
  iconPlacement: 'before' | 'after';
  linkColor?: string;
  isSubmenuVisible?: boolean;
  className?: string | string[];
  maxWidth?: 'sm' | 'md' | 'lg';
}
