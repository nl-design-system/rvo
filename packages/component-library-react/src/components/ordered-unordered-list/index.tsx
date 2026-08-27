/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '@nl-rvo/component-library-css/dist/components/ordered-unordered-list.css';
import { parseChildren } from '../../utils/parseChildren';

export interface IListProps {
  type: 'unordered' | 'ordered';
  items?: string[];
  bulletType?: 'disc' | 'none' | 'icon';
  bulletIcon?: 'option-1' | 'option-2' | 'option-3';
  noMargin?: boolean;
  noPadding?: boolean;
  children?: ReactNode | undefined;
}

export const List: React.FC<IListProps & React.HTMLAttributes<HTMLUListElement | HTMLOListElement>> = ({
  type,
  items,
  bulletType = 'icon',
  bulletIcon = 'option-1',
  noMargin = true,
  noPadding = true,
  children,
  ...rootElementProps
}) => {
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
    <ListTag className={listClassName} {...rootElementProps}>
      {children
        ? React.Children.map(parseChildren(children), (child, index) => <li key={index}>{child}</li>)
        : items?.map((itemContent, index) => <li key={index}>{itemContent}</li>)}
    </ListTag>
  );
};

export default List;
