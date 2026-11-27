/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  FormField,
  Accordion,
  ActionGroup,
  Button,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const geslachtOpties = [
  { value: 'man', label: 'Man' },
  { value: 'vrouw', label: 'Vrouw' },
];

const landOpties = [
  { value: 'nl', label: 'Nederland' },
  { value: 'be', label: 'België' },
  { value: 'de', label: 'Duitsland' },
  { value: 'fr', label: 'Frankrijk' },
  { value: 'pl', label: 'Polen' },
];

export default function ImportGegevensPage(): ReactElement {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutFlow gap="xl">
        <MenuBar
          items={[
            {
              label: 'Identificatie en Registratie van uw dieren',
              link: '#',
            },
            {
              align: 'right',
              label: 'Hulp & Contact',
              link: '#',
            },
            {
              align: 'right',
              label: 'English',
              icon: 'wereldbol',
              link: '#',
            },
            {
              align: 'right',
              label: 'Boer Overveen B.V',
              link: '#',

              icon: 'user',
            },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="lg"
          horizontalRule={true}
        />

        <main className="">
          <div className="rvo-max-width-layout rvo-max-width-layout--lg">
            <div>
              <LayoutFlow gap="xl">
                <Heading type="h1" noMargins={true}>
                  Gegevens runderen
                </Heading>
                <Grid columns="two">
                  <Accordion
                    items={[
                      {
                        title: 'Uitleg over in te voeren gegevens',
                        teaser: '',
                        content:
                          '<span class="rvo-text--bold">Landcode: </span>Neem de landcode over van het (oor)merk.<br/> <span class="rvo-text--bold">Levensnummer: </span>Neem het levensnummer over van het (oor)merk.<br/> <span class="rvo-text--bold">Werknummer: </span>Neem het werknummer over van het (oor)merk.<br/> <span class="rvo-text--bold">Geboortedatum: </span>Vul hier de datum in waarop het dier is geboren.<br/> <span class="rvo-text--bold">Geslacht (optioneel): </span>Geef hier aan of het een mannelijk of vrouwelijk schaap is.<br/> <span class="rvo-text--bold">Land van geboorte/oorsprong (optioneel): </span>Kies hier het land van geboorte/oorsprong. Is dit geen EU-land? Vul dan ook het oorspronkelijke levensnummer (ID-code) in.<br/> <span class="rvo-text--bold">Oorspr. ID, niet EU land: </span>U bent verplicht dieren die uit een niet EU-land komen om te nummeren. Vul hier het oorspronkelijke levensnummer (ID-code) in zodat dierhistorie bewaard blijft.',
                      },
                    ]}
                  />
                </Grid>

                <LayoutFlow gap="md">
                  <LayoutFlow gap="xs">
                    <LayoutFlow gap="md">
                      <a
                        className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                        href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story"
                      >
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                          role="img"
                          aria-label="Terug"
                        ></span>
                        Terug
                      </a>
                      <Fieldset legend="">
                        <LayoutFlow row={true} alignItems="start">
                          <span>1</span>
                          <FormField id="landcode" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>2</span>
                          <FormField id="landcode-2" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer-2" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer-2" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum-2" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht-2" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong-2" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land-2" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>3</span>
                          <FormField id="landcode-3" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer-3" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer-3" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum-3" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht-3" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong-3" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land-3" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>4</span>
                          <FormField id="landcode-4" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer-4" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer-4" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum-4" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht-4" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong-4" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land-4" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>5</span>
                          <FormField id="landcode-5" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer-5" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer-5" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum-5" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht-5" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong-5" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land-5" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>6</span>
                          <FormField id="landcode-6" label="Landcode">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="levensnummer-6" label="Levensnummer">
                            <FormField.Text sizeInput="sm" />
                          </FormField>
                          <FormField id="werknummer-6" label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geboortedatum-6" label="Geboortedatum">
                            <FormField.Text />
                          </FormField>
                          <FormField id="geslacht-6" label="Geslacht">
                            <FormField.Select options={geslachtOpties} />
                          </FormField>
                          <FormField id="land-van-geboorte-oorsprong-6" label="Land van geboorte/oorsprong">
                            <FormField.Select options={landOpties} />
                          </FormField>
                          <FormField id="oorspr-id-niet-eu-land-6" label="Oorspr. ID, niet EU land">
                            <FormField.Text />
                          </FormField>
                        </LayoutFlow>
                      </Fieldset>
                      <ActionGroup>
                        <Button
                          onClick={() => {
                            window.location.href =
                              'iframe.html?id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story';
                          }}
                        >
                          Opslaan
                        </Button>
                        <Button kind="secondary">Opslaan en rij toevoegen</Button>
                      </ActionGroup>
                    </LayoutFlow>
                  </LayoutFlow>
                </LayoutFlow>
              </LayoutFlow>
            </div>
          </div>
        </main>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
}
