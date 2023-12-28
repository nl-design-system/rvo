import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { Header, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, logo },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  return (
    <>
      <Header link={logo.href} />
      <nav
        ref={navbarRef}
        className={clsx(hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden], {
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
      >
        <div className={styles.menubar}>
          <MenuBar size="md" maxWidth="md">
            {children}
          </MenuBar>
        </div>
        {!mobileSidebar.disabled && (
          <div className={styles.menubarMobile}>
            <MobileMenuBar>{children}</MobileMenuBar>
          </div>
        )}
      </nav>
    </>
  );
}
