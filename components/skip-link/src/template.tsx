/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';
import Link from '../../link/src/template';
import './index.scss';

export interface ISkipLinkProps {
  textContent?: string;
  anchorLink?: string;
}

export const argTypes = {
  textContent: {
    control: 'text',
  },
  anchorLink: {
    control: 'text',
  },
};

export const SkipLink: React.FC<ISkipLinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  textContent = defaultArgs.textContent,
  anchorLink = defaultArgs.anchorLink,
  ...rootElementProps
}) => {
  return (
    <Link className="rvo-skip-link" href={anchorLink} {...rootElementProps}>
      {textContent}
    </Link>
  );
};

export default SkipLink;
