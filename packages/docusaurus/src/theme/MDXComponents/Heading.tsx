import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type { Props } from '@theme/MDXComponents/Heading';
import clsx from 'clsx';
import { type ReactNode } from 'react';

// Ejected from @docusaurus/theme-classic's Heading component to drop the
// "hash-link" permalink anchor: headings are already reachable via their
// `id` (e.g. from sidebar_anchors), so the extra <a> per heading is redundant.
// The sticky-navbar scroll-margin compensation was dropped too: the navbar
// in this theme is not sticky, so there is nothing to compensate for.
export default function MDXHeading({ as: As, id, children, className, ...props }: Props): ReactNode {
  const brokenLinks = useBrokenLinks();
  const n = (As as string).replace('h', '');
  const gapClass = As === 'h1' || As === 'h2' ? 'rvo-heading--gap-sm' : 'rvo-heading--gap-xs';
  const headingClass = clsx(`utrecht-heading-${n}`, 'rvo-heading', `rvo-heading--margin-${n}`, gapClass, className);

  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return (
      <As className={headingClass} id={undefined} {...props}>
        <div className="rvo-heading__content">{children}</div>
      </As>
    );
  }

  brokenLinks.collectAnchor(id);

  return (
    <As className={headingClass} id={id} {...props}>
      <div className="rvo-heading__content">{children}</div>
    </As>
  );
}
