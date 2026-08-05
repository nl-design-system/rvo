import { Button } from '@nl-rvo/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Button',
  component: Button,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    controls: { disable: true },
    docusaurus: {
      link: 'button',
    },
  },
};

const hoverStyle = (kind: string) =>
  ({
    '--rvo-button-background-color': `var(--rvo-button-${kind}-hover-background-color)`,
    '--rvo-button-color': `var(--rvo-button-${kind}-hover-color)`,
    '--rvo-button-border-color': `var(--rvo-button-${kind}-hover-border-color)`,
    textDecoration: 'var(--rvo-button-hover-text-decoration)',
    textUnderlineOffset: 'var(--rvo-button-hover-text-underline-offset)',
  }) as unknown as React.CSSProperties;

const focusStyle = (kind: string) =>
  ({
    '--rvo-button-background-color': `var(--rvo-button-${kind}-focus-background-color)`,
    '--rvo-button-border-color': `var(--rvo-button-${kind}-focus-border-color)`,
    boxShadow: 'var(--_utrecht-focus-ring-box-shadow)',
    outlineColor: 'var(--utrecht-focus-outline-color)',
    outlineOffset: 'var(--utrecht-focus-outline-offset)',
    outlineStyle: 'var(--utrecht-focus-outline-style)',
    outlineWidth: 'var(--utrecht-focus-outline-width)',
  }) as unknown as React.CSSProperties;

const kindVariations = (kind: string, label: string) => (
  <React.Fragment key={kind}>
    <Button kind={kind as any} size="md" showIcon="no" label={`${label} medium`} />
    <Button kind={kind as any} size="md" showIcon="before" label={`${label} medium with icon before`} />
    <Button kind={kind as any} size="md" showIcon="after" label={`${label} medium with icon after`} />
    <Button kind={kind as any} size="sm" showIcon="no" label={`${label} small`} />
    <Button kind={kind as any} size="sm" showIcon="before" label={`${label} small with icon before`} />
    <Button kind={kind as any} size="sm" showIcon="after" label={`${label} small with icon after`} />
    <Button kind={kind as any} size="xs" showIcon="no" label={`${label} extra small`} />
    <Button kind={kind as any} size="xs" showIcon="before" label={`${label} extra small with icon before`} />
    <Button kind={kind as any} size="xs" showIcon="after" label={`${label} extra small with icon after`} />
    <Button kind={kind as any} size="md" showIcon="no" fullWidth label={`${label} full width`} />
    <Button kind={kind as any} size="md" showIcon="no" disabled label={`${label} disabled`} />
    <Button kind={kind as any} size="md" showIcon="no" busy label={`${label} busy`} />
    <Button kind={kind as any} size="md" showIcon="no" label={`${label} hover`} style={hoverStyle(kind)} />
    <Button kind={kind as any} size="md" showIcon="no" label={`${label} focus`} style={focusStyle(kind)} />
  </React.Fragment>
);

const kinds: [string, string][] = [
  ['primary', 'Primary button'],
  ['secondary', 'Secondary button'],
  ['tertiary', 'Tertiary button'],
  ['quaternary', 'Quaternary button'],
  ['warning-subtle', 'Warning subtle button'],
  ['warning', 'Warning button'],
];

const AllButtonsOverview = () => (
  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
    {kinds.map(([kind, label]) => kindVariations(kind, label))}
  </div>
);

export const ButtonVariantOverview = {
  render: AllButtonsOverview,
  name: 'Button variant overview',
};
