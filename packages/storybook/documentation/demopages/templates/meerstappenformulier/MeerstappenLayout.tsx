/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Footer, Grid, Header, MaxWidthLayout, MenuBar, ProgressTracker } from '@nl-rvo/component-library-react';
import type { ReactNode } from 'react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { useIsDesktop } from '../../common/useIsDesktop';
import { URL_CONTROLEREN, URL_STAP_1, URL_STAP_2, URL_STAP_3, URL_VOORDAT_U_BEGINT } from './urls';

export type MeerstappenStap = 'stap-1' | 'stap-2' | 'stap-3' | 'controleren';

const STAPPEN: { id: MeerstappenStap; label: string; link: string }[] = [
  { id: 'stap-1', label: 'Stap 1', link: URL_STAP_1 },
  { id: 'stap-2', label: 'Stap 2', link: URL_STAP_2 },
  { id: 'stap-3', label: 'Stap 3', link: URL_STAP_3 },
  { id: 'controleren', label: 'Controleren en versturen', link: URL_CONTROLEREN },
];

const getProgressSteps = (current: MeerstappenStap) => {
  const currentIndex = STAPPEN.findIndex((stap) => stap.id === current);
  return STAPPEN.map((stap, index) => ({
    state: (index < currentIndex ? 'completed' : index === currentIndex ? 'doing' : 'incomplete') as
      'completed' | 'doing' | 'incomplete',
    label: stap.label,
    link: stap.link,
    size: 'md' as const,
    line: (index === STAPPEN.length - 1 ? 'none' : 'straight') as 'none' | 'straight',
  }));
};

interface IMeerstappenLayoutProps {
  current: MeerstappenStap;
  children: ReactNode;
}

export const MeerstappenLayout = ({ current, children }: IMeerstappenLayoutProps) => {
  const isDesktop = useIsDesktop();

  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Naam formulier', link: URL_VOORDAT_U_BEGINT },
            { align: 'right', label: 'Hulp & Contact', link: '#' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Naam gebruiker', link: '#', icon: 'user' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
          horizontalRule={true}
        />
      </div>

      <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl rvo-padding-block-end--3xl">
        <Grid
          columns={isDesktop ? 'two' : 'one'}
          gap="2xl"
          division={isDesktop ? '1fr 3fr' : undefined}
          className="rvo-padding-inline-start--md rvo-padding-inline-end--md"
        >
          <aside>
            <ProgressTracker steps={getProgressSteps(current)} />
          </aside>
          <main>{children}</main>
        </Grid>
      </MaxWidthLayout>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />
    </div>
  );
};
