import {
  Button,
  CheckboxGroup,
  Footer,
  Icon,
  LayoutColumnRow,
  Link,
  MenuBar,
  StatusIcon,
  TextInputField,
} from '@nl-rvo/components';
import '../common/cmor.scss';
import '../common/rhs-update.scss';

const MijnDossier = () => {
  return (
    <body className="rvo-theme rvo-cmor rvo-sidebar-menu-active">
      <div className="rvo-cmor rvo-rhs-update">
        <header className="rvo-header">
          <div className="rvo-rhs-update-component">
            <a className="rvo-logo" href="#">
              <div className="rvo-logo-lint">
                <img src="images/lint.svg" alt="" />
              </div>
              <div className="rvo-logo-text rvo-logo-text--full">
                Rijksdienst voor Ondernemend <br />
                Nederland
              </div>
              <div className="rvo-logo-text rvo-logo-text--abv">RVO</div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component">
          <div className="rvo-responsive-menu-wrapper">
            <details className="rvo-responsive-menu">
              <summary className="rvo-responsive-menu-toggle">
                <Icon icon="menu" size="lg" /> Menu
              </summary>
              <div className="rvo-sidebar-menu">
                <MenuBar
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
                <MenuBar
                  items={[{ label: 'Hulp & Contact', link: '#', icon: 'communicatie' }]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  maxWidth="md"
                />
                <MenuBar
                  items={[
                    { label: 'English', link: '#', icon: 'wereldbol' },
                    { label: 'Uitloggen', link: '#', icon: 'externe-link' },
                  ]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  maxWidth="md"
                />
              </div>
            </details>
          </div>
          <div className="rvo-topnav--w-line">
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
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                  active: true,
                  icon: 'user',
                },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="lg"
            />
          </div>
        </div>
        <main className="rvo-main--cmor rvo-main--sidebar-active rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-sidebar-menu">
            <MenuBar
              items={[
                {
                  label: 'Overzicht',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Mijn dossier',
                  link: '#iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
                  icon: 'map',
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
          <div className="rvo-content--cmor rvo-content--mijn-dossier">
            <LayoutColumnRow size="xl">
              <h1 className="utrecht-heading-1">
                <strong>Mijn dossier</strong>
              </h1>
              <LayoutColumnRow size="sm">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">Naar welke aanvraag bent u op zoek?</p>
                <LayoutColumnRow row={true} size="sm" wrap={true}>
                  <a className="rvo-tag rvo-tag--outline rvo-tag--active" href="#">
                    ISDE (active)
                  </a>
                  <a className="rvo-tag rvo-tag--outline" href="#">
                    WSBO
                  </a>
                  <a className="rvo-tag rvo-tag--outline" href="#">
                    Gecombineerde opgave
                  </a>
                  <a className="rvo-tag rvo-tag--outline" href="#">
                    SVVE
                  </a>
                </LayoutColumnRow>
              </LayoutColumnRow>
              <details className="rvo-expandable-area">
                <summary className="rvo-expandable-area-toggle">
                  <Icon icon="delta-omlaag" />
                  <Icon icon="delta-omhoog" />
                  <Link content="Uitgebreid zoeken" noUnderline={true}></Link>
                </summary>
                <LayoutColumnRow size="md">
                  <div className="rvo-inline-form">
                    <div className="rvo-rhs-update-component">
                      <LayoutColumnRow row={true} size="sm">
                        <TextInputField label="Regeling of referentienummer" />
                        <Button kind="primary">Zoeken</Button>
                      </LayoutColumnRow>
                    </div>
                  </div>
                  <LayoutColumnRow size="sm">
                    <details className="rvo-expandable-area rvo-filter--cmor">
                      <summary className="rvo-expandable-area-toggle">
                        <Icon icon="delta-omlaag" />
                        <Icon icon="delta-omhoog" />
                        <Link content="Filter op type aanvraag" noUnderline={true}></Link>
                      </summary>
                      <div className="rvo-rhs-update-component">
                        <CheckboxGroup
                          options={[
                            { id: 'optionJ', label: 'Lopende aanvragen' },
                            { id: 'optionK', label: 'Afgehandelde aanvragen' },
                            { id: 'optionL', label: 'Concepten' },
                          ]}
                        ></CheckboxGroup>
                      </div>
                    </details>
                    <details className="rvo-expandable-area rvo-filter--cmor">
                      <summary className="rvo-expandable-area-toggle">
                        <Icon icon="delta-omlaag" />
                        <Icon icon="delta-omhoog" />
                        <Link content="Filter op Status" noUnderline={true}></Link>
                      </summary>
                      <div className="rvo-rhs-update-component rvo-filter-grid rvo-filter-grid--status">
                        <CheckboxGroup
                          options={[
                            { id: 'optionA', label: 'Geregistreerd' },
                            { id: 'optionB', label: 'Financiële afhandeling' },
                            { id: 'optionC', label: 'Afgerond' },
                            { id: 'optionD', label: 'Actie nodig' },
                            { id: 'optionE', label: 'Goedgekeurd' },
                            { id: 'optionF', label: 'Geannuleerd' },
                            { id: 'optionG', label: 'In behandeling' },
                            { id: 'optionH', label: 'Afgewezen' },
                            { id: 'optionI', label: 'Bezwaar' },
                          ]}
                        ></CheckboxGroup>
                      </div>
                    </details>
                    <details className="rvo-expandable-area rvo-filter--cmor">
                      <summary className="rvo-expandable-area-toggle">
                        <Icon icon="delta-omlaag" />
                        <Icon icon="delta-omhoog" />
                        <Link content="Filter op startdatum" noUnderline={true}></Link>
                      </summary>
                      <div className="rvo-rhs-update-component">
                        <CheckboxGroup
                          options={[
                            { id: 'optionM', label: '2023' },
                            { id: 'optionN', label: '2022' },
                            { id: 'optionO', label: '2021' },
                            { id: 'optionP', label: '2020 of ouder' },
                          ]}
                        ></CheckboxGroup>
                      </div>
                    </details>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </details>
              <LayoutColumnRow size="md">
                <div className="rvo-rhs-update-component">
                  <div className="rvo-table--responsive rvo-table--cmor">
                    <table className="rvo-table">
                      <thead className="rvo-table-head">
                        <tr className="rvo-table-row">
                          <th scope="col" className="rvo-table-header">
                            Naam
                          </th>
                          <th
                            scope="col"
                            className="rvo-table-header rvo-table-header--sortable rvo-layout-row rvo-layout-gap--sm"
                          >
                            Status
                            <button
                              className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
                              type="button"
                            >
                              <span
                                className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--sm rvo-icon--hemelblauw"
                                role="img"
                                aria-label="Delta omhoog"
                              ></span>
                            </button>
                          </th>
                          <th scope="col" className="rvo-table-header">
                            Referentienummer
                          </th>
                          <th scope="col" className="rvo-table-header">
                            Laatste wijziging
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rvo-table-body">
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              WBSO 2022
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <StatusIcon type="waarschuwing" size="md" />
                              <div className="rvo-card-status-text">Actie nodig uiterlijk 19 aug 2023</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-04546009
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 10 aug 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              WBSO 2021
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <StatusIcon type="waarschuwing" size="md" />
                              <div className="rvo-card-status-text">Actie nodig uiterlijk 4 aug 2023</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-04546009
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 10 aug 2023
                          </td>
                        </tr>

                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              Gecombineerde Opgave 2021
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Financiële afhandeling</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-04546009
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 12 sep 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              ISDE 2020
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Afgerond</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-0454544
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 11 aug 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              ISDE 2020
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Afgerond</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-0454544
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 11 aug 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              SEPP 2023
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Afgewezen</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-04534444
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 10 aug 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              Brexitvouchers
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">In afwachting</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> QIE49-304933
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 20 jun 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              Eurostars
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Goedgekeurd</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> EURO0933-0393
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 12 mei 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              GMO Groenten en fruit
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">In behandeling</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> GMO9494-300
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 5 apr 2023
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell  rvo-table-cell--title">
                            <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-click">
                              IPC Visserij 2022
                            </a>
                          </td>
                          <td className="rvo-table-cell">
                            <LayoutColumnRow row={true} size="xs">
                              <div className="rvo-card-status-text">Goedgekeurd</div>
                            </LayoutColumnRow>
                          </td>
                          <td className="rvo-table-cell ">
                            <span className="rvo-table-head-indicator">Referentienummer:</span> VIS0299-009
                          </td>
                          <td className="rvo-table-cell">
                            <span className="rvo-table-head-indicator">Laatste wijziging:</span> 30 mrt 2023
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="rvo-rhs-update-component">
                  <nav className="rvo-pagination">
                    <div className="rvo-pagination-prev">
                      <Link content="Vorige" icon="delta-naar-links" showIcon="before" noUnderline={true} />
                    </div>
                    <ul className="rvo-pagination-list">
                      <li className="rvo-pagination-item">
                        <Link content="1" />
                      </li>
                      <li className="rvo-pagination-item rvo-pagination-item--ellipses">...</li>
                      <li className="rvo-pagination-item">
                        <Link content="5" />
                      </li>
                      <li className="rvo-pagination-item rvo-pagination-item--current">
                        <Link content="6" />
                      </li>
                      <li className="rvo-pagination-item">
                        <Link content="7" />
                      </li>
                      <li className="rvo-pagination-item rvo-pagination-item--ellipses">...</li>
                      <li className="rvo-pagination-item">
                        <Link content="42" />
                      </li>
                    </ul>
                    <div className="rvo-pagination-next">
                      <Link content="Volgende" icon="delta-naar-rechts" showIcon="after" noUnderline={true} />
                    </div>
                  </nav>
                </div>
              </LayoutColumnRow>
              <div className="rvo-cards-grid">
                <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--grijs-2">
                  <div className="rvo-card-content">
                    <h4 className="utrecht-heading-4">
                      <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                        Wilt u een nieuwe regeling aanvragen?
                      </a>
                    </h4>
                    <span className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                        role="img"
                        aria-label="Plus"
                      ></span>
                      Start een nieuwe aanvraag
                    </span>
                  </div>
                </div>
                <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--grijs-2">
                  <div className="rvo-card-content">
                    <h4 className="utrecht-heading-4">
                      <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                        Wilt u een nieuwe regeling aanvragen?
                      </a>
                    </h4>
                    <span className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                      Wilt u een registratie doen of wijzigen?
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"
                        role="img"
                        aria-label="Plus"
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </LayoutColumnRow>
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
      </div>
    </body>
  );
};

export default MijnDossier;
