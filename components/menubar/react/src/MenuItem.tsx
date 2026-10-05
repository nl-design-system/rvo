import clsx from 'clsx';
import React from 'react';
// eslint-disable-next-line import/order
import SubMenu from './SubMenu';
import '@nl-rvo/css-menubar';
import { Link, LinkCustomLinkComponent } from '@nl-rvo/react-link';
import { IMenuBarItem } from './Menubar.types';
import { Icon } from '@nl-rvo/react-icon';

interface MenuBarItemProps extends IMenuBarItem {
  useIcons: boolean;
  size: 'sm' | 'md' | 'lg';
  iconPlacement: 'left' | 'right';
  linkColor?: string;
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  isSubmenuVisible?: boolean;
  grid?: boolean;
  handleItemClick?: (event: React.MouseEvent) => void;
  LinkComponent?: LinkCustomLinkComponent;
}

export const MenuBarItem: React.FC<MenuBarItemProps> = ({
  label,
  icon,
  link,
  submenu,
  useIcons,
  size,
  iconPlacement,
  linkColor,
  isSubmenuVisible,
  maxWidth,
  handleItemClick,
  LinkComponent,
  ...rest
}) => {
  const chevronMarkup = submenu ? (
    isSubmenuVisible ? (
      <Icon icon="delta-omhoog" size={size as any} color="wit" />
    ) : (
      <Icon icon="delta-omlaag" size={size as any} color="wit" />
    )
  ) : null;

  const handleClick = (event: React.MouseEvent) => {
    if (submenu) {
      event.preventDefault();
      handleItemClick?.(event);
    } else if (typeof link === 'function') {
      event.preventDefault();
      link(event);
    }
  };

  return (
    <li
      className={clsx(
        'rvo-menubar__item',
        isSubmenuVisible && 'rvo-menubar__item--submenu-visible',
      )}
      {...rest}
    >
      <Link
        className={clsx('rvo-menubar__link', isSubmenuVisible && 'rvo-menubar__link--active')}
        color={linkColor}
        icon={icon}
        iconSize={size}
        LinkComponent={LinkComponent}
        {...(submenu || typeof link === 'function'
          ? { onClick: handleClick, role: 'button' }
          : { href: link as string })}
      >
        {label}
        {chevronMarkup}
      </Link>

      {submenu && isSubmenuVisible && (
        <SubMenu
          submenu={submenu}
          useIcons={useIcons}
          size={size}
          iconPlacement={iconPlacement}
          linkColor={linkColor}
          isSubmenuVisible={isSubmenuVisible}
        />
      )}
    </li>
  );
};

export default MenuBarItem;
