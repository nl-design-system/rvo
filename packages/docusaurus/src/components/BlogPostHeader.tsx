import Heading from '@theme/Heading';
import React from 'react';
import type { ReactElement } from 'react';

type BlogPostHeaderProps = {
  title: string;
  author: string;
  date: string;
};

export default function BlogPostHeader({ title, author, date }: BlogPostHeaderProps): ReactElement {
  return (
    <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md rvo-padding-block-start--xl">
      <div>
        <Heading as="h1" className="utrecht-heading-1 rvo-heading rvo-heading--gap-sm">
          {title}
        </Heading>

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
              <span className="rvo-text--sm rvo-text--bold">{author}</span>
              <span className="rvo-text--sm rvo-text--grijs-600">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
