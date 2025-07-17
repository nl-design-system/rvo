import { Button, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/mijn-percelen.scss';
import '../../common/rhs-update.scss';

const Versturen = () => {
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
        <main className="rvo-main--mijn-percelen rvo-main--mijn-percelen-startpagina rvo-max-width-layout rvo-max-width-layout--md">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link"
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
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--startpagina">
              <div className="rvo-rhs-update-component">
                <LayoutFlow gap="md">
                  {/* <a
                    className="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    href="/iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story#wijzigen"
                  >
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Terug"
                    ></span>
                    Terug naar mijn.rvo.nl
                  </a> */}
                  <div className="rvo-content">
                    <LayoutFlow gap="xl">
                      <div className="rvo-info">
                        <Heading type="h1" title="Controleren en versturen"></Heading>
                        <p className="rvo-paragraph-spaced rvo-paragraph rvo-paragraph--lg">
                          Heeft u alle wijzigingen in uw percelen opgeslagen?
                        </p>

                        <Heading type="h2" title="Controleer wijzigingen" />
                        <p className="rvo-paragraph-spaced rvo-paragraph rvo-paragraph--md">
                          Het systeem controleert de wijzigingen. Start de controle niet vanzelf?
                        </p>
                        <p className="rvo-paragraph-spaced">
                          <a
                            href="#"
                            className="utrecht-button utrecht-button--secondary-action utrecht-button--rvo-sm"
                          >
                            Start controle
                          </a>
                        </p>
                        <Heading type="h2" title="Verstuur wijzigingen"></Heading>
                        <p className="rvo-paragraph-spaced">
                          <a href="#wijzigingen" className="rvo-link">
                            Bekijk hieronder de wijzigingen
                          </a>
                          . Als u akkoord bent met de aanpassingen kunt u de wijzigingen versturen.
                        </p>
                        <p className="rvo-paragraph-spaced">
                          <Button kind="primary">Verstuur wijzigingen</Button>
                        </p>
                      </div>
                      <div className="rvo-gewijzigde-percelen">
                        <a id="wijzigingen"></a>
                        <LayoutFlow gap="sm">
                          <Heading type="h3" title="Gewijzigde percelen"></Heading>
                          <div className="rvo-cards rvo-cards--percelen">
                            <div className="rvo-card rvo-card--perceel">
                              <div className="rvo-card-perceel-title">
                                <Heading type="h2" title="#21 Slootje bij de buren"></Heading>
                                <span className="rvo-card-perceel-hectare">
                                  <span className="rvo-value-line-through">1,2495 ha</span> <strong>1,3495 ha</strong>
                                </span>
                              </div>
                              <div className="rvo-card-perceel-content">
                                <span className="rvo-card-perceel-gewas">Grasland, blijvend </span>
                                <span className="rvo-card-perceel-datum">
                                  van <em>15-01-2023</em> tot <em>25-03-2025</em>
                                </span>
                              </div>
                            </div>
                            <div className="rvo-card rvo-card--perceel">
                              <div className="rvo-card-perceel-title">
                                <Heading type="h2" title="#22 Groot maisveld"></Heading>
                                <span className="rvo-card-perceel-hectare">2,395 ha</span>
                              </div>
                              <div className="rvo-card-perceel-content">
                                <span className="rvo-card-perceel-gewas">
                                  <span className="rvo-value-line-through">Mais</span> <strong>Aardappelen</strong>
                                </span>
                                <span className="rvo-card-perceel-datum">
                                  van <em>15-01-2023</em> tot <em>25-03-2025</em>
                                </span>
                              </div>
                            </div>
                            <div className="rvo-card rvo-card--perceel">
                              <div className="rvo-card-perceel-title">
                                <Heading type="h2" title="#25 Akker aan de hoogstraat"></Heading>
                                <span className="rvo-card-perceel-hectare">1,565 ha</span>
                              </div>
                              <div className="rvo-card-perceel-content">
                                <span className="rvo-card-perceel-gewas">Grasland</span>
                                <span className="rvo-card-perceel-datum">
                                  van <em>15-01-2023</em> <strong> tot 15-01-2024</strong>
                                </span>
                              </div>
                            </div>
                            <div className="rvo-card rvo-card--perceel">
                              <div className="rvo-card-perceel-title">
                                <Heading type="h2" title="#433"></Heading>
                                <span className="rvo-card-perceel-hectare">
                                  <span className="rvo-value-line-through">1,100 ha</span> <strong>0,8495 ha</strong>
                                </span>
                              </div>
                              <div className="rvo-card-perceel-content">
                                <span className="rvo-card-perceel-gewas">Grasland, blijvend </span>
                                <span className="rvo-card-perceel-datum">
                                  van <em>15-01-2023</em> tot <em>25-03-2025</em>
                                </span>
                              </div>
                            </div>
                          </div>
                        </LayoutFlow>
                      </div>
                    </LayoutFlow>
                  </div>
                </LayoutFlow>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--sidebar">
            <LayoutFlow gap="md">
              <div className="rvo-info-block rvo-info-block--mijn-percelen-start">
                <Heading type="h4" title="Hulp"></Heading>
                <ul className="rvo-list rvo-list--unordered">
                  <li>
                    <a className="rvo-link rvo-link--no-underline" href="#">
                      Meer uitleg over het registreren en wijzigen van percelen
                    </a>
                  </li>
                  <li>
                    Bel ons op{' '}
                    <a href="tel:088 042 42 42" className="rvo-link rvo-link--no-underline">
                      088 042 42 42
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rvo-info-block rvo-info-block--mijn-percelen-start">
                <Heading type="h4" title="Meekijken"></Heading>
                <p className="rvo-paragraph-spaced">Wil onze medewerker meekijken?</p>
                <div className="rvo-rhs-update-component">
                  <Button kind="secondary" size="sm">
                    Start meekijken
                  </Button>
                </div>
              </div>
            </LayoutFlow>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Versturen;
