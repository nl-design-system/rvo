import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../button/src/template';
import Dialog from '../../dialog/src/template';
import { Icon, Link } from '../../index';
import { IMenuBarItem } from '../../menubar/src/menubar/template';
import { defaultArgs } from '../src/defaultArgs';
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
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  isOpen: isOpenArg = defaultArgs.isOpen,
  horizontalRule = defaultArgs.horizontalRule,
  children,
}: IMobileMenuBarProps) => {
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

  const [isOpen, setIsOpen] = useState(isOpenArg);
  const onClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(isOpenArg);
  }, [isOpenArg]);

  let itemsMarkup;

  if (!children && items) {
    itemsMarkup = items.map((item, index) => {
      const iconMarkup = useIcons && item.icon ? <Icon icon={item.icon} size={size as any} color="zwart" /> : null;

      return (
        <React.Fragment key={index}>
          <li className={clsx(item.useDivider && 'rvo-mobilenav__item--with-divider')} key={`${item.label}--${index}`}>
            <Link
              className={clsx('rvo-mobilenav__link', activeSubmenu === item.label && 'rvo-mobilenav__link--active')}
              {...(typeof item.link === 'function' ? { onClick: item.link } : { href: item.link })}
              onClick={(event) => {
                event.preventDefault();
                handleItemClick(item.label);
              }}
            >
              {iconPlacement === 'before' && iconMarkup}
              {item.label}
              {iconPlacement !== 'before' && iconMarkup}
            </Link>

            {item.submenu && activeSubmenu === item.label && (
              <ul className={clsx('rvo-mobile-submenu__list')}>
                {item.submenu.map((subItem, subIndex) => {
                  const subIconMarkup =
                    useIcons && subItem.icon ? <Icon icon={subItem.icon} size={size as any} color="zwart" /> : null;

                  return (
                    <li key={subIndex}>
                      <Link
                        className="rvo-mobilenav__link"
                        {...(typeof subItem.link === 'function' ? { onClick: subItem.link } : { href: subItem.link })}
                      >
                        {iconPlacement === 'before' && subIconMarkup}
                        {subItem.label}
                        {iconPlacement !== 'before' && subIconMarkup}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </React.Fragment>
      );
    });
  } else {
    itemsMarkup = children;
  }

  return (
    <div
      ref={menuBarRef}
      className={clsx(
        'rvo-mobile-navbar',
        `rvo-mobile-navbar--${size}`,
        `rvo-mobile-navbar--${isOpen ? 'open' : 'closed'}`,
        horizontalRule && 'rvo-mobile-navbar--horizontal-rule',
      )}
      aria-expanded={isOpen}
    >
      <Button kind="subtle" className={clsx('rvo-mobile-navbar__toggle')} onClick={onClick}>
        <Icon icon="menu" size={size as any} className="rvo-mobile-navbar__open-icon" />
        Menu
      </Button>
      <Dialog type="drawer-left" isOpen={isOpen} isModal={true} onClose={onClick} backgroundColor="grijs-200">
        <div ref={menuBarRef} className={clsx('rvo-navbar__background')}>
          <nav>
            <ul className={clsx('rvo-mobile-item__list')}>{itemsMarkup}</ul>
          </nav>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenuBar;
