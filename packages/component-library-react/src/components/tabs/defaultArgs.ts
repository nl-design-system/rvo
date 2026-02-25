import { HTMLAttributes } from 'react';
import { ITabsProps } from './';

export const defaultArgs: Partial<ITabsProps & HTMLAttributes<HTMLUListElement>> = {
  tabs: [
    { label: 'Tab 1', href: '#tab-1' },
    { label: 'Tab 2', href: '#tab-2' },
  ],
  activeTab: 0,
};
