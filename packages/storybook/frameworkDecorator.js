import * as ReactDOMServer from 'react-dom/server';

const frameworkDecorator = (story) => {
  let storyContent = story();
  if (typeof storyContent !== 'string') {
    return ReactDOMServer.renderToStaticMarkup(story());
  }
  return story();
};

export default frameworkDecorator;
