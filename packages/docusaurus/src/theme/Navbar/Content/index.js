import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { parseMenuItem } from '@nl-rvo/components/menubar/css/template';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import React from 'react';
import styles from './styles.module.css';

export default function NavbarContent() {
  const items = useThemeConfig().navbar.items;
  const firstRightItem = items.findIndex((item) => item.position === 'right');
  const searchBarItem = items.find((item) => item.type === 'search');
  const docusaurusContext = useDocusaurusContext();
  const currentSection = document.location.pathname.replace(docusaurusContext.siteConfig.baseUrl, '').split('/')[0];
  return (
    <React.Fragment>
      {items.map((item, index) => {
        let active = false;
        if (item.docId) {
          const itemSection = item.docId.split('/')[0];
          if (itemSection === currentSection) {
            active = true;
          }
        }

        return parseMenuItem({
          label: item.label,
          link: item.docId ? useBaseUrl(item.docId) : item.href || '#',
          align: item.position === 'right' && index === firstRightItem && 'right',
          type: 'primary',
          key: index,
          active,
        });
      })}
      <NavbarColorModeToggle className={styles.colorModeToggle} />
      {!searchBarItem && (
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      )}
    </React.Fragment>
  );
}
