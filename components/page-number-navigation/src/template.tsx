/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import Link from '../../link/src/template';
import './index.scss';

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
  const windowSize = 5;

  // helper
  const addRange = (from: number, to: number) => {
    for (let p = from; p <= to; p++) {
      pages.push(generatePageNumber(p, activePage, onPageChange));
    }
  };

  if (totalPages <= windowSize) {
    // 1..N
    addRange(1, totalPages);
    return pages;
  }

  // Begin: 1 2 3 4 5 ... last
  if (activePage <= 3) {
    addRange(1, 5);
    pages.push(generateEllipses('ellipses-end'));
    pages.push(generatePageNumber(totalPages, activePage, onPageChange));
    return pages;
  }

  // Eind: 1 ... last-4 last-3 last-2 last-1 last
  if (activePage >= totalPages - 2) {
    pages.push(generatePageNumber(1, activePage, onPageChange));
    pages.push(generateEllipses('ellipses-start'));
    addRange(totalPages - 4, totalPages);
    return pages;
  }

  // Midden: 1 ... p-1 p p+1 ... last
  pages.push(generatePageNumber(1, activePage, onPageChange));
  pages.push(generateEllipses('ellipses-start'));
  addRange(activePage - 1, activePage + 1);
  pages.push(generateEllipses('ellipses-end'));
  pages.push(generatePageNumber(totalPages, activePage, onPageChange));

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
}) => {
  const [internalActivePage, setInternalActivePage] = useState(activePage);

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

  const handlePageChange = useCallback(
    (newPage: number) => {
      setInternalActivePage(newPage);
      onPageChange?.(newPage);
    },
    [onPageChange],
  );

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
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(internalActivePage - 1);
            }}
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
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(internalActivePage + 1);
            }}
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
