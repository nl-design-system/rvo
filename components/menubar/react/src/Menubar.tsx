/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/order

import '@nl-rvo/css-menubar';
import MenuBarItem from './menubar-item';
import { MaxWidthLayout } from '@nl-rvo/react-max-width-layout';
import { IMenuBarProps } from './Menubar.types';

export const MenuBar: React.FC<IMenuBarProps & React.HTMLAttributes<HTMLDivElement>> = ({
  size = 'lg',
  direction = 'horizontal',
  items,
  useIcons,
  iconPlacement,
  maxWidth = 'lg',
  horizontalRule,
  linkColor = 'lintblauw',
  grid,
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
