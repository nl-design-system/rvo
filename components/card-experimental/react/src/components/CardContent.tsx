import React from 'react';
import parseContentMarkup from '../../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { ICardContentProps } from '../CardExperimental.types';

const CardContent: React.FC<ICardContentProps> = ({ contentMarkup, children }) => {
  const content = contentMarkup ?? children;
  return <div className="rvo-card__content">{parseContentMarkup(content)}</div>;
};

export default CardContent;
