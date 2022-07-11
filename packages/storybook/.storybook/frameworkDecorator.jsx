import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import * as ReactDOMServer from 'react-dom/server';

const frameworkDecorator = (story) => {
  let storyContent = story();
  if (typeof storyContent !== 'string') {
    storyContent = ReactDOMServer.renderToStaticMarkup(story());
  }
  storyContent.replace(/\;$/, '');
  return `<div id="story" style="font-family: ${designTokens.rvoFontSansSerifFontFamily}">${storyContent}</div>`;
};

export default () => frameworkDecorator;
