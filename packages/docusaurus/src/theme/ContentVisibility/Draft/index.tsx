/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { DraftBannerMessage, DraftBannerTitle } from '@docusaurus/theme-common';
import { Alert } from '@nl-rvo/component-library-react';
import type { Props } from '@theme/ContentVisibility/Draft';
import React, { type ReactNode } from 'react';

export default function Draft({ className }: Props): ReactNode {
  return (
    <Alert kind="warning" padding="md" className={className}>
      <strong>
        <DraftBannerTitle />
      </strong>
      <p>
        <DraftBannerMessage />
      </p>
    </Alert>
  );
}
