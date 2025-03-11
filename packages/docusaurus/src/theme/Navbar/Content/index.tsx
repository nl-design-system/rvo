// import { useLocation } from '@docusaurus/router';
// import { useThemeConfig } from '@docusaurus/theme-common';
// import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import { MenuBarItem } from '@nl-rvo/components';
// import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
// import React from 'react';
// import styles from './styles.module.css';

export default function NavbarContent(): JSX.Element {
  // const items = useThemeConfig().navbar.items as any;
  // const searchBarItem = items.find((item) => item.type === 'search');
  // const firstRightItem = items.findIndex((item) => item.position === 'right');
  // const docusaurusContext = useDocusaurusContext();
  // const location = useLocation().pathname.replace(docusaurusContext.siteConfig.baseUrl, '');
  // const currentPage = location.split('/')[0];
  // const sections = useNavbarSecondaryMenu();

  return (
    <>
      {/* {items.map((item, index) => {
        let active = false;
        if (item.docId) {
          const itemSection = item.docId.split('/')[0];
          if (itemSection === currentPage) {
            active = true;
          }
        } else if (currentPage === '' && item.label === 'ROOS') {
          active = true;
        }

        const menuItemProps = {
          label: item.label,
          link: item.docId ? useBaseUrl(item.docId) : item.href || '#',
          align: item.position === 'right' && index === firstRightItem ? ('right' as const) : ('left' as const),
          type: 'primary' as const,
          key: `${item.label}-${index}`,
          active,
          useIcons: false,
          linkColor: 'logoblauw' as const,
        };

        if (!active) {
          return <MenuBarItem key={`item-${index}`} {...menuItemProps} size="md" iconPlacement="before" />;
        } else {
          return (
            <React.Fragment key={index}>
              <MenuBarItem {...menuItemProps} size="md" iconPlacement="before" />
              {sections &&
                sections.content &&
                sections.content.props.sidebar.map((section, index) => {
                  if (section.type === 'link') {
                    return (
                      <MenuBarItem
                        key={`${section.label}-${index}`}
                        label={section.label}
                        link={section.href}
                        active={section.href.indexOf(location) > -1}
                        useIcons={false}
                        linkColor="logoblauw"
                        size="md"
                        iconPlacement="before"
                      />
                    );
                  } else if (section.type === 'category') {
                    return (
                      <React.Fragment key={`${section.label}-${index}`}>
                        <MenuBarItem
                          key={`${section.label}}`}
                          label={section.label}
                          link={section.href}
                          active={section.href && section.href.indexOf(location) > -1}
                          useIcons={false}
                          linkColor="logoblauw"
                          size="md"
                          iconPlacement="before"
                        />
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
      {/* Temporary menu fix */}
      <div className="rvo-menubar__background ">
        <nav className="rvo-menubar rvo-menubar--md">
          <ul className="rvo-menubar__list">
            <div className="rvo-menubar__group--flex">
              <li className="rvo-menubar__item">
                <a className="rvo-link rvo-menubar__link rvo-link--logoblauw" href="/rvo/docs">
                  ROOS
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a className="rvo-link rvo-menubar__link rvo-link--logoblauw" href="/rvo/docs/aan-de-slag/introductie">
                  Aan de slag
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a className="rvo-link rvo-menubar__link rvo-link--logoblauw" href="/rvo/docs/design-tokens/kleuren">
                  Huisstijl
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a className="rvo-link rvo-menubar__link rvo-link--logoblauw" href="/rvo/docs/componenten/accordion">
                  Componenten
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a
                  className="rvo-link rvo-menubar__link rvo-link--logoblauw"
                  href="/rvo/docs/patronen/layout/applicatie-layout"
                >
                  Patronen
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a
                  className="rvo-link rvo-menubar__link rvo-link--logoblauw"
                  href="/rvo/docs/schrijfwijzer/waarom-deze-schrijfwijzer"
                >
                  Schrijfwijzer
                </a>
              </li>
            </div>
            <div className="rvo-menubar__group--flex">
              <li className="rvo-menubar__item">
                <a
                  className="rvo-link rvo-menubar__link rvo-link--logoblauw"
                  href="https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0"
                >
                  Figma
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a
                  className="rvo-link rvo-menubar__link rvo-link--logoblauw"
                  href="https://github.com/nl-design-system/rvo"
                >
                  Github
                </a>
              </li>
              <li className="rvo-menubar__item">
                <a
                  className="rvo-link rvo-menubar__link rvo-link--logoblauw"
                  href="https://nl-design-system.github.io/rvo/"
                >
                  Storybook
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      {/* End temporary menu fix */}
    </>
  );
}
