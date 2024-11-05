import isInternalUrl from '@docusaurus/isInternalUrl';
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Link } from '@nl-rvo/components';
import type { Props } from '@theme/DocSidebarItem/Link';
import clsx from 'clsx';

export default function DocSidebarItemLink({ item, onItemClick, activePath, level, ...props }: Props): JSX.Element {
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
        href={useBaseUrl(href)}
        noUnderline={!isActive}
        color="grijs-700"
        weight={isActive ? 'bold' : 'normal'}
        aria-current={isActive ? 'page' : undefined}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
        showIcon={!isInternalLink ? 'after' : 'no'}
        icon={!isInternalLink ? 'externe-link' : undefined}
      >
        {label}
      </Link>
    </li>
  );
}
