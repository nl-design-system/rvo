import React from 'react';
import parseContentMarkup from '../../../utils/parseContentMarkup';

export interface ICardContentProps {
  contentMarkup?: string | React.ReactNode;
  children?: React.ReactNode;
}

const CardContent: React.FC<ICardContentProps> = ({ contentMarkup, children }) => {
  const content = contentMarkup ?? children;
  return <div className="rvo-card__content">{parseContentMarkup(content)}</div>;
};

export default CardContent;
