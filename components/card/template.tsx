/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ICardProps extends PropsWithChildren {
  title?: string;
  image?: string;
  content?: string;
  showArrow?: boolean;
  href?: string;
}

export const argTypes = {
  title: {
    type: {
      name: 'text',
    },
  },
  image: {
    type: {
      name: 'text',
    },
  },
  content: {
    type: {
      name: 'text',
    },
  },
  showArrow: {
    type: {
      name: 'boolean',
    },
  },
  href: {
    control: 'text',
  },
};

export const Card: React.FC<ICardProps> = ({
  title = defaultArgs.title,
  href = defaultArgs.href,
  content = defaultArgs.content,
  showArrow = defaultArgs.showArrow,
  children,
}: ICardProps) => {
  console.log(content);
  return (
    <div className="rvo-card rvo-card--w-link rvo-card--w-link-indicator rvo-card--outline">
      <div className="rvo-card-content">
        {children || (
          <>
            <h3 className="utrecht-heading-3">
              {href ? (
                <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                  {title}
                </a>
              ) : (
                <>{title}</>
              )}
            </h3>
            <div className="rvo-layout-column rvo-layout-gap--xs" dangerouslySetInnerHTML={{ __html: content }}>
              {/* <p
                className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle"

              ></p>
              {(statusType || statusText) && (
                <div className="rvo-card-status">
                  <StatusIcon type={statusType} size="sm" />
                  <div className="rvo-card-status-text">{statusText}</div>
                </div>
              )} */}
            </div>
          </>
        )}
      </div>
      {showArrow && (
        <div className="rvo-card-link-indicator">
          <span
            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw"
            role="img"
            aria-label="Delta naar rechts"
          ></span>
        </div>
      )}
    </div>
  );
};

export default Card;
