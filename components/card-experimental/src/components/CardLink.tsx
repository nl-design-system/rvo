import clsx from 'clsx';
import React from 'react';
import Link, { ILinkProps } from '../../../link/src/template';
import { defaultArgs } from '../defaultArgs';

export interface ICardLinkProps extends Pick<ILinkProps, 'href' | 'LinkComponent'> {
  children?: React.ReactNode;
  fullCardLink?: boolean;
  showLinkIndicator?: boolean;
}

const CardLink: React.FC<ICardLinkProps> = ({
  href,
  children,
  fullCardLink = defaultArgs.fullCardLink,
  LinkComponent,
}) => {
  return (
    <Link
      className={clsx('rvo-card__link', { 'rvo-card__full-card-link': fullCardLink })}
      href={href}
      LinkComponent={LinkComponent}
    >
      {children}
    </Link>
  );
};

export default CardLink;
