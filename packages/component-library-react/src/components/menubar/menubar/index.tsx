/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { IconType } from '../../icon/types';
import { MaxWidthLayout } from '../../../index';
// eslint-disable-next-line import/order
import { defaultArgs } from '../defaultArguments';

import '@nl-rvo/css-menubar/dist/index.css';

import MenuBarItem from '../menubar-item';

export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: React.MouseEvent) => void);
  align?: 'left' | 'right';
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
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'lintblauw' | 'grijs-700' | 'zwart';
  useBackgroundColor?: boolean;
  grid?: boolean;
}

export const MenuBar: React.FC<IMenuBarProps & React.HTMLAttributes<HTMLDivElement>> = ({
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
  ...rootElementProps
}) => {
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

  const leftItems = items?.filter((item) => item.align !== 'right') || [];
  const rightItems = items?.filter((item) => item.align === 'right') || [];

  const navMarkup = (
    <nav className={clsx(`rvo-menubar rvo-menubar--${size}`)}>
      <ul className={clsx('rvo-menubar__ul')}>
        <li className={clsx('rvo-menubar__list', direction === 'vertical' && 'rvo-menubar__list--vertical')}>
          <ul className={clsx('rvo-menubar__group--flex', direction === 'vertical' && 'rvo-menubar__group--vertical')}>
            {leftItems?.map((item, index) => (
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

          {rightItems.length > 0 && (
            <ul
              className={clsx('rvo-menubar__group--flex', direction === 'vertical' && 'rvo-menubar__group--vertical')}
            >
              {rightItems?.map((item, index) => (
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
          )}
        </li>
      </ul>
    </nav>
  );

  return (
    <div
      ref={menuBarRef}
      className={clsx('rvo-menubar__background', horizontalRule && 'rvo-menubar__background--horizontal-rule')}
      {...rootElementProps}
    >
      {direction === 'horizontal' && maxWidth !== 'none' ? (
        <MaxWidthLayout size={maxWidth}>{children || navMarkup}</MaxWidthLayout>
      ) : (
        children || navMarkup
      )}
    </div>
  );
};

export default MenuBar;
