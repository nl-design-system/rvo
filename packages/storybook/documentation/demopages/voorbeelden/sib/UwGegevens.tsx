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
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  ProgressTracker,
  RadioButton,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { useIsDesktop } from './useIsDesktop';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

export default function UwGegevensPage(): ReactElement {
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
                      state: 'doing',
                      label: 'Uw gegevens',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'incomplete',
                      label: 'Uw onderneming',
                      link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story',
                      size: 'md',
                      line: 'straight',
                    },
                    {
                      state: 'incomplete',
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
                      className="rvo-link rvo-link--no-underline rvo-link--with-icon  rvo-link--normal"
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                        role="img"
                        aria-label="Terug"
                      ></span>
                      Terug naar Startpagina
                    </a>
                    <Heading type="h1" noMargins={true}>
                      Uw gegevens
                    </Heading>
                    <dl className="rvo-data-list">
                      <dt>Naam organisatie</dt>
                      <dd>Albert Heijn B.V.</dd>
                      <dt>KVK-nummer</dt>
                      <dd>35012085</dd>
                      <dt>Rechtsvorm</dt>
                      <dd>Besloten vennootschap (bv)</dd>
                    </dl>
                  </div>
                  <Fieldset legend="">
                    <div
                      role="group"
                      aria-labelledby="fieldId-label"
                      className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                    >
                      <div className="rvo-form-field__label">
                        <label className="rvo-label" htmlFor="vestiging">
                          Kies een vestiging
                        </label>
                      </div>
                      <div className="rvo-select-wrapper">
                        <select id="vestiging" className="utrecht-select utrecht-select--html-select">
                          <option>Albert Heijn, Stadionweg 159, 1076NN AMSTERDAM, 000018364012</option>
                          <option>Albert Heijn B.V., Prinses Margrietplnts 25, 2595AM</option>
                        </select>
                      </div>
                      <p className="rvo-text--sm rvo-text--no-margins">
                        <a
                          href="#"
                          className="rvo-link rvo-link--lintblauw rvo-link--sm rvo-link--with-icon rvo-link--no-underline"
                        >
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-ondernemingen rvo-icon--sm rvo-icon--lintblauw  rvo-link__icon--before"
                            role="img"
                            aria-label="Ondernemingen"
                          ></span>
                          Haal vestigingen op van dit KVK nummer
                        </a>
                      </p>
                    </div>
                    <RadioButton
                      name="iban"
                      label="Voert u een IBAN nummer op?"
                      helperText=""
                      options={[
                        { id: 'ibanA', label: 'Ja' },
                        { id: 'ibanB', label: 'Nee' },
                      ]}
                    ></RadioButton>
                  </Fieldset>
                  <Fieldset legend="Contactpersoon aanvrager ">
                    <FormField id="voorletters" label="Voorletters">
                      <FormField.Text sizeInput="sm" />
                    </FormField>
                    <FormField id="tussenvoegsels" label="Tussenvoegsels">
                      <FormField.Text sizeInput="sm" />
                    </FormField>
                    <FormField id="achternaam" label="Achternaam">
                      <FormField.Text />
                    </FormField>
                    <FormField id="telefoonnummer" label="Telefoonnummer">
                      <FormField.Text sizeInput="md" />
                    </FormField>
                    <FormField id="e-mailadres" label="E-mailadres">
                      <FormField.Text />
                    </FormField>
                  </Fieldset>
                  <Alert kind="warning">
                    <strong>U ontvangt over deze zaak altijd digitaal bericht van ons</strong>
                    <p>Ik weet dat RVO:</p>
                    <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-3">
                      <li>berichten over deze aanvraag plaatst onder Mijn zaken</li>
                      <li>mij een e-mail stuurt als er iets voor</li>
                      <li>mij klaar staat over mijn aanvraag Ik ben voldoende bereikbaar via dit e-mailadres</li>
                    </ul>
                  </Alert>
                  <ActionGroup>
                    <a
                      href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story"
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
