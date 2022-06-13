import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import * as ReactDOMServer from 'react-dom/server';

const frameworkDecorator = (story) => {
  let storyContent = story();
  if (typeof storyContent !== 'string') {
    storyContent = ReactDOMServer.renderToStaticMarkup(story());
  }
  return storyContent;
};

export default () => frameworkDecorator;
