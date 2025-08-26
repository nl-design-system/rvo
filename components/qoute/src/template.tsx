import React from 'react';
import { isOfType } from '../../utils/typeUtils';
import './index.scss';

type QouteUser = {
  name: string;
  role: string;
  image?: Pick<HTMLImageElement, 'src' | 'alt'> | React.JSX.Element;
};

export interface QouteProps {
  qoute: string;
  user: QouteUser;
}

export const Qoute: React.FC<QouteProps> = ({ qoute, user }) => {
  const renderImage = () => {
    if (!user) return null;

    if (React.isValidElement(user.image)) {
      return user.image;
    }

    if (isOfType(user.image, 'src') && user.image.src) return <img src={user.image.src} alt={user.image.alt} />;

    return null;
  };

  return (
    <div className="rvo-qoute">
      <span className="rvo-qoute__qoute">"{qoute}"</span>
      <div className="rvo-qoute__user">
        {user.image && <div className="rvo-qoute__image">{renderImage()}</div>}
        <div className="rvo-qoute__credentials">
          <span className="rvo-text rvo-text--bold">{user.name}</span>
          <span className="rvo-text rvo-text--sm">{user.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Qoute;
