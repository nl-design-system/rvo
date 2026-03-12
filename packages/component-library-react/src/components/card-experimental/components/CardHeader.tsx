import clsx from 'clsx';
import React from 'react';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import Heading from '../../heading';
import Link, { ILinkProps } from '../../link';
export interface ICardHeaderProps extends Pick<ILinkProps, 'href' | 'LinkComponent'> {
  children?: React.ReactNode;
  className?: string;
  fullCardLink?: boolean;
  showLinkIndicator?: boolean;
  title?: string | React.ReactNode;
}

const CardHeader: React.FC<ICardHeaderProps> = ({
  className,
  children,
  href,
  LinkComponent,
  fullCardLink = false,
  title,
}) => {
  const parsedContent = parseContentMarkup(title ?? children);

  return (
    <Heading type="h3" className={clsx('rvo-card__title', className)}>
      {href ? (
        <Link
          className={clsx('rvo-card__link', { 'rvo-card__full-card-link': fullCardLink })}
          href={href}
          LinkComponent={LinkComponent}
        >
          {parsedContent}
        </Link>
      ) : (
        parsedContent
      )}
    </Heading>
  );
};

export default CardHeader;
