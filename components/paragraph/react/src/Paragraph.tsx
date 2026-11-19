/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-paragraph/paragraph.css';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import { IParagraphProps } from './Paragraph.types';

export const Paragraph: React.FC<IParagraphProps> = ({
  color = 'grijs-900',
  size = 'md',
  noSpacing,
  children,
  className,
  ...props
}: IParagraphProps) => {
  return (
    <p
      className={clsx(
        'rvo-paragraph',
        color && 'rvo-paragraph--' + color,
        size && 'rvo-paragraph--' + size,
        noSpacing && 'rvo-paragraph--no-spacing',
        className,
      )}
      {...props}
    >
      {parseContentMarkup(children)}
    </p>
  );
};

export default Paragraph;
