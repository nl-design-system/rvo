import {
  Alert,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  RadioButtonField,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';

const SIBstartpagina = () => {
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
              maxWidth="sm"
              type="sub"
            />
          </div>

          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <LayoutColumnRow size="xl">
              <Heading type="h1" noMargins={true}>
                Support International Business (SIB) 2024: Coaching
              </Heading>
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
              </Fieldset>
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

export default SIBstartpagina;
