import {
  Alert,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  // MobileMenuBar,
  Pagination,
  Tabs,
} from '@nl-rvo/components';
import '../../../../components/text-helpers/index.scss';

const DocumentenClean = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      {/* <MobileMenuBar
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
      ></MobileMenuBar> */}
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
                  label: 'Overzicht',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Mijn dossier',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
                  icon: 'map',
                },
                {
                  label: 'Mijn documenten',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
                  icon: 'publicatie',
                  active: true,
                },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow size="xl">
              <Heading type="h1" noMargins={true}>
                Documenten
              </Heading>
              <div>
                <LayoutFlow size="xl">
                  <Tabs
                    tabs={[{ label: 'Mijn ontvangen documenten' }, { label: 'Mijn verstuurde documenten' }]}
                    activeTab={0}
                  />
                  <Grid columns="four">
                    <div>Naam</div>
                    <div>Regeling</div>
                    <div>Datum</div>
                    <div>Acties</div>
                  </Grid>
                  <div className="rvo-wrapper rvo-documents">
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                    <div className="rvo-wrapper rvo-document">
                      <Grid columns="four">
                        <LayoutFlow size="0">
                          <strong>Verzoek om informatie</strong>
                          <span className="rvo-text rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                        </LayoutFlow>
                        <div>
                          <span className="rvo-text rvo-text--subtle">ISDE 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">14 december 2023</span>
                        </div>
                        <div>
                          <span className="rvo-text rvo-text--subtle">
                            <Link showIcon="before" icon="externe-link" noUnderline={true}>
                              Openen
                            </Link>
                          </span>
                        </div>
                      </Grid>
                      <hr className="rvo-hr" />
                    </div>
                  </div>
                  <Pagination numberOfPages={5} activePage={3}></Pagination>
                  <Alert heading="Info">
                    Ontbreekt er een document in dit overzicht? Documenten worden ieder [tijd] ingeladen vanuit de
                    onderliggende systemen. Indien het probleem blijft bestaan neem contact op met ons klantenservice.{' '}
                  </Alert>
                </LayoutFlow>
              </div>
            </LayoutFlow>
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

export default DocumentenClean;
