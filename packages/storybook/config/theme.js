import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { create } from '@storybook/theming/create';

// For more info on Storybook theming and an overview of all options:
// https://storybook.js.org/docs/react/configure/theming
export default create({
  base: 'light',
  colorPrimary: designTokens.nlRvoColorHemelblauw,
  colorSecondary: designTokens.nlRvoColorHemelblauwTint1,

  // UI
  appContentBg: `${designTokens.nlRvoColorWit}`,
  textColor: `${designTokens.nlRvoColorGrijs7}`,

  // Typography
  fontBase: `${designTokens.nlRvoFontSansSerifFontFamily}, ${designTokens.nlRvoFontSansSerifFallbackFontFamily}`,
  fontCode: 'monospace',
  fontSize: '100%',

  brandTitle: 'NL Design System: RVO',
  brandUrl: 'https://www.rvo.nl',
  brandImage: 'https://www.rvo.nl/assets/logos/logo-nl-nowhitespace.svg',
});
