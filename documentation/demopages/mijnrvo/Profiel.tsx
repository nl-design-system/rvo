import { Button, Header, Heading, Icon, LayoutColumnRow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { useState } from 'react';
import '../common/style.scss';

const Profiel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            items={[
              { label: 'Zaken', onClick: linkTo("Demo pagina's/Mijn RVO/Mijn zaken") },
              { label: 'Diensten', onClick: linkTo("Demo pagina's/Mijn RVO/Diensten") },
              { label: 'Help', link: '#' },
              {
                label: 'Profiel',
                onClick: linkTo("Demo pagina's/Mijn RVO/Profiel"),
              },
              {
                label: 'Uitloggen',
                onClick: linkTo("Demo pagina's/Mijn RVO/Inloggen"),
                align: 'right',
              },
              { label: 'English', icon: 'wereldbol', link: '#', align: 'right' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />
        </details>
        <MenuBar
          items={[
            { label: 'Zaken', onClick: linkTo("Demo pagina's/Mijn RVO/Mijn zaken") },
            { label: 'Diensten', onClick: linkTo("Demo pagina's/Mijn RVO/Diensten") },
            { label: 'Help', link: '#' },
            {
              label: 'Profiel',
              active: true,
              onClick: linkTo("Demo pagina's/Mijn RVO/Profiel"),
            },
            {
              label: 'Uitloggen',
              onClick: linkTo("Demo pagina's/Mijn RVO/Inloggen"),
              align: 'right',
            },
            { label: 'English', icon: 'wereldbol', link: '#', align: 'right' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
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
                      href="#"
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
                    <Link href="#" content="G.G.L. Luijten" showIcon="before" icon="user" noUnderline={true}></Link>
                    <button
                      className="utrecht-button utrecht-button--subtle utrecht-button--warning rvo-layout-row rvo-layout-gap--xs utrecht-button--rvo-xs"
                      type="button"
                      onClick={() => {
                        setModalIsOpen(true);
                        document.body.style.overflow = 'hidden';
                      }}
                    >
                      <span className="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md"></span>
                      Intrekken
                    </button>
                  </div>
                  <div className="rvo-machtigingen-description">Voor alle diensten in Mijn machtigingen(volmacht)</div>
                  <div className="rvo-machtigingen-date">vanaf 14-02-2022 tot 13-02-2023</div>
                </div>
                <div className="rvo-machtigingen-item">
                  <div className="rvo-machtigingen-title">
                    <Link
                      href="#"
                      content="Maatschap A.F. Nijboer en L. van der Lei"
                      showIcon="before"
                      icon="user"
                      noUnderline={true}
                    ></Link>
                    <Button
                      kind="warning-subtle"
                      label="Intrekken"
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
                    <Link href="#" content="ACME" showIcon="before" icon="user" noUnderline={true}></Link>
                    <Button
                      kind="warning-subtle"
                      label="Intrekken"
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
      {modalIsOpen && (
        <div
          className="rvo-modal"
          onClick={() => {
            setModalIsOpen(false);
            document.body.style.overflow = 'auto';
          }}
        >
          <div className="rvo-modal-element">
            <Heading type="h3" textContent="Machtiging intrekken"></Heading>
            <p>
              Weet u zeker dat u de machtiging van <strong>G.G.L. Luijten</strong> wilt intrekken?
            </p>
            <div className="rvo-button-group rvo-layout-row rvo-layout-gap--md">
              <Button kind="secondary" label="Annuleren" size="sm"></Button>
              <Button kind="warning" label="Machtiging intrekken" size="sm"></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiel;
