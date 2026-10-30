import useBrokenLinks from '@docusaurus/useBrokenLinks';
import clsx from 'clsx';
import type { Props } from '@theme/Heading';
import { type ReactNode } from 'react';

export default function Heading({ as: As, id, children, className, ...props }: Props): ReactNode {
  const brokenLinks = useBrokenLinks();
  const n = (As as string).replace('h', '');
  const gapClass = As === 'h1' || As === 'h2' ? 'rvo-heading--gap-sm' : 'rvo-heading--gap-xs';
  const headingClass = clsx(`utrecht-heading-${n}`, 'rvo-heading', `rvo-heading--margin-${n}`, gapClass, className);

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
