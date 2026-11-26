/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  FormField,
  Grid,
  MaxWidthLayout,
  ActionGroup,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { useIsDesktop } from './useIsDesktop';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

export default function ZaakgegevensPage(): ReactElement {
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
                      state: 'doing',
                      label: 'Zaakgegevens',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'incomplete',
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
                      label: 'MVO',
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
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                        role="img"
                        aria-label="Terug"
                      ></span>
                      Terug naar Uw onderneming
                    </a>
                    <Heading type="h1">Zaakgegevens</Heading>
                    <p className="rvo-text--no-margins">
                      Geef hieronder, door middel van een begin- en einddatum, de periode aan waarbinnen u verwacht de
                      coaching te volgen. Er mag pas met de coaching gestart worden na het indienen van de aanvraag.
                    </p>
                  </div>
                  <Fieldset legend="">
                    <FormField
                      id="geef-uw-aanvraag-een-toepasselijke-zaakn"
                      label="Geef uw aanvraag een toepasselijke zaaknaam"
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField
                      id="startdatum-van"
                      label="Startdatum (van)"
                      helperText="Geef hier de begindatum van uw coachingstraject op."
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField
                      id="einddatum-t-m"
                      label="Einddatum (t/m)"
                      helperText="Geef hier de einddatum van uw coachingstraject op."
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField
                      id="voor-export-naar-welk-land-wilt-u-coachi"
                      label="Voor export naar welk land wilt u coaching ontvangen?"
                      helperText="U kunt hier één land noemen, niet Nederland. Als u meerderde doellanden heeft, maakt u dan een keuze."
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField
                      id="bedrag"
                      label="Heeft u, de groep of fiscale eenheid reeds het maximale subsidiebedrag van € 6.500 per mkb-onderneming in dit kalenderjaar ontvangen?"
                      expandableHelperText={{ title: 'Meer uitleg' }}
                      helperText="U kunt maximaal € 6.500 SIB subsidie per kalenderjaar ontvangen. Dit betekent dat u in één kalenderjaar verschillende onderdelen van SIB mag aanvragen en de subsidie kunt stapelen tot dit maximum bedrag. Zie voor de voorwaarden en subsidiebedragen <a href='#' class='rvo-link rvo-link--donkerblauw'>Support International Business (SIB) (rvo.nl)</a>"
                    >
                      <FormField.RadioButtonGroup
                        name="bedrag"
                        options={[
                          { id: 'bedrag-ja', label: 'Ja' },
                          { id: 'bedrag-nee', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <FormField id="welke-kansen-ziet-u-in-dit-land" label="Welke kansen ziet u in dit land?">
                      <FormField.TextArea />
                    </FormField>
                    <FormField id="actief" label="Bent u al actief in dit doelland?">
                      <FormField.RadioButtonGroup
                        name="actief"
                        options={[
                          { id: 'actief-a', label: 'Ja' },
                          { id: 'actief-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <FormField
                      id="export"
                      label="Gaat u exporteren met een eigen product of dienst?"
                      helperText="Het gaat om zelfgeproduceerde of zelfontwikkelde goederen en/of diensten en niet om ingekochte goederen en/of diensten die ongewijzigd worden doorverkocht. U komt alleen in aanmerking voor SIB als u wilt gaan exporteren met een eigen product of dienst. "
                    >
                      <FormField.RadioButtonGroup
                        name="export"
                        options={[
                          { id: 'export-a', label: 'Ja' },
                          { id: 'export-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <FormField
                      id="capaciteit"
                      label="Beschikt u over capaciteit/financiële middelen/etc om structureel internationaal actief te worden en verdere stappen te kunnen nemen?"
                    >
                      <FormField.RadioButtonGroup
                        name="capaciteit"
                        options={[
                          { id: 'capaciteit-a', label: 'Ja' },
                          { id: 'capaciteit-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <FormField id="nlmarkt" label="Bent u met uw product of dienst al actief op de Nederlandse markt?">
                      <FormField.RadioButtonGroup
                        name="nlmarkt"
                        options={[
                          { id: 'nlmarkt-a', label: 'Ja' },
                          { id: 'nlmarkt-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                  </Fieldset>
                  <ActionGroup>
                    <a
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story"
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
