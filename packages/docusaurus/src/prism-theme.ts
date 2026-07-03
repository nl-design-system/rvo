/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */

import type { PrismTheme } from 'prism-react-renderer';

// Custom Prism theme using RVO huisstijl tokens only.
// All colors verified against grijs-050 (#F8FAFC) background:
// grijs-700 #334155 → 9.90:1   grijs-600 #475569 → 7.24:1
// rood      #D51B1E → 5.01:1   violet    #a90061 → 7.02:1
// donkerblauw #01689b → 5.81:1
export const rvoLightTheme: PrismTheme = {
  plain: {
    color: '#334155', // grijs-700
    backgroundColor: '#F8FAFC', // grijs-050
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#475569', // grijs-600
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#D51B1E', // rood
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#334155', // grijs-700
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: '#01689b', // donkerblauw
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#01689b', // donkerblauw
      },
    },
    {
      types: ['function', 'deleted'],
      style: {
        color: '#D51B1E', // rood
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#a90061', // violet
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#a90061', // violet — HTML-elementen, onderscheiden van attr-name (donkerblauw)
      },
    },
  ],
};
