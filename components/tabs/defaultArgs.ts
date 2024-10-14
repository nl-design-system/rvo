import { ITabsProps } from './template';

export const defaultArgs: ITabsProps = {
  tabs: [
    { label: 'Tab 1', href: '#tab-1' },
    { label: 'Tab 2', href: '#tab-2' },
  ],
  activeTab: 0,
};
