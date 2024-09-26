import {
  Alert,
  ButtonGroup,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';

const Ondertekening = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutFlow size="2xl">
        <LayoutFlow size="xl">
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
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                  active: true,
                },
                {
                  label: 'Mijn dossier',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
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
                  state: 'completed',
                  label: 'Uw onderneming',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-onderneming--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Zaakgegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-zaakgegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-kosten--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'completed',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Maatschappelijk verantwoord ondernemen',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-mvo--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-ondertekening--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <LayoutFlow size="xl">
              <div>
                <a
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                  href="iframe.html?args=&id=demo-pagina-s-sib-mvo--default&viewMode=story"
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
                  De Europese Commissie wil oneerlijke concurrentie voorkomen en staat staatssteun daarom normaal niet
                  toe. De overheid kan, zonder steunkader, soms toch - onder strenge voorwaarden en tot een bepaald
                  maximum - steun bieden aan bedrijven. Dit heet 'de-minimissteun'. Ook deze subsidieregeling valt
                  hieronder.{' '}
                  <a href="#" className="rvo-link">
                    Meer uitleg over de-minimissteun
                  </a>
                </p>
              </div>
              <Fieldset legend="Uw bedrijf en het doel van de steun ">
                <RadioButtonField
                  name="eerder"
                  label="Is er al eerder steun verleend door een overheidsorganisatie voor dezelfde kosten als waar u nu steun voor aanvraagt?"
                  options={[
                    { id: 'eerder A', label: 'Ja' },
                    { id: 'eerder B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="export"
                  label="Vraagt u om exportsteun?"
                  helperText="Exportsteun is bijvoorbeeld de financiering van exportwerkzaamheden of steun voor de oprichting of exploitatie van een distributienetwerk. Subsidies voor deelname aan handelsbeurzen of voor onderzoek naar nieuwe markten vallen hier niet onder."
                  options={[
                    { id: 'export A', label: 'Ja' },
                    { id: 'export B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="afhank"
                  label="Vraagt u om steun die afhankelijk is van het gebruik van binnenlandse goederen in plaats van ingevoerde goederen?"
                  helperText="De-minimissteun is niet mogelijk als daardoor binnenlandse producten worden bevoordeeld boven ingevoerde producten."
                  options={[
                    { id: 'afhank A', label: 'Ja' },
                    { id: 'afhank B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
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
                <RadioButtonField
                  name="cp"
                  label="Is de contactpersoon tevens de ondertekenaar?"
                  options={[
                    { id: 'cp A', label: 'Ja' },
                    { id: 'cp B', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <CheckboxField
                  label=" "
                  invalid={false}
                  options={[
                    {
                      id: 'verklaring',
                      label: 'Ik ben bevoegd en/of gemachtigd om deze aanvraag te ondertekenen.',
                    },
                  ]}
                ></CheckboxField>
                <CheckboxField
                  label=" "
                  invalid={false}
                  options={[
                    {
                      id: 'verklaring',
                      label: 'Ik verklaar dat dit formulier en de bijlagen naar waarheid zijn ingevuld. ',
                    },
                  ]}
                ></CheckboxField>
              </Fieldset>
              <ButtonGroup>
                <a
                  href="#"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Opslaan en verzenden
                </a>
              </ButtonGroup>
            </LayoutFlow>
          </main>
        </LayoutFlow>
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
      </LayoutFlow>
    </body>
  );
};

export default Ondertekening;
