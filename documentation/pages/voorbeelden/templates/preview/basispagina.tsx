/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Footer, Header, Heading, LayoutFlow } from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../../demopages/common/defaultSecondaryFooterItems';

export default function BasispaginaPage(): ReactElement {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <LayoutFlow gap="3xl">
        <LayoutFlow gap="xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
            <Heading type="h1">H1 heading</Heading>
          </main>
        </LayoutFlow>

        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </div>
  );
}
