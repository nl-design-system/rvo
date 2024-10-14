/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import '../ordered-unordered-list/index.scss';
import TabItem, { ITabItemProps } from './tab-item/template';

export interface ITabsProps {
  /** @uxpinignoreprop */
  tabs: ITabItemProps[];
  /**
   * @uxpinbind onChange 0
   */
  activeTab: number;
  onChange?: (activeTab: number) => void;
  /** @uxpinpropname Tab items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  activeTab: {
    control: 'number',
  },
  tabs: {
    type: {
      name: 'array',
      required: true,
    },
  },
  OnChange: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Tabs: React.FC<ITabsProps> = ({
  tabs = defaultArgs.tabs,
  activeTab = defaultArgs.activeTab,
  onChange,
  children,
}: ITabsProps) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabIndex: number) => {
    setCurrentTab(tabIndex);
    onChange?.(tabIndex);
  };

  return (
    <ul
      className="rvo-tabs rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
      role="tablist"
      aria-label="Tabs"
    >
      {(children &&
        React.Children.map(children, (child, index) => (
          <TabItem
            key={`tab-${index}`}
            label={(child as any).props.label}
            href={(child as any).props.href}
            selected={currentTab === index}
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(index);
            }}
          />
        ))) ||
        (tabs &&
          tabs.map((tab, index) => (
            <TabItem
              key={`tab-${index}`}
              label={tab.label}
              href={tab.href}
              selected={currentTab === index}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(index);
              }}
            />
          )))}
    </ul>
  );
};

export default Tabs;
