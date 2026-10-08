import { HtmlHTMLAttributes } from 'react';

export interface IBreadcrumbsItem {
  label: string;
  link?: string;
}

export interface IBreadcrumbProps extends HtmlHTMLAttributes<HTMLOListElement> {
  items: IBreadcrumbsItem[];
  size?: 'sm' | 'md' | 'lg';
}
