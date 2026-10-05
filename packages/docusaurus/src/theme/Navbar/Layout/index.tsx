import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Logo, MenuBar } from '@nl-rvo/component-library-react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NavbarLayout() {
  const {
    navbar: { hideOnScroll, logo, style, items },
  } = useThemeConfig();
  const { siteConfig } = useDocusaurusContext();
  const logoLinkTitle = siteConfig.customFields?.logoLinkTitle as string | undefined;

  const menuItems = (items as any[])?.map((item, index) => ({
    label: item.label,
    link: item.docId ? useBaseUrl(`/${item.docId}`) : item.href || '#',
    align: item.position === 'right' ? 'right' : 'left',
    key: `${item.label}-${index}`,
    useIcons: false,
    linkColor: 'lintblauw' as const,
  })) as any[];

  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  return (
    <>
      {logo && logo.href && (
        <header className="rvo-header">
          <div className="rvo-header__logo-wrapper">
            <Logo className="rvo-header__logo-img" link={logo.href} linkTitle={logoLinkTitle} />
          </div>
        </header>
      )}
      <nav
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main',
          description: 'The ARIA label for the main navigation',
        })}
        className={clsx(
          'navbar',
          styles.navbar,
          hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
          {
            'navbar--dark': style === 'dark',
            'navbar--primary': style === 'primary',
            'navbar-sidebar--show': mobileSidebar.shown,
          },
        )}
      >
        <div className={styles.menubar}>
          <MenuBar items={menuItems} size="md" maxWidth="md" horizontalRule={true} linkColor="lintblauw" />
        </div>
      </nav>
    </>
  );
}
