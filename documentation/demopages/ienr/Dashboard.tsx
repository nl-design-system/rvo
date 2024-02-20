import {
  Button,
  Card,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  RadioButtonField,
  StatusIcon,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const Dashboard = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
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

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="zwart"
              horizontalRule={false}
              items={[
                {
                  label: 'Dashboard',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                  active: true,
                },
                {
                  label: 'Houder en UBN',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Melden',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-import--default&viewMode=story',
                  icon: 'plus',
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                { label: 'Bekijken', link: '#', icon: 'oog' },
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
            <LayoutColumnRow size="xl">
              <Heading type="h1" noMargins={true}>
                Mijn I&R
              </Heading>
              <LayoutColumnRow size="md">
                <LayoutColumnRow size="xs">
                  <Heading type="h2" textContent="Geselecteerde locatie" noMargins={true} />
                  <LayoutColumnRow size="md">
                    <Grid columns="two">
                      <dl className="rvo-data-list">
                        <dt>UBN</dt>
                        <dd>920056</dd>
                        <dt>Bedrijfsnaam</dt>
                        <dd>Boer Overveen</dd>
                        <dt>Adres</dt>
                        <dd>
                          van Merheimstraat 41
                          <br /> 5282 NE BOXTEL
                        </dd>
                      </dl>
                      <div>
                        <LayoutColumnRow size="md">
                          <RadioButtonField
                            name="ubn"
                            label="Selecteer een andere locatie"
                            helperText=""
                            options={[
                              { id: 'locatieA', label: 'UBN 2309458' },
                              { id: 'locatieB', label: 'UBN 2485594' },
                            ]}
                          ></RadioButtonField>
                          <Button kind="secondary" size="xs">
                            Zoek een andere UBN
                          </Button>
                        </LayoutColumnRow>
                      </div>
                    </Grid>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>

              <div className="rvo-cards">
                <LayoutColumnRow size="md">
                  <div className="rvo-heading-w-tag">
                    <LayoutColumnRow row={true}>
                      <Heading type="h2" textContent="Diersoorten" noMargins={true}></Heading>
                      <Button kind="secondary" size="xs">
                        Diersoorten wijzigen
                      </Button>
                    </LayoutColumnRow>
                  </div>

                  <Grid gap="md" columns="two">
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutColumnRow row={true} alignItems="center" size="sm">
                        <Heading type="h3" noMargins={true}>
                          Schaap
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutColumnRow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">46</span>
                        &nbsp;schapen{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">0 </span>&nbsp;vrije merken
                      </a>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutColumnRow row={true} alignItems="center" size="sm">
                        <Heading type="h3" noMargins={true}>
                          Rund
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutColumnRow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">0</span>
                        &nbsp;runderen{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">12 </span>&nbsp;vrije merken
                      </a>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutColumnRow row={true} alignItems="center" size="sm">
                        <Heading type="h3" noMargins={true}>
                          Geit
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutColumnRow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">0</span>
                        &nbsp;geiten{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">12 </span>&nbsp;vrije merken
                      </a>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutColumnRow row={true} alignItems="center" size="sm">
                        <Heading type="h3" noMargins={true}>
                          Paardachtige
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutColumnRow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">10</span>
                        &nbsp;paardachtige{' '}
                      </a>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal rvo-text--sm">
                          <span className="rvo-text--bold">2</span>&nbsp;openstaande meldingen
                        </a>
                      </LayoutColumnRow>
                    </Card>
                  </Grid>
                </LayoutColumnRow>
              </div>
            </LayoutColumnRow>
          </div>
        </div>
      </main>
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
    </body>
  );
};

export default Dashboard;
