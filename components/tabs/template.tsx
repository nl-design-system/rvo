/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import '../ordered-unordered-list/index.scss';
import Link from '../link/template';

export interface ITabProps {
  label: string;
}

export interface ITabsProps {
  tabs: ITabProps[];
  activeTab: number;
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
};

export const Tabs: React.FC<ITabsProps> = ({ tabs = defaultArgs.tabs, activeTab = defaultArgs.activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <ul
      className="rvo-tabs rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
      role="tablist"
      aria-label="Tabs"
    >
      {tabs.map((tab, index) => (
        <li role="presentation" className="rvo-tabs__item" key={index}>
          <Link
            role="tab"
            href={`#tab-${index}`}
            aria-selected={currentTab === index}
            className={clsx('rvo-tabs__item-link', currentTab === index && 'rvo-tabs__item-link--active')}
            noUnderline={true}
            active={currentTab === index}
            weight={currentTab === index ? 'bold' : 'normal'}
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(index);
            }}
          >
            {tab.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
