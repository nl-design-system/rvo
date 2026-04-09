import Link from '@docusaurus/Link';
import type { Props } from '@theme/BlogListPage';
import BlogListPaginator from '@theme/BlogListPaginator';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import React from 'react';
import type { ReactElement } from 'react';

function formatDate(dateString?: string): string {
  if (!dateString) {
    return '';
  }

  try {
    return new Intl.DateTimeFormat('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

export default function BlogListPage({ metadata, items }: Props): ReactElement {
  return (
    <Layout title="Blog" description="Updates over het ROOS Design System">
      <main>
        <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--none rvo-padding-block-start--2xl rvo-padding-block-end--2xl">
          <div className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
            <div className="rvo-layout-column rvo-layout-gap--md">
              <Heading as="h1" className="utrecht-heading-1 rvo-heading rvo-heading--gap-sm">
                Blog
              </Heading>
              <div className="rvo-layout-grid-container">
                <div className="rvo-layout-grid rvo-layout-gap--lg rvo-layout-grid-columns--three">
                  {items.map(({ content }) => {
                    const { metadata: postMetadata, frontMatter } = content;
                    const authorName = postMetadata.authors?.[0]?.name || 'Team ROOS';
                    const date = formatDate(postMetadata.date);
                    const description = frontMatter.description || postMetadata.description || '';

                    return (
                      <div
                        key={postMetadata.permalink}
                        className="rvo-card rvo-card--padding--lg rvo-bg--lichtblauw-150"
                      >
                        <div className="rvo-card__content">
                          <Heading
                            as="h3"
                            className="utrecht-heading-3 rvo-heading rvo-heading--margin-3 rvo-heading--gap-xs"
                          >
                            <Link
                              to={postMetadata.permalink}
                              className="rvo-link rvo-card__link rvo-link--no-underline rvo-text--lintblauw rvo-card__full-card-link"
                            >
                              {postMetadata.title}
                            </Link>
                          </Heading>
                          <p className="rvo-text--md rvo-margin-block-start--none">{description}</p>
                          <div className="rvo-layout-row rvo-layout-align-items-start rvo-layout-gap--sm">
                            <span
                              className="rvo-bg--wit rvo-padding-block-start--xs rvo-padding-block-end--xs rvo-padding-inline-start--xs rvo-padding-inline-end--xs"
                              aria-hidden="true"
                              style={{
                                borderRadius: '50%',
                                display: 'inline-flex',
                                alignItems: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <span
                                className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--hemelblauw"
                                role="img"
                                aria-label="User"
                              />
                            </span>
                            <div className="rvo-layout-column rvo-layout-gap--0">
                              <span className="rvo-text--sm rvo-text--bold">{authorName}</span>
                              <span className="rvo-text--sm rvo-text--grijs-600">{date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <BlogListPaginator metadata={metadata} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
