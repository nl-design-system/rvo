/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { JSX, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import MenuBarItem from './menubar-item/template';
import { IconType } from '../icon/types';
import { Icon, Link, MaxWidthLayout } from '../index';
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
  /** @uxpinignoreprop */
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  type?: 'primary' | 'sub' | 'sub-grid';
  deltaForActiveItem?: boolean;
  /** @uxpinpropname MenuBar items */
  children?: ReactNode | undefined;
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
  children: {
    table: {
      disable: true,
    },
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
}: IMenuBarItem & {
  key?: string;
  type?: IMenuBarProps['type'];
  useIcon: IMenuBarProps['useIcons'];
  size: IMenuBarProps['size'];
  iconPlacement: IMenuBarProps['iconPlacement'];
  deltaForActiveItem: IMenuBarProps['deltaForActiveItem'];
  linkColor?: IMenuBarProps['linkColor'];
}) => {
  // Parse delta for active menu items
  let itemMarkup: JSX.Element | null = null;
  let deltaMarkup: JSX.Element | null = null;
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
    itemsMarkup = [
      // Left items
      ...items
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
            type,
            iconPlacement,
            deltaForActiveItem,
            useDivider: item.useDivider,
            linkColor,
          }),
        ),
      // Right items
      ...items
        .filter((item) => item.align === 'right')
        .map((item, index) =>
          parseMenuItem({
            key: `${item.label}--${index}`,
            label: item.label,
            icon: item.icon,
            active: item.active,
            link: item.link,
            useIcon: useIcons,
            align: index === 0 ? 'right' : 'left',
            size,
            type,
            iconPlacement,
            deltaForActiveItem,
            useDivider: item.useDivider,
            linkColor,
          }),
        ),
    ];
  } else {
    let isAlignRightSet = false;
    itemsMarkup = React.Children.map(children, (child, index) => {
      // Only set align right prop for the first item that has align = right
      const isAlignRight = (child as any).props.align === 'right';
      if (isAlignRight && !isAlignRightSet) {
        isAlignRightSet = true;
        return <MenuBarItem key={index} {...(child as any).props} align="right" />;
      } else {
        return <MenuBarItem key={index} {...(child as any).props} align="left" />;
      }
    });
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
