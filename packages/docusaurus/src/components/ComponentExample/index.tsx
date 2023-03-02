import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExpandableText } from '@nl-rvo/components';
import { Link } from '@nl-rvo/components';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import { useMemo } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { serialize } from '../../utils/react-serialize';
import styles from './styles.module.css';

function formatHTML(children) {
  return prettier
    .format(ReactDOMServer.renderToStaticMarkup(children), {
      parser: 'babel',
      plugins: [prettierBabel],
    })
    .replace(/\{" "\}/gm, ' ')
    .replace(/(;)[^;]*$/g, '');
}

const ComponentExample = ({ children, minHeight }) => {
  const serialized = useMemo(() => encodeURIComponent(serialize(children)), [children]);
  const previewLink = `${useDocusaurusContext().siteConfig.baseUrl}preview?${serialized}`;

  // On the server side, using renderToStaticMarkup inside useMemo results in a bug
  let html;
  if (typeof window !== 'undefined') {
    html = useMemo(() => formatHTML(children), [children]);
  } else {
    html = formatHTML(children);
  }

  return (
    <div className={styles.componentExample}>
      <div className={styles.componentContainer} style={{ minHeight }}>
        {children}
      </div>
      <div className={clsx(styles.infoContainer, 'rvo-layout-row')}>
        <ExpandableText title="Voorbeeld HTML" content={<CodeBlock language="html">{html}</CodeBlock>} />
        <Link
          className={styles.openInNewTabLink}
          content="Open in nieuwe tab"
          href={previewLink}
          target="_blank"
          showIcon="after"
          icon="externe-link"
        />
      </div>
    </div>
  );
};

export default ComponentExample;
