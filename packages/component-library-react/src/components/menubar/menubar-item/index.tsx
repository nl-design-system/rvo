import clsx from 'clsx';
import React from 'react';
// eslint-disable-next-line import/order
import SubMenu from '../submenu';
import '@nl-rvo/css-menubar/dist/index.css';
import { Icon, Link } from '../../../index';
import { IMenuBarItem } from '../menubar';

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
        useDivider && 'rvo-menubar__item--with-divider',
        isSubmenuVisible && 'rvo-menubar__item--submenu-visible',
      )}
      {...rest}
    >
      <Link
        className={clsx('rvo-menubar__link', isSubmenuVisible && 'rvo-menubar__link--active')}
        color={linkColor}
        {...(submenu || typeof link === 'function'
          ? { onClick: handleClick, role: 'button' }
          : { href: link as string })}
      >
        {iconPlacement === 'before' && iconMarkup}
        {label}
        {iconPlacement !== 'before' && iconMarkup}
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
          direction={direction}
          grid={grid}
          maxWidth={maxWidth}
        />
      )}
    </li>
  );
};

export default MenuBarItem;
