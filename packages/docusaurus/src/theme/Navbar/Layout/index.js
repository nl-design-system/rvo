import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import Header from '@nl-rvo/components/header/css/template';
import MobileMenubar from '@nl-rvo/components/menubar-mobile/css/template';
import Menubar from '@nl-rvo/components/menubar/css/template';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  return (
    <>
      <Header />
      <nav
        ref={navbarRef}
        className={clsx(hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden], {
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
      >
        <div className={styles.menubar}>
          <Menubar size="lg" menuMaxWidth="lg">
            {children}
          </Menubar>
        </div>
        {!mobileSidebar.disabled && (
          <div className={styles.menubarMobile}>
            <MobileMenubar>{children}</MobileMenubar>
          </div>
        )}
      </nav>
    </>
  );
}
