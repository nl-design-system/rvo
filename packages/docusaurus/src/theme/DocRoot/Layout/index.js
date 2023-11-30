import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

export default function DocRootLayout({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <div
        className={clsx(
          styles.docPage,
          'rvo-max-width-layout',
          'rvo-max-width-layout--md',
          'rvo-layout-row',
          'rvo-layout-row--flex-start',
        )}
      >
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocRootLayoutMain>
      </div>
    </div>
  );
}
