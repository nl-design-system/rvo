import { ILinkProps } from '@nl-rvo/react-link';
import { HtmlHTMLAttributes } from 'react';

export interface IBreadcrumbsItem {
  label: string;
  link?: string;
  onClick?: ILinkProps['onClick'];
}

export interface IBreadcrumbProps extends HtmlHTMLAttributes<HTMLOListElement> {
  items: IBreadcrumbsItem[];
  size?: 'sm' | 'md' | 'lg';
}
