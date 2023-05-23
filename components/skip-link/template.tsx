/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Button } from '../button/template';
import './index.scss';
import { defaultArgs } from './defaultArgs';

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
    <a className="rvo-skip-link" href={anchorLink}>
      <Button label={textContent} />
    </a>
  );
};

export default SkipLink;
