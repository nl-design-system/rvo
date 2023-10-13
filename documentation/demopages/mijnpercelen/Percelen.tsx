import { Alert, Button, Heading, LayoutColumnRow, MenuBar, SelectField } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/mijn-percelen.scss';

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
            menuMaxWidth="md"
          />
        </div>
        <main className="rvo-main--mijn-percelen">
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
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#oplossen" id="tab2" className="rvo-tabs-item-link">
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#versturen" id="tab3" className="rvo-tabs-item-link">
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutColumnRow size="md">
                  <SelectField
                    label="Uw percelen op peildatum"
                    options={[{ value: '1', label: '15-05-2023' }]}
                    helperText="Hier meer informatie over de peildatum."
                    expandableHelperText={true}
                    expandableHelperTextTitle="Meer informatie over de peildatum"
                  ></SelectField>
                  <div className="rvo-cards rvo-cards--percelen">
                    <div className="rvo-card rvo-card--perceel">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" textContent="#21 Slootje bij de buren"></Heading>
                        <span className="rvo-card-perceel-hectare">1,3495 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Grasland, blijvend </span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em> tot <em>25-03-2025</em>
                        </span>
                      </div>
                      <Alert kind="warning" content="Dit perceel overlapt met een ander perceel."></Alert>
                      <div className="rvo-card-perceel-actions">
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Oplossen
                        </Button>
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Bewerken
                        </Button>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--perceel">
                      <div className="rvo-card-perceel-title">
                        <Heading type="h2" textContent="#22 Groot maisveld"></Heading>
                        <span className="rvo-card-perceel-hectare">2,395 ha</span>
                      </div>
                      <div className="rvo-card-perceel-content">
                        <span className="rvo-card-perceel-gewas">Mais </span>
                        <span className="rvo-card-perceel-datum">
                          van <em>15-01-2023</em> tot <em>25-03-2025</em>
                        </span>
                      </div>

                      <div className="rvo-card-perceel-actions">
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Oplossen
                        </Button>
                        <Button kind="tertiary" size="xs" showIcon="no">
                          Bewerken
                        </Button>
                        <Button kind="tertiary" showIcon="no" size="xs">
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                  </div>
                </LayoutColumnRow>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--map"></div>
        </main>
      </div>
    </body>
  );
};

export default Percelen;
