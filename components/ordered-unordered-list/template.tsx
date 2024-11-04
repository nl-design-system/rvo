/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import { parseChildren } from '../utils/parseChildren';

export interface IListProps {
  type: 'unordered' | 'ordered';
  /** @uxpinignoreprop */
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  /** @uxpinpropname Unordered bullet type */
  bulletType: 'disc' | 'none' | 'icon';
  /** @uxpinpropname Unordered bullet icon */
  bulletIcon: 'option-1' | 'option-2' | 'option-3';
  noMargin: boolean;
  noPadding: boolean;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
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
  children: {
    table: {
      disable: true,
    },
  },
};

export const List: React.FC<IListProps> = ({
  type = defaultArgs.type,
  items = defaultArgs.items,
  bulletType = defaultArgs.bulletType,
  bulletIcon = defaultArgs.bulletIcon,
  noMargin = defaultArgs.noMargin,
  noPadding = defaultArgs.noPadding,
  children = defaultArgs.children,
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
      {children
        ? React.Children.map(parseChildren(children), (child, index) => <li key={index}>{child}</li>)
        : items.map((itemContent, index) => <li key={index}>{itemContent}</li>)}
    </ListTag>
  );
};

export default List;
