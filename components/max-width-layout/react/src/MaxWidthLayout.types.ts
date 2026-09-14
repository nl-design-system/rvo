import { ReactNode } from 'react';

export interface IMaxWidthLayoutProps {
  size?: 'sm' | 'md' | 'lg';
  content?: string;
  inlinePadding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
  children?: ReactNode | undefined;
}
