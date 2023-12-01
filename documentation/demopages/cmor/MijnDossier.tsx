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
import '../common/rhs-update.scss';
import '../common/cmor.scss';

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
                    { label: 'Overzicht', link: '#', icon: 'home' },
                    { label: 'Mijn dossier', link: '#', icon: 'map', active: true },
                    { label: 'Mijn berichten', link: '#', icon: 'mail' },
                    { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
                  ]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
                />
                <MenuBar
                  items={[{ label: 'Hulp & Contact', link: '#', icon: 'communicatie' }]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
                />
                <MenuBar
                  items={[
                    { label: 'English', link: '#', icon: 'wereldbol' },
                    { label: 'Uitloggen', link: '#', icon: 'externe-link' },
                  ]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
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
              menuMaxWidth="lg"
            />
          </div>
        </div>
        <main className="rvo-main--cmor rvo-main--sidebar-active rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-sidebar-menu">
            <MenuBar
              items={[
                { label: 'Overzicht', link: '#', icon: 'home' },
                { label: 'Mijn dossier', link: '#', icon: 'map', active: true },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              menuMaxWidth="md"
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
                            <div className="rvo-card-status-text">
                              Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                            </div>
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
                            WBSO 2022
                          </a>
                        </td>
                        <td className="rvo-table-cell">
                          <LayoutColumnRow row={true} size="xs">
                            <StatusIcon type="waarschuwing" size="md" />
                            <div className="rvo-card-status-text">
                              Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                            </div>
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
                            WBSO 2022
                          </a>
                        </td>
                        <td className="rvo-table-cell">
                          <LayoutColumnRow row={true} size="xs">
                            <StatusIcon type="waarschuwing" size="md" />
                            <div className="rvo-card-status-text">
                              Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                            </div>
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
                            WBSO 2022
                          </a>
                        </td>
                        <td className="rvo-table-cell">
                          <LayoutColumnRow row={true} size="xs">
                            <StatusIcon type="waarschuwing" size="md" />
                            <div className="rvo-card-status-text">
                              Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                            </div>
                          </LayoutColumnRow>
                        </td>
                        <td className="rvo-table-cell ">
                          <span className="rvo-table-head-indicator">Referentienummer:</span> MITKV23-04546009
                        </td>
                        <td className="rvo-table-cell">
                          <span className="rvo-table-head-indicator">Laatste wijziging:</span> 10 aug 2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
