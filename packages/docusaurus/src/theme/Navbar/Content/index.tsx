import { ThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MenuBar } from '@nl-rvo/components';

export default function NavbarContent(): JSX.Element {
  function useThemeConfig(): ThemeConfig {
    return useDocusaurusContext().siteConfig.themeConfig as ThemeConfig;
  }

  const items = useThemeConfig().navbar.items as any;

  const menuitems = items.map((item, index) => ({
    label: item.label,
    link: item.docId ? useBaseUrl(`/${item.docId}`) : item.href || '#',
    align: item.position === 'right' ? 'right' : 'left',
    key: `${item.label}-${index}`,
    useIcons: false,
    linkColor: 'logoblauw' as const,
  }));

  return (
    <>
      <MenuBar items={menuitems} direction="horizontal" size="md" maxWidth="md" horizontalRule={false} />
    </>
  );
}
