import { ReactNode } from 'react';
import { IconType } from '@nl-rvo/react-icon';

export interface IToggleProps {
  content: string;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  showHover?: boolean;
  active?: boolean;
  focus?: boolean;
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  children?: ReactNode | undefined;
  onToggle?: (isActive: boolean) => void;
}
