/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import LayoutFlow from '../layout-flow/template';
import './index.scss';

export const MarginHelpers: React.FC = () => {
  return (
    <LayoutFlow>
      <div style={{ border: '1px solid var(--rvo-color-grijs-200)' }}>
        <p>De volgende helperklassen kunnen optioneel worden gebruikt voor margins aan alle kanten:</p>
        <div className="rvo-margin-3xs">Box met 3xs margin aan alle kanten</div>
        <div className="rvo-margin-2xs">Box met 2xs margin aan alle kanten</div>
        <div className="rvo-margin-xs">Box met xs margin aan alle kanten</div>
        <div className="rvo-margin-sm">Box met sm margin aan alle kanten</div>
        <div className="rvo-margin-md">Box met md margin aan alle kanten</div>
        <div className="rvo-margin-lg">Box met lg margin aan alle kanten</div>
        <div className="rvo-margin-xl">Box met xl margin aan alle kanten</div>
        <div className="rvo-margin-2xl">Box met 2xl margin aan alle kanten</div>
        <div className="rvo-margin-3xl">Box met 3xl margin aan alle kanten</div>
        <div className="rvo-margin-4xl">Box met 4xl margin aan alle kanten</div>
      </div>
    </LayoutFlow>
  );
};

export default MarginHelpers;
