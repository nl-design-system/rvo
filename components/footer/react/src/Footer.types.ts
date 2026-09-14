import { ReactNode } from 'react';

export interface FooterItemInterface {
  content: string | ReactNode;
  link?: string;
}

export interface FooterColumnInterface {
  orientation?: 'vertical' | 'horizontal';
  label?: string;
  items?: FooterItemInterface[];
}

export interface FooterInterface {
  primaryMenu?: FooterColumnInterface[];
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  children?: ReactNode;
  payOff?: string;
  secondaryMenu?: FooterItemInterface[];
}
