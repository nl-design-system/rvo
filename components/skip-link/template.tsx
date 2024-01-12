/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { defaultArgs } from './defaultArgs';
import Link from '../link/template';
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

export const SkipLink: React.FC<ISkipLinkProps> = ({
  textContent = defaultArgs.textContent,
  anchorLink = defaultArgs.anchorLink,
}) => {
  return (
    <Link className="rvo-skip-link" href={anchorLink}>
      {textContent}
    </Link>
  );
};

export default SkipLink;
