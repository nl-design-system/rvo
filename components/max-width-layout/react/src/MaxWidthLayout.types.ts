import { ReactNode } from 'react';

export interface IMaxWidthLayoutProps {
  size?: 'sm' | 'md' | 'lg';
  inlinePadding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
  children?: ReactNode | undefined;
}
