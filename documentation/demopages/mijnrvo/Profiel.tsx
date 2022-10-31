import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsMijnRVO } from '../common/defaultMenuBarItemsMijnRVO';

const Profiel = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <div className="rvo-header-content">
        <Header />

        <details className="rvo-responsive-menu">
          <summary>
            <span className="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"></span>
            <span className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"></span>Menu
          </summary>
          <MenuBar
            items={defaultMenuBarItemsMijnRVO}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </details>
        <MenuBar
          items={defaultMenuBarItemsMijnRVO}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="md"
        />

        <div className="rvo-hero rvo-hero--man-met-laptop">
          <div className="rvo-hero-bg-img-container">
            <img src="images/hero/hero-bg--vrouw-met-laptop.webp" className="rvo-hero-bg-img" />
          </div>
          <MaxWidthLayout size="md">
            <div className="rvo-hero-content">
              <div className="rvo-hero-text">
                <Heading type="h1" textContent="Mijn profiel" />
                <p className="rvo-hero-description">
                  Hier vindt u een overzicht van uw gegevens en machtigingen zoals deze bij ons bekend zijn.
                </p>
              </div>
              <div className="rvo-hero-img-container">
                <img src="images/hero/vrouw-met-laptop.webp" className="rvo-hero-img" />
              </div>
            </div>
          </MaxWidthLayout>
        </div>

        <MaxWidthLayout size="md">
          <main className="rvo-main rvo-main--profiel">
            <div className="rvo-main-content">
              <LayoutColumnRow size="2xl">
                <LayoutColumnRow size="md">
                  <h2 className="utrecht-heading-2">Mijn gegevens</h2>

                  <LayoutColumnRow size="2xs">
                    <dl className="rvo-data-list">
                      <dt>Adres</dt>
                      <dd>
                        Prinses Beatrixlaan 2<br /> 2595AL s-GRAVENHAGE
                      </dd>
                      <dt>Postbus</dt>
                      <dd>
                        40217
                        <br /> 8004DE Zwolle
                      </dd>
                      <dt>KVK-nr.</dt>
                      <dd>27378529</dd>
                      <dt>Relatienummer</dt>
                      <dd>203465993</dd>
                      <dt>Telefoon</dt>
                      <dd>033 - 9858 857</dd>
                      <dt>Mobiel</dt>
                      <dd>06 - 7584 7463</dd>
                      <dt>E-mail</dt>
                      <dd>info@rvo.nl</dd>
                      <dt>Rekeningnummer</dt>
                      <dd>NL41INGB0705001490</dd>
                    </dl>
                    <Link
                      url="#"
                      content="Gegevens bewerken"
                      showIcon="before"
                      icon="bewerken"
                      noUnderline={true}
                    ></Link>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>
            </div>
            <aside className="rvo-sidebar">
              <div className="rvo-machtigingen">
                <Heading type="h2" textContent="Wie heb ik gemachtigd?"></Heading>

                <div className="rvo-machtigingen-item">
                  <div className="rvo-machtigingen-title">
                    <Link url="#" content="G.G.L. Luijten" showIcon="before" icon="user" noUnderline={true}></Link>
                    <Button
                      kind="warning-subtle"
                      textContent="Intrekken"
                      showIcon="before"
                      size="xs"
                      icon="verwijderen"
                    ></Button>
                  </div>
                  <div className="rvo-machtigingen-description">Voor alle diensten in Mijn machtigingen(volmacht)</div>
                  <div className="rvo-machtigingen-date">vanaf 14-02-2022 tot 13-02-2023</div>
                </div>
                <div className="rvo-machtigingen-item">
                  <div className="rvo-machtigingen-title">
                    <Link
                      url="#"
                      content="Maatschap A.F. Nijboer en L. van der Lei"
                      showIcon="before"
                      icon="user"
                      noUnderline={true}
                    ></Link>
                    <Button
                      kind="warning-subtle"
                      textContent="Intrekken"
                      showIcon="before"
                      size="xs"
                      icon="verwijderen"
                    ></Button>
                  </div>
                  <div className="rvo-machtigingen-description">VDM gegevens leveren aan</div>
                  <div className="rvo-machtigingen-date">vanaf 14-02-2017</div>
                </div>
              </div>
              <div className="rvo-machtigingen">
                <Heading type="h2" textContent="Wie heeft mij gemachtigd?"></Heading>

                <div className="rvo-machtigingen-item">
                  <div className="rvo-machtigingen-title">
                    <Link url="#" content="ACME" showIcon="before" icon="user" noUnderline={true}></Link>
                    <Button
                      kind="warning-subtle"
                      textContent="Intrekken"
                      showIcon="before"
                      size="xs"
                      icon="verwijderen"
                    ></Button>
                  </div>
                  <div className="rvo-machtigingen-description">Natuurbeheer (agrarisch) SNL</div>
                  <div className="rvo-machtigingen-date">vanaf 16-11-2021</div>
                </div>
              </div>
            </aside>
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
              <Link url="#" content="Help"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Toegankelijkheid"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Webservices"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Privacy"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Sitemap"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Hoe werkt"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Machtigingen en TAN-codes"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Zaken regelen bij RVO"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Inschrijven en registreren"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Bedrijfsoverdracht melden"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Overlijden melden"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Naar"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Abonneren op nieuwsbrief"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Klantenpanel"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Berichtenbox voor bedrijven"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="RVO.nl"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Contact"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Contactgegevens"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Contactformulier"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Aanvraag voorlichting/spreker"></Link>
            </li>
          </ul>
        </MaxWidthLayout>
      </footer>
      <div className="rvo-modal">
        <div className="rvo-modal-element">
          <Heading type="h3" textContent="Machtiging verwijderen"></Heading>
          <p>
            Weet u zeker dat u de machtiging van <strong>G.G.L. Luijten</strong> wil verwijderen?
          </p>
          <div className="rvo-button-group rvo-layout-row rvo-layout-gap--md">
            <Button kind="tertiary" textContent="Annuleren" size="xs"></Button>
            <Button kind="warning" textContent="Machtiging verwijderen" size="sm"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiel;
