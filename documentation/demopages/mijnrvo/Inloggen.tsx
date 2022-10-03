import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';

const Inloggen = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar
          items={[{ label: 'Home', icon: 'home', link: '#' }]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="md"
        />
        <LayoutColumnRow size="3xl">
          <MaxWidthLayout size="lg">
            <main>
              <LayoutColumnRow size="2xl">
                <Heading type="h1" textContent="Inloggen" />
                <div className="rvo-login-options">
                  <div className="rvo-login-option login-option--e-herkenning">
                    <img
                      src="/rvo/images/login-options/e-herkenning-logo.svg"
                      className="rvo-login-option-img rvo-login-option-img--e-herkenning"
                    />

                    <p>
                      U bent <strong>ondernemer</strong> en ingeschreven bij KVK. Of u logt in namens een{' '}
                      <strong>gemeente</strong>. Meer informatie leest u op onze pagina{' '}
                      <Link content="Zaken regelen bij RVO" url="#"></Link> . Lukt het inloggen niet? Ga naar{' '}
                      <Link content="Hulp bij inloggen" url="#"></Link>. Kies het niveau van het middel waarmee u wilt
                      inloggen.
                    </p>
                    <div className="rvo-button-group rvo-layout-row rvo-layout-gap--md rvo-button-group--left-aligned">
                      <Button textContent="inloggen e-Herkenning 2" size="sm"></Button>
                      <Button textContent="inloggen e-Herkenning 3" size="sm"></Button>
                    </div>
                  </div>
                  <div className="rvo-login-option login-option--e-herkenning">
                    <img
                      src="/rvo/images/login-options/digid-logo.svg"
                      className="rvo-login-option-img rvo-login-option-img--digid"
                    />

                    <p>
                      U bent <strong>particulier</strong> en heeft een Burgerservicenummer (BSN). Log in met DigiD. Meer
                      informatie leest u op de website van <Link content="DigiD" url="#"></Link>
                    </p>

                    <Button textContent="Inloggen met DigiD" size="sm"></Button>
                  </div>
                </div>
              </LayoutColumnRow>
            </main>
          </MaxWidthLayout>
          <footer className="rvo-footer">
            <MaxWidthLayout size="lg">
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" textContent="Algemeen"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Help"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Toegankelijkheid"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Webservices"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Privacy"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Sitemap"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" textContent="Hoe werkt"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Machtigingen en TAN-codes"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Zaken regelen bij RVO"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Inschrijven en registreren"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Bedrijfsoverdracht melden"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Overlijden melden"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" textContent="Naar"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Abonneren op nieuwsbrief"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Klantenpanel"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Berichtenbox voor bedrijven"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="RVO.nl"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" textContent="Contact"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Contactgegevens"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Contactformulier"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                  <Link url="#" content="Aanvraag voorlichting/spreker"></Link>
                </li>
              </ul>
            </MaxWidthLayout>
          </footer>
        </LayoutColumnRow>
      </LayoutColumnRow>
    </div>
  );
};

export default Inloggen;
