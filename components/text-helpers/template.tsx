/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import './index.scss';

export const TextHelpers: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <p>De volgende helperklassen kunnen optioneel worden gebruikt voor tekst:</p>
      <p className="rvo-text--subtle">Gebruik .rvo-text--subtle voor subtiele tekst</p>
      <p className="rvo-text--sm">Gebruik .rvo-text--sm voor kleine tekst</p>
      <p className="rvo-text--md">Gebruik .rvo-text--md voor middelgrote tekst</p>
      <p className="rvo-text--lg">Gebruik .rvo-text--lg voor grote tekst</p>
      <p className="rvo-text--xl">Gebruik .rvo-text--xl voor extra grote tekst</p>
      <p className="rvo-text--error">Gebruik .rvo-text--error voor fouttekst</p>
      <p className="rvo-text--bold">Gebruik .rvo-text--bold voor vetgedrukte tekst</p>
      <p className="rvo-text--italic">Gebruik .rvo-text--italic voor cursieve tekst</p>
    </div>
  );
};

export default TextHelpers;
