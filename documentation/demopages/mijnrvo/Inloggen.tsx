import { Header, Heading, Icon, LayoutColumnRow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../common/style.scss';

const Inloggen = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <div className="rvo-header-content">
        <Header />
        <MenuBar
          items={[{ label: 'Mijn RVO', link: '#' }]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="sm"
        />
        <div className="rvo-hero rvo-hero--man-met-laptop">
          <div className="rvo-hero-bg-img-container">
            <img src="images/hero/hero-bg--vrouw-met-mobiel.webp" className="rvo-hero-bg-img" />
          </div>
          <MaxWidthLayout size="sm">
            <div className="rvo-hero-content">
              <div className="rvo-hero-text">
                <Heading type="h1" textContent="Inloggen" />
                <p className="rvo-hero-description">
                  Hieronder vindt u de verschillende manieren om in te loggen op Mijn RVO
                </p>
              </div>
              <div className="rvo-hero-img-container">
                <img src="images/hero/vrouw_op_mobiel.webp" className="rvo-hero-img" />
              </div>
            </div>
          </MaxWidthLayout>
        </div>
        <MaxWidthLayout size="sm">
          <main className="rvo-main rvo-main--inloggen">
            <LayoutColumnRow size="sm">
              <div className="rvo-accordion rvo-login-options">
                <details className="rvo-accordion__item rvo-login-option login-option--e-herkenning">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="rvo-link">
                      <span className="rvo-accordion__item-title">
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                        Voor ondernemers en gemeentes met e-Herkenning{' '}
                        <img
                          src="images/login-options/e-herkenning-logo.svg"
                          className="rvo-login-option-img rvo-login-option-img--e-herkenning"
                        />
                      </span>
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <p>
                      U bent <strong>ondernemer</strong> en ingeschreven bij KVK. Of u logt in namens een{' '}
                      <strong>gemeente</strong>.{' '}
                    </p>
                    <p>
                      Meer informatie leest u op onze pagina <Link content="Zaken regelen bij RVO" href="#"></Link> .
                      Lukt het inloggen niet? Ga naar <Link content="Hulp bij inloggen" href="#"></Link>.
                    </p>{' '}
                    <p>Kies het niveau van het middel waarmee u wilt inloggen.</p>
                    <p>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story"
                      >
                        Inloggen met e-Herkenning 2
                      </a>
                      <br />
                      <br />
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story"
                      >
                        Inloggen met e-Herkenning 3
                      </a>
                    </p>
                  </div>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--digid">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="rvo-link">
                      <span className="rvo-accordion__item-title">
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                        Voor particulieren met DigiD{' '}
                        <img
                          src="images/login-options/digid-logo.svg"
                          className="rvo-login-option-img rvo-login-option-img--digid"
                        />
                      </span>
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <p>
                      U bent <strong>particulier</strong> en heeft een Burgerservicenummer (BSN). Log in met DigiD. Meer
                      informatie leest u op de website van <Link content="DigiD" href="#"></Link>
                    </p>

                    <a
                      className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story"
                    >
                      Inloggen met DigiD
                    </a>
                  </div>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--eu">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="rvo-link">
                      <span className="rvo-accordion__item-title">
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                        Digital identity from another European country{' '}
                        <img
                          src="images/login-options/eu-flag.svg"
                          className="rvo-login-option-img rvo-login-option-img--eu"
                        />
                      </span>
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <p>Log in with a digital identity from another European country.</p>

                    <a
                      className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story"
                    >
                      EU Login
                    </a>
                  </div>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--anders">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="rvo-link">
                      <span className="rvo-accordion__item-title">
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                        Anders inloggen
                      </span>
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <p>U heeft geen eHerkenning of DigiD.</p>

                    <a
                      className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story"
                    >
                      Anders inloggen
                    </a>
                  </div>
                </details>
              </div>
            </LayoutColumnRow>
          </main>
        </MaxWidthLayout>
      </div>
      <footer className="rvo-footer">
        <MaxWidthLayout size="lg">
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Algemeen"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Help"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Toegankelijkheid"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Webservices"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Privacy"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Sitemap"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Hoe werkt"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Machtigingen en TAN-codes"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Zaken regelen bij RVO"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Inschrijven en registreren"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Bedrijfsoverdracht melden"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Overlijden melden"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Naar"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Abonneren op nieuwsbrief"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Klantenpanel"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Berichtenbox voor bedrijven"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="RVO.nl"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Contact"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Contactgegevens"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Contactformulier"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link href="#" content="Aanvraag voorlichting/spreker"></Link>
            </li>
          </ul>
        </MaxWidthLayout>
      </footer>
    </div>
  );
};

export default Inloggen;
