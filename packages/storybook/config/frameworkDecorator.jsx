import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { useEffect, useMemo } from '@storybook/client-api';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const frameworkDecorator = (story, context) => {
  const children = story();
  if (typeof children === 'string') {
    return `<div id="story" style="font-family: ${designTokens.rvoFontSansSerifFontFamily}">${children}</div>`;
  } else {
    // React
    const node = useMemo(() => document.createElement('div'), [context.kind, context.name]);
    const root = useMemo(() => createRoot(node), [node]);
    useEffect(() => () => root.unmount(), [root]);
    root.render(<StrictMode>{story()}</StrictMode>);
    return node;
  }
};

export default () => frameworkDecorator;
