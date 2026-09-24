import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import ComponentExample from '@site/src/components/ComponentExample';
import * as RVO from '@nl-rvo/component-library-react';

export default {
    ...MDXComponents,
    ComponentExample,
    Accordion: RVO.Accordion || RVO.default?.Accordion, 
    StatusIndicator: RVO.StatusIndicator || RVO.default?.StatusIndicator, 
};
