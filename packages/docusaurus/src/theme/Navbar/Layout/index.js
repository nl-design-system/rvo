import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import Header from '@nl-rvo/components/header/css/template';
import MobileMenubar from '@nl-rvo/components/menubar-mobile/css/template';
import Menubar from '@nl-rvo/components/menubar/css/template';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const query = '(max-width: 768px)';
  const [isMobile, setIsMobile] = useState(window.matchMedia(query).matches);

  const onWindowChange = useCallback((e) => setIsMobile(e.matches));

  useEffect(() => {
    window.matchMedia(query).addEventListener('change', onWindowChange);
    return () => window.matchMedia(query).removeEventListener('change', onWindowChange);
  }, []);

  return (
    <>
      <Header />
      <nav
        ref={navbarRef}
        className={clsx(hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden], {
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
      >
        <div className="menubar" style={{ display: isMobile ? 'none' : 'block' }}>
          <Menubar size="lg" menuMaxWidth="lg">
            {children}
          </Menubar>
        </div>
        {!mobileSidebar.disabled && (
          <div className="menubarMobile" style={{ display: isMobile ? 'block' : 'none' }}>
            <MobileMenubar>{children}</MobileMenubar>
          </div>
        )}
      </nav>
    </>
  );
}
