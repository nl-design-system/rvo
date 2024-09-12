/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import '../ordered-unordered-list/index.scss';

export interface ITabsContentItemProps {
  index: number;
}

export const argTypes = {
  index: {
    control: 'number',
  },
};

export const TabsContentItem: React.FC<ITabsContentItemProps> = ({ index = defaultArgs.index }) => {
  return <div>content item {index}</div>;
};

export default TabsContentItem;
