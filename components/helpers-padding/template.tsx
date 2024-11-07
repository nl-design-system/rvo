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

export const PaddingHelpers: React.FC = () => {
  return (
    <LayoutFlow className="rvo-padding--sm">
      <LayoutFlow>
        <p>De volgende helperklassen kunnen optioneel worden gebruikt voor paddings aan alle kanten:</p>
        <BorderedBox>
          <div className="rvo-padding--2xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--2xs"</strong>
            <br />
            Box met 2xs padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--xs"</strong>
            <br />
            Box met xs padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--sm" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--sm"</strong>
            <br />
            Box met sm padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--md"</strong>
            <br />
            Box met md padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--lg" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--lg"</strong>
            <br />
            Box met lg padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--xl"</strong>
            <br />
            Box met xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--2xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--2xl"</strong>
            <br />
            Box met 2xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--3xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--3xl"</strong>
            <br />
            Box met 3xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding--4xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding--4xl"</strong>
            <br />
            Box met 4xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-padding--custom"
            style={{ '--space': '40px', backgroundColor: 'var(--rvo-color-grijs-200)' } as React.CSSProperties}
          >
            <strong>
              class="rvo-padding--custom"
              <br />
              style="--space: 40px;"
            </strong>
            <br />
            Box met hardcoded 40px padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-padding--custom"
            style={
              {
                '--space': 'calc(var(--rvo-space-md) + var(--rvo-space-xl))',
                backgroundColor: 'var(--rvo-color-grijs-200)',
              } as React.CSSProperties
            }
          >
            <strong>
              class="rvo-padding--custom"
              <br />
              style="--space: calc(var(--rvo-space-md) + var(--rvo-space-xl));"
            </strong>
            <br />
            Box met 40px padding aan alle kanten (berekend met behulp van --rvo-space tokens)
          </div>
        </BorderedBox>
      </LayoutFlow>
      <LayoutFlow>
        <p>
          De volgende helperklassen kunnen optioneel worden gebruikt voor paddings in sizes 3xs, 2xs, xs, sm, md, lg,
          xl, 2xl en 3xl aan een kant:
        </p>
        <BorderedBox>
          <div className="rvo-padding-inline-start--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding-inline-start--md"</strong>
            <br />
            Box met md padding aan de linkerkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-inline-end--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding-inline-end--md"</strong>
            <br />
            Box met md padding aan de rechterkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-block-start--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding-block-start--md"</strong>
            <br />
            Box met md padding aan de bovenkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-block-end--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-padding-block-end--md"</strong>
            <br />
            Box met md padding aan de onderkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-padding-block-start--custom rvo-padding-inline-start--custom"
            style={
              {
                '--space-block-start': '40px',
                '--space-inline-start': '40px',
                backgroundColor: 'var(--rvo-color-grijs-200)',
              } as React.CSSProperties
            }
          >
            <strong>
              class="rvo-padding-block-start--custom rvo-padding-inline-start--custom"
              <br />
              style="--space-block-start: 40px; --space-inline-start: 40px;
            </strong>
            <br />
            Box met 40px custom padding aan de linker en bovenkant.
          </div>
        </BorderedBox>
      </LayoutFlow>
    </LayoutFlow>
  );
};

export default PaddingHelpers;
