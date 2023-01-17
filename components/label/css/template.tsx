/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ILabelProps {
  content: string;
  size: 'sm' | 'md';
  type: 'default' | 'optional' | 'required';
  classNames?: string[];
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
};

export const Label: React.FC<ILabelProps> = ({
  content = defaultArgs.content,
  size = defaultArgs.size,
  type = defaultArgs.type,
  classNames,
}: ILabelProps) => {
  return (
    <div
      className={clsx(
        'rvo-label',
        classNames,
        size === 'sm' && 'rvo-label--sm',
        type === 'optional' && 'rvo-label--optional',
        type === 'required' && 'rvo-label--required',
      )}
    >
      {content}
    </div>
  );
};

export default Label;