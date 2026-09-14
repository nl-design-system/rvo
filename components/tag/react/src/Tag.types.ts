import { ReactNode } from 'react';
import { IconType } from '@nl-rvo/react-icon';

export interface ITagProps {
  className?: string;
  children: ReactNode;
  icon?: IconType;
  iconPlacement?: 'before' | 'after';
  isPill?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
  type?: 'info' | 'success' | 'error' | 'warning';
  url?: string;
  urlTarget?: '_blank' | '_self' | '_parent' | '_top';
  [key: string]: any; // Allow additional props
}
