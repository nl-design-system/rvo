import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsMijnRVO } from '../common/defaultMenuBarItemsMijnRVO';

const Zaak = () => {
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

        <MaxWidthLayout size="md">
          <main className="rvo-main rvo-main--zaak">
            <div className="rvo-main-content">
              <LayoutColumnRow size="2xl">
                <LayoutColumnRow size="md">
                  <h1 className="utrecht-heading-1">
                    Jonge Vissers 2022
                    <span className="rvo-case-number">
                      <span className="utrecht-icon rvo-icon rvo-icon-map rvo-icon--lg rvo-icon--zwart"></span> 22933948
                    </span>
                  </h1>

                  <div className="rvo-alert rvo-alert--warning">
                    <span className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"></span>
                    <div className="rvo-alert-text">
                      <div>
                        De aanvraag is <strong>bij u in behandeling</strong>. Dat betekent dat deze nog niet is
                        ingediend. U kunt de{' '}
                        <a
                          href="iframe.html?args=&id=pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story"
                          className="rvo-link"
                        >
                          aanvraag openen
                        </a>
                        , verder invullen en dan indienen.
                      </div>
                    </div>
                  </div>
                  <a
                    className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    href="iframe.html?args=&id=pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story"
                  >
                    Aanvraag openen
                  </a>
                </LayoutColumnRow>
                <div className="rvo-item-list rvo-item-list--documents">
                  <Heading type="h2" textContent="Documenten"></Heading>
                  <div className="rvo-item-list-item rvo-item-list-item--document">
                    <div className="rvo-item-list-detail rvo-item-list-detail--date">
                      <span className="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"></span>{' '}
                      25-02-2022
                    </div>
                    <div className="rvo-item-list-detail rvo-item-list-detail--description">
                      <a className="rvo-link" href="#">
                        Goedkeuring aanvraag (PDF)
                      </a>
                    </div>
                  </div>
                  <div className="rvo-item-list-item rvo-item-list-item--document">
                    <div className="rvo-item-list-detail rvo-item-list-detail--date">
                      <span className="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"></span>{' '}
                      31-01-2022
                    </div>
                    <div className="rvo-item-list-detail rvo-item-list-detail--description">
                      <a className="rvo-link" href="#">
                        Verzoek aanvullende gegevens (PDF)
                      </a>
                    </div>
                  </div>
                  <div className="rvo-item-list-item rvo-item-list-item--document">
                    <div className="rvo-item-list-detail rvo-item-list-detail--date">
                      <span className="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"></span>{' '}
                      24-01-2022
                    </div>
                    <div className="rvo-item-list-detail rvo-item-list-detail--description">
                      <a className="rvo-link" href="#">
                        Bevestiging aanvraag Gemeenschappelijke Marktordening 2023 (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </LayoutColumnRow>
            </div>
            <aside className="rvo-sidebar">
              <div className="rvo-timeline rvo-timeline--zaak-gebeurtenissen">
                <div className="rvo-timeline-event rvo-timeline-event--completed">
                  <div className="rvo-timeline-status rvo-timeline-status--completed">
                    <span className="utrecht-icon rvo-icon rvo-icon-vinkje rvo-icon--sm rvo-icon--wit"></span>
                  </div>
                  <div className="rvo-timeline-text">
                    <div className="rvo-timeline-description">Aanvraag gestart</div>
                    <div className="rvo-timeline-date">10-10-2022</div>
                  </div>
                </div>
                <div className="rvo-timeline-event">
                  <div className="rvo-timeline-status rvo-timeline-status--doing">
                    <span className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"></span>
                  </div>
                  <div className="rvo-timeline-text">
                    <div className="rvo-timeline-description">Aanvraag bij u in behandeling</div>
                    <div className="rvo-timeline-date">12-10-2022</div>
                  </div>
                </div>
                <div className="rvo-timeline-event">
                  <div className="rvo-timeline-status rvo-timeline-status--incomplete">
                    <span className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"></span>
                  </div>
                  <div className="rvo-timeline-text">
                    <div className="rvo-timeline-description">Aanvraag wordt beoordeeld</div>
                    <div className="rvo-timeline-date">Uiterlijk vier werkweken na indienen</div>
                  </div>
                </div>
                <div className="rvo-timeline-event">
                  <div className="rvo-timeline-status rvo-timeline-status--incomplete">
                    <span className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"></span>
                  </div>
                  <div className="rvo-timeline-text">
                    <div className="rvo-timeline-description">Uitbetaling</div>
                    <div className="rvo-timeline-date">Uiterlijk twee werkweken na goedkeuring</div>
                  </div>
                </div>
                <div className="rvo-timeline-event rvo-timeline-event--last">
                  <div className="rvo-timeline-status rvo-timeline-status--incomplete">
                    <span className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"></span>
                  </div>
                  <div className="rvo-timeline-text">
                    <div className="rvo-timeline-description">Aanvraag afgerond</div>
                  </div>
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
    </div>
  );
};

export default Zaak;
