/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Button as UtrechtButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from '../icon/template';
import { IMenuBarItem, IMenuBarProps, parseMenuItem } from '../menubar/template';
import { defaultArgs } from './defaultArgs';
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

export interface IMobileMenuBarProps extends IMenuBarProps {
  submenuItems: IMenuBarItem[];
  isOpen: boolean;
}

export const MobileMenuBar: React.FC<IMobileMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  submenuItems = defaultArgs.submenuItems,
  isOpen: isOpenArg = defaultArgs.isOpen,
  useDeltaForActiveItem = defaultArgs.useDeltaForActiveItem,
  children,
}: IMobileMenuBarProps) => {
  let itemsMarkup;
  if (!children) {
    itemsMarkup = items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {parseMenuItem({
            key: item.label,
            label: item.label,
            icon: item.icon,
            active: item.active,
            link: item.link,
            useIcon: useIcons,
            size,
            iconPlacement,
            useDeltaForActiveItem,
          })}
          {item.active &&
            submenuItems.map((submenuItem, index) => (
              <React.Fragment key={index}>
                {parseMenuItem({
                  key: `${item.label}--${index}`,
                  label: submenuItem.label,
                  icon: submenuItem.icon,
                  active: undefined,
                  link: submenuItem.link,
                  useIcon: useIcons,
                  size,
                  iconPlacement,
                  type: 'sub',
                  useDeltaForActiveItem,
                })}
              </React.Fragment>
            ))}
        </React.Fragment>
      );
    });
  } else {
    itemsMarkup = children;
  }

  const [isOpen, setIsOpen] = useState(isOpenArg);
  const onClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(isOpenArg);
  }, [isOpenArg]);

  return (
    <div
      className={clsx('rvo-mobile-menu', `rvo-mobile-menu--${size}`, `rvo-mobile-menu--${isOpen ? 'open' : 'closed'}`)}
      aria-expanded={isOpen}
    >
      <UtrechtButton className={clsx('rvo-mobile-menu__toggle')} onClick={onClick}>
        <Icon icon="menu" size={size as any} className="rvo-mobile-menu__open-icon" />
        <Icon icon="kruis" size={size as any} className="rvo-mobile-menu__close-icon" />
        Menu
      </UtrechtButton>
      {isOpen && (
        <div className={clsx('rvo-topnav__background')} onClick={onClick}>
          <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)}>
            <ul className="rvo-topnav__list">{itemsMarkup}</ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenuBar;
