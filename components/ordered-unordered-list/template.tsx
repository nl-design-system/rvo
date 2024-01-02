/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IListProps {
  type: 'unordered' | 'ordered';
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  bulletType: 'disc' | 'none' | 'icon';
  bulletIcon: 'option-1' | 'option-2' | 'option-3';
  noMargin: boolean;
  noPadding: boolean;
}

export const argTypes = {
  type: {
    options: ['unordered', 'ordered'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  bulletType: {
    if: { arg: 'type', eq: 'unordered' },
    type: {
      options: ['disc', 'none', 'icon'],
      control: { type: 'radio' },
    },
  },
  bulletIcon: {
    if: { arg: 'bulletType', eq: 'icon' },
    type: {
      options: ['option-1', 'option-2', 'option-3'],
      control: { type: 'radio' },
    },
  },
  noMargin: {
    control: 'boolean',
  },
  noPadding: {
    control: 'boolean',
  },
};

export const List: React.FC<IListProps> = ({
  type = defaultArgs.type,
  items = defaultArgs.items,
  bulletType = defaultArgs.bulletType,
  bulletIcon = defaultArgs.bulletIcon,
  noMargin = defaultArgs.noMargin,
  noPadding = defaultArgs.noPadding,
}: IListProps) => {
  const ListTag = type === 'unordered' ? 'ul' : 'ol';
  const listClassName = clsx(
    type === 'unordered' && 'rvo-ul',
    type === 'unordered' && noMargin && 'rvo-ul--no-margin',
    type === 'unordered' && noPadding && 'rvo-ul--no-padding',
    type === 'unordered' && bulletType === 'none' && 'rvo-ul--none',
    type === 'unordered' && bulletType === 'icon' && `rvo-ul--icon rvo-ul--icon-${bulletIcon}`,
    type === 'ordered' && 'rvo-ol',
    type === 'ordered' && noPadding && 'rvo-ol--no-padding',
    type === 'ordered' && noMargin && 'rvo-ol--no-margin',
  );

  return (
    <ListTag className={listClassName}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};

export default List;
