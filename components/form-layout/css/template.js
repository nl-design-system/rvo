/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/assets/images/logo.svg';
import * as designTokens from '@nl-rvo/design-tokens/dist';

export const FormLayout = () => {
  return `<div class="rvo-form-layout">Deze container heeft een maximale breedte van ${designTokens.rvoFormLayoutMaxWidth} en dient gebruikt te worden voor formulieren.</div>`;
};
