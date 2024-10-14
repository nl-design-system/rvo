/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import Link from '../../link/template';

export interface ITabItemProps {
  label: string;
  href: string;
  /** @uxpinignoreprop */
  selected?: boolean;
  /** @uxpinignoreprop */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export const TabItem: React.FC<ITabItemProps> = ({
  label = defaultArgs.label,
  href = defaultArgs.href,
  selected = defaultArgs.selected,
  onClick,
  ...props
}: ITabItemProps) => {
  return (
    <li role="presentation" className="rvo-tabs__item">
      <Link
        role="tab"
        href={href}
        aria-selected={selected}
        className={clsx('rvo-tabs__item-link', selected && 'rvo-tabs__item-link--active')}
        noUnderline={true}
        active={selected}
        weight={selected ? 'bold' : 'normal'}
        onClick={onClick}
        {...props}
      >
        {label}
      </Link>
    </li>
  );
};

export default TabItem;
