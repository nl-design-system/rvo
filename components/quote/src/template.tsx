import React, { HTMLAttributes } from 'react';
import { isOfType } from '../../utils/typeUtils';
import './index.scss';

type QuoteUser = {
  name: string;
  role: string;
  image?: Pick<HTMLImageElement, 'src' | 'alt'> | React.JSX.Element;
};

export interface IQuoteProps {
  quote: string;
  user: QuoteUser;
}

export const Quote: React.FC<IQuoteProps & HTMLAttributes<HTMLDivElement>> = ({ quote, user, ...rootElementProps }) => {
  const renderImage = () => {
    if (!user) return null;

    if (React.isValidElement(user.image)) {
      return user.image;
    }

    if (isOfType(user.image, 'src') && user.image.src) return <img src={user.image.src} alt={user.image.alt} />;

    return null;
  };

  return (
    <div className="rvo-quote" {...rootElementProps}>
      <span className="rvo-quote__quote">"{quote}"</span>
      <div className="rvo-quote__user">
        {user.image && <div className="rvo-quote__image">{renderImage()}</div>}
        <div className="rvo-quote__credentials">
          <span className="rvo-text rvo-text--bold">{user.name}</span>
          <span className="rvo-text rvo-text--sm">{user.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
