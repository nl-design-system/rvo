/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Link } from '@nl-rvo/react-link';
import '@nl-rvo/css-skip-link';
import { ISkipLinkProps } from './SkipLink.types';

export const SkipLink: React.FC<ISkipLinkProps> = ({ textContent, anchorLink, ...rootElementProps }) => {
  return (
    <Link className="rvo-skip-link" href={anchorLink} {...rootElementProps}>
      {textContent}
    </Link>
  );
};

export default SkipLink;
