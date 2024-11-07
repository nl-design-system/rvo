import {
  Footer,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  MenuBar,
  // MobileMenuBar,
  Pagination,
  Tabs,
} from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/index.scss';

const Aanvragen = () => {
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
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Aanvragen',
                  link: '#',
                  icon: 'map',
                  active: true,
                },

                {
                  label: 'Mijn documenten',
                  link: '#',
                  icon: 'publicatie',
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
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Aanvragen
              </Heading>
              <p className="rvo-text--no-margins">
                Op deze pagina ziet u een overzicht van uw aanvragen vanuit een aantal RVO systemen. Wij voegen
                regelmatig nieuwe systemen toe om het overzicht zo volledig mogelijk te maken. Ontbreekt er een
                aanvraag? Neem contact op met RVO{' '}
                <a className="rvo-link" href="#">
                  klantenservice
                </a>
                . Aanvragen die de status ‘geannuleerd’, ‘afgewezen’ en ‘afgerond’ hebben worden automatisch verplaatst
                naar het tabje archief.{' '}
              </p>
              <div>
                <LayoutFlow gap="xl">
                  <Tabs
                    tabs={[
                      { label: 'Lopende aanvragen', href: '#' },
                      { label: 'Archief', href: '#' },
                    ]}
                    activeTab={0}
                  />
                  <div className="rvo-table--responsive">
                    <table className="rvo-table">
                      <thead className="rvo-table-head">
                        <tr className="rvo-table-row">
                          <th scope="col" className="rvo-table-header">
                            Naam
                          </th>
                          <th scope="col" className="rvo-table-header ">
                            Status
                          </th>
                          <th scope="col" className="rvo-table-header ">
                            Referentienummer
                          </th>
                          <th scope="col" className="rvo-table-header">
                            Laatste wijziging
                          </th>
                          <th scope="col" className="rvo-table-header"></th>
                        </tr>
                      </thead>
                      <tbody className="rvo-table-body">
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <a className="rvo-link rvo-link--no-underline">LEADER 2023</a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutFlow row={true} gap="sm">
                              <span
                                className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--sm rvo-status-icon-waarschuwing"
                                role="img"
                                aria-label="Waarschuwing"
                              ></span>{' '}
                              Actie nodig
                            </LayoutFlow>
                          </td>
                          <td className="rvo-table-cell">ERTKV23-04546009</td>
                          <td className="rvo-table-cell">14 dec 2023</td>
                          <td className="rvo-table-cell">
                            <LayoutFlow alignItems="end">
                              <a href="#">
                                <Icon icon="delta-naar-rechts" size="sm"></Icon>
                              </a>
                            </LayoutFlow>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <a className="rvo-link rvo-link--no-underline">Extra betaling jonge landbouwers GL..</a>
                          </td>
                          <td className="rvo-table-cell">In behandeling</td>
                          <td className="rvo-table-cell">ERTKV23-04546009</td>
                          <td className="rvo-table-cell">14 dec 2023</td>
                          <td className="rvo-table-cell">
                            <LayoutFlow alignItems="end">
                              <a href="#">
                                <Icon icon="delta-naar-rechts" size="sm"></Icon>
                              </a>
                            </LayoutFlow>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <a className="rvo-link rvo-link--no-underline">ANLb-Subsidie 2022</a>
                          </td>
                          <td className="rvo-table-cell">Bezwaar</td>
                          <td className="rvo-table-cell">ERTKV23-04546009</td>
                          <td className="rvo-table-cell">14 dec 2023</td>
                          <td className="rvo-table-cell">
                            <LayoutFlow alignItems="end">
                              <a href="#">
                                <Icon icon="delta-naar-rechts" size="sm"></Icon>
                              </a>
                            </LayoutFlow>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <a className="rvo-link rvo-link--no-underline">Eco-regeling 2023</a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutFlow row={true} gap="sm">
                              <span
                                className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--sm rvo-status-icon-waarschuwing"
                                role="img"
                                aria-label="Waarschuwing"
                              ></span>{' '}
                              Actie nodig
                            </LayoutFlow>
                          </td>
                          <td className="rvo-table-cell">ERTKV23-04546009</td>
                          <td className="rvo-table-cell">14 dec 2023</td>
                          <td className="rvo-table-cell">
                            <LayoutFlow alignItems="end">
                              <a href="#">
                                <Icon icon="delta-naar-rechts" size="sm"></Icon>
                              </a>
                            </LayoutFlow>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Pagination numberOfPages={5} activePage={3}></Pagination>
                  <div className="rvo-card rvo-card--padding-xl rvo-card--full-colour--grijs-100">
                    <div className="rvo-card__content">
                      <h3 className="utrecht-heading-4 rvo-heading--no-margins">
                        Wilt u een nieuwe regeling aanvragen?
                      </h3>
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--donkerblauw" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--sm rvo-icon--donkerblauw rvo-link__icon--before"
                          role="img"
                          aria-label="Plus"
                        ></span>
                        Start een nieuwe aanvraag
                      </a>
                    </div>
                  </div>
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

export default Aanvragen;
