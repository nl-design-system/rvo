/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */

import { translate } from '@docusaurus/Translate';
import { useHistory } from '@docusaurus/router';
import { SkipToContentFallbackId } from '@docusaurus/theme-common';
import { useLocationChange } from '@docusaurus/theme-common/internal';
import React, { type ReactNode, useCallback, useRef } from 'react';

function programmaticFocus(el: HTMLElement): void {
  el.setAttribute('tabindex', '-1');
  el.focus();
  el.removeAttribute('tabindex');
}

export default function SkipToContent(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const { action } = useHistory();

  const label = translate({
    id: 'theme.common.skipToMainContent',
    message: 'Ga naar hoofdinhoud',
    description:
      'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',
  });

  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Focus the content wrapper directly after the navbar rather than main:first-of-type,
    // so page content in <header> sections (e.g. the homepage hero) is not skipped.
    const target = document.getElementById(SkipToContentFallbackId);
    if (target) {
      programmaticFocus(target);
    }
  }, []);

  useLocationChange(({ location }) => {
    if (containerRef.current && !location.hash && action === 'PUSH') {
      programmaticFocus(containerRef.current);
    }
  });

  return (
    <div ref={containerRef} role="region" aria-label={label}>
      {/* eslint-disable-next-line @docusaurus/no-html-links */}
      <a href={`#${SkipToContentFallbackId}`} onClick={onClick} className="rvo-skip-link">
        {label}
      </a>
    </div>
  );
}
