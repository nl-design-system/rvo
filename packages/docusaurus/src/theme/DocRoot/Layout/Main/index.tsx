import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/DocRoot/Layout/Main';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

export default function DocRootLayoutMain({ hiddenSidebarContainer, children }: Props): ReactElement {
  const sidebar = useDocsSidebar();
  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div
        className={clsx(
          'container padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>
    </main>
  );
}
