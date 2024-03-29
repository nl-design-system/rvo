import { useLocation } from '@docusaurus/router';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import ExpandButton from '@theme/DocPage/Layout/Sidebar/ExpandButton';
import DocSidebar from '@theme/DocSidebar';
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.css';
// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }) {
  const sidebar = useDocsSidebar();
  return <React.Fragment key={(sidebar && sidebar.name) || 'noSidebar'}>{children}</React.Fragment>;
}
export default function DocPageLayoutSidebar({ sidebar, hiddenSidebarContainer, setHiddenSidebarContainer }) {
  const { pathname } = useLocation();
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return (
    <aside
      className={clsx(
        ThemeClassNames.docs.docSidebarContainer,
        styles.docSidebarContainer,
        hiddenSidebarContainer && styles.docSidebarContainerHidden,
      )}
      onTransitionEnd={(e) => {
        if (!e.currentTarget.classList.contains(styles.docSidebarContainer)) {
          return;
        }
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }}
      style={{ border: 'none', width: 'var(--doc-sidebar-width)' }}
    >
      <ResetOnSidebarChange>
        <DocSidebar sidebar={sidebar} path={pathname} onCollapse={toggleSidebar} isHidden={hiddenSidebar} />
      </ResetOnSidebarChange>

      {hiddenSidebar && <ExpandButton toggleSidebar={toggleSidebar} />}
    </aside>
  );
}
