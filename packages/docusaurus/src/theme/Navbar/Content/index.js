import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MenuBarItem } from '@nl-rvo/components';
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

        const menuItemProps = {
          label: item.label,
          link: item.docId ? useBaseUrl(item.docId) : item.href || '#',
          align: item.position === 'right' && index === firstRightItem && 'right',
          type: 'primary',
          key: `${item.label}-${index}`,
          active,
          useIcons: false,
          linkColor: 'logoblauw',
        };

        if (!active) {
          return <MenuBarItem key={`item-${index}`} {...menuItemProps} />;
        } else {
          return (
            <React.Fragment key={index}>
              <MenuBarItem {...menuItemProps} />
              {sections &&
                sections.content &&
                sections.content.props.sidebar.map((section, index) => {
                  if (section.type === 'link') {
                    return (
                      <MenuBarItem
                        key={`${section.label}-${index}`}
                        label={section.label}
                        link={section.href}
                        type="sub"
                        active={section.href.indexOf(location) > -1}
                        useIcons={false}
                        linkColor="logoblauw"
                      />
                    );
                  } else if (section.type === 'category') {
                    return (
                      <React.Fragment key={`${section.label}-${index}`}>
                        {section.items.map((item, index) => (
                          <MenuBarItem
                            key={`${item.label}-${index}`}
                            label={item.label}
                            link={item.href}
                            type="sub"
                            active={item.href.indexOf(location) > -1}
                            useIcons={false}
                            linkColor="logoblauw"
                          />
                        ))}
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
