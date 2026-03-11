import { Button, Header, Heading, Hero, Icon, LayoutFlow, Link } from '@nl-rvo/components';

const Nieuwsbrief = () => {
  return (
    <body className="rvo-theme rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
      <Header />

      <main className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--3xl ">
        <div className="rvo-webversie rvo-padding-block-end--sm">
          <a href="#" className="rvo-link">
            Bekijk de webversie
          </a>
        </div>
        <Heading type="h1">Nieuwsbrief</Heading>

        <div className="rvo-snel-naar rvo-margin-block-end--2xl ">
          <div className="rvo-padding-block-end--sm">Snel naar</div>
          <div className="rvo-layout-column rvo-layout-gap--xs rvo-layout--wrap ">
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Duurzaam ondernemen
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Internationaal Ondernemen
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Innovatief Ondernemen
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Agrarisch Ondernemen
            </a>
          </div>
        </div>

        <Hero
          size="lg"
          image={{
            src: 'https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-05%2FParticulier01.png%3Fitok%3D445OIaw-&w=640&q=85',
            alt: 'next',
          }}
          title="Duurzaam ondernemen"
          subtitle=""
        />
        <div className="rvo-snel-naar rvo-margin-block-end--2xl rvo-margin-block-start--lg">
          <div className="rvo-padding-block-end--sm">Direct naar</div>
          <div className="rvo-layout-column rvo-layout-gap--xs rvo-layout--wrap ">
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              De vervolgstappen voor energieopslag in Nederland
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Financiële steun bij circulaire projecten
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
              href="#"
            >
              <span
                className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Pijl naar rechts"
              ></span>
              Slimme gevel past zich vanzelf aan het weer aan
            </a>
          </div>
        </div>
        <div className="rvo-uitgelicht rvo-margin-block-end--xl">
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--two">
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://content.mailplus.nl/m11/images/mailing31566153/19_november_wegwijzer_netcongestie_min_min.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Nieuwe subsidie helpt ondernemers bij netcongestie
                    </a>
                  </Heading>
                  Heeft uw bedrijf last van het volle elektriciteitsnet? Vraag vanaf 1 april Flex-e aan. Met deze nieuwe
                  subsidie kunt u uw elektriciteitsgebruik flexibeler maken. Hierdoor kunt u mogelijk toch verder
                  groeien of verduurzamen, ook als het net vol is.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://content.mailplus.nl/m11/images/mailing31566153/foto_5_netcongestie_min.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      SDE++-subsidie geeft meer tijd en hulp voor aanvraag
                    </a>
                  </Heading>
                  De subsidie SDE++ opent dit jaar in oktober, een maand later dan normaal. Zo krijgen ondernemers meer
                  tijd om een aanvraag in te dienen. Ook bieden wij vooraf adviesgesprekken aan om hen te helpen met een
                  goede subsidieaanvraag.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://content.mailplus.nl/m11/images/mailing31566153/ewalvisch_201020_gigastore_004_1920_min.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      De vervolgstappen voor energieopslag in Nederland
                    </a>
                  </Heading>
                  Welke rol kan energieopslag spelen om vraag en aanbod van energie beter op elkaar af te stemmen? En
                  hoe kunnen we daar nu al op inspelen? Dat onderzochten wij samen met andere partijen. Bekijk hoe we
                  dat deden en welke vervolgstappen we zetten.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://content.mailplus.nl/m11/images/mailing31566153/financiele_steun_circulair_ondernemen_min.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Financiële steun bij circulaire projecten
                    </a>
                  </Heading>
                  Wilt u als ondernemer of organisatie zuiniger omgaan met materialen of producten? Laat u inspireren en
                  ontdek de mogelijkheden tijdens onze online bijeenkomst op 19 maart 2025. Onderdeel van de Week van de
                  Circulaire Economie.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Heading type="h2">Agenda Duurzaam Ondernemen</Heading>
          <div className="rvo-layout-grid rvo-layout-gap--md">
            <div className="rvo-content-item">
              <Heading type="h3" noMargins>
                <a className="rvo-link rvo-link--no-underline" href="#">
                  Webinar MOOI: Systeemintegratie
                </a>
              </Heading>
              <span className="rvo-content-item-date rvo-paragraph--subtle">6 maart 2025</span>
              <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
            </div>
            <div className="rvo-content-item">
              <Heading type="h3" noMargins>
                <a className="rvo-link rvo-link--no-underline" href="#">
                  Start online masterclassreeks CO2-reductie industrie voorjaar 2025
                </a>
              </Heading>
              <span className="rvo-content-item-date rvo-paragraph--subtle">6 maart 2025</span>
              <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
            </div>
            <div className="rvo-content-item">
              <Heading type="h3" noMargins>
                <a className="rvo-link rvo-link--no-underline" href="#">
                  HIER opgewekt 2025: voor en over lokale energie-initiatieven
                </a>
              </Heading>
              <span className="rvo-content-item-date rvo-paragraph--subtle">11 maart 2025</span>
              <em className="rvo-content-item-location rvo-paragraph--subtle">, Apeldoorn</em>
            </div>
            <div className="rvo-content-item">
              <Heading type="h3" noMargins>
                <a className="rvo-link rvo-link--no-underline" href="#">
                  Informatiebijeenkomst CEF Transport - Alternative Fuels Infrastructure Facility (AFIF)
                </a>
              </Heading>
              <span className="rvo-content-item-date rvo-paragraph--subtle">12 maart 2025</span>
              <em className="rvo-content-item-location rvo-paragraph--subtle">, Den Haag</em>
            </div>
          </div>
        </div>
        <div className="rvo-margin-block-start--xl">
          <Heading type="h2">Actuele regelingen Duurzaam Ondernemen</Heading>
          <div className="rvo-item-list rvo-padding-block-end--lg">
            <div className="rvo-item-list__item">
              <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                <LayoutFlow row={true} alignItems="start">
                  <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                  <LayoutFlow row={true} wrap={true} gap="sm">
                    <Link content="Horizon Europe Partnership (HEP)" color="zwart" noUnderline={true} />
                    Open
                  </LayoutFlow>
                </LayoutFlow>
                <div className="rvo-item-list-icon">
                  <Link target="#">
                    <Icon icon="delta-naar-rechts" size="sm" />
                  </Link>
                </div>
              </LayoutFlow>
            </div>
            <div className="rvo-item-list__item">
              <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                <LayoutFlow row={true} alignItems="start">
                  <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
                  <LayoutFlow row={true} wrap={true} gap="sm">
                    <Link content="Topsector Energie (TSE) Industrie studies" color="zwart" noUnderline={true} />
                    Bijna gesloten
                  </LayoutFlow>
                </LayoutFlow>
                <div className="rvo-item-list-icon">
                  <Link target="#">
                    <Icon icon="delta-naar-rechts" size="sm" />
                  </Link>
                </div>
              </LayoutFlow>
            </div>

            <div className="rvo-item-list__item">
              <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                <LayoutFlow row={true} alignItems="start">
                  <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
                  <LayoutFlow row={true} wrap={true} gap="sm">
                    <Link
                      content="Subsidie Warmte-infrastructuur Glastuinbouw (SWiG)"
                      color="zwart"
                      noUnderline={true}
                    />
                    Bijna gesloten
                  </LayoutFlow>
                </LayoutFlow>
                <div className="rvo-item-list-icon">
                  <Link target="#">
                    <Icon icon="delta-naar-rechts" size="sm" />
                  </Link>
                </div>
              </LayoutFlow>
            </div>
          </div>
          <Button size="sm">Bekijk meer regelingen</Button>
        </div>
      </main>

      <footer className="utrecht-page-footer rvo-footer">
        <div className="rvo-footer__container rvo-footer__container--lg">
          <div className="rvo-text--xl rvo-padding-block-start--md rvo-padding-block-end--md">
            Rijksdienst voor Ondernemend Nederland
          </div>
          <hr className="rvo-hr" />
          <div className="rvo-footer__menu-container rvo-footer__menu-container--small">
            <a
              className="rvo-link rvo-link--no-underline rvo-link--wit rvo-link--normal"
              href="https://www.rvo.nl/onderwerpen/contact"
            >
              Over ons
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-link--wit rvo-link--normal"
              href="https://www.rvo.nl/onderwerpen/privacy"
            >
              Contact
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-link--wit rvo-link--normal"
              href="https://www.rvo.nl/onderwerpen/cookies"
            >
              Privacy
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-link--wit rvo-link--normal"
              href="https://www.rvo.nl/onderwerpen/toegankelijkheid"
            >
              Gegevens wijzigen
            </a>
            <a
              className="rvo-link rvo-link--no-underline rvo-link--wit rvo-link--normal"
              href="https://www.rvo.nl/onderwerpen/proclaimer"
            >
              Afmelden
            </a>
          </div>
          <hr className="rvo-hr" />
          <div className="rvo-text--sm rvo-padding-block-start--md rvo-padding-block-end--md">
            Dit bericht kan informatie bevatten die niet voor u is bestemd. Indien u niet de geadresseerde bent of dit
            bericht abusievelijk aan u is toegezonden, wordt u verzocht dat aan de afzender te melden en het bericht te
            verwijderen. De Staat aanvaardt geen aansprakelijkheid voor schade, van welke aard ook, die verband houdt
            met risico's verbonden aan het elektronisch verzenden van berichten.
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Nieuwsbrief;
