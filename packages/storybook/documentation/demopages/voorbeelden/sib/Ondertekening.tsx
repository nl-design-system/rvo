/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  FormField,
  Grid,
  MaxWidthLayout,
  ActionGroup,
  Alert,
  Checkbox,
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

export default function OndertekeningPage(): ReactElement {
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
                      state: 'completed',
                      label: 'Kosten',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },

                    {
                      state: 'completed',
                      label: 'Uitvoerder coaching traject',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'completed',
                      label: 'Maatschappelijk verantwoord ondernemen',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'doing',
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
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                        role="img"
                        aria-label="Terug"
                      ></span>
                      Terug naar Maatschappelijk verantwoord ondernemen
                    </a>
                    <Heading type="h1">Ondertekening</Heading>
                    <Heading type="h2">Verklaring De-minimissteun</Heading>
                    <p className="rvo-text--no-margins">
                      De Europese Commissie wil oneerlijke concurrentie voorkomen en staat staatssteun daarom normaal
                      niet toe. De overheid kan, zonder steunkader, soms toch - onder strenge voorwaarden en tot een
                      bepaald maximum - steun bieden aan bedrijven. Dit heet 'de-minimissteun'. Ook deze
                      subsidieregeling valt hieronder.{' '}
                      <a href="#" className="rvo-link">
                        Meer uitleg over de-minimissteun
                      </a>
                    </p>
                  </div>
                  <Fieldset legend="Uw bedrijf en het doel van de steun ">
                    <FormField
                      id="eerder"
                      label="Is er al eerder steun verleend door een overheidsorganisatie voor dezelfde kosten als waar u nu steun voor aanvraagt?"
                    >
                      <FormField.RadioButtonGroup
                        name="eerder"
                        options={[
                          { id: 'eerder-a', label: 'Ja' },
                          { id: 'eerder-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <FormField
                      id="export"
                      label="Vraagt u om exportsteun?"
                      helperText="Exportsteun is bijvoorbeeld de financiering van exportwerkzaamheden of steun voor de oprichting of exploitatie van een distributienetwerk. Subsidies voor deelname aan handelsbeurzen of voor onderzoek naar nieuwe markten vallen hier niet onder."
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
                      id="afhank"
                      label="Vraagt u om steun die afhankelijk is van het gebruik van binnenlandse goederen in plaats van ingevoerde goederen?"
                      helperText="De-minimissteun is niet mogelijk als daardoor binnenlandse producten worden bevoordeeld boven ingevoerde producten."
                    >
                      <FormField.RadioButtonGroup
                        name="afhank"
                        options={[
                          { id: 'afhank-a', label: 'Ja' },
                          { id: 'afhank-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                  </Fieldset>
                  <Alert>
                    <strong>U kunt gebeld worden</strong>
                    <br />U kunt door RVO gebeld worden om uw antwoorden in het aanvraagformulier toe te lichten. Deze
                    toelichting zal worden meegenomen in de beoordeling van uw aanvraag.
                  </Alert>
                  <div>
                    <Heading type="h2">Gegevens ondertekenaar</Heading>
                    <dl className="rvo-data-list">
                      <dt>Naam organisatie</dt>
                      <dd>Albert Heijn B.V.</dd>
                      <dt>KVK-nummer</dt>
                      <dd>35012085</dd>
                      <dt>Rechtsvorm</dt>
                      <dd>Besloten vennootschap (bv)</dd>
                    </dl>
                  </div>
                  <Fieldset legend="Verklaring">
                    <FormField id="cp" label="Is de contactpersoon tevens de ondertekenaar?">
                      <FormField.RadioButtonGroup
                        name="cp"
                        options={[
                          { id: 'cp-a', label: 'Ja' },
                          { id: 'cp-b', label: 'Nee' },
                        ]}
                      />
                    </FormField>
                    <Checkbox
                      id="verklaring-bevoegd"
                      label="Ik ben bevoegd en/of gemachtigd om deze aanvraag te ondertekenen."
                    />
                    <Checkbox
                      id="verklaring-waarheid"
                      label="Ik verklaar dat dit formulier en de bijlagen naar waarheid zijn ingevuld."
                    />
                  </Fieldset>
                  <ActionGroup>
                    <a
                      href="iframe.html?id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story"
                      className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
                    >
                      Opslaan en verzenden
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
