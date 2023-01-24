import { ThemeClassNames } from '@docusaurus/theme-common';
import { useAnnouncementBar, useScrollPosition } from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return (
    <nav
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}
      style={{ paddingInlineStart: 'var(--rvo-topnav-link-padding-inline-start)' }}
    >
      <ul
        className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list', 'rvo-layout-column', 'rvo-layout-gap--md')}
      >
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
