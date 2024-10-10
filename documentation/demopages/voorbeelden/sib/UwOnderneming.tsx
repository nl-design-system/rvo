import {
  ButtonGroup,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/components';
import '../../../../components/text-helpers/index.scss';

const UwOnderneming = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutColumnRow size="2xl">
        <LayoutColumnRow size="xl">
          <div className="navigation">
            <MobileMenuBar
              iconPlacement="before"
              useIcons={true}
              isOpen={false}
              submenuItems={[]}
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
            <MenuBar
              items={[
                {
                  label: 'Mijn RVO',
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
              maxWidth="md"
            />
            <MenuBar
              items={[
                {
                  label: 'SIB 2024: Coaching',
                  link: '#',
                },
                {
                  align: 'right',
                  label: 'Opslaan en afsluiten',
                  link: '#',
                  active: true,
                  icon: 'save',
                },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
              type="sub"
            />
          </div>

          <main className="rvo-max-width-layout rvo-max-width-layout--md">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'SIB 2024: Coaching', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Startpagina',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-startpagina--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Uw gegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-gegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Uw onderneming',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-onderneming--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Zaakgegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-zaakgegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-kosten--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Maatschappelijk verantwoord ondernemen',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-mvo--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-ondertekening--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <LayoutColumnRow size="xl">
              <div>
                <a
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon  rvo-link--normal"
                  href="iframe.html?args=&id=demo-pagina-s-sib-uw-gegevens--default&viewMode=story"
                >
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                    role="img"
                    aria-label="Terug"
                  ></span>
                  Terug naar Uw gegevens
                </a>
                <Heading type="h1" noMargins={true}>
                  Uw onderneming
                </Heading>
              </div>
              <Fieldset legend="">
                <RadioButtonField
                  name="schuld"
                  label="Is voor uw organisatie een verzoek tot surseance van betaling, tot faillissement, of tot het van toepassing verklaren van de schuldsaneringsregeling ingediend?"
                  helperText=""
                  options={[
                    { id: 'schuldA', label: 'Ja' },
                    { id: 'schuldB', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="mkb"
                  label="Is uw organisatie een mkb-onderneming?"
                  helperText=""
                  options={[
                    { id: 'mkb A', label: 'Ja' },
                    { id: 'mkb B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="middelen"
                  label="U beschikt over financiële middelen, potentie en ambitie om structureel internationaal actief te worden en verdere stappen te kunnen nemen. Klopt dit? *"
                  helperText=""
                  options={[
                    { id: 'middelen A', label: 'Ja' },
                    { id: 'middelen B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <TextInputField
                  label="Hoeveel medewerkers heeft uw onderneming?"
                  size="sm"
                  validation="number"
                ></TextInputField>
                <TextInputField label="Wat is de website van uw organisatie?"></TextInputField>
                <TextInputField
                  label="SBI-code"
                  size="sm"
                  validation="number"
                  helperText="De SBI-code bestaat uit 4 of 5 cijfers. Kijk voor meer informatie op <a href='#' class='rvo-link rvo-link--donkerblauw'>overzicht SBI-codes</a>"
                ></TextInputField>
              </Fieldset>
              <ButtonGroup>
                <a
                  href="iframe.html?args=&id=demo-pagina-s-sib-zaakgegevens--default&viewMode=story"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Opslaan en verder gaan
                </a>
              </ButtonGroup>
            </LayoutColumnRow>
          </main>
        </LayoutColumnRow>
        <Footer
          columns={[
            {
              label: 'RVO',
              items: [
                { content: 'Over ons', link: '#' },
                { content: 'Contact', link: '#' },
                { content: 'Pers', link: '#' },
                { content: 'Zaken regelen bij RVO', link: '#' },
              ],
            },
            {
              label: 'Over deze site',
              items: [
                { content: 'Privacy', link: '#' },
                { content: 'Cookies en anti-spam', link: '#' },
                { content: 'Toegankelijkheid', link: '#' },
                { content: 'Proclaimer', link: '#' },
              ],
            },
            {
              label: 'Snel naar',
              items: [
                { content: 'Onderwerpen A t/m Z', link: '#' },
                { content: 'Klantenpanel', link: '#' },
                { content: 'Documenten en publicaties', link: '#' },
                { content: 'Overheidspublicaties en auteursrecht', link: '#' },
              ],
            },
            {
              label: 'Blijf op de hoogte',
              items: [
                { content: 'Social media', link: '#' },
                { content: 'RSS', link: '#' },
                { content: 'Gratis nieuwsbrief', link: '#' },
              ],
            },
          ]}
        />
      </LayoutColumnRow>
    </body>
  );
};

export default UwOnderneming;
