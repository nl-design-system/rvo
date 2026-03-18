import { ThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MenuBar } from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';

type NavbarItem = {
  type?: string;
  label?: string;
  docId?: string;
  href?: string;
  to?: string;
  position?: 'left' | 'right';
  items?: NavbarItem[];
};

export default function NavbarContent(): ReactElement {
  function useThemeConfig(): ThemeConfig {
    return useDocusaurusContext().siteConfig.themeConfig as ThemeConfig;
  }

  const items = (useThemeConfig().navbar.items ?? []) as NavbarItem[];

  const getLink = (item: NavbarItem): string => {
    if (item.type === 'doc' && item.docId) {
      return useBaseUrl(`/${item.docId}`);
    }
    if (item.to) {
      return useBaseUrl(item.to);
    }
    return item.href || '#';
  };

  const menuitems = items.map((item, index) => ({
    label: item.label || `item-${index}`,
    link: getLink(item),
    align: item.position === 'right' ? 'right' : 'left',
    key: `${item.label || 'item'}-${index}`,
    useIcons: false,
    linkColor: 'lintblauw' as const,
    submenu:
      item.type === 'dropdown' && Array.isArray(item.items)
        ? item.items.map((subItem, subIndex) => ({
            label: subItem.label || `subitem-${subIndex}`,
            link: getLink(subItem),
          }))
        : undefined,
  }));

  return (
    <>
      <MenuBar items={menuitems} direction="horizontal" size="md" maxWidth="md" horizontalRule={false} grid={false} />
    </>
  );
}
