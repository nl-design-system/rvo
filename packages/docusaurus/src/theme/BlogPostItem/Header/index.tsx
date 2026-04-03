import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import React from 'react';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

export default function BlogPostItemHeader({ className }: { className?: string }): ReactElement {
  return (
    <main className="rvo-max-width-layout">
      <div>
        <div className={className}>
          <BlogPostItemHeaderTitle className="utrecht-heading-1 rvo-heading rvo-heading--gap-sm" />
        </div>

        <div className="rvo-margin-block-start--sm rvo-margin-block-end--xl">
          <div className="rvo-layout-row rvo-layout-align-items-center rvo-layout-gap--sm">
            <span
              className="rvo-bg--lichtblauw-150 rvo-padding-block-start--xs rvo-padding-block-end--xs rvo-padding-inline-start--xs rvo-padding-inline-end--xs"
              aria-hidden="true"
              style={{ borderRadius: '50%', display: 'inline-flex', alignItems: 'center' }}
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--hemelblauw"
                role="img"
                aria-label="User"
              />
            </span>
            <div className="rvo-layout-column rvo-layout-gap--0">
              <BlogPostItemHeaderAuthors className={styles.authorsInline} />
              <BlogPostItemHeaderInfo className={styles.dateInline} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
