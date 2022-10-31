import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';

const Accordion = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <div className="rvo-header-content">
        <Header />
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <MaxWidthLayout size="sm">
          <main className="rvo-main">
            <LayoutColumnRow size="sm">
              <Heading type="h1" textContent="Accordion" />
              <Heading type="h2" textContent="Accordion Default" />
              <div className="rvo-accordion">
                <details className="rvo-accordion__item rvo-login-option login-option--e-herkenning">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Voor ondernemers en gemeentes met e-Herkenning
                    </h3>
                  </summary>
                  <p>
                    U bent <strong>ondernemer</strong> en ingeschreven bij KVK. Of u logt in namens een{' '}
                    <strong>gemeente</strong>.{' '}
                  </p>
                  <p>
                    Meer informatie leest u op onze pagina <Link content="Zaken regelen bij RVO" url="#"></Link> . Lukt
                    het inloggen niet? Ga naar <Link content="Hulp bij inloggen" url="#"></Link>.
                  </p>{' '}
                  <p>Kies het niveau van het middel waarmee u wilt inloggen.</p>
                  <p></p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--digid">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Voor particulieren met DigiD
                    </h3>
                  </summary>

                  <p>
                    U bent <strong>particulier</strong> en heeft een Burgerservicenummer (BSN). Log in met DigiD. Meer
                    informatie leest u op de website van <Link content="DigiD" url="#"></Link>
                  </p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--eu">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Digital identity from another European country
                    </h3>
                  </summary>

                  <p>Log in with a digital identity from another European country.</p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--anders">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Anders inloggen
                    </h3>
                  </summary>

                  <p>U heeft geen eHerkenning of DigiD.</p>
                </details>
              </div>
              <Heading type="h2" textContent="Accordion with Teaser" />
              <div className="rvo-accordion">
                <details className="rvo-accordion__item rvo-login-option login-option--e-herkenning">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Voor ondernemers en gemeentes met e-Herkenning
                      <span className="rvo-accordion-teaser">This is a teaser of what to expect when expanding</span>
                    </h3>
                  </summary>
                  <p>
                    U bent <strong>ondernemer</strong> en ingeschreven bij KVK. Of u logt in namens een{' '}
                    <strong>gemeente</strong>.{' '}
                  </p>
                  <p>
                    Meer informatie leest u op onze pagina <Link content="Zaken regelen bij RVO" url="#"></Link> . Lukt
                    het inloggen niet? Ga naar <Link content="Hulp bij inloggen" url="#"></Link>.
                  </p>{' '}
                  <p>Kies het niveau van het middel waarmee u wilt inloggen.</p>
                  <p></p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--digid">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Voor particulieren met DigiD
                    </h3>
                  </summary>

                  <p>
                    U bent <strong>particulier</strong> en heeft een Burgerservicenummer (BSN). Log in met DigiD. Meer
                    informatie leest u op de website van <Link content="DigiD" url="#"></Link>
                  </p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--eu">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Digital identity from another European country
                    </h3>
                  </summary>

                  <p>Log in with a digital identity from another European country.</p>
                </details>
                <details className="rvo-accordion__item rvo-login-option login-option--anders">
                  <summary className="rvo-accordion__item-title">
                    <h3 className="rvo-link">
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                      <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                      Anders inloggen
                    </h3>
                  </summary>

                  <p>U heeft geen eHerkenning of DigiD.</p>
                </details>
              </div>
            </LayoutColumnRow>
          </main>
        </MaxWidthLayout>
      </div>
    </div>
  );
};

export default Accordion;
