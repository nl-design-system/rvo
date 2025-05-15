import clsx from 'clsx';
import React from 'react';
import Link, { ILinkProps } from '../../../link/src/template';
import { defaultArgs } from '../defaultArgs';

export interface ICardLinkProps {
  children?: React.ReactNode;
  fullCardLink?: boolean;
  showLinkIndicator?: boolean;
}

const CardLink: React.FC<ICardLinkProps & Pick<ILinkProps, 'href' | 'asChild'>> = ({
  href,
  asChild,
  children,
  fullCardLink = defaultArgs.fullCardLink,
}) => {
  return (
    <Link
      asChild={asChild}
      className={clsx('rvo-card__link', { 'rvo-card__full-card-link': fullCardLink })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CardLink;
