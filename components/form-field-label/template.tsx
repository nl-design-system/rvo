/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface ILabelProps {
  /** @uxpinignoreprop */
  id?: string;
  /** @uxpinignoreprop */
  htmlFor?: string;
  /** @uxpinignoreprop */
  content?: string;
  size?: 'sm' | 'md';
  type?: 'default' | 'optional' | 'required';
  /** @uxpinignoreprop */
  className?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  content: {
    control: 'text',
  },
  size: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  type: {
    options: ['default', 'optional', 'required'],
    control: { type: 'select' },
  },
  id: {
    table: {
      disable: true,
    },
  },
  htmlFor: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Label: React.FC<ILabelProps> = ({
  content = defaultArgs.content,
  size = defaultArgs.size,
  type = defaultArgs.type,
  className,
  children,
  ...otherProps
}: ILabelProps) => {
  return (
    <label
      className={clsx(
        'rvo-label',
        className,
        size === 'sm' && 'rvo-label--sm',
        type === 'optional' && 'rvo-label--optional',
        type === 'required' && 'rvo-label--required',
      )}
      {...otherProps}
    >
      {parseContentMarkup(children || content)}
    </label>
  );
};

export default Label;
