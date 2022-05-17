import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { useEffect, useMemo } from '@storybook/client-api';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const frameworkDecorator = (story, context) => {
  const children = story();
  if (typeof children === 'string') {
    return `<div id="story" style="font-family: ${designTokens.rvoFontSansSerifFontFamily}">${children}</div>`;
  } else {
    // React
    const node = useMemo(() => document.createElement('div'), [context.kind, context.name]);
    useEffect(() => {
      // Render the story in the node
      ReactDOM.render(<StrictMode>{story()}</StrictMode>, node);
      // Make sure to unmount the component at node when removed from screen
      return () => ReactDOM.unmountComponentAtNode(node);
    }, [node]);

    return node;
  }
};

export default () => frameworkDecorator;
