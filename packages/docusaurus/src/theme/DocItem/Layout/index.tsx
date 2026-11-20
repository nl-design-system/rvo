import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Link, List } from '@nl-rvo/component-library-react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useWindowSize } from '@docusaurus/theme-common';
import ContentVisibility from '@theme/ContentVisibility';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import type { Props } from '@theme/DocItem/Layout';
// import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? <DocItemTOCDesktop /> : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

const DEFAULT_FIGMA_URL =
  'https://www.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=484-13305';

function ComponentLinks() {
  const { frontMatter } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const storybook = frontMatter.storybook as string | undefined;

  if (!storybook) {
    return null;
  }

  const base = (siteConfig.customFields?.storybookIframeBase as string) ?? '/rvo';
  const storybookUrl = `${base}/?path=/${storybook}`;
  const figmaUrl = (frontMatter.figma as string | undefined) ?? DEFAULT_FIGMA_URL;

  return (
    <div className={styles.componentLinks}>
      <List type="unordered" bulletType="icon" bulletIcon="option-1">
        <Link href={storybookUrl} noUnderline target="_blank" rel="noopener noreferrer">
          Bekijk dit component in Storybook
        </Link>
        <Link href={figmaUrl} noUnderline target="_blank" rel="noopener noreferrer">
          Bekijk dit component in Figma
        </Link>
      </List>
    </div>
  );
}

export default function DocItemLayout({ children }: Props): ReactElement {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <ComponentLinks />
            <DocItemFooter />
          </article>
          {/* <DocItemPaginator /> */}
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
