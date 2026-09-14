import { IconType } from '@nl-rvo/react-icon';
import { ReactNode } from 'react';

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: React.MouseEvent) => void);
  align?: 'left' | 'right';
  useDivider?: boolean;
  submenu?: IMenuBarItem[];
}

export interface IMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
  items: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  children?: ReactNode | undefined;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'lintblauw' | 'grijs-700' | 'zwart';
  useBackgroundColor?: boolean;
  grid?: boolean;
}
