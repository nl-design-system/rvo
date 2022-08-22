/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import * as designTokens from '@nl-rvo/design-tokens/dist';
import React from 'react';
// Remove these
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';

export const FormLayout: React.FC = () => {
  return (
    <div className="rvo-form-layout">
      Deze gecentreerde container heeft een maximale breedte van {designTokens.rvoLayoutMaxWidthSm} en dient gebruikt te
      worden voor formulieren.
    </div>
  );
};
