import {
  Accordion,
  ActionGroup,
  Button,
  DateInputField,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  MobileMenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const ImportGegevens = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
          },
          {
            label: 'Mijn dossier',
            link: '#',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MobileMenuBar>
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
              active: true,
              icon: 'user',
            },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
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
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>2</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>3</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>4</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>5</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutFlow>
                        <LayoutFlow row={true} alignItems="start">
                          <span>6</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
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
