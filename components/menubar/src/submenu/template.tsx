import clsx from 'clsx';
import React from 'react';
import '../index.scss';
import { Icon, Link } from '../../../index';
import { IMenuBarItem } from '../menubar/template';

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

export const SubMenu: React.FC<SubMenuProps> = ({
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
    <li
      key={`${subItem.label}--${index}`}
      className={clsx('rvo-menubar__item rvo-menubar__item--submenu', !grid && 'rvo-menubar__item--grid')}
    >
      <Link
        className="rvo-menubar__link"
        {...(typeof subItem.link === 'string' ? { href: subItem.link } : {})}
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
        'rvo-menubar--submenu',
        grid && direction === 'horizontal' && 'rvo-menubar__grid rvo-menubar--submenu-grid',
        direction === 'horizontal' && 'rvo-menubar__horizontal',
      )}
    >
      <ul
        className={clsx(
          'rvo-menubar__list',
          'rvo-menubar__list--item',
          'rvo-max-width-layout',
          `rvo-max-width-layout--${maxWidth}`,
        )}
      >
        {subMenuMarkup}
      </ul>
    </div>
  ) : (
    <div
      className={clsx(
        'rvo-menubar--submenu',
        grid && direction === 'horizontal' && 'rvo-menubar__grid rvo-menubar--submenu-grid',
        direction === 'horizontal' && 'rvo-menubar__horizontal',
      )}
    >
      <ul
        className={clsx(
          'rvo-menubar__list',
          'rvo-menubar__list--item',
          direction === 'vertical' && 'rvo-menubar__vertical',
        )}
      >
        {subMenuMarkup}
      </ul>
    </div>
  );
};

export default SubMenu;
