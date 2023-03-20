import { useLocation } from '@docusaurus/router';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Heading } from '@nl-rvo/components';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const docusaurusContext = useDocusaurusContext();
  // Generate section title from url
  const location = useLocation();
  let sectionTitle = location.pathname
    .replace(docusaurusContext.siteConfig.baseUrl, '')
    .replace(/\/([^/]+)\/?$/g, '')
    .replace(/\//g, ' / ')
    .replace(/-/g, ' ');

  // Capitalize title
  sectionTitle = sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1);

  const showSectionTitle = false;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown', 'rvo-layout-column', 'rvo-layout-gap--lg')}>
      {syntheticTitle && (
        <header className="rvo-layout-column rvo-layout-gap--xs">
          {showSectionTitle && <div className={styles.sectionTitle}>{sectionTitle}</div>}
          <Heading type="h1" textContent={syntheticTitle} />
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
