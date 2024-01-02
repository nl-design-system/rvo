import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css';
export default function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
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
