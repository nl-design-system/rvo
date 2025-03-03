/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { defaultArgs } from '../defaultArguments';
import { IconType } from '../../../icon/src/types';
import { MaxWidthLayout } from '../../../index';
import '../index.scss';

import MenuBarItem from '../menubar-item/template';

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: React.MouseEvent) => void);
  align?: 'left' | 'right';
  active?: boolean;
  useDivider?: boolean;
  submenu?: IMenuBarItem[];
}

export interface IMenuBarProps {
  size: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
  /** @uxpinignoreprop */
  items?: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  /** @uxpinpropname MenuBar items */
  children?: ReactNode | undefined;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'logoblauw' | 'grijs-700' | 'zwart';
  useBackgroundColor?: boolean;
  grid?: boolean;
}

export const NavbarMenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  direction = defaultArgs.direction,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  maxWidth = defaultArgs.maxWidth,
  horizontalRule = defaultArgs.horizontalRule,
  linkColor = defaultArgs.linkColor,
  grid = defaultArgs.grid,
  children,
}: IMenuBarProps) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
      setActiveSubmenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navMarkup = (
    <nav className={clsx(`rvo-navbar rvo-navbar--${size}`)}>
      <ul className={clsx('rvo-navbar__list', direction === 'vertical' && 'rvo-navbar__list--vertical')}>
        {items?.map((item, index) => (
          <MenuBarItem
            key={`${item.label}-${index}`}
            useIcons={useIcons ?? false}
            size={size}
            iconPlacement={iconPlacement ?? 'before'}
            linkColor={linkColor}
            isSubmenuVisible={activeSubmenu === item.label}
            handleItemClick={() => handleItemClick(item.label)}
            direction={direction}
            grid={grid}
            maxWidth={maxWidth}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );

  return (
    <div
      ref={menuBarRef}
      className={clsx('rvo-navbar__background', horizontalRule && 'rvo-navbar__background--horizontal-rule')}
    >
      {direction === 'horizontal' && maxWidth !== 'none' ? (
        <MaxWidthLayout size={maxWidth}>{children || navMarkup}</MaxWidthLayout>
      ) : (
        children || navMarkup
      )}
    </div>
  );
};

export default NavbarMenuBar;
