import React from 'react';
import validateHTML from './validateHTML';

// Parse provided content markup (either as a string, HTML string, React node or React children)
const parseContentMarkup = (
  content,
  props: React.ComponentProps<any> | undefined = undefined,
): string | React.ReactNode => {
  if (typeof content === 'string' && content.length && validateHTML(content)) {
    return <div {...props} dangerouslySetInnerHTML={{ __html: content }}></div>;
  } else if (props) {
    return <div {...props}>{content}</div>;
  } else {
    return content;
  }
};

export default parseContentMarkup;
