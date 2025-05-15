import clsx from 'clsx';
import React from 'react';
import Heading from '../../../heading/src/template';
import parseContentMarkup from '../../../utils/parseContentMarkup';

export interface ICardTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<ICardTitleProps> = ({ className, children }) => {
  const parsedContent = parseContentMarkup(children);

  return (
    <Heading type="h3" className={clsx('rvo-card__title', className)}>
      {parsedContent}
    </Heading>
  );
};

export default CardTitle;
