import {
  Alert,
  Breadcrumbs,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  // MobileMenuBar,
  PageNumberNavigation,
  Tabs,
} from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const DocumentenZaak = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <LayoutFlow gap="3xl">
        <div>
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
          <LayoutFlow gap="sm">
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

                  icon: 'user',
                },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />

            <main className="">
              <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
                <LayoutFlow>
                  <Breadcrumbs
                    items={[
                      {
                        label: 'Overzicht',
                        link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                      },
                      { label: 'Mijn dossier', link: '#' },

                      { label: 'Eco-regeling 2023' },
                    ]}
                    size="sm"
                  ></Breadcrumbs>

                  <LayoutFlow gap="xl">
                    <Heading type="h1" noMargins={true}>
                      Documenten
                    </Heading>
                    <p className="rvo-paragraph rvo-paragraph--no-spacing">
                      Hieronder vindt u een overzicht met alle documenten van uw aanvraag: Eco-regeling 2023.
                    </p>
                    <div>
                      <LayoutFlow gap="xl">
                        <LayoutFlow gap="lg" row={true} justifyContent="space-between" alignItems="end">
                          <Tabs
                            tabs={[
                              { label: 'Mijn ontvangen documenten', href: '#' },
                              { label: 'Mijn verstuurde documenten', href: '#' },
                            ]}
                            activeTab={0}
                          />
                          <LayoutFlow row={true} alignItems="end">
                            {/* <TextInputField label="Beschikking"></TextInputField> */}
                            <a
                              className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--lintblauw"
                              href="#"
                            >
                              <span
                                className="utrecht-icon rvo-icon rvo-icon-trechter rvo-icon--md rvo-link__icon--before"
                                role="img"
                                aria-label="Trechter"
                              ></span>
                              Filteren
                            </a>
                          </LayoutFlow>
                        </LayoutFlow>

                        <div className="rvo-table--responsive">
                          <table className="rvo-table">
                            <thead className="rvo-table-head">
                              <tr className="rvo-table-row">
                                <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                                  <div className="rvo-table-header__sortable-container">Naam</div>
                                </th>
                                <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                                  <div className="rvo-table-header__sortable-container">
                                    Datum
                                    <svg
                                      width="39"
                                      height="48"
                                      viewBox="0 0 39 48"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="rvo--table-header__sorting-icon"
                                    >
                                      <path
                                        d="M12.7728 0.837455C12.4072 0.325207 11.8411 0.0171769 11.2348 0.000703278C10.6287 -0.0158624 10.0484 0.260969 9.65853 0.752418L0.879879 11.8005C0.252827 12.5881 0.253521 13.7403 0.881355 14.5279C1.50901 15.313 2.57945 15.5091 3.41717 14.984L7.90141 12.1819L7.92233 45.8789C7.92233 47.6365 9.26541 48 10.9231 48C12.5809 48 13.924 47.6365 13.924 45.8789L13.9173 12.3081L18.316 15.3901C19.1286 15.9587 20.2057 15.8213 20.8707 15.0728C21.5357 14.3205 21.5922 13.1701 21.0042 12.3492L12.7728 0.837455Z"
                                        fill="var(--rvo-color-hemelblauw)"
                                      ></path>
                                      <path
                                        d="M29.5795 47.3719C29.8406 47.7561 30.245 47.9871 30.6781 47.9995C31.111 48.0119 31.5255 47.8043 31.804 47.4357L38.0744 39.1496C38.5223 38.5589 38.5218 37.6948 38.0734 37.1041C37.625 36.5152 36.8605 36.3682 36.2621 36.762L33.0591 38.8636L33.0441 13.5908C33.0441 12.2726 32.0848 12 30.9007 12C29.7166 12 28.7572 12.2726 28.7572 13.5908L28.762 38.7689L25.6201 36.4574C25.0397 36.031 24.2703 36.134 23.7953 36.6954C23.3203 37.2597 23.2799 38.1224 23.6999 38.7381L29.5795 47.3719Z"
                                        fill="var(--rvo-color-grijs-800)"
                                      ></path>
                                    </svg>
                                  </div>
                                </th>

                                <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                                  <div className="rvo-table-header__sortable-container">Actie</div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rvo-table-body">
                              <tr className="rvo-table-row">
                                <td className="rvo-table-cell">
                                  <strong>Titel</strong>
                                  <br />
                                  <span className="rvo-text rvo-text--subtle rvo-text--sm">
                                    PDF document | 271.73 KB
                                  </span>
                                </td>
                                <td className="rvo-table-cell">1 December 2023</td>

                                <td className="rvo-table-cell">
                                  <a href="#" className="rvo-link rvo-link--no-underline">
                                    Openen
                                  </a>
                                </td>
                              </tr>
                              <tr className="rvo-table-row">
                                <td className="rvo-table-cell">
                                  <strong>Titel</strong>
                                  <br />
                                  <span className="rvo-text rvo-text--subtle rvo-text--sm">
                                    PDF document | 271.73 KB
                                  </span>
                                </td>
                                <td className="rvo-table-cell">1 December 2023</td>

                                <td className="rvo-table-cell">
                                  <a href="#" className="rvo-link rvo-link--no-underline">
                                    Openen
                                  </a>
                                </td>
                              </tr>
                              <tr className="rvo-table-row">
                                <td className="rvo-table-cell">
                                  <strong>Titel</strong>
                                  <br />
                                  <span className="rvo-text rvo-text--subtle rvo-text--sm">
                                    PDF document | 271.73 KB
                                  </span>
                                </td>
                                <td className="rvo-table-cell">1 December 2023</td>

                                <td className="rvo-table-cell">
                                  <a href="#" className="rvo-link rvo-link--no-underline">
                                    Openen
                                  </a>
                                </td>
                              </tr>
                              <tr className="rvo-table-row">
                                <td className="rvo-table-cell">
                                  <strong>Titel</strong>
                                  <br />
                                  <span className="rvo-text rvo-text--subtle rvo-text--sm">
                                    PDF document | 271.73 KB
                                  </span>
                                </td>
                                <td className="rvo-table-cell">1 December 2023</td>

                                <td className="rvo-table-cell">
                                  <a href="#" className="rvo-link rvo-link--no-underline">
                                    Openen
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <PageNumberNavigation numberOfPages={5} activePage={3} />
                        <Alert heading="Info">
                          Ontbreekt er een document in dit overzicht? Documenten worden ieder [tijd] ingeladen vanuit de
                          onderliggende systemen. Indien het probleem blijft bestaan neem contact op met ons
                          klantenservice.{' '}
                        </Alert>
                      </LayoutFlow>
                    </div>
                  </LayoutFlow>
                </LayoutFlow>
              </div>
            </main>
          </LayoutFlow>
        </div>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
};

export default DocumentenZaak;
