/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { IconType } from '@nl-rvo/assets/icons/types';
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../icon/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string;
  align?: 'left' | 'right';
  active?: boolean;
}

export interface IMenuBarProps {
  size: 'sm' | 'md' | 'lg';
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement?: 'before' | 'after';
  menuMaxWidth?: 'none' | 'sm' | 'md' | 'lg';
  type?: 'primary' | 'sub' | 'sub-grid';
  useDeltaForActiveItem?: boolean;
  children?: React.ReactNode;
}

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
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
  menuMaxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'sub', 'sub-grid'],
    control: { type: 'radio' },
  },
  useDeltaForActiveItem: {
    control: 'boolean',
  },
};

export const parseMenuItem = ({
  key,
  label,
  icon,
  active,
  link,
  align = 'left',
  type = defaultArgs.type,
  useIcon = defaultArgs.useIcons,
  size = defaultArgs.size,
  iconPlacement = defaultArgs.iconPlacement,
  useDeltaForActiveItem = defaultArgs.useDeltaForActiveItem,
  ...otherProps
}) => {
  // Parse delta for active menu items
  let itemMarkup;
  let deltaMarkup;
  if (active !== undefined && type === 'primary' && useDeltaForActiveItem) {
    deltaMarkup = <Icon icon={(active ? 'delta-omlaag' : 'delta-omhoog') as any} size="xs" color="wit" />;
  }

  if (useIcon && icon) {
    const iconMarkup = <Icon icon={icon} size={size as any} color="wit" />;

    if (iconPlacement === 'before') {
      itemMarkup = (
        <>
          {iconMarkup}
          {label}
          {deltaMarkup}
        </>
      );
    } else {
      itemMarkup = (
        <>
          {label}
          {iconMarkup}
          {deltaMarkup}
        </>
      );
    }
  } else {
    itemMarkup = (
      <>
        {label}
        {deltaMarkup}
      </>
    );
  }

  return (
    <li
      key={key}
      className={clsx(
        'utrecht-topnav__item',
        active && 'utrecht-topnav__item--active',
        align === 'right' && 'utrecht-topnav__item--align-right',
        type === 'sub' && 'utrecht-topnav__item--sub',
      )}
      {...otherProps}
    >
      <a className="utrecht-topnav__link" href={link}>
        {itemMarkup}
      </a>
    </li>
  );
};

export const MenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  menuMaxWidth = defaultArgs.menuMaxWidth,
  type = defaultArgs.type,
  useDeltaForActiveItem = defaultArgs.useDeltaForActiveItem,
  children,
}: IMenuBarProps) => {
  let itemsMarkup = null;

  if (!children) {
    // Left items
    itemsMarkup = items
      .filter((item) => item.align !== 'right')
      .map((item, index) =>
        parseMenuItem({
          key: `${item.label}--${index}`,
          label: item.label,
          icon: item.icon,
          active: item.active,
          link: item.link,
          useIcon: useIcons,
          size,
          iconPlacement,
          useDeltaForActiveItem,
        }),
      );

    // Right items
    itemsMarkup.push(
      items
        .filter((item) => item.align === 'right')
        .map((item, index) =>
          parseMenuItem({
            key: `${item.label}--${index}`,
            label: item.label,
            icon: item.icon,
            active: item.active,
            link: item.link,
            useIcon: useIcons,
            align: index === 0 && 'right',
            size,
            iconPlacement,
            useDeltaForActiveItem,
          }),
        ),
    );
  } else {
    itemsMarkup = children;
  }

  return (
    <div
      className={clsx(
        'rvo-topnav__background',
        type === 'sub' && 'rvo-topnav--sub',
        type === 'sub-grid' && ['rvo-topnav--sub', 'rvo-topnav--sub-grid'],
      )}
    >
      <nav
        className={clsx(
          `rvo-topnav rvo-topnav--${size}`,
          menuMaxWidth && menuMaxWidth !== 'none' && 'rvo-max-width-layout',
          menuMaxWidth && menuMaxWidth !== 'none' && `rvo-max-width-layout--${menuMaxWidth}`,
        )}
      >
        <ul className="utrecht-topnav__list">{itemsMarkup}</ul>
      </nav>
    </div>
  );
};

export const MenuBarWithSubmenu: React.FC<{ primary: IMenuBarProps; sub: IMenuBarProps }> = ({ primary, sub }) => (
  <div>
    <MenuBar {...primary} />
    <MenuBar {...sub} />
  </div>
);

export default MenuBar;
