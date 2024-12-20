import {
  Button,
  Footer,
  Header,
  Heading,
  Hero,
  Icon,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
} from '@nl-rvo/components';
// import '../../common/rhs-update.scss';
// import '../../common/www.scss';

const Home = () => {
  return (
    <body className="rvo-theme">
      <Header />

      {/* <div className="rvo-responsive-menu-wrapper">
            <details className="rvo-responsive-menu">
              <summary className="rvo-responsive-menu-toggle">
                <Icon icon="menu" size="lg" /> Menu
              </summary>
              <div className="rvo-sidebar-menu">
                <MenuBar
                  items={[
                    {
                      label: 'Home',
                      active: true,
                      link: '#',
                    },
                    {
                      label: 'Onderwerpen',
                      link: '#',
                    },
                    {
                      label: 'Subsidie- en financieringswijzer',
                      link: '#',
                    },
                    {
                      label: 'Over ons',
                      link: '#',
                    },
                    {
                      label: 'Contact',
                      link: '#',
                    },
                    {
                      label: 'Mijn RVO',
                      link: '#',
                      icon: 'user',
                    },
                    {
                      label: 'English',
                      icon: 'wereldbol',
                      link: '#',
                    },
                    {
                      label: 'Zoeken',
                      icon: 'zoek',
                      link: '#',
                    },
                  ]}
                  size="lg"
                  useIcons={true}
                  iconPlacement="before"
                  maxWidth="lg"
                  horizontalRule={false}
                />
              </div>
            </details>
          </div> */}

      <MenuBar
        items={[
          {
            label: 'Home',
            active: true,
            link: '#',
          },
          {
            label: 'Onderwerpen',
            link: '#',
          },
          {
            label: 'Subsidie- en financieringswijzer',
            link: '#',
          },
          {
            label: 'Over ons',
            link: '#',
          },
          {
            label: 'Contact',
            link: '#',
          },
          {
            align: 'right',
            label: 'Mijn RVO',
            link: '#',
            active: true,
            icon: 'user',
          },
          {
            align: 'right',
            label: 'English',
            icon: 'wereldbol',
            link: '#',
          },
          {
            align: 'right',
            label: 'Zoeken',
            icon: 'zoek',
            link: '#',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
        horizontalRule={false}
      />

      <Hero size="lg" image="images/www/home.jpg" />
      <main className="rvo-max-width-layout rvo-max-width-layout--lg">
        <div className="rvo-snel-naar rvo-text--xl rvo-layout-row rvo-layout-gap--md rvo-margin-block-end--xl rvo-margin-block-start--xl">
          Snel naar{' '}
          <a
            className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
            href="#"
          >
            <span
              className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
              role="img"
              aria-label="Pijl naar rechts"
            ></span>
            ISDE
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
            Lbv-plus
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
            GLB 2025
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
            WBSO
          </a>
        </div>
        <div className="rvo-onderwerpen">
          <h2 className="utrecht-heading-2">Onderwerpen</h2>
          <div className="rvo-layout-grid-container">
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
        <hr className="rvo-divider"></hr>

        <div className="rvo-cards rvo-cards--overzichten">
          <LayoutFlow gap="md">
            <h2 className="utrecht-heading-2">Overzichten voor ondernemend Nederland</h2>
            <div className="rvo-cards-grid">
              <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                <div className="rvo-card-img-container">
                  <img src="images/www/bedrijven.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link--full-click">
                      Bedrijven
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                <div className="rvo-card-img-container">
                  <img src="images/www/particulieren.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link--full-click">
                      Particulieren
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                <div className="rvo-card-img-container">
                  <img src="images/www/overheden.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link--full-click">
                      Overheden
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                <div className="rvo-card-img-container">
                  <img src="images/www/kennisinstellingen.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a href="#" className="rvo-link--full-click">
                      Kennisinstellingen
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </LayoutFlow>
        </div>

        <hr className="rvo-divider"></hr>

        <div className="rvo-block-group">
          <div className="rvo-content-items rvo-content-items--w-date">
            <LayoutFlow gap="md">
              <Heading type="h2" textContent="Evenementen" />
              <div className="rvo-content-items-grid">
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
            </LayoutFlow>
          </div>

          <div className="rvo-content-items rvo-content-items--w-date">
            <LayoutFlow gap="md">
              <Heading type="h2" textContent="Nieuws" />
              <div className="rvo-content-items-grid">
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
            </LayoutFlow>
          </div>
        </div>
        <hr className="rvo-divider"></hr>

        <div className="rvo-cards">
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
        </div>
        <div className="rvo-feedback">
          <LayoutFlow row={true} wrap={true} gap="sm">
            <Icon icon="tekstballon-met-hart" size="2xl" />
            <em>Bent u tevreden over deze pagina?</em>
            <span className="rvo-rhs-update-component">
              <Button kind="secondary" size="sm">
                Geef uw mening
              </Button>
            </span>
          </LayoutFlow>
        </div>
      </main>
      <div className="rvo-section rvo-section--www rvo-section--coloured-bg rvo-section--grijs-3">
        <MaxWidthLayout size="lg">
          <div className="rvo-cards">
            <LayoutFlow gap="md">
              <h2 className="utrecht-heading-2">Blijf op de hoogte</h2>
              <div className="rvo-cards-grid">
                <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                  <div className="rvo-card-img-container">
                    <img src="images/www/mobiel.webp" className="rvo-card-img" />
                  </div>
                  <div className="rvo-card__content">
                    <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Volg ons op social media
                      </a>
                    </h3>
                    <br />
                    <span className="rvo-rhs-update-component">
                      <Button kind="primary" size="sm">
                        Volg ons
                      </Button>
                    </span>
                  </div>
                </div>
                <div className="rvo-card rvo-card--w-link  rvo-card--md">
                  <div className="rvo-card__content">
                    <LayoutFlow gap="sm">
                      <h2 className="utrecht-heading-2">Over ons</h2>
                      <LayoutFlow gap="md">
                        <div className="rvo-card__content-item">
                          <Icon icon="laptop" size="2xl"></Icon>
                          <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                            <a href="#" className="rvo-link rvo-link--no-underline">
                              Zaken regelen bij RVO
                            </a>
                          </h3>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                            Alles over inloggen, machtigen, uw persoonsgegevens en onze rekeningnummers.
                          </p>
                        </div>
                        <div className="rvo-card__content-item">
                          <Icon icon="vrouw-met-laptop" size="2xl"></Icon>
                          <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                            <a href="#" className="rvo-link rvo-link--no-underline">
                              Werken bij RVO
                            </a>
                          </h3>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                            Leer onze organisatie kennen en vind vacatures.
                          </p>
                        </div>
                      </LayoutFlow>
                    </LayoutFlow>
                  </div>
                </div>
                <div className="rvo-card rvo-card--w-link rvo-card--md">
                  <div className="rvo-card__content">
                    <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Zo kunnen we oneindig recyclen met onze nieuwe persmachine
                      </a>
                    </h3>
                    <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                      Financiële steun van MIA\Vamil hielp bij ontwikkeling proces om snijafval met een pers te
                      verwerken tot nieuwe grondstoffen.
                      <br />
                      <br />
                    </p>
                    <p className="rvo-paragraph rvo-paragraph--no-spacing">
                      <strong>Jordy de Jong</strong>
                      <br />
                      <em>Customer success manager Probo</em>
                    </p>
                  </div>
                </div>

                <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                  <div className="rvo-card-img-container">
                    <img src="images/www/nieuwsbrief.webp" className="rvo-card-img" />
                  </div>
                  <div className="rvo-card__content">
                    <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Blijf scherp met onze gratis, wekelijkse nieuwsbrief
                      </a>
                    </h3>
                    <br />
                    <span className="rvo-rhs-update-component">
                      <Button kind="primary" size="sm">
                        Aanmelden
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </LayoutFlow>
          </div>
        </MaxWidthLayout>
      </div>
      <Footer />
    </body>
  );
};

export default Home;
