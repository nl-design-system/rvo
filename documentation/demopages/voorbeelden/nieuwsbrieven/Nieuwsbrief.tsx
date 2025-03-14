import { Button, Footer, Header, Heading, Hero, Icon, LayoutFlow, Link } from '@nl-rvo/components';

const Nieuwsbrief = () => {
  return (
    <body className="rvo-theme rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-end--xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
      <Header />

      <main className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--3xl ">
        <div className="rvo-webversie rvo-padding-block-end--sm">
          <a href="#" className="rvo-link">
            Bekijk de webversie
          </a>
        </div>
        <Hero size="lg" image="images/www/home.jpg" title="Nieuwsbrief" />

        <div className="rvo-snel-naar rvo-margin-block-end--2xl rvo-margin-block-start--lg">
          Snel naar
          <div className="rvo-layout-row rvo-layout-gap--xs rvo-layout--wrap ">
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
          image="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-05%2FParticulier01.png%3Fitok%3D445OIaw-&w=640&q=85"
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
        <div className="rvo-onderwerpen rvo-margin-block-end--md">
          <h2 className="utrecht-heading-2">Onderwerpen</h2>
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="wereldbol" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Klimaat & Energie
                    </a>
                  </h3>
                  <span className="rvo-text--lg">
                    Energie besparen en opwekken, duurzame mobiliteit, co2-reductie industrie...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="grootstedelijk" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Bouwen & Wonen
                    </a>
                  </h3>

                  <span className="rvo-text--lg">
                    Energielabel, BENG, verduurzamen gebouwen en woningen, gebiedsontwikkeling..
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="buitenlandse-handel" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Internationaal ondernemen
                    </a>
                  </h3>

                  <span className="rvo-text--lg">
                    Landeninformatie, netwerken en contacten, financiering, handelsmissies...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="wereldbol-tussen-2-uitgestoken-handen" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Ont­wikkeling­samen­werking
                    </a>
                  </h3>

                  <span className="rvo-text--lg">
                    Voedselzekerheid, humanitaire hulp, publiek-private partnerschappen...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="tractor" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a
                      href="iframe.html?args=&id=pagina-s-experimenteel-www-landbouw--default&viewMode=story"
                      className="rvo-link rvo-link--no-underline rvo-link--full-container"
                    >
                      Landbouw
                    </a>
                  </h3>

                  <span className="rvo-text--lg">Grond, mest, marktordening, gemeenschappelijk landbouwbeleid...</span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="vis" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Visserij
                    </a>
                  </h3>
                  <span className="rvo-text--lg">
                    Registraties, vergunningen, betalingen, EU-fonds maritieme zaken en visserij...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="eend-zwemmend-bij-riet" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Dier & natuur
                    </a>
                  </h3>
                  <span className="rvo-text--lg">
                    Registraties, vergunningen, betalingen, EU-fonds maritieme zaken en visserij...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="lamp" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Innovatie, Onderzoek & Onderwijs
                    </a>
                  </h3>
                  <span className="rvo-text--lg">Octrooien, topsectoren, start-ups, research & development...</span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="grafiek" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Ondernemen & Bedrijfsvoering
                    </a>
                  </h3>
                  <span className="rvo-text--lg">
                    Financiering per bedrijfsfase, MVO, ICT en cyberveiligheid, transparant ondernemen...
                  </span>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="stethoscoop" size="2xl" />
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-container">
                      Gezondheid, Zorg & Welzijn
                    </a>
                  </h3>
                  <span className="rvo-text--lg">
                    Wonen & zorg, health deals, zorg voor innoveren, Life Sciences & Health...
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Naar A-Z overzicht" noUnderline={true} />
        </div>
        {/* <hr className="rvo-hr" /> */}
        <div className="rvo-overzichten rvo-margin-block-start--3xl ">
          <h2 className="utrecht-heading-2">Overzichten voor ondernemend Nederland</h2>
          <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/bedrijven.webp" className="rvo-card-img" width="100px" height="66px" />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Bedrijven
                  </a>
                </h3>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/particulieren.webp" className="rvo-card-img" width="100px" height="66px" />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Particulieren
                  </a>
                </h3>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/overheden.webp" className="rvo-card-img" width="100px" height="66px" />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Overheden
                  </a>
                </h3>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/kennisinstellingen.webp" className="rvo-card-img" width="100px" height="66px" />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Kennisinstellingen
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="rvo-hr" /> */}
        <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--two rvo-margin-block-start--3xl rvo-margin-block-end--3xl">
          <div className="">
            <Heading type="h2" textContent="Evenementen" />
            <div className="rvo-layout-grid rvo-layout-gap--md">
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Webinar Hoe schrijf ik een succesvolle Eurostars aanvraag?
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Webinar versnellen woningbouw
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Webinar: EU4Health werkprogramma 2024
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Handelsmissie watertechnologie en duurzame kassenbouw naar de Golfregio
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">2 maart 2024 t/m 7 maart 2024</span>
              </div>
            </div>
          </div>

          <div className="">
            <Heading type="h2" textContent="Nieuws" />
            <div className="rvo-layout-grid rvo-layout-gap--md">
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Samen de Baltische windenergiemarkt op: Nederlands cluster nog open voor extra bedrijven
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Eerste regionale woonzorgakkoord: vernieuwende samenwerking
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Nieuwe met nutriënten verontreinigde gebieden aangewezen
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">5 december 2023</span>
              </div>
              <div className="rvo-content-item">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-link--no-underline" href="#">
                    Mestproductieplafond vanaf 2024 in lijn met derogatiebeschikking
                  </a>
                </h3>
                <span className="rvo-content-item-date rvo-paragraph--subtle">5 december 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rvo-uitgelicht rvo-margin-block-end--md">
          <h2 className="utrecht-heading-2">Uitgelicht</h2>
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-12%2FProjectenboek-MIEK-en-Projectprocedure-2024.jpg%3Fitok%3DI7uP9ni9&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                      Energieprojecten in Nederland
                    </a>
                  </h3>
                  In Nederland wordt hard gewerkt aan de verbouwing van ons energiesysteem. Daarvoor is nieuwe
                  energie-infrastructuur nodig, op land en op zee. We voorkomen daarmee netcongestie in de toekomst en
                  we kunnen alle duurzame energie vervoeren. Daarom werken we aan ruim 60 grote energieprojecten door
                  het hele land. Bekijk ze in ons jaaroverzicht.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-06%2FCultuurverschillen_blok.png%3Fitok%3D5hnBoB9g&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                      Cultuurverschillen bij internationaal ondernemen
                    </a>
                  </h3>
                  Iedere ondernemer die zakendoet over de grens krijgt ermee te maken. Bekijk de praktische tips van
                  onze adviseurs, het ambassadenetwerk en cultuurexperts waarmee wij samenwerken. Een goede
                  voorbereiding kan doorslaggevend zijn voor uw succes.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-10%2FRWS20210909JV09-1920.jpg%3Fitok%3DGQh170Uc&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                      10 jaar DEI+: Honderden innovaties voor de toekomst
                    </a>
                  </h3>
                  Met de DEI+ demonstreren en testen ondernemers hun ideeën voor energie- en klimaatinnovatie. Alle
                  DEI+-projecten droegen bij aan het verminderen van het gebruik van fossiele brandstoffen, het
                  verbeteren van energie-efficiëntie en het inzetten van hernieuwbare energiebronnen.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-11%2FDuurzame%2520glastuinbouw.jpg%3Fitok%3D7TUACyBz&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                      Veranderingen voor agrarische ondernemers in 2025
                    </a>
                  </h3>
                  Bent u agrarisch ondernemer? Het kan zijn dat er voor de regelingen die u gebruikt iets verandert in
                  2025. Deze veranderingen vindt u nu in ons overzicht.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rvo-feedback rvo-margin-block-start--3xl">
          <LayoutFlow row={true} wrap={true} gap="sm" justifyContent="center">
            <Icon icon="tekstballon-met-hart" size="2xl" />
            <em className="rvo-text--xl">Bent u tevreden over deze pagina?</em>
            <span className="rvo-rhs-update-component">
              <Button kind="secondary">Geef uw mening</Button>
            </span>
          </LayoutFlow>
        </div>
        {/* <div className="rvo-cards">
          <LayoutFlow gap="md">
            <h2 className="utrecht-heading-2">Uitgelicht</h2>
            <div className="rvo-cards-grid">
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/socialfund.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Social Sustainability Fund
                    </a>
                  </h3>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Wilt u in uw internationale waardeketen de sociale duurzaamheid vergroten? Dat kan door inkomens en
                    arbeidsomstandigheden te verbeteren en kinderarbeid te bestrijden. Vraag nu subsidie aan.
                  </p>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/besparen.jpeg" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Energie besparen
                    </a>
                  </h3>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Energie besparen is belangrijk voor het klimaat en uw portemonnee. Bedrijven en organisaties kunnen
                    een forse bijdrage leveren. Doe ook mee en bespaar flink op uw energiekosten.
                  </p>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/beursbezoek.jpeg" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Subsidie voor groen beursbezoek
                    </a>
                  </h3>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Om klimaatverandering tegen te gaan, is vergroening nodig. Daarom kunt u nu ook subsidie aanvragen
                    om mee te doen aan een handelsmissie of beurs, die zich hierop richt.
                  </p>
                </div>
              </div>

              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/lbv.png" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Lbv en Lbv-plus actueel
                    </a>
                  </h3>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    De Landelijke beëindigingsregeling veehouderijlocaties (Lbv) en de Lbv-plus zijn sinds 3 juli 2023
                    open voor aanvragen. We houden bij hoeveel veehouders een aanvraag hebben gedaan.
                  </p>
                </div>
              </div>
            </div>
          </LayoutFlow>
        </div> */}
        {/* <div className="rvo-feedback">
          
        </div> */}
      </main>

      <Footer />
    </body>
  );
};

export default Nieuwsbrief;
