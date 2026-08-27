/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { HTMLAttributes } from 'react';
import Link from '../link';
import '@nl-rvo/component-library-css/dist/components/skip-link.css';

export interface ISkipLinkProps {
  textContent: string;
  anchorLink: string;
}

export const SkipLink: React.FC<ISkipLinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  textContent,
  anchorLink,
  ...rootElementProps
}) => {
  return (
    <Link className="rvo-skip-link" href={anchorLink} {...rootElementProps}>
      {textContent}
    </Link>
  );
};

export default SkipLink;
