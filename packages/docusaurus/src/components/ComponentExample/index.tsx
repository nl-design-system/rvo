import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@nl-rvo/components/link/css/template';
import { useMemo } from 'react';
import { serialize } from '../../utils/react-serialize';
import styles from './styles.module.css';

const ComponentExample = ({ children }) => {
  const serialized = useMemo(() => encodeURIComponent(serialize(children)), [children]);
  const previewLink = `${useDocusaurusContext().siteConfig.baseUrl}preview?${serialized}`;

  return (
    <div className={styles.componentExample}>
      <div className={styles.infoContainer}>
        <Link content="Open voorbeeld in een nieuwe tab" url={previewLink} target="_blank" />
      </div>
      <div className={styles.componentContainer}>{children}</div>
      <div className={styles.infoContainer}>HTML</div>
    </div>
  );
};

export default ComponentExample;
