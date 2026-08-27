/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '@nl-rvo/component-library-css/dist/components/paragraph.css';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IParagraphProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'content'> {
  content?: string | React.ReactNode;
  children?: ReactNode | undefined;
  color?: 'lintblauw' | 'wit' | 'zwart' | 'grijs-500' | 'grijs-900';
  size?: 'sm' | 'md' | 'lg';
  noSpacing?: boolean;
}

export const Paragraph: React.FC<IParagraphProps> = ({
  content,
  color = 'grijs-900',
  size = 'md',
  noSpacing,
  children,
  className,
  ...props
}: IParagraphProps) => {
  // Parse content markup (either a string, HTML string, React node or children)
  const contentMarkup: string | ReactNode = parseContentMarkup(children || content);

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
      {contentMarkup}
    </p>
  );
};

export default Paragraph;
