import isInternalUrl from '@docusaurus/isInternalUrl';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import { Link } from '@nl-rvo/components';
import clsx from 'clsx';

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
        showIcon={!isInternalLink ? true : false}
        icon="external-link"
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        active={isActive}
        aria-current={isActive ? 'page' : undefined}
        noUnderline={true}
      />
    </li>
  );
}
