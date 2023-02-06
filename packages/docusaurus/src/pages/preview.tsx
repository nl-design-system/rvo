import { useLocation } from '@docusaurus/router';
import * as Components from '@nl-rvo/components';
import { deserialize } from '../utils/react-serialize';
import styles from './preview.module.css';

export default function Preview(): JSX.Element {
  const { search } = useLocation();
  if (!search) {
    return null;
  }

  const deserializedMarkup = deserialize(decodeURIComponent(search.slice(1)), { components: Components });
  return (
    <Components.MaxWidthLayout size="lg" className={styles.componentContainer}>
      {deserializedMarkup}
    </Components.MaxWidthLayout>
  );
}
