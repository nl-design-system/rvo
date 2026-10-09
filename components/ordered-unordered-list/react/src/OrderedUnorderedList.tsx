/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-ordered-unordered-list';
import { parseChildren } from '@nl-rvo/component-library-react/src/utils/parseChildren';
import { IListProps } from './OrderedUnorderedList.types';

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
