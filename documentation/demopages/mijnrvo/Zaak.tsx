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

const Zaak = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
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
      <MenuBar items={defaultMenuBarItemsMijnRVO} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
      <LayoutColumnRow size="3xl">
        <main className="rvo-main rvo-main--zaak">
          <MaxWidthLayout size="md">
            <div className="rvo-case-number">
              <span className="utrecht-icon rvo-icon rvo-icon-map rvo-icon--lg rvo-icon--zwart"></span> 22933948
            </div>
            <LayoutColumnRow size="md">
              <Heading type="h1" textContent="Gemeenschappelijk Marktordening 2023"></Heading>
              <div className="rvo-alert rvo-alert--warning">
                <span className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"></span>
                <div className="rvo-alert-text">
                  <div>
                    De aanvraag is <strong>bij u in behandeling</strong>. Dat betekent dat deze nog niet is ingediend. U
                    kunt de{' '}
                    <a href="#" className="rvo-link">
                      aanvraag openen
                    </a>
                    , verder invullen en dan indienen.
                  </div>
                </div>
              </div>
              <Button
                kind="primary"
                size="md"
                active={false}
                busy={false}
                focus={false}
                focusVisible={false}
                disabled={false}
                hover={false}
                showIcon="no"
              >
                Open aanvraag
              </Button>
            </LayoutColumnRow>
          </MaxWidthLayout>
        </main>

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
      </LayoutColumnRow>
    </div>
  );
};

export default Zaak;
