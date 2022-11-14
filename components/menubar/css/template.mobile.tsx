/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { Icon } from '../../icon/css/template';
import { defaultItems, IMenuBarItem, IMenuBarProps, parseMenuItem } from './template';
import './index.scss';

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
  updateArgs?: any;
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
  updateArgs,
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

  const onClick = useCallback(() => {
    updateArgs({ isOpen: !isOpen });
  }, [updateArgs, isOpen]);

  return (
    <div className={clsx('rvo-mobile-menu', `rvo-mobile-menu--${size}`)}>
      <div className={clsx('rvo-mobile-menu__top-bar', 'rvo-layout-row', 'rvo-layout-gap--sm')} onClick={onClick}>
        <Icon icon="menu" size={size as any} color="wit" />
        <Icon icon="kruis" size={size as any} color="wit" />
        Menu
      </div>
      {isOpen && (
        <div className={clsx('rvo-mobile-menu__list', 'rvo-topnav__background')}>
          <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)}>
            <ul className="utrecht-topnav__list">{itemsMarkup}</ul>
          </nav>
        </div>
      )}
    </div>
  );
};
