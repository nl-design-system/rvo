import {
  Alert,
  Button,
  CheckboxField,
  Heading,
  Icon,
  LayoutFlow,
  MenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../common/mijn-percelen.scss';
import '../../common/rhs-update.scss';

const Percelen = () => {
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
          <div className="rvo-topnav--w-line">
            <MenuBar
              items={[
                {
                  label: 'Home',

                  icon: 'home',
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-startpagina--default&viewMode=story',
                },
                {
                  label: 'Mijn Percelen',
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story',
                },
                {
                  label: 'Boer Overveen B.V',
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-profiel--default&viewMode=story',
                  icon: 'user',
                },
                { label: 'Uitloggen', link: '#', align: 'right' },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
        </div>
        <main className="rvo-main--mijn-percelen">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Wijzigen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-oplossen--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-samenvatting--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Samenvatting
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-versturen--default&viewMode=story"
                  id="tab3"
                  className="rvo-tabs-item-link"
                >
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutFlow gap="md">
                  <Alert kind="warning" content="U moet de wijzigingen nog versturen. <a href='#'>Nu versturen</a>" />
                  <div className="rvo-instellingen">
                    <a
                      className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                      type="button"
                      href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-profiel--default&viewMode=story"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-tandwielen rvo-icon--xs rvo-icon--hemelblauw"
                        role="img"
                        aria-label="Tandwielen"
                      ></span>
                      Instellingen
                    </a>
                  </div>
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <details className="rvo-percelen-filter">
                        <summary>
                          Filter en sorteer percelen <Icon icon="delta-omlaag"></Icon>
                          <Icon icon="delta-omhoog"></Icon>
                        </summary>
                        <LayoutFlow gap="md">
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
                        </LayoutFlow>
                      </details>
                    </fieldset>
                  </div>

                  <div className="rvo-cards rvo-cards--percelen">
                    <div className="rvo-card rvo-card--perceel rvo-card--outline">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" title="#21 Slootje bij de buren"></Heading>
                        <span className="rvo-card-perceel-hectare">1,3495 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Grasland, blijvend </span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em> tot <em>25-03-2025</em>
                        </span>
                      </div>
                      <Alert
                        kind="error"
                        content="Dit perceel heeft gedurende (een deel van) de looptijd geheel of gedeeltelijk overlap met een perceel van een andere gebruiker. <a href='#'>Oplossen</a>"
                      ></Alert>
                      <div className="rvo-card-perceel-actions">
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Bewerken
                        </Button>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--perceel rvo-card--outline">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" title="#22 Groot maisveld"></Heading>
                        <span className="rvo-card-perceel-hectare">2,395 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Mais </span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em> tot <em>25-03-2025</em>
                        </span>
                      </div>

                      <div className="rvo-card-perceel-actions">
                        <Button kind="warning-subtle" size="xs" showIcon="before" icon="refresh">
                          Ongedaan maken
                        </Button>
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Bewerken
                        </Button>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--perceel rvo-card--outline">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" title="#25 Akker aan de hoogstraat"></Heading>
                        <span className="rvo-card-perceel-hectare">1,565 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Grasland</span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em>
                        </span>
                      </div>

                      <div className="rvo-card-perceel-actions">
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Bewerken
                        </Button>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--perceel rvo-card--active  rvo-card--outline">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" title="#433"></Heading>
                        <span className="rvo-card-perceel-hectare">0,225 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Grasland, blijvend </span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em> tot <em>25-03-2025</em>
                        </span>
                      </div>
                      <Alert
                        kind="warning"
                        content="Er zijn niet geclaimde delen gevonden binnen de topografische grens. <a href='#'>Oplossen</a> of <a href='#'>negeren</a>"
                      ></Alert>

                      <div className="rvo-card-perceel-actions">
                        <a
                          href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-perceeledit--default&viewMode=story"
                          className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                        >
                          Bewerken
                        </a>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                  </div>
                </LayoutFlow>
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

export default Percelen;
