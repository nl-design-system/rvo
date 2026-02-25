/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useEffect, useMemo, useState } from 'react';
import Link from '../link';
import '@nl-rvo/css-page-number-navigation/dist/index.css';

export interface IPageNumberNavigation extends Omit<HTMLAttributes<HTMLElement>, 'onPageChange'> {
  activePage: number;
  className?: string;
  numberOfPages: number;
  onPageChange?: (currentPage: number) => void;
}

const generatePageNumbers = (
  totalPages: number,
  activePage: number,
  onPageChange?: IPageNumberNavigation['onPageChange'],
): ReactNode[] => {
  const pages: ReactNode[] = [];

  // Always add the first page
  pages.push(generatePageNumber(1, activePage, onPageChange));

  // Add ellipses if the active page is more than 4
  if (activePage > 4) {
    pages.push(generateEllipses('ellipses-1'));
  }
  if (activePage === 4) {
    pages.push(generatePageNumber(2, activePage, onPageChange));
  }

  // Add the page before the active page if it's more than 2
  if (activePage > 2) {
    pages.push(generatePageNumber(activePage - 1, activePage, onPageChange));
  }

  // Add the active page if it's not the first or last page
  if (activePage > 1 && activePage < totalPages) {
    pages.push(generatePageNumber(activePage, activePage, onPageChange));
  }

  // Add the page after the active page if it's less than total pages minus 1 and not the last page
  if (activePage < totalPages - 1 && activePage !== totalPages - 2) {
    pages.push(generatePageNumber(activePage + 1, activePage, onPageChange));
  }

  // Add ellipses if the active page is less than the total pages minus 3
  if (activePage < totalPages - 3) {
    pages.push(generateEllipses('ellipses-2'));
  }

  // Add the second last page if the active page is less than the total pages minus 1 and greater than or equal to total pages minus 3
  if (activePage < totalPages - 1 && activePage >= totalPages - 3) {
    pages.push(generatePageNumber(totalPages - 1, activePage, onPageChange));
  }

  // Always add the last page
  if (totalPages !== 1) {
    pages.push(generatePageNumber(totalPages, activePage, onPageChange));
  }

  return pages;
};

const generatePageNumber = (pageNumber: number, active?: number, onPageChange?: (page: number) => void) => (
  <li
    key={pageNumber}
    className={clsx('rvo-pagination__item', active === pageNumber && 'rvo-pagination__item--active')}
  >
    {active === pageNumber ? (
      <span aria-current={active === pageNumber ? 'page' : undefined}>{pageNumber}</span>
    ) : (
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onPageChange?.(pageNumber);
        }}
        aria-current={active === pageNumber ? 'page' : undefined}
      >
        {pageNumber}
      </Link>
    )}
  </li>
);

const generateEllipses = (key: string) => {
  return (
    <li key={key} className="rvo-pagination__item rvo-pagination__item--ellipses">
      ...
    </li>
  );
};

export const PageNumberNavigation: React.FC<IPageNumberNavigation> = ({
  activePage,
  className,
  numberOfPages,
  onPageChange,
  ...htmlAttributes
}: IPageNumberNavigation) => {
  // Define internal active page state based on the activePage prop
  const [internalActivePage, setInternalActivePage] = useState(activePage);

  // Update the internal active page state when the activePage prop changes
  useEffect(() => {
    setInternalActivePage(activePage);
  }, [activePage]);

  if (
    !numberOfPages ||
    !internalActivePage ||
    numberOfPages < 1 ||
    internalActivePage < 1 ||
    internalActivePage > numberOfPages
  ) {
    return null;
  }

  // Define a function to handle page changes
  const handlePageChange = (newPage: number) => {
    setInternalActivePage(newPage);
    onPageChange?.(newPage);
  };

  const pageNumbers = useMemo(
    () => generatePageNumbers(numberOfPages, internalActivePage, handlePageChange),
    [numberOfPages, internalActivePage, handlePageChange],
  );

  return (
    <nav className={clsx('rvo-pagination', className)} {...htmlAttributes}>
      {numberOfPages > 1 && internalActivePage > 1 && (
        <div className="rvo-pagination__prev">
          <Link
            aria-label="Delta naar links"
            href="#"
            icon="delta-naar-links"
            onClick={() => handlePageChange(internalActivePage - 1)}
            showIcon="before"
          >
            Vorige
          </Link>
        </div>
      )}
      <ul className="rvo-pagination__list">{pageNumbers}</ul>
      {numberOfPages > 1 && internalActivePage < numberOfPages && (
        <div className="rvo-pagination__next">
          <Link
            aria-label="Delta naar rechts"
            href="#"
            icon="delta-naar-rechts"
            onClick={() => handlePageChange(internalActivePage + 1)}
            showIcon="after"
          >
            Volgende
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PageNumberNavigation;
