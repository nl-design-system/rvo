import Link from '@docusaurus/Link';
import { useAnchorTargetClassName } from '@docusaurus/theme-common';
import clsx from 'clsx';
import type { Props } from '@theme/MDXComponents/A';
import { type ReactNode } from 'react';

export default function MDXA(props: Props): ReactNode {
  // Footnote anchor targets (id without href) should not get rvo-link styling
  const anchorTargetClassName = useAnchorTargetClassName(props.id);
  const isLink = !!props.href;

  return <Link {...props} className={clsx(anchorTargetClassName, isLink && 'rvo-link', props.className)} />;
}
