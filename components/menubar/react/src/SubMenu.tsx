import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-menubar';
import { Link } from '@nl-rvo/react-link';
import { Icon } from '@nl-rvo/react-icon';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/react/dist/index.mjs';
import { SubMenuProps } from './Menubar.types';

export const SubMenu: React.FC<SubMenuProps> = ({
  submenu,
  useIcons,
  size,
  iconPlacement,
  linkColor,
  isSubmenuVisible,
  maxWidth,
  LinkComponent,
}) => {
  if (!isSubmenuVisible) return null;

  const subMenuMarkup = submenu.map((subItem, index) => (
    <li key={`${subItem.label}--${index}`} className={clsx('rvo-menubar__item rvo-menubar__submenu-item')}>
      <Link
        className="rvo-menubar__link"
        {...(typeof subItem.link === 'string' ? { href: subItem.link } : {})}
        color={linkColor}
        LinkComponent={LinkComponent}
      >
        {iconPlacement === 'left' && useIcons && subItem.icon && (
          <Icon icon={subItem.icon} size={size as any} color="wit" />
        )}
        {subItem.label}
        {iconPlacement === 'right' && useIcons && subItem.icon && (
          <Icon icon={subItem.icon} size={size as any} color="wit" />
        )}
      </Link>
    </li>
  ));

  return (
    <MaxWidthLayout className="rvo-menubar__submenu-layout" size={maxWidth}>
      <ul className={clsx('rvo-menubar__submenu')}>{subMenuMarkup}</ul>
    </MaxWidthLayout>
  );
};

export default SubMenu;
