/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */

import { translate } from '@docusaurus/Translate';
import { useHistory } from '@docusaurus/router';
import { useLocationChange } from '@docusaurus/theme-common/internal';
import React, { type ReactNode, useRef } from 'react';

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

  useLocationChange(({ location }) => {
    if (containerRef.current && !location.hash && action === 'PUSH') {
      programmaticFocus(containerRef.current);
    }
  });

  return (
    <div ref={containerRef} role="region" aria-label={label}>
      {/* eslint-disable-next-line @docusaurus/no-html-links */}
      <a href="#main" className="rvo-skip-link">
        {label}
      </a>
    </div>
  );
}
