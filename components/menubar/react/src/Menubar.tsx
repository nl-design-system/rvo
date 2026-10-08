/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/order

import '@nl-rvo/css-menubar';
import MenuBarItem from './MenuItem';
import { MaxWidthLayout } from '@nl-rvo/react-max-width-layout';
import { Button } from '@nl-rvo/react-button';
import { Icon } from '@nl-rvo/react-icon';

import { IMenuBarProps } from './Menubar.types';

export const MenuBar: React.FC<IMenuBarProps & React.HTMLAttributes<HTMLDivElement>> = ({
  size = 'lg',
  items,
  useIcons,
  iconPlacement,
  maxWidth = 'lg',
  horizontalRule,
  linkColor = 'lintblauw',
  children,
  ...rootElementProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className={clsx(`rvo-menubar__nav`)}>
      <div className="rvo-menubar__toggle">
        <Button kind="subtle" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon icon="menu" size={size as any} className="rvo-mobile-menu__open-icon" />
          Menu
        </Button>
      </div>

      <div className={clsx(`rvo-menubar__container`, [isMenuOpen && 'rvo-menubar__container--open'])}>
        {/* Close Button. Only visible on Mobile */}
        <div className="rvo-menubar__container-close">
          <Button kind="subtle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon icon="kruis" size={size as any} className="rvo-mobile-menu__open-icon" />
            Sluiten
          </Button>
        </div>

        {/* Left Items */}
        <ul className="rvo-menubar__group rvo-menubar__group--left">
          {leftItems?.map((item, index) => (
            <MenuBarItem
              key={`${item.label}-${index}`}
              useIcons={useIcons ?? false}
              size={size}
              iconPlacement={iconPlacement ?? 'left'}
              linkColor={linkColor}
              isSubmenuVisible={activeSubmenu === item.label}
              handleItemClick={() => handleItemClick(item.label)}
              maxWidth={maxWidth}
              {...item}
            />
          ))}
        </ul>

        {/* Right Items */}
        <ul className="rvo-menubar__group rvo-menubar__group--right">
          {rightItems?.map((item, index) => (
            <MenuBarItem
              key={`${item.label}-${index}`}
              useIcons={useIcons ?? false}
              size={size}
              iconPlacement={iconPlacement ?? 'left'}
              linkColor={linkColor}
              isSubmenuVisible={activeSubmenu === item.label}
              handleItemClick={() => handleItemClick(item.label)}
              maxWidth={maxWidth}
              {...item}
            />
          ))}
        </ul>
      </div>

      {isMenuOpen && <div className="rvo-menubar__overlay" onClick={() => setIsMenuOpen(!isMenuOpen)}></div>}
    </nav>
  );

  return (
    <div
      ref={menuBarRef}
      className={clsx('rvo-menubar', horizontalRule && 'rvo-menubar--horizontal-rule', size && `rvo-menubar--${size}`)}
      {...rootElementProps}
    >
      <MaxWidthLayout size={maxWidth}>{children || navMarkup}</MaxWidthLayout>
    </div>
  );
};

export default MenuBar;
