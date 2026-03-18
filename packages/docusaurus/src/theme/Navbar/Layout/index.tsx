import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { Header, MenuBar, MobileMenuBar } from '@nl-rvo/component-library-react';
import type { Props } from '@theme/Navbar/Layout';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

export default function NavbarLayout({ children }: Props): ReactElement {
  const {
    navbar: { hideOnScroll, logo, style },
  } = useThemeConfig();
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
          {children && (
            <MenuBar size="md" maxWidth="md" linkColor="lintblauw">
              {children}
            </MenuBar>
          )}
        </div>
        {!mobileSidebar.disabled && (
          <div className={styles.menubarMobile}>{children && <MobileMenuBar>{children}</MobileMenuBar>}</div>
        )}
      </nav>
    </>
  );
}
