import clsx from 'clsx';
import React from 'react';
import Heading from '../../../heading/src/template';
import Link, { ILinkProps } from '../../../link/src/template';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import { defaultArgs } from '../defaultArgs';

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
  fullCardLink = defaultArgs.fullCardLink,
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
