import {
  FormField,
  Button,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';
import '../../../../../../utilities/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const Geboortemeldingen = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      {/* <MenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
            icon: 'home',
          },
          {
            label: 'Mijn dossier',
            link: '#',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MenuBar> */}
      <MenuBar
        items={[
          {
            label: 'I&R Dieren',
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

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <nav aria-label="Menu">
              <LayoutFlow gap="sm">
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story"
                  icon="home"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Mijn I&R
                </Link>
                <Link
                  href="#"
                  icon="user"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Mijn gegevens
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story"
                  icon="envelop"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="bold"
                >
                  Meldingen
                </Link>
                <Link
                  href="#"
                  icon="terug"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Wijzigen & intrekken
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story"
                  icon="oog"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Bekijken
                </Link>
                <Link
                  href="#"
                  icon="refund"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Machtigen
                </Link>
                <Link
                  href="#"
                  icon="opsomming"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Overzichten
                </Link>
              </LayoutFlow>
            </nav>
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Geboortemelding Rund
              </Heading>
              <Fieldset legend="">
                <FormField id="landcode" label="Landcode">
                  <FormField.Text sizeInput="xs" />
                </FormField>
                <FormField id="levensnummer" label="Levensnummer">
                  <FormField.Text sizeInput="sm" />
                </FormField>
                <FormField id="werknummer" label="Werknummer">
                  <FormField.Text sizeInput="sm" />
                </FormField>
                <FormField id="geboortedatum" label="Geboortedatum">
                  <FormField.Text sizeInput="sm" />
                </FormField>
                <FormField id="haarkleur" label="Haarkleur">
                  <FormField.Select
                    options={[
                      { label: 'Zwart', value: 'zwart' },
                      { label: 'Wit', value: 'wit' },
                      { label: 'Rood', value: 'rood' },
                      { label: 'Bruin', value: 'bruin' },
                      { label: 'Geel', value: 'geel' },
                      { label: 'Grijs', value: 'grijs' },
                      { label: 'Blond', value: 'blond' },
                      { label: 'Bont', value: 'bont' },
                    ]}
                  />
                </FormField>
                <FormField id="geslacht" label="Geslacht">
                  <FormField.Select
                    options={[
                      { label: 'Mannelijk', value: 'mannelijk' },
                      { label: 'Vrouwelijk', value: 'vrouwelijk' },
                    ]}
                  />
                </FormField>
                {/* <Select
                  label="Land van geboorte/oorsprong"
                  options={[
                    { label: 'Nederland', value: 'NL' },
                    { label: 'België', value: 'BE' },
                    { label: 'Duitsland', value: 'DE' },
                    { label: 'Frankrijk', value: 'FR' },
                    { label: 'Luxemburg', value: 'LU' },
                    { label: 'Spanje', value: 'ES' },
                    { label: 'Italië', value: 'IT' },
                    { label: 'Verenigd Koninkrijk', value: 'GB' },
                    { label: 'Denemarken', value: 'DK' },
                    { label: 'Zweden', value: 'SE' },
                    { label: 'Noorwegen', value: 'NO' },
                    { label: 'Finland', value: 'FI' },
                    { label: 'Oostenrijk', value: 'AT' },
                    { label: 'Zwitserland', value: 'CH' },
                    { label: 'Polen', value: 'PL' },
                    { label: 'Tsjechië', value: 'CZ' },
                    { label: 'Slowakije', value: 'SK' },
                    { label: 'Hongarije', value: 'HU' },
                    { label: 'Roemenië', value: 'RO' },
                    { label: 'Bulgarije', value: 'BG' },
                    { label: 'Griekenland', value: 'GR' },
                    { label: 'Portugal', value: 'PT' },
                    { label: 'Ierland', value: 'IE' },
                    { label: 'Kroatië', value: 'HR' },
                    { label: 'Slovenië', value: 'SI' },
                    { label: 'Estland', value: 'EE' },
                    { label: 'Letland', value: 'LV' },
                    { label: 'Litouwen', value: 'LT' },
                    { label: 'Cyprus', value: 'CY' },
                    { label: 'Malta', value: 'MT' },
                    { label: 'IJsland', value: 'IS' },
                    { label: 'Liechtenstein', value: 'LI' },
                    { label: 'Verenigde Staten', value: 'US' },
                    { label: 'Canada', value: 'CA' },
                    { label: 'Australië', value: 'AU' },
                    { label: 'Nieuw-Zeeland', value: 'NZ' },
                    { label: 'China', value: 'CN' },
                    { label: 'Japan', value: 'JP' },
                    { label: 'India', value: 'IN' },
                    { label: 'Turkije', value: 'TR' },
                    { label: 'Rusland', value: 'RU' },
                    // Voeg hier meer landen toe indien nodig
                  ]}
                  defaultValue="NL"
                /> */}

                <Heading type="h3">Gegevens moeder</Heading>
                <FormField id="landcode-2" label="Landcode">
                  <FormField.Text sizeInput="xs" />
                </FormField>
                <FormField id="levensnummer-2" label="Levensnummer">
                  <FormField.Text sizeInput="sm" />
                </FormField>
                <FormField id="werknummer-2" label="Werknummer">
                  <FormField.Text sizeInput="sm" />
                </FormField>
              </Fieldset>
              <Button kind="secondary" icon="plus" iconPlacement="left">
                Opslaan en nog een geboortemelding doen
              </Button>
              <Button
                kind="primary"
                icon="pijl-naar-rechts"
                iconPlacement="right"
                onClick={() => {
                  window.location.href = 'iframe.html?id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story';
                }}
              >
                Opslaan en doorgaan
              </Button>
            </LayoutFlow>
          </div>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Geboortemeldingen;
