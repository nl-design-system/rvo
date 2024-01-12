/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode, useMemo } from 'react';
import { defaultArgs } from './defaultArgs';
import Link from '../link/template';
import './index.scss';

export interface IPaginationProps {
  numberOfPages: number;
  activePage: number;
}

export const argTypes = {
  numberOfPages: {
    control: 'number',
  },
  activePage: {
    control: 'number',
  },
};

const generatePageNumbers = (totalPages: number, activePage: number): ReactNode[] => {
  const pages: ReactNode[] = [];

  // Always add the first page
  pages.push(generatePageNumber(1, activePage));

  // Add ellipses if the active page is more than 4
  if (activePage > 4) {
    pages.push(generateEllipses('ellipses-1'));
  }
  if (activePage === 4) {
    pages.push(generatePageNumber(2, activePage));
  }

  // Add the page before the active page if it's more than 2
  if (activePage > 2) {
    pages.push(generatePageNumber(activePage - 1, activePage));
  }

  // Add the active page if it's not the first or last page
  if (activePage > 1 && activePage < totalPages) {
    pages.push(generatePageNumber(activePage, activePage));
  }

  // Add the page after the active page if it's less than total pages minus 1 and not the last page
  if (activePage < totalPages - 1 && activePage !== totalPages - 2) {
    pages.push(generatePageNumber(activePage + 1, activePage));
  }

  // Add ellipses if the active page is less than the total pages minus 3
  if (activePage < totalPages - 3) {
    pages.push(generateEllipses('ellipses-2'));
  }

  // Add the second last page if the active page is less than the total pages minus 1 and greater than or equal to total pages minus 3
  if (activePage < totalPages - 1 && activePage >= totalPages - 3) {
    pages.push(generatePageNumber(totalPages - 1, activePage));
  }

  // Always add the last page
  if (totalPages !== 1) {
    pages.push(generatePageNumber(totalPages, activePage));
  }

  return pages;
};

const generatePageNumber = (pageNumber: number, active?: number) => (
  <li
    key={pageNumber}
    className={clsx('rvo-pagination__item', active === pageNumber && 'rvo-pagination__item--active')}
  >
    <Link href="#">{pageNumber}</Link>
  </li>
);

const generateEllipses = (key: string) => {
  return (
    <li key={key} className="rvo-pagination__item rvo-pagination__item--ellipses">
      ...
    </li>
  );
};

export const Pagination: React.FC<IPaginationProps> = ({
  numberOfPages = defaultArgs.numberOfPages,
  activePage = defaultArgs.activePage,
}: IPaginationProps) => {
  if (!numberOfPages || !activePage || numberOfPages < 1 || activePage < 1 || activePage > numberOfPages) {
    return null;
  }

  const pageNumbers = useMemo(() => generatePageNumbers(numberOfPages, activePage), [numberOfPages, activePage]);

  return (
    <nav className="rvo-pagination">
      {numberOfPages > 1 && activePage > 1 && (
        <div className="rvo-pagination__prev">
          <Link href="#" showIcon="before" icon="delta-naar-links" aria-label="Delta naar links">
            Vorige
          </Link>
        </div>
      )}
      <ul className="rvo-pagination__list">{pageNumbers}</ul>
      {numberOfPages > 1 && activePage < numberOfPages && (
        <div className="rvo-pagination__next">
          <Link href="#" showIcon="after" icon="delta-naar-rechts" aria-label="Delta naar rechts">
            Volgende
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Pagination;
