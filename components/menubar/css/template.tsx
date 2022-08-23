/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../icon/css/template';

interface IMenuBarItem {
  label: string;
  icon?: string;
  link: string;
  align?: string;
}

interface IMenuBarProps {
  size: string;
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement: string;
  menuMaxWidth?: string;
}

const defaultItems = [
  { label: 'Home', icon: 'home', link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie', link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
];

export const argTypes = {
  size: {
    options: ['sm', 'md'],
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
};

export const defaultArgs: IMenuBarProps = {
  size: 'md',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  menuMaxWidth: 'none',
};

const parseMenuItem = (
  label,
  icon,
  useIcon = defaultArgs.useIcons,
  size = defaultArgs.size,
  iconPlacement = defaultArgs.iconPlacement,
) => {
  if (useIcon && icon) {
    const iconMarkup = <Icon icon={icon} size={size} color="wit" />;

    if (iconPlacement === 'before') {
      return (
        <>
          {iconMarkup}
          {label}
        </>
      );
    } else {
      return (
        <>
          {label}
          {iconMarkup}
        </>
      );
    }
  }
  return label;
};

export const MenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  menuMaxWidth = defaultArgs.menuMaxWidth,
}) => {
  const leftItemsMarkup = items
    .filter((item) => item.align !== 'right')
    .map((item, index) => (
      <li key={index} className="utrecht-topnav__item">
        <a className="utrecht-topnav__link rvo-layout-row rvo-layout-gap--sm" href={item.link}>
          {parseMenuItem(item.label, item.icon, useIcons, size, iconPlacement)}
        </a>
      </li>
    ));
  const rightItemsMarkup = items
    .filter((item) => item.align === 'right')
    .map((item, index) => (
      <li key={index} className="utrecht-topnav__item">
        <a className="utrecht-topnav__link rvo-layout-row rvo-layout-gap--sm" href={item.link}>
          {parseMenuItem(item.label, item.icon, useIcons, size, iconPlacement)}
        </a>
      </li>
    ));
  return (
    <div className="rvo-topnav__background">
      <nav
        className={clsx(
          `rvo-topnav rvo-topnav--${size}`,
          menuMaxWidth && menuMaxWidth !== 'none' && 'rvo-max-width-layout',
          menuMaxWidth && menuMaxWidth !== 'none' && `rvo-max-width-layout--${menuMaxWidth}`,
        )}
      >
        <ul className="utrecht-topnav__list">
          {leftItemsMarkup}
          {rightItemsMarkup}
        </ul>
      </nav>
    </div>
  );
};
