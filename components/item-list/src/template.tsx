/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import { parseChildren } from '../../utils/parseChildren';

export interface IItemListProps {
  /** @uxpinignoreprop */
  items: string[] | ReactNode[];
  /** @uxpinpropname Items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const ItemList: React.FC<IItemListProps & React.HTMLAttributes<HTMLUListElement>> = ({
  items = defaultArgs.items,
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
