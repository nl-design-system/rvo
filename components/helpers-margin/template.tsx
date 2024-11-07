/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import LayoutFlow from '../layout-flow/template';
import './index.scss';

const BorderedBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ border: 'solid 1px var(--rvo-color-grijs-200)' }}>{children}</div>
);

export const MarginHelpers: React.FC = () => {
  return (
    <LayoutFlow className="rvo-margin-sm">
      <LayoutFlow>
        <p>De volgende helperklassen kunnen optioneel worden gebruikt voor margins aan alle kanten:</p>
        <BorderedBox>
          <div className="rvo-margin-2xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-2xs</strong>: Box met 2xs margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-xs</strong>: Box met xs margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-sm" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-sm</strong>: Box met sm margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-md</strong>: Box met md margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-lg" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-lg</strong>: Box met lg margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-xl</strong>: Box met xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-2xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-2xl</strong>: Box met 2xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-3xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-3xl</strong>: Box met 3xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-4xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-4xl</strong>: Box met 4xl margin aan alle kanten
          </div>
        </BorderedBox>
      </LayoutFlow>
      <LayoutFlow>
        <p>
          De volgende helperklassen kunnen optioneel worden gebruikt voor margins in sizes 3xs, 2xs, xs, sm, md, lg, xl,
          2xl en 3xl aan een kant:
        </p>
        <BorderedBox>
          <div className="rvo-margin-inline-start-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-inline-start-md</strong>: Box met md margin aan de linkerkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-inline-end-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-inline-end-md</strong>: Box met md margin aan de rechterkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-block-start-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-block-start-md</strong>: Box met md margin aan de bovenkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-block-end-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-margin-block-end-md</strong>: Box met md margin aan de onderkant
          </div>
        </BorderedBox>
      </LayoutFlow>
    </LayoutFlow>
  );
};

export default MarginHelpers;
