/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../icon/css/template';
import { defaultItems, IMenuBarItem, IMenuBarProps, parseMenuItem } from './template';

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  submenuItems: {
    type: {
      name: 'array',
      required: true,
    },
  },
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
  isOpen: {
    control: 'boolean',
  },
};

interface IMobileMenuBarProps extends IMenuBarProps {
  submenuItems: IMenuBarItem[];
  isOpen: boolean;
}

export const defaultArgs: IMobileMenuBarProps = {
  size: 'md',
  items: defaultItems,
  submenuItems: [],
  useIcons: true,
  iconPlacement: 'before',
  isOpen: true,
};

export const MobileMenuBar: React.FC<IMobileMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  submenuItems = defaultArgs.submenuItems,
  isOpen = defaultArgs.isOpen,
}) => {
  const itemsMarkup = items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <li className={clsx('utrecht-topnav__item', item.active && 'utrecht-topnav__item--active')}>
          {parseMenuItem({
            label: item.label,
            icon: item.icon,
            active: item.active,
            link: item.link,
            useIcon: useIcons,
            size,
            iconPlacement,
          })}
        </li>
        {item.active &&
          submenuItems.map((submenuItem, index) => (
            <li key={index} className={clsx('utrecht-topnav__item', 'utrecht-topnav__item--sub')}>
              {parseMenuItem({
                label: submenuItem.label,
                icon: submenuItem.icon,
                active: undefined,
                link: submenuItem.link,
                useIcon: useIcons,
                size,
                iconPlacement,
              })}
            </li>
          ))}
      </React.Fragment>
    );
  });

  return (
    <details className={clsx('rvo-mobile-menu', `rvo-mobile-menu--${size}`)} open={isOpen}>
      <summary className={clsx('rvo-layout-row', 'rvo-layout-gap--sm')}>
        <Icon icon="menu" size={size} color="wit" />
        <Icon icon="kruis" size={size} color="wit" />
        Menu
      </summary>
      <div className={clsx('rvo-topnav__background')}>
        <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)}>
          <ul className="utrecht-topnav__list">{itemsMarkup}</ul>
        </nav>
      </div>
    </details>
  );
};
