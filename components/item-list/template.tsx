/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IItemListProps {
  // eslint-disable-next-line no-undef
  items: string[] | JSX.Element[];
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const ItemList: React.FC<IItemListProps> = ({ items = defaultArgs.items }: IItemListProps) => (
  <div className="rvo-item-list">
    {items.map((itemContent, index) => (
      <div key={index} className="rvo-item-list__item">
        {itemContent}
      </div>
    ))}
  </div>
);

export default ItemList;
