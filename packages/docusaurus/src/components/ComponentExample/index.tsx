import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExpandableText } from '@nl-rvo/components';
import { Link } from '@nl-rvo/components';
import CodeBlock from '@theme/CodeBlock';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import { useMemo } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { serialize } from '../../utils/react-serialize';
import styles from './styles.module.css';

const ComponentExample = ({ children }) => {
  const serialized = useMemo(() => encodeURIComponent(serialize(children)), [children]);
  const previewLink = `${useDocusaurusContext().siteConfig.baseUrl}preview?${serialized}`;

  const html = useMemo(() => {
    return prettier
      .format(ReactDOMServer.renderToStaticMarkup(children), {
        parser: 'babel',
        plugins: [prettierBabel],
      })
      .replace(/\{" "\}/gm, ' ')
      .replace(/(;)[^;]*$/g, '');
  }, [children]);

  return (
    <div className={styles.componentExample}>
      <div className={styles.infoContainer}>
        <Link content="Open voorbeeld in een nieuwe tab" href={previewLink} target="_blank" />
      </div>
      <div className={styles.componentContainer}>{children}</div>
      <div className={styles.infoContainer}>
        <ExpandableText title="HTML" content={<CodeBlock language="html">{html}</CodeBlock>} />
      </div>
    </div>
  );
};

export default ComponentExample;
