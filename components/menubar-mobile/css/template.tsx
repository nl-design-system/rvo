/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { Icon } from '../../icon/css/template';
import { IMenuBarItem, IMenuBarProps, parseMenuItem } from '../../menubar/css/template';
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
  children,
}: IMobileMenuBarProps) => {
  let itemsMarkup;
  if (!children) {
    itemsMarkup = items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {parseMenuItem({
            label: item.label,
            icon: item.icon,
            active: item.active,
            link: item.link,
            useIcon: useIcons,
            size,
            iconPlacement,
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

  return (
    <div className={clsx('rvo-mobile-menu', `rvo-mobile-menu--${size}`)}>
      <div className={clsx('rvo-mobile-menu__top-bar')} onClick={onClick}>
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

export default MobileMenuBar;
