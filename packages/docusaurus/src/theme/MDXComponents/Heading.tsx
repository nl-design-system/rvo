import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type { Props } from '@theme/MDXComponents/Heading';
import React, { type ReactNode } from 'react';

// Ejected from @docusaurus/theme-classic's Heading component to drop the
// "hash-link" permalink anchor: headings are already reachable via their
// `id` (e.g. from sidebar_anchors), so the extra <a> per heading is redundant.
// The sticky-navbar scroll-margin compensation was dropped too: the navbar
// in this theme is not sticky, so there is nothing to compensate for.
export default function MDXHeading({ as: As, id, ...props }: Props): ReactNode {
  const brokenLinks = useBrokenLinks();

  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  brokenLinks.collectAnchor(id);

  return <As {...props} id={id} />;
}
