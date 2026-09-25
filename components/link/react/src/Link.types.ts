import { IconType } from '@nl-rvo/components/icon/react/src';
import { HTMLAttributes } from 'react';

export type LinkStyleProps = {
  className: string;
} & Omit<React.HTMLAttributes<HTMLAnchorElement>, 'className'>;

export type LinkCustomLinkComponentProps = {
  children: React.ReactNode;
  href: string;
  linkProps: LinkStyleProps;
};

export type LinkCustomLinkComponent = React.ComponentType<LinkCustomLinkComponentProps>;

export interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  callToAction?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700' | string;
  focus?: boolean;
  fullContainerLink?: boolean;
  hover?: boolean;
  href?: string;
  icon?: IconType;
  iconAriaLabel?: string;
  iconColor?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700';
  iconSize?: 'sm' | 'md';
  LinkComponent?: LinkCustomLinkComponent;
  noUnderline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  role?: string;
  iconPlacement?: 'left' | 'right';
  target?: string;
  weight?: 'normal' | 'bold';
}
