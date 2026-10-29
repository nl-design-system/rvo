import { HTMLAttributes } from 'react';

export interface IPageNumberNavigation extends Omit<HTMLAttributes<HTMLElement>, 'onPageChange'> {
  activePage: number;
  className?: string;
  nextLabel?: string;
  numberOfPages: number;
  onPageChange?: (currentPage: number) => void;
  previousLabel?: string;
}
