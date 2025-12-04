import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExpandableContent, Link } from '@nl-rvo/components';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import espreeParser from 'prettier/parser-espree';
import htmlParser from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import React, { useEffect, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styles from './styles.module.css';

export async function formatHTML(children) {
  try {
    // React always outputs compressed HTML, so we force line breaks
    const raw = ReactDOMServer.renderToStaticMarkup(<>{children}</>);
    const forced = raw.replace(/></g, '>\n<');

    const formatted = await prettier.format(forced, {
      parser: 'html',
      plugins: [htmlParser, espreeParser],
    });

    return formatted.trim();
  } catch (err) {
    console.error('formatHTML failed:', err);
    return '<!-- Formatting error -->';
  }
}

const ComponentExample = ({ children, minHeight, storyName, args }) => {
  const { siteConfig } = useDocusaurusContext();
  const isDevelopment = process.env.NODE_ENV === 'development';

  const baseUrl = isDevelopment ? 'http://localhost:6006/' : siteConfig.baseUrl.replace('/docs', '');

  const argsParam = args
    ? `&args=${Object.entries(args)
        .map(([key, value]) => `${key}:${encodeURIComponent(String(value))}`)
        .join(',')}`
    : '';

  const previewLink = `${baseUrl}iframe.html?id=${storyName}&viewMode=story${argsParam}`;

  const [html, setHtml] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    (async () => {
      const result = await formatHTML(children);
      setHtml(result);
    })();
  }, [children]);

  return (
    <div className={clsx(styles.componentExample, 'component-example')}>
      <div className={styles.componentContainer} style={{ minHeight }}>
        {children}
      </div>

      <div className={clsx(styles.infoContainer, 'rvo-layout-row')}>
        <ExpandableContent title="Voorbeeld HTML">
          <CodeBlock language="html">{html || '<!-- HTML wordt geladen -->'}</CodeBlock>
        </ExpandableContent>

        {storyName && (
          <Link
            className={styles.openInNewTabLink}
            content="Open in nieuwe tab"
            href={previewLink}
            target="_blank"
            showIcon="after"
            icon="externe-link"
          />
        )}
      </div>
    </div>
  );
};

export default ComponentExample;
