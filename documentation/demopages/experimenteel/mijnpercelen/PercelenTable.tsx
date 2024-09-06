import {
  Alert,
  Button,
  CheckboxField,
  Icon,
  LayoutColumnRow,
  MenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../common/mijn-percelen.scss';
import '../../common/rhs-update.scss';

const PercelenTable = () => {
  return (
    <body className="rvo-theme rvo-mijn-percelen">
      <div className="rvo-mijn-percelen rvo-rhs-update">
        <header className="rvo-header">
          <div className="rvo-rhs-update-component">
            <a className="rvo-logo" href="#">
              <div className="rvo-logo-lint">
                <img src="images/lint.svg" alt=""></img>
              </div>
              <div className="rvo-logo-text">
                Rijksdienst voor Ondernemend
                <br />
                Nederland
              </div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component">
          <MenuBar
            items={[
              {
                label: 'Mijn Percelen',
                active: true,
                link: '#',
              },
              { label: 'Uitloggen', link: '#', align: 'right' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />
        </div>
        <main className="rvo-main--mijn-percelen rvo-main--mijn-percelen-table">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="#wijzigen"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Wijzigen
                </a>
              </li>
              {/* <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#oplossen" id="tab2" className="rvo-tabs-item-link">
                  Oplossen
                </a>
              </li> */}
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#versturen" id="tab3" className="rvo-tabs-item-link">
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutColumnRow size="md">
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <details className="rvo-percelen-filter">
                        <summary>
                          Filter en sorteer percelen <Icon icon="delta-omlaag"></Icon>
                          <Icon icon="delta-omhoog"></Icon>
                        </summary>
                        <LayoutColumnRow size="md">
                          <SelectField
                            label="Filter op peildatum"
                            options={[{ value: '1', label: '15-05-2023' }]}
                          ></SelectField>
                          <CheckboxField
                            label=""
                            options={[
                              { id: 'optionA-cb-warning', label: 'Toon percelen met conflicten' },
                              { id: 'optionB-cb-warning', label: 'Toon percelen met waarschuwingen' },
                            ]}
                          ></CheckboxField>
                          <TextInputField label="Filter op naam perceel"></TextInputField>
                          <SelectField
                            label="Sorteer percelen"
                            options={[
                              { value: 'a', label: 'Op naam' },
                              { value: 'b', label: 'Op nummer' },
                              { value: 'c', label: 'Op aantal hectare' },
                            ]}
                          ></SelectField>
                        </LayoutColumnRow>
                      </details>
                    </fieldset>
                  </div>
                  <div className="rvo-table--responsive">
                    <table className="rvo-table">
                      <thead className="rvo-table-head">
                        <tr className="rvo-table-row">
                          <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                            #
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
                            Naam
                          </th>
                          <th scope="col" className="rvo-table-header ">
                            Gewas
                          </th>
                          <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                            Opp (ha)
                          </th>
                          <th scope="col" className="rvo-table-header">
                            Acties
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rvo-table-body">
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">433</td>
                          <td className="rvo-table-cell"></td>
                          <td className="rvo-table-cell">Aardperen</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">8,889</td>
                          <td className="rvo-table-cell">
                            {' '}
                            <a
                              href="/iframe.html?args=&id=demo-pagina-s-mijn-percelen-perceeledit--default&viewMode=story"
                              className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                            >
                              Bewerken
                            </a>
                            <Button kind="tertiary" showIcon="no" size="xs">
                              Verwijderen
                            </Button>
                          </td>
                        </tr>
                        <tr className="rvo-table-row rvo-table-row--alert">
                          <td colSpan={5} className="rvo-table-cell">
                            <Alert
                              kind="warning"
                              content="Er zijn niet geclaimde delen gevonden binnen de topografische grens. <a href='#'>Oplossen</a> of <a href='#'>negeren</a>"
                            ></Alert>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">23</td>
                          <td className="rvo-table-cell">Slootje</td>
                          <td className="rvo-table-cell">Boekweit</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">2,287</td>
                          <td className="rvo-table-cell">
                            {' '}
                            <a
                              href="/iframe.html?args=&id=demo-pagina-s-mijn-percelen-perceeledit--default&viewMode=story"
                              className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                            >
                              Bewerken
                            </a>
                            <Button kind="tertiary" showIcon="no" size="xs">
                              Verwijderen
                            </Button>
                          </td>
                        </tr>

                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">26</td>
                          <td className="rvo-table-cell">Hoogweg</td>
                          <td className="rvo-table-cell">Mais</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">3,002</td>
                          <td className="rvo-table-cell">
                            {' '}
                            <a
                              href="/iframe.html?args=&id=demo-pagina-s-mijn-percelen-perceeledit--default&viewMode=story"
                              className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                            >
                              Bewerken
                            </a>
                            <Button kind="tertiary" showIcon="no" size="xs">
                              Verwijderen
                            </Button>
                          </td>
                        </tr>

                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">433</td>
                          <td className="rvo-table-cell"></td>
                          <td className="rvo-table-cell">Aardperen</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">8,889</td>
                          <td className="rvo-table-cell">
                            {' '}
                            <a
                              href="/iframe.html?args=&id=demo-pagina-s-mijn-percelen-perceeledit--default&viewMode=story"
                              className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                            >
                              Bewerken
                            </a>
                            <Button kind="tertiary" showIcon="no" size="xs">
                              Verwijderen
                            </Button>
                          </td>
                        </tr>
                        <tr className="rvo-table-row rvo-table-row--alert">
                          <td colSpan={5} className="rvo-table-cell">
                            <Alert
                              kind="error"
                              content="Dit perceel heeft gedurende (een deel van) de looptijd geheel of gedeeltelijk overlap met een perceel van een andere gebruiker. <a href='#'>Oplossen</a>"
                            ></Alert>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </LayoutColumnRow>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--map">
            <img src="images/map.svg" alt="" className="rvo-perceel-kaart" />
          </div>
        </main>
      </div>
    </body>
  );
};

export default PercelenTable;
