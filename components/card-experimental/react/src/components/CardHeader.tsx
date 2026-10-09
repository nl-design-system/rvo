import clsx from 'clsx';
import React from 'react';
import parseContentMarkup from '../../../../utils/parseContentMarkup';
import { Heading } from '@nl-rvo/react-heading';
import { Link } from '@nl-rvo/react-link';
import { IExperimentalCardHeaderProps } from '../CardExperimental.types';

const CardHeader: React.FC<IExperimentalCardHeaderProps> = ({
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
