/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Icon from '../icon/template';
import { IconType } from '../icon/types';
import Link from '../link/template';

export interface IMenuBarItemProps {
  label: string;
  icon?: IconType;
  link: string | ((event: any) => void);
  align?: 'left' | 'right';
  active?: boolean;
  useDivider?: boolean;
  children?: ReactNode | undefined;
  /** @uxpinignoreprop */
  type?: 'primary' | 'sub';
  /** @uxpinignoreprop */
  size?: 'sm' | 'md' | 'lg';
  /** @uxpinignoreprop */
  iconPlacement?: 'before' | 'after';
  /** @uxpinignoreprop */
  deltaForActiveItem?: boolean;
  /** @uxpinignoreprop */
  linkColor?: 'hemelblauw' | 'donkerblauw' | 'wit' | 'zwart' | 'grijs-700' | 'logoblauw';
  /** @uxpinignoreprop */
  useIcons?: boolean;
}

export const MenuBarItem: React.FC<IMenuBarItemProps> = ({
  type = defaultArgs.type,
  label = defaultArgs.label,
  icon = defaultArgs.icon,
  link = defaultArgs.link,
  align = defaultArgs.align,
  active = defaultArgs.active,
  useDivider = defaultArgs.useDivider,
  useIcons = defaultArgs.useIcons,
  size = defaultArgs.size,
  iconPlacement = defaultArgs.iconPlacement,
  deltaForActiveItem = defaultArgs.deltaForActiveItem,
  linkColor = defaultArgs.linkColor,
  children,
  ...otherProps
}: IMenuBarItemProps) => {
  let itemMarkup;
  let deltaMarkup;
  if (active !== undefined && type === 'primary' && deltaForActiveItem) {
    deltaMarkup = <Icon icon={(active ? 'delta-omlaag' : 'delta-omhoog') as any} size="xs" color="wit" />;
  }

  if (useIcons && icon) {
    const iconMarkup = <Icon icon={icon} size={size as any} color="wit" />;

    if (iconPlacement === 'before') {
      itemMarkup = (
        <>
          {iconMarkup}
          {children || label}
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
        {children || label}
        {deltaMarkup}
      </>
    );
  }

  return (
    <li
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

export default MenuBarItem;
