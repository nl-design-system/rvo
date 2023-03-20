import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

export default function DocPageLayout({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      <div className={clsx(styles.docPage, 'rvo-max-width-layout', 'rvo-max-width-layout--md')}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocPageLayoutMain>
      </div>
    </Layout>
  );
}
