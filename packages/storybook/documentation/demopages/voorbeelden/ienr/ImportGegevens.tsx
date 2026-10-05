import {
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
  FormField
} from '@nl-rvo/component-library-react';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const ImportGegevens = () => {
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
          iconPlacement="left"
          maxWidth="lg"
        />

        <main className="">
          <div className="rvo-max-width-layout rvo-max-width-layout--lg">
            <div>
              <LayoutFlow gap="xl">
                <Heading type="h1" noMargins={true}>
                  Gegevens runderen
                </Heading>
                <Grid columns="two">
                  <Accordion>
                    <Accordion.Item title='Uitleg over in te voeren gegevens'>
                      <span className="rvo-text--bold">Landcode: </span>Neem de landcode over van het (oor)merk.<br/> <span className="rvo-text--bold">Levensnummer: </span>Neem het levensnummer over van het (oor)merk.<br/> <span className="rvo-text--bold">Werknummer: </span>Neem het werknummer over van het (oor)merk.<br/> <span className="rvo-text--bold">Geboortedatum: </span>Vul hier de datum in waarop het dier is geboren.<br/> <span className="rvo-text--bold">Geslacht (optioneel): </span>Geef hier aan of het een mannelijk of vrouwelijk schaap is.<br/> <span className="rvo-text--bold">Land van geboorte/oorsprong (optioneel): </span>Kies hier het land van geboorte/oorsprong. Is dit geen EU-land? Vul dan ook het oorspronkelijke levensnummer (ID-code) in.<br/> <span className="rvo-text--bold">Oorspr. ID, niet EU land: </span>U bent verplicht dieren die uit een niet EU-land komen om te nummeren. Vul hier het oorspronkelijke levensnummer (ID-code) in zodat dierhistorie bewaard blijft.
                    </Accordion.Item>
                  </Accordion>                  
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
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>2</span>
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>3</span>
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>4</span>
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>5</span>
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>6</span>
                          <FormField label="Landcode">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Levensnummer">
                            <FormField.Text size="sm" />
                          </FormField>
                          <FormField label="Werknummer">
                            <FormField.Text />
                          </FormField>
                          <FormField label="Geslacht">
                            <FormField.Date />
                          </FormField>
                          <FormField label="Land van geboorte/oorsprong">
                            <FormField.Select />
                          </FormField>
                          <FormField label="Oorspr. ID, niet EU land">
                            <FormField.Select />
                          </FormField>
                        </LayoutFlow>
                      </Fieldset>
                      <ActionGroup>
                        <Button>Opslaan</Button>
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
};

export default ImportGegevens;
