/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../icon/template';
import { IconType } from '../icon/types';
import Link from '../link/template';
import MaxWidthLayout from '../max-width-layout/template';
import './index.scss';

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: any) => void);
  align?: 'left' | 'right';
  active?: boolean;
  useDivider?: boolean;
}

export interface IMenuBarProps {
  size: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  type?: 'primary' | 'sub' | 'sub-grid';
  deltaForActiveItem?: boolean;
  children?: React.ReactNode;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'logoblauw' | 'grijs-700' | 'zwart';
  useBackgroundColor?: boolean;
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  direction: {
    options: ['horizontal', 'vertical'],
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
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'sub', 'sub-grid'],
    control: { type: 'radio' },
  },
  deltaForActiveItem: {
    control: 'boolean',
  },
  horizontalRule: {
    control: 'boolean',
  },
  linkColor: {
    options: ['donkerblauw', 'hemelblauw', 'logoblauw', 'grijs-700', 'zwart'],
    control: { type: 'radio' },
  },
  useBackgroundColor: {
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
  deltaForActiveItem = defaultArgs.deltaForActiveItem,
  linkColor = defaultArgs.linkColor,
  useDivider = false,
  ...otherProps
}) => {
  // Parse delta for active menu items
  let itemMarkup;
  let deltaMarkup;
  if (active !== undefined && type === 'primary' && deltaForActiveItem) {
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
        'rvo-topnav__item',
        active && 'rvo-topnav__item--active',
        align === 'right' && 'rvo-topnav__item--align-right',
        type === 'sub' && 'rvo-topnav__item--sub',
        useDivider && 'rvo-topnav__item--with-divider',
      )}
      {...otherProps}
    >
      <Link
        className="rvo-topnav__link"
        {...(typeof link === 'function' ? { onClick: link } : { href: link })}
        color={linkColor}
      >
        {itemMarkup}
      </Link>
    </li>
  );
};

export const MenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  direction = defaultArgs.direction,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  maxWidth = defaultArgs.maxWidth,
  type = defaultArgs.type,
  deltaForActiveItem = defaultArgs.deltaForActiveItem,
  horizontalRule = defaultArgs.horizontalRule,
  linkColor = defaultArgs.linkColor,
  useBackgroundColor = defaultArgs.useBackgroundColor,
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
          deltaForActiveItem,
          useDivider: item.useDivider,
          linkColor,
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
            deltaForActiveItem,
            useDivider: item.useDivider,
            linkColor,
          }),
        ),
    );
  } else {
    itemsMarkup = children;
  }

  const navMarkup = (
    <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)}>
      <ul className={clsx('rvo-topnav__list', direction === 'vertical' && 'rvo-topnav__list--vertical')}>
        {itemsMarkup}
      </ul>
    </nav>
  );

  return (
    <div
      className={clsx(
        'rvo-topnav__background',
        useBackgroundColor && 'rvo-topnav__background--background-color',
        horizontalRule && 'rvo-topnav__background--horizontal-rule',
        type === 'sub' && 'rvo-topnav--sub',
        type === 'sub-grid' && ['rvo-topnav--sub', 'rvo-topnav--sub-grid'],
      )}
    >
      {direction === 'horizontal' && maxWidth !== 'none' ? (
        <MaxWidthLayout size={maxWidth}>{navMarkup}</MaxWidthLayout>
      ) : (
        navMarkup
      )}
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
