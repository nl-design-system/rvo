import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import BackToTopButton from '@theme/BackToTopButton';
import type { Props } from '@theme/DocRoot/Layout';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

export default function DocRootLayout({ children }: Props): ReactElement {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className={clsx(styles.docsWrapper, !sidebar && styles.docsWrapperNoSidebar)}>
      <BackToTopButton />
      <div
        className={clsx(
          styles.docPage,
          !sidebar ? 'rvo-max-width-layout rvo-max-width-layout--sm' : 'rvo-max-width-layout rvo-max-width-layout--md',
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
