import clsx from 'clsx';
import React, { useState } from 'react';
import { Icon, Link } from '../../../index';
import { IMenuBarItem } from '../../menubar/menubar';
import '@nl-rvo/css-menubar-mobile/dist/index.css';

export interface MobileMenuItemProps {
  item: IMenuBarItem;
  iconPlacement?: 'before' | 'after';
  useIcons?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
}

export const MobileMenuItem: React.FC<MobileMenuItemProps> = (props: MobileMenuItemProps) => {
  const { item, iconPlacement, useIcons, iconSize } = props;

  const [openSubMenu, setOpenSubmenu] = useState<boolean>(false);

  const iconMarkup = useIcons && item.icon ? <Icon icon={item.icon} size={iconSize as any} color="zwart" /> : null;
  const chevronMarkup = item.submenu ? (
    openSubMenu ? (
      <Icon icon="delta-omhoog" size={iconSize as any} color="zwart" />
    ) : (
      <Icon icon="delta-omlaag" size={iconSize as any} color="zwart" />
    )
  ) : null;

  return (
    <li className={clsx(item.useDivider && 'rvo-mobile-menu__item--with-divider')}>
      <Link
        className={clsx('rvo-mobile-menu__link', openSubMenu && 'rvo-mobile-menu__link--active')}
        {...(item.submenu || typeof item.link === 'function'
          ? {
              onClick: (event) => {
                event.preventDefault();
                if (item.submenu) {
                  setOpenSubmenu(!openSubMenu);
                } else if (typeof item.link === 'function') {
                  item.link(event);
                }
              },
              role: 'button',
            }
          : { href: item.link as string })}
      >
        {iconPlacement === 'before' && iconMarkup}
        {item.label}
        {iconPlacement !== 'before' && iconMarkup}
        {chevronMarkup}
      </Link>

      {item.submenu && openSubMenu && (
        <ul className={clsx('rvo-mobile-menu__submenu--list')}>
          {item.submenu.map((subItem, subIndex) => {
            const subIconMarkup =
              useIcons && subItem.icon ? <Icon icon={subItem.icon} size={iconSize as any} color="zwart" /> : null;

            return (
              <li key={subIndex}>
                <Link
                  className="rvo-mobile-menu__link"
                  {...(typeof subItem.link === 'string' ? { href: subItem.link } : {})}
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
  );
};

export default MobileMenuItem;
