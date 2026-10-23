import React from 'react';
import { IconType } from '@nl-rvo/react-icon';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'subtle' | 'warning-subtle' | 'warning';
  size?: 'xs' | 'sm' | 'md';
  iconPlacement?: 'left' | 'right';
  icon?: IconType;
  iconAriaLabel?: string;
  busy?: boolean;
  fullWidth?: boolean;
}
