import { Button, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/mijn-percelen.scss';
import '../../common/rhs-update.scss';

const Startpagina = () => {
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
                  active: true,
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
            {/* <ul role="tablist" className="rvo-tabs">
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
                  className="rvo-tabs-item-link"
                >
                  Versturen
                </a>
              </li>
            </ul> */}
            <div className="rvo-tab-content rvo-tab-content--startpagina">
              <div className="rvo-rhs-update-component">
                <LayoutFlow size="md">
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
                    <LayoutFlow size="xl">
                      <div className="rvo-intro">
                        <Heading type="h1" textContent="Mijn Percelen"></Heading>
                        <p className="rvo-paragraph-spaced rvo-paragraph rvo-paragraph--lg">
                          Hier registreert en wijzigt u de percelen die u in gebruik heeft. De perceelsgegevens zijn de
                          basis voor het aanvragen van subsidies en voor regelingen zoals de mestwetgeving. Daarom is
                          het belangrijk dat u uw gegevens bijhoudt.
                        </p>
                        <a
                          href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story"
                          className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
                        >
                          Start met registreren en bewerken
                        </a>
                      </div>
                      <div className="rvo-instructions">
                        <Heading type="h2" textContent="Voordat u begint" />
                        <br />
                        <Heading type="h3" textContent="Uw bouwplan voor 2024 opgeven"></Heading>
                        <p className="rvo-paragraph-spaced">
                          Wilt u alvast uw percelen voor 2024 opgeven? Klik op ‘Wijzigen’ en pas daarna de peildatum aan
                          naar 15-05-2024. Klik vervolgens op de knop ‘Percelen wijzigen’. U kunt dan starten met het
                          opgeven/bijwerken van uw gewaspercelen en landschapselementen voor 2024.
                        </p>
                        <Heading type="h3" textContent="Landschapselementen registreren"></Heading>
                        <p className="rvo-paragraph-spaced">
                          Om landschapselementen te registreren gebruikt u verschillende nieuwe functies. Meer
                          informatie vindt u in het{' '}
                          <a href="#" className="rvo-link">
                            Stappenplan landschapselementen registreren
                          </a>
                          .
                        </p>

                        <Heading type="h3" textContent="Privacy"></Heading>
                        <p className="rvo-paragraph-spaced">
                          Wij gaan zorgvuldig om met uw persoonsgegevens. Lees meer over ons{' '}
                          <a href="#" className="rvo-link">
                            privacybeleid
                          </a>
                          . Informatie over specifieke verwerkingen vindt u in het{' '}
                          <a href="#" className="rvo-link">
                            AVG-register
                          </a>{' '}
                          van het ministerie van Economische Zaken en Klimaat en het ministerie van Landbouw, Natuur en
                          Voedselkwaliteit.
                        </p>
                        <Button kind="primary">Start met registreren en bewerken</Button>
                      </div>
                    </LayoutFlow>
                  </div>
                </LayoutFlow>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--sidebar">
            <LayoutFlow size="md">
              <div className="rvo-info-block rvo-info-block--mijn-percelen-start">
                <Heading type="h4" textContent="Hulp"></Heading>
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
                <Heading type="h4" textContent="Meekijken"></Heading>
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

export default Startpagina;
