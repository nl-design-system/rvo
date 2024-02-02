import {
  Alert,
  Button,
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
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';

const UwGegevens = () => {
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
                  state: 'doing',
                  label: 'Startpagina',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-startpagina--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Uw gegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-gegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
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
                <Heading type="h1" noMargins={true}>
                  SIB 2024: Coaching
                </Heading>
                <p className="rvo-text--no-margins">
                  Met dit formulier kunt u subsidie aanvragen voor het sparren met en leren van een coach over de
                  organisatie van export naar een specifiek doelland. De subsidie bedraagt 50% van de kosten, tot ten
                  hoogste € 1.000 exclusief btw.
                </p>
              </div>
              <Fieldset legend="Welke rol heeft u? ">
                <RadioButtonField
                  name="rol"
                  label="U doet deze aanvraag als"
                  helperText=""
                  options={[
                    { id: 'rolA', label: 'Aanvrager' },
                    { id: 'rolB', label: 'Intermediar' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="aanmerking"
                  label="Dient u deze aanvraag in namens een eenmanszaak, Vennootschap onder firma (VOF), Commanditaire vennootschap (CV) of maatschap?"
                  expandableHelperText={true}
                  expandableHelperTextTitle="Meer uitleg"
                  helperText="Bedrijven zonder rechtspersoonlijkheid, zoals een eenmanszaak, Vennootschap onder firma (VOF), Commanditaire vennootschap (CV) en een maatschap, komen niet voor SIB in aanmerking. "
                  options={[
                    { id: 'aanmerkingA', label: 'Ja' },
                    { id: 'aanmerkingB', label: 'Nee' },
                  ]}
                ></RadioButtonField>
              </Fieldset>

              <div>
                <Heading type="h2" noMargins={true}>
                  Aanvrager
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

              <div>
                <Heading type="h2" noMargins={true}>
                  Sluitingsdatum
                </Heading>
                <p className="rvo-text--no-margins">
                  U kunt uw aanvraag voor deze regeling tot en met 31-12-2024 15:00 uur indienen.
                </p>
              </div>
              <div>
                <Heading type="h2" noMargins={true}>
                  Tussendoor opslaan
                </Heading>
                <p className="rvo-text--no-margins">
                  Wilt u deze aanvraag tussendoor opslaan en later afmaken? Klik op &lsquo;Opslaan en formulier
                  verlaten&rsquo;.
                </p>
              </div>
              <div>
                <Heading type="h2" noMargins={true}>
                  Persoonsgegevens
                </Heading>
                <p className="rvo-text--no-margins">
                  Wij gaan zorgvuldig om met uw persoonsgegevens. Lees meer over ons{' '}
                  <a href="#" className="rvo-link">
                    privacybeleid
                  </a>
                  .
                </p>
              </div>
              <Alert kind="info">
                Extra toelichting bij vragen vindt u in het informatie icoon bij de vraag en in toelichtende teksten in
                het formulier. Informatie over de regeling leest u op{' '}
                <a href="#" className="rvo-link rvo-link--logoblauw">
                  de website
                </a>{' '}
                Heeft u vragen? Bel met RVO via{' '}
                <a href="tel:088 042 42 42" className="rvo-link rvo-link--logoblauw">
                  088 042 42 42
                </a>
              </Alert>
              <ButtonGroup>
                <Button kind="primary">Start aanvraag</Button>
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

export default UwGegevens;
