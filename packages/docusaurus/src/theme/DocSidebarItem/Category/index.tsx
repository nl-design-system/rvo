import { translate } from '@docusaurus/Translate';
import {
  findFirstSidebarItemLink,
  isActiveSidebarItem,
  useDocSidebarItemsExpandedState,
} from '@docusaurus/plugin-content-docs/client';
import { Collapsible, ThemeClassNames, useCollapsible, usePrevious, useThemeConfig } from '@docusaurus/theme-common';
import { isSamePath } from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Heading, Link } from '@nl-rvo/components';
import type { Props } from '@theme/DocSidebarItem/Category';
import DocSidebarItems from '@theme/DocSidebarItems';
import clsx from 'clsx';
import { type ComponentProps, MouseEvent, useEffect, useMemo } from 'react';

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (_b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item: Props['item']): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstSidebarItemLink(item);
  }, [item, isBrowser]);
}

function CollapseButton({
  collapsed,
  categoryLabel,
  onClick,
}: {
  collapsed: boolean;
  categoryLabel: string;
  onClick: ComponentProps<'button'>['onClick'];
}) {
  return (
    <button
      aria-label={
        collapsed
          ? translate(
              {
                id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
                message: "Expand sidebar category '{label}'",
                description: 'The ARIA label to expand the sidebar category',
              },
              { label: categoryLabel },
            )
          : translate(
              {
                id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
                message: "Collapse sidebar category '{label}'",
                description: 'The ARIA label to collapse the sidebar category',
              },
              { label: categoryLabel },
            )
      }
      aria-expanded={!collapsed}
      type="button"
      className="clean-btn menu__caret"
      onClick={onClick}
    />
  );
}

export default function DocSidebarItemCategory({ item, onItemClick, activePath, level, index }: Props): JSX.Element {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(href, activePath);

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  useEffect(() => {
    if (collapsible && expandedItem !== null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  const sharedProps = {
    className: clsx({
      'menu__link--sublist': collapsible,
      'menu__link--sublist-caret': !href && collapsible,
      'menu__link--active': isActive,
    }),
    onClick: collapsible
      ? (e: MouseEvent) => {
          onItemClick?.(item);
          if (href) {
            updateCollapsed(false);
          } else {
            e.preventDefault();
            updateCollapsed();
          }
        }
      : () => {
          onItemClick?.(item);
        },
    ariaCurrent: isCurrentPage ? 'page' : 'false',
    ariaExpanded: collapsible && !href ? !collapsed : undefined,
  };

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item',
        {
          'menu__list-item--collapsed': collapsed,
        },
        className,
      )}
    >
      <div
        className={clsx(collapsible && 'menu__list-item-collapsible', {
          'menu__list-item-collapsible--active': isCurrentPage,
        })}
      >
        {hrefWithSSRFallback ? (
          <Link
            {...sharedProps}
            noUnderline={!isCurrentPage}
            color="grijs-700"
            weight={isCurrentPage ? 'bold' : 'normal'}
            className={clsx('menu__link', sharedProps.className)}
            href={hrefWithSSRFallback}
          >
            {label}
          </Link>
        ) : (
          <Heading {...sharedProps} type="h3" role={collapsible && !href ? 'button' : undefined} noMargins={true}>
            {label}
          </Heading>
        )}
        {href && collapsible && (
          <CollapseButton
            collapsed={collapsed}
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
          />
        )}
      </div>
      {(!hrefWithSSRFallback || (hrefWithSSRFallback && isCurrentPage)) && (
        <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
          <DocSidebarItems
            items={items}
            tabIndex={collapsed ? -1 : 0}
            onItemClick={onItemClick}
            activePath={activePath}
            level={level + 1}
          />
        </Collapsible>
      )}
    </li>
  );
}
