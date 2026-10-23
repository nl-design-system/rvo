import React, { ReactNode } from 'react';
import { IconType } from '@nl-rvo/react-icon';

export interface IToggleProps extends React.HTMLAttributes<HTMLElement> {
  iconPlacement?: 'left' | 'right';
  icon?: IconType;
  active?: boolean;
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  children?: ReactNode | undefined;
  onToggle?: (isActive: boolean) => void;
}
