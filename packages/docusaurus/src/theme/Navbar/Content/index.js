import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { parseMenuItem } from '@nl-rvo/components/menubar/template';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import React from 'react';
import styles from './styles.module.css';

export default function NavbarContent() {
  const items = useThemeConfig().navbar.items;
  const firstRightItem = items.findIndex((item) => item.position === 'right');
  // const searchBarItem = items.find((item) => item.type === 'search');
  const docusaurusContext = useDocusaurusContext();
  const location = useLocation().pathname.replace(docusaurusContext.siteConfig.baseUrl, '');
  const currentPage = location.split('/')[0];
  const sections = useNavbarSecondaryMenu();

  return (
    <React.Fragment>
      {items.map((item, index) => {
        let active = false;
        if (item.docId) {
          const itemSection = item.docId.split('/')[0];
          if (itemSection === currentPage) {
            active = true;
          }
        }

        const menuItem = parseMenuItem({
          label: item.label,
          link: item.docId ? useBaseUrl(item.docId) : item.href || '#',
          align: item.position === 'right' && index === firstRightItem && 'right',
          type: 'primary',
          key: `${item.label}-${index}`,
          active,
          linkColor: 'logoblauw',
        });

        if (!active) {
          return menuItem;
        } else {
          return (
            <React.Fragment key={index}>
              {menuItem}
              {sections &&
                sections.content &&
                sections.content.props.sidebar.map((section, index) => {
                  if (section.type === 'link') {
                    return parseMenuItem({
                      label: section.label,
                      link: section.href,
                      type: 'sub',
                      key: `${section.label}-${index}`,
                      active: section.href.indexOf(location) > -1,
                      linkColor: 'logoblauw',
                    });
                  } else if (section.type === 'category') {
                    return (
                      <React.Fragment key={`${section.label}-${index}`}>
                        {section.items.map((item, index) =>
                          parseMenuItem({
                            label: item.label,
                            link: item.href,
                            type: 'sub',
                            key: `${item.label}-${index}`,
                            active: item.href.indexOf(location) > -1,
                            linkColor: 'logoblauw',
                          }),
                        )}
                      </React.Fragment>
                    );
                  } else {
                    return null;
                  }
                })}
            </React.Fragment>
          );
        }
      })}
      <NavbarColorModeToggle className={styles.colorModeToggle} />
      {/* {!searchBarItem && (
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      )} */}
    </React.Fragment>
  );
}
