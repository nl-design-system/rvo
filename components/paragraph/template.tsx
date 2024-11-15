/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface IParagraphProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'content'> {
  /** @uxpinignoreprop */
  content?: string | React.ReactNode;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  color?: 'logoblauw' | 'wit' | 'zwart' | 'grijs-500';
  size?: 'sm' | 'md' | 'lg';
  noSpacing?: boolean;
}

export const argTypes = {
  content: {
    control: 'text',
  },
  color: {
    control: { type: 'select' },
    options: ['logoblauw', 'wit', 'zwart', 'grijs-500'],
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
  noSpacing: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Paragraph: React.FC<IParagraphProps> = ({
  content = defaultArgs.content,
  color = defaultArgs.color,
  size = defaultArgs.size,
  noSpacing = defaultArgs.noSpacing,
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
        color === 'logoblauw' && 'rvo-paragraph--logoblauw',
        color === 'wit' && 'rvo-paragraph--wit',
        color === 'zwart' && 'rvo-paragraph--zwart',
        color === 'grijs-500' && 'rvo-paragraph--grijs-500',
        size === 'sm' && 'rvo-paragraph--sm',
        size === 'md' && 'rvo-paragraph--md',
        size === 'lg' && 'rvo-paragraph--lg',
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
