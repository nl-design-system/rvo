import clsx from 'clsx';
import React, { HTMLAttributes, useState } from 'react';
import { Icon } from '@nl-rvo/component-library-react/src';
import { Button } from '@nl-rvo/react-button';
import Dialog from '@nl-rvo/react-dialog';
import { MobileMenuItem } from './menu-item';
import '@nl-rvo/css-menubar-mobile';
import { IMobileMenuBarProps } from './MenubarMobile.types';

export const MobileMenuBar: React.FC<IMobileMenuBarProps & HTMLAttributes<HTMLDivElement>> = ({
  size,
  items,
  useIcons,
  iconPlacement,
  isOpen = false,
  horizontalRule,
  children,
  ...rootElementProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  let itemsMarkup =
    !children && items
      ? items.map((item, index) => {
          return (
            <MobileMenuItem
              key={`menu-bar-item__${index}`}
              item={item}
              iconPlacement={iconPlacement}
              useIcons={useIcons}
              iconSize={size}
            />
          );
        })
      : children;

  return (
    <div
      className={clsx(
        'rvo-mobile-menu',
        `rvo-mobile-menu--${size}`,
        horizontalRule && 'rvo-mobile-menu--horizontal-rule',
      )}
      {...rootElementProps}
    >
      <Button
        kind="subtle"
        className={clsx('rvo-mobile-menu__toggle')}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        label=""
      >
        <Icon icon="menu" size={size as any} className="rvo-mobile-menu__open-icon" />
        Menu
      </Button>
      <Dialog
        type="inset-inline-start"
        isOpen={isMenuOpen}
        isModal={true}
        onClose={() => setIsMenuOpen(false)}
        backgroundColor="grijs-200"
      >
        <div className={clsx('rvo-navbar__background')}>
          <nav>
            <ul className={clsx('rvo-mobile-menu__list--item')}>{itemsMarkup}</ul>
          </nav>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenuBar;
