/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import '@nl-rvo/component-library-css/dist/components/item-list.css';
import { parseChildren } from '../../utils/parseChildren';

export interface IItemListProps {
  items: string[] | ReactNode[];
  children?: ReactNode | undefined;
}

export const ItemList: React.FC<IItemListProps & React.HTMLAttributes<HTMLUListElement>> = ({
  items,
  children,
  ...rootElementProps
}: IItemListProps) => (
  <ul className="rvo-item-list" {...rootElementProps}>
    {children
      ? React.Children.map(parseChildren(children), (child, index) => (
          <li key={index} className="rvo-item-list__item">
            {child}
          </li>
        ))
      : items.map((itemContent, index) => (
          <li key={index} className="rvo-item-list__item">
            {itemContent}
          </li>
        ))}
  </ul>
);

export default ItemList;
