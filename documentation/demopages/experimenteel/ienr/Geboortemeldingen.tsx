import {
  Button,
  DateInputField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Geboortemeldingen = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      {/* <MobileMenuBar
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
      ></MobileMenuBar> */}
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
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="lintblauw"
              horizontalRule={false}
              items={[
                {
                  label: 'Mijn I&R',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Mijn gegevens',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Meldingen',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story',
                  icon: 'envelop',
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                {
                  label: 'Bekijken',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story',
                  icon: 'oog',
                },
                { label: 'Machtigen', link: '#', icon: 'refund' },
                { label: 'Overzichten', link: '#', icon: 'opsomming' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Geboortemelding Rund
              </Heading>
              <Fieldset legend="">
                <TextInputField label="Landcode" size="xs"></TextInputField>
                <TextInputField label="Levensnummer" size="sm"></TextInputField>
                <TextInputField label="Werknummer" size="sm"></TextInputField>
                <DateInputField label="Geboortedatum" size="sm"></DateInputField>
                <SelectField
                  label="Haarkleur"
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
                <SelectField
                  label="Geslacht"
                  options={[
                    { label: 'Mannelijk', value: 'mannelijk' },
                    { label: 'Vrouwelijk', value: 'vrouwelijk' },
                  ]}
                />
                {/* <SelectField
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
                <TextInputField label="Landcode" size="xs"></TextInputField>
                <TextInputField label="Levensnummer" size="sm"></TextInputField>
                <TextInputField label="Werknummer" size="sm"></TextInputField>
              </Fieldset>
              <Button kind="secondary" icon="plus" showIcon="before">
                Opslaan en nog een geboortemelding doen
              </Button>
              <Button kind="primary" icon="pijl-naar-rechts" showIcon="after">
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
