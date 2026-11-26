/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Grid,
  MaxWidthLayout,
  ActionGroup,
  Fieldset,
  FileInput,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  ProgressTracker,
  TextInput,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { useIsDesktop } from './useIsDesktop';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

export default function KostenPage(): ReactElement {
  const isDesktop = useIsDesktop();

  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutFlow gap="2xl">
        <LayoutFlow gap="xl">
          <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
            <MenuBar
              items={[
                {
                  label: 'SIB 2024: Coaching',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story',
                },
                { align: 'right', label: 'Hulp & Contact', link: '#' },
                { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
                { align: 'right', label: 'Boer Overveen B.V', link: '#', icon: 'user' },
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
                <ProgressTracker
                  steps={[
                    { state: 'start', label: 'SIB 2024: Coaching', link: '#', size: 'md', line: 'straight' },
                    {
                      state: 'completed',
                      label: 'Startpagina',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'completed',
                      label: 'Uw gegevens',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'completed',
                      label: 'Uw onderneming',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'completed',
                      label: 'Zaakgegevens',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'doing',
                      label: 'Kosten',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },

                    {
                      state: 'incomplete',
                      label: 'Uitvoerder coaching traject',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'incomplete',
                      label: 'Maatschappelijk verantwoord ondernemen',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'incomplete',
                      label: 'Ondertekening',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-ondertekening--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },

                    { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
                  ]}
                />
              </aside>

              <main>
                <LayoutFlow gap="xl">
                  <div>
                    <a
                      className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                        role="img"
                        aria-label="Terug"
                      ></span>
                      Terug naar Zaakgegevens
                    </a>
                    <Heading type="h1">Kosten voor inhuur</Heading>
                    <p className="rvo-text--no-margins">
                      U kunt hier de totale kosten voor de inhuur van een adviseur opgeven.
                    </p>
                  </div>
                  <Fieldset legend="">
                    <TextInput label="Totaalkosten" prefix="€"></TextInput>
                    <Heading type="h2" noMargins={true}>
                      Gespecificeerde offerte
                    </Heading>
                    <p className="rvo-text">
                      U kunt hier uw gespecificeerde offerte uploaden. In de offerte dienen de werkzaamheden en kosten
                      van de coach gespecificeerd te zijn. De offerte mag niet ouder zijn dan 3 maanden op het moment
                      van indiening.
                    </p>
                    <FileInput
                      label="Offertebestand"
                      warningText="Let op: Gebruik in de bestandsnaam alleen cijfers en letters."
                    ></FileInput>
                  </Fieldset>
                  <ActionGroup>
                    <a
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story"
                      className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
                    >
                      Opslaan en verder gaan
                    </a>
                  </ActionGroup>
                </LayoutFlow>
              </main>
            </Grid>
          </MaxWidthLayout>
        </LayoutFlow>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
}
