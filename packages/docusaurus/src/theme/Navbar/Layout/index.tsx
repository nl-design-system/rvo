import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Header, MenuBar, MobileMenuBar } from '@nl-rvo/component-library-react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NavbarLayout() {
  const {
    navbar: { hideOnScroll, logo, style, items },
  } = useThemeConfig();

  const menuItems = (items as any[])?.map((item, index) => ({
    label: item.label,
    link: item.docId ? useBaseUrl(`/${item.docId}`) : item.href || '#',
    align: item.position === 'right' ? 'right' : 'left',
    key: `${item.label}-${index}`,
    useIcons: false,
    linkColor: 'lintblauw' as const,
  }));

  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  return (
    <>
      {logo && logo.href && <Header link={logo.href} />}
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
          'navbar--fixed-top',
          hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
          {
            'navbar--dark': style === 'dark',
            'navbar--primary': style === 'primary',
            'navbar-sidebar--show': mobileSidebar.shown,
          },
        )}
      >
        <div className={styles.menubar}>
          <MenuBar
            items={menuItems}
            direction="horizontal"
            size="md"
            maxWidth="md"
            horizontalRule={false}
            linkColor="lintblauw"
          />
        </div>
        {!mobileSidebar.disabled && (
          <div className={styles.menubarMobile}>
            <MobileMenuBar items={menuItems} size="md" horizontalRule={false} />
          </div>
        )}
      </nav>
    </>
  );
}
