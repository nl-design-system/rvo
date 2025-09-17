import clsx from 'clsx';
import React, { useState } from 'react';
import Button from '../../button/src/template';
import Dialog from '../../dialog/src/template';
import { Icon } from '../../index';
import { MobileMenuItem } from './menu-item/template';
import { IMenuBarItem } from '../../menubar/src/menubar/template';
import './index.scss';

export interface IMobileMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  items?: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  children?: React.ReactNode;
  isOpen?: boolean;
  horizontalRule?: boolean;
  /** @uxpinignoreprop */
}

export const MobileMenuBar: React.FC<IMobileMenuBarProps> = ({
  size,
  items,
  useIcons,
  iconPlacement,
  isOpen = false,
  horizontalRule,
  children,
}: IMobileMenuBarProps) => {
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
      aria-expanded={isOpen}
    >
      <Button kind="subtle" className={clsx('rvo-mobile-menu__toggle')} onClick={() => setIsMenuOpen(!isOpen)}>
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
