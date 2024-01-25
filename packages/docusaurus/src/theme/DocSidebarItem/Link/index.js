import isInternalUrl from '@docusaurus/isInternalUrl';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import { Link } from '@nl-rvo/components';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocSidebarItemLink({ item, onItemClick, activePath, level }) {
  const { href, label, className } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}
    >
      <Link
        content={label}
        href={href}
        color="grijs-700"
        showIcon={!isInternalLink ? true : false}
        className={clsx(isActive ? styles.activeLink : styles.inactiveLink)}
        icon="external-link"
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        active={isActive}
        aria-current={isActive ? 'page' : undefined}
      />
    </li>
  );
}
