import { ReactNode } from 'react';

export interface ISidebarLayoutProps extends React.HTMLAttributes<HTMLElement> {
  maxWidthLayoutSize?: 'sm' | 'md' | 'lg';
  sidebarPosition?: 'left' | 'right';
  sidebarBackgroundColor?: boolean;
  sidebarContent?: string;
  className?: string;
  children?: ReactNode | undefined;
}

export interface ISidebarBarProps {
  backgroundColor?: boolean;
  children?: ReactNode | string;
}

export interface ISidebarLayoutContentProps {
  children?: ReactNode | string;
}
