import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExpandableText, Link } from '@nl-rvo/components';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import parserBabel from 'prettier/plugins/babel';
import parserEstree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';
import { useEffect, useMemo, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { serialize } from '../../utils/react-serialize';
import styles from './styles.module.css';

async function formatHTML(children) {
  return (
    await prettier.format(ReactDOMServer.renderToStaticMarkup(children), {
      parser: 'babel',
      plugins: [parserBabel, parserEstree],
    })
  )
    .replace(/\{" "\}/gm, ' ')
    .replace(/(;)[^;]*$/g, '');
}

const ComponentExample = ({ children, minHeight }) => {
  const serialized = useMemo(() => encodeURIComponent(serialize(children)), [children]);
  const previewLink = `${useDocusaurusContext().siteConfig.baseUrl}preview?${serialized}`;

  // On the server side, using renderToStaticMarkup inside useMemo results in a bug
  const [html, setHtml] = useState(null);
  useEffect(() => {
    const fetchHtml = async () => {
      const result = await formatHTML(children);
      setHtml(result);
    };

    fetchHtml();
  }, [children]);

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
