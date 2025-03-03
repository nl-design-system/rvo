import clsx from 'clsx';
import React from 'react';
// eslint-disable-next-line import/order
import SubMenu from '../submenu/template';
import '../index.scss';
import { Icon, Link } from '../../../index';
import { IMenuBarItem } from '../menubar/template';

interface MenuBarItemProps extends IMenuBarItem {
  useIcons: boolean;
  size: 'sm' | 'md' | 'lg';
  iconPlacement: 'before' | 'after';
  linkColor?: string;
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  isSubmenuVisible?: boolean;
  direction?: 'horizontal' | 'vertical';
  grid?: boolean;
  handleItemClick?: (event: React.MouseEvent) => void;
}

export const MenuBarItem: React.FC<MenuBarItemProps> = ({
  label,
  icon,
  link,
  align = 'left',
  active,
  useDivider,
  submenu,
  useIcons,
  size,
  iconPlacement,
  linkColor,
  isSubmenuVisible,
  direction,
  grid,
  maxWidth,
  handleItemClick,
  ...rest
}) => {
  const iconMarkup = useIcons && icon ? <Icon icon={icon} size={size as any} color="wit" /> : null;

  return (
    <li
      className={clsx(
        'rvo-navbar__item',
        active && 'rvo-navbar__item--active',
        align === 'right' && 'rvo-navbar__item--align-right',
        submenu && 'rvo-navbar__item--submenu',
        useDivider && 'rvo-navbar__item--with-divider',
      )}
      {...rest}
    >
      <Link
        className={clsx(
          'rvo-navbar__link',
          isSubmenuVisible && ['rvo-navbar__link--active', 'rvo-navbar--submenu', 'rvo-navbar__background'],
        )}
        {...(typeof link === 'function' ? { onClick: link } : { href: link })}
        color={linkColor}
        onClick={(event) => {
          if (submenu) {
            event.preventDefault();
            handleItemClick?.(event);
          } else if (typeof link === 'function') {
            link(event);
          }
        }}
      >
        {iconPlacement === 'before' && iconMarkup}
        {label}
        {iconPlacement !== 'before' && iconMarkup}
      </Link>

      {submenu && isSubmenuVisible && (
        <SubMenu
          submenu={submenu}
          useIcons={useIcons}
          size={size}
          iconPlacement={iconPlacement}
          linkColor={linkColor}
          isSubmenuVisible={isSubmenuVisible}
          direction={direction}
          grid={grid}
          maxWidth={maxWidth}
        />
      )}
    </li>
  );
};

export default MenuBarItem;
