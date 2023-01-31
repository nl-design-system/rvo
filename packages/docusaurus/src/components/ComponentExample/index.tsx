import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExpandableText } from '@nl-rvo/components';
import { Link } from '@nl-rvo/components';
import { useMemo } from 'react';
import { serialize } from '../../utils/react-serialize';
import styles from './styles.module.css';

const ComponentExample = ({ children }) => {
  const serialized = useMemo(() => encodeURIComponent(serialize(children)), [children]);
  const previewLink = `${useDocusaurusContext().siteConfig.baseUrl}preview?${serialized}`;

  return (
    <div className={styles.componentExample}>
      <div className={styles.infoContainer}>
        <Link content="Open voorbeeld in een nieuwe tab" href={previewLink} target="_blank" />
      </div>
      <div className={styles.componentContainer}>{children}</div>
      <div className={styles.infoContainer}>
        <ExpandableText title="HTML" content={<>test</>} />
      </div>
    </div>
  );
};

export default ComponentExample;
