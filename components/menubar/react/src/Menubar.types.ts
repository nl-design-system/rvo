import { IconType } from '@nl-rvo/react-icon';
import React, { ReactNode } from 'react';
import { LinkCustomLinkComponent } from '@nl-rvo/react-link';

export interface IMenuBarSubItem extends Omit<IMenuBarItem, 'align' | 'submenu'> {}

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: React.MouseEvent) => void);
  align?: 'left' | 'right';
  submenu?: IMenuBarSubItem[];
  useIcons?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconPlacement?: 'left' | 'right';
  linkColor?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
  isSubmenuVisible?: boolean;
  grid?: boolean;
  handleItemClick?: (event: React.MouseEvent) => void;
  LinkComponent?: LinkCustomLinkComponent;
}

export interface IMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  items: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'left' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg';
  children?: ReactNode | undefined;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'lintblauw' | 'grijs-700' | 'zwart';
}

export interface SubMenuProps {
  submenu: IMenuBarSubItem[];
  useIcons: boolean;
  size: 'sm' | 'md' | 'lg';
  iconPlacement: 'left' | 'right';
  linkColor?: string;
  isSubmenuVisible?: boolean;
  className?: string | string[];
  maxWidth?: 'sm' | 'md' | 'lg';
  LinkComponent?: LinkCustomLinkComponent;
}
