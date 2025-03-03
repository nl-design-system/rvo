import React from 'react';
import clsx from 'clsx';
import '../index.scss';
import { IMenuBarItem } from '../menubar/template';
import { Icon, Link } from '../../../index';

export interface SubMenuProps {
  submenu: IMenuBarItem[];
  useIcons: boolean;
  size: 'sm' | 'md' | 'lg';
  iconPlacement: 'before' | 'after';
  linkColor?: string;
  isSubmenuVisible?: boolean;
  direction?: 'horizontal' | 'vertical';
  grid?: boolean;
  className?: string | string[];
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
}

const SubMenu: React.FC<SubMenuProps> = ({
  submenu,
  useIcons,
  size,
  iconPlacement,
  linkColor,
  isSubmenuVisible,
  direction,
  grid,
  maxWidth,
}) => {
  if (!isSubmenuVisible) return null;

  const subMenuMarkup = submenu.map((subItem, index) => (
    <li key={`${subItem.label}--${index}`} className="rvo-navbar__item">
      <Link
        className="rvo-navbar__link"
        href={typeof subItem.link === 'string' ? subItem.link : undefined}
        onClick={typeof subItem.link === 'function' ? subItem.link : undefined}
        color={linkColor}
      >
        {iconPlacement === 'before' && useIcons && subItem.icon && (
          <Icon icon={subItem.icon} size={size as any} color="wit" />
        )}
        {subItem.label}
        {iconPlacement === 'after' && useIcons && subItem.icon && (
          <Icon icon={subItem.icon} size={size as any} color="wit" />
        )}
      </Link>
    </li>
  ));

  return direction === 'horizontal' && maxWidth !== 'none' ? (
    <div
      className={clsx(
        'rvo-navbar--submenu',
        'rvo-navbar__background',
        grid && direction === 'horizontal' && 'rvo-navbar__grid rvo-navbar--submenu-grid',
        direction === 'horizontal' && 'rvo-navbar__horizontal',
        'rvo-max-width-layout',
        `rvo-max-width-layout--${maxWidth}`,
      )}
    >
      <ul className={clsx('rvo-navbar__list')}>{subMenuMarkup}</ul>
    </div>
  ) : (
    <div
      className={clsx(
        'rvo-navbar--submenu',
        'rvo-navbar__background',
        grid && direction === 'horizontal' && 'rvo-navbar__grid rvo-navbar--submenu-grid',
        direction === 'horizontal' && 'rvo-navbar__horizontal',
      )}
    >
      <ul className={clsx('rvo-navbar__list', direction === 'vertical' && 'rvo-navbar__vertical')}>{subMenuMarkup}</ul>
    </div>
  );
};

export default SubMenu;
