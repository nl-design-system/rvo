/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import LayoutFlow from '../../layout-flow/src/template';
import './index.scss';

const BorderedBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ border: 'solid 1px var(--rvo-color-grijs-200)' }}>{children}</div>
);

export const MarginHelpers: React.FC = () => {
  return (
    <LayoutFlow className="rvo-margin--sm">
      <LayoutFlow>
        <p>De volgende helperklassen kunnen optioneel worden gebruikt voor margins aan alle kanten:</p>
        <BorderedBox>
          <div className="rvo-margin--none" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--none"</strong>
            <br />
            Box zonder margin aan alle kanten, margin kan dus hiermee worden verwijderd van elementen.
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--3xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--3xs"</strong>
            <br />
            Box met 3xs margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--2xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--2xs"</strong>
            <br />
            Box met 2xs margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--xs"</strong>
            <br />
            Box met xs margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--sm" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--sm"</strong>
            <br />
            Box met sm margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--md"</strong>
            <br />
            Box met md margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--lg" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--lg"</strong>
            <br />
            Box met lg margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--xl"</strong>
            <br />
            Box met xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--2xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--2xl"</strong>
            <br />
            Box met 2xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--3xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--3xl"</strong>
            <br />
            Box met 3xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin--4xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin--4xl"</strong>
            <br />
            Box met 4xl margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-margin--custom"
            style={{ '--space': '40px', backgroundColor: 'var(--rvo-color-grijs-200)' } as React.CSSProperties}
          >
            <strong>
              class="rvo-margin--custom"
              <br />
              style="--space: 40px;"
            </strong>
            <br />
            Box met hardcoded 40px margin aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-margin--custom"
            style={
              {
                '--space': 'calc(var(--rvo-space-md) + var(--rvo-space-xl))',
                backgroundColor: 'var(--rvo-color-grijs-200)',
              } as React.CSSProperties
            }
          >
            <strong>
              class="rvo-margin--custom"
              <br />
              style="--space: calc(var(--rvo-space-md) + var(--rvo-space-xl));"
            </strong>
            <br />
            Box met 40px margin aan alle kanten (berekend met behulp van --rvo-space tokens)
          </div>
        </BorderedBox>
      </LayoutFlow>
      <LayoutFlow>
        <p>
          De volgende helperklassen kunnen optioneel worden gebruikt voor margins in sizes 3xs, 2xs, xs, sm, md, lg, xl,
          2xl en 3xl aan een kant:
        </p>
        <BorderedBox>
          <div className="rvo-margin-inline-start--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin-inline-start--md"</strong>
            <br />
            Box met md margin aan de linkerkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-inline-end--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin-inline-end--md"</strong>
            <br />
            Box met md margin aan de rechterkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-block-start--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin-block-start--md"</strong>
            <br />
            Box met md margin aan de bovenkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-margin-block-end--md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>class="rvo-margin-block-end--md"</strong>
            <br />
            Box met md margin aan de onderkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div
            className="rvo-margin-block-start--custom rvo-margin-inline-start--custom"
            style={
              {
                '--space-block-start': '40px',
                '--space-inline-start': '40px',
                backgroundColor: 'var(--rvo-color-grijs-200)',
              } as React.CSSProperties
            }
          >
            <strong>
              class="rvo-margin-block-start--custom rvo-margin-inline-start--custom"
              <br />
              style="--space-block-start: 40px; --space-inline-start: 40px;
            </strong>
            <br />
            Box met 40px custom margin aan de linker en bovenkant.
          </div>
        </BorderedBox>
      </LayoutFlow>
    </LayoutFlow>
  );
};

export default MarginHelpers;
