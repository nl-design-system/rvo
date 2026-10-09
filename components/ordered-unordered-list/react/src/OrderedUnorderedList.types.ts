import { ReactNode } from 'react';

export interface IListProps {
  type: 'unordered' | 'ordered';
  items?: string[];
  bulletType?: 'disc' | 'none' | 'icon';
  bulletIcon?: 'option-1' | 'option-2' | 'option-3';
  noMargin?: boolean;
  noPadding?: boolean;
  children?: ReactNode | undefined;
}
