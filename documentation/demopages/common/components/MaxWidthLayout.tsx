import { MaxWidthLayout as MaxWidthLayoutSnippet } from '@nl-rvo/components/max-width-layout/css/template';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const MaxWidthLayout = ({ children, ...props }) => {
  const childrenMarkup = ReactDOMServer.renderToStaticMarkup(children);
  return <>{parse(MaxWidthLayoutSnippet({ ...props, content: childrenMarkup }))}</>;
};

MaxWidthLayout.propTypes = {
  children: PropTypes.node,
};

export default MaxWidthLayout;
