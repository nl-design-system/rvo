import React from 'react';
import validateHTML from './validateHTML';

// Parse provided content markup (either as a string, HTML string, React node or React children)
const parseContentMarkup = (content): string | React.ReactNode => {
  if (typeof content === 'string' && content.length && validateHTML(content)) {
    return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
  } else {
    return content;
  }
};

export default parseContentMarkup;
