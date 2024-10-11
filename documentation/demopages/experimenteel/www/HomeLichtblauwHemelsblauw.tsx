import { Button, Footer, Header, Heading, Icon, LayoutFlow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../../common/rhs-update.scss';
import '../../common/www.scss';

const Home = () => {
  return (
    <body className="rvo-theme rvo-www rvo-lichtblauwhemelsblauw">
      <div className="rvo-www rvo-rhs-update">
        <Header />
        <div className="rvo-rhs-update-component">
          <div className="rvo-responsive-menu-wrapper">
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
                />
              </div>
            </details>
          </div>

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
        </div>
        <div className="rvo-hero rvo-max-width-layout--lg">
          <div className="rvo-hero-image">
            <img src="images/www/home.jpg" className="rvo-hero-img" />
          </div>
          <h1 className="utrecht-heading-1">
            Rijksdienst voor Ondernemend Nederland
            <span className="rvo-heading-subtitle">Wij helpen u graag vooruit!</span>
          </h1>
        </div>
        <main className="rvo-main--www rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-content--www rvo-content--home">
            <LayoutFlow size="xl">
              <div className="rvo-cards">
                <LayoutFlow size="md">
                  <h2 className="utrecht-heading-2">Onderwerpen</h2>

                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="wereldbol" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Klimaat & Energie
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Energie besparen en opwekken, duurzame mobiliteit, co2-reductie industrie...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="grootstedelijk" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Bouwen & Wonen
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Energielabel, BENG, verduurzamen gebouwen en woningen, gebiedsontwikkeling..
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="buitenlandse-handel" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Internationaal ondernemen
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Landeninformatie, netwerken en contacten, financiering, handelsmissies...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="wereldbol-tussen-2-uitgestoken-handen" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Ont­wikkelings­samen­werking
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Voedselzekerheid, humanitaire hulp, publiek-private partnerschappen...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="tractor" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a
                            href="iframe.html?args=&id=pagina-s-experimenteel-www-landbouw--default&viewMode=story"
                            className="rvo-link rvo-link--full-click rvo-link--black"
                          >
                            Landbouw
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Grond, mest, marktordening, gemeenschappelijk landbouwbeleid...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="vis" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Visserij
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Registraties, vergunningen, betalingen, EU-fonds maritieme zaken en visserij...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="eend-zwemmend-bij-riet" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Dier & natuur
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Registraties, vergunningen, betalingen, EU-fonds maritieme zaken en visserij...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="lamp" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Innovatie, Onderzoek & Onderwijs
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Octrooien, topsectoren, start-ups, research & development...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="grafiek" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Ondernemen & Bedrijfsvoering
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Financiering per bedrijfsfase, MVO, ICT en cyberveiligheid, transparant ondernemen...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="stethoscoop" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Gezondheid, Zorg & Welzijn
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Wonen & zorg, health deals, zorg voor innoveren, Life Sciences & Health...
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    showIcon="after"
                    icon="pijl-naar-rechts"
                    target="#"
                    content="Naar A-Z overzicht"
                    noUnderline={true}
                  />
                </LayoutFlow>
              </div>
              <hr className="rvo-divider"></hr>

              <div className="rvo-cards rvo-cards--overzichten">
                <LayoutFlow size="md">
                  <h2 className="utrecht-heading-2">Overzichten voor ondernemend Nederland</h2>
                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                      <div className="rvo-card-img-container">
                        <img src="images/www/bedrijven.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
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
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
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
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
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
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
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
                  <LayoutFlow size="md">
                    <Heading type="h2" textContent="Evenementen" />
                    <div className="rvo-content-items-grid">
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Webinar Hoe schrijf ik een succesvolle Eurostars aanvraag?
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                        <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Webinar versnellen woningbouw
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                        <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Webinar: EU4Health werkprogramma 2024
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">18 januari 2024</span>
                        <em className="rvo-content-item-location rvo-paragraph--subtle">, online</em>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Handelsmissie watertechnologie en duurzame kassenbouw naar de Golfregio
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">
                          2 maart 2024 t/m 7 maart 2024
                        </span>
                      </div>
                    </div>
                  </LayoutFlow>
                </div>

                <div className="rvo-content-items rvo-content-items--w-date">
                  <LayoutFlow size="md">
                    <Heading type="h2" textContent="Nieuws" />
                    <div className="rvo-content-items-grid">
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Samen de Baltische windenergiemarkt op: Nederlands cluster nog open voor extra bedrijven
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Eerste regionale woonzorgakkoord: vernieuwende samenwerking
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
                          <a className="rvo-link rvo-link--no-underline" href="#">
                            Nieuwe met nutriënten verontreinigde gebieden aangewezen
                          </a>
                        </h3>
                        <span className="rvo-content-item-date rvo-paragraph--subtle">5 december 2023</span>
                      </div>
                      <div className="rvo-content-item">
                        <h3 className="utrecht-heading-3">
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
                <LayoutFlow size="md">
                  <h2 className="utrecht-heading-2">Uitgelicht</h2>
                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                      <div className="rvo-card-img-container">
                        <img src="images/www/socialfund.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click">
                            Social Sustainability Fund
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                          Wilt u in uw internationale waardeketen de sociale duurzaamheid vergroten? Dat kan door
                          inkomens en arbeidsomstandigheden te verbeteren en kinderarbeid te bestrijden. Vraag nu
                          subsidie aan.
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                      <div className="rvo-card-img-container">
                        <img src="images/www/besparen.jpeg" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click">
                            Energie besparen
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                          Energie besparen is belangrijk voor het klimaat en uw portemonnee. Bedrijven en organisaties
                          kunnen een forse bijdrage leveren. Doe ook mee en bespaar flink op uw energiekosten.
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                      <div className="rvo-card-img-container">
                        <img src="images/www/beursbezoek.jpeg" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click">
                            Subsidie voor groen beursbezoek
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                          Om klimaatverandering tegen te gaan, is vergroening nodig. Daarom kunt u nu ook subsidie
                          aanvragen om mee te doen aan een handelsmissie of beurs, die zich hierop richt.
                        </p>
                      </div>
                    </div>

                    <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                      <div className="rvo-card-img-container">
                        <img src="images/www/lbv.png" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click">
                            Lbv en Lbv-plus actueel
                          </a>
                        </h3>
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                          De Landelijke beëindigingsregeling veehouderijlocaties (Lbv) en de Lbv-plus zijn sinds 3 juli
                          2023 open voor aanvragen. We houden bij hoeveel veehouders een aanvraag hebben gedaan.
                        </p>
                      </div>
                    </div>
                  </div>
                </LayoutFlow>
              </div>
              <div className="rvo-feedback">
                <LayoutFlow row={true} wrap={true} size="sm">
                  <Icon icon="tekstballon-met-hart" size="2xl" />
                  <em>Bent u tevreden over deze pagina?</em>
                  <span className="rvo-rhs-update-component">
                    <Button kind="secondary" size="sm">
                      Geef uw mening
                    </Button>
                  </span>
                </LayoutFlow>
              </div>
            </LayoutFlow>
          </div>
        </main>
        <div className="rvo-section rvo-section--www rvo-section--coloured-bg rvo-section--grijs-3">
          <MaxWidthLayout size="lg">
            <div className="rvo-cards">
              <LayoutFlow size="md">
                <h2 className="utrecht-heading-2">Blijf op de hoogte</h2>
                <div className="rvo-cards-grid">
                  <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                    <div className="rvo-card-img-container">
                      <img src="images/www/mobiel.webp" className="rvo-card-img" />
                    </div>
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
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
                    <div className="rvo-card-content">
                      <LayoutFlow size="sm">
                        <h2 className="utrecht-heading-2">Over ons</h2>
                        <LayoutFlow size="md">
                          <div className="rvo-card-content-item">
                            <Icon icon="laptop" size="2xl"></Icon>
                            <h3 className="utrecht-heading-3">
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Zaken regelen bij RVO
                              </a>
                            </h3>
                            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                              Alles over inloggen, machtigen, uw persoonsgegevens en onze rekeningnummers.
                            </p>
                          </div>
                          <div className="rvo-card-content-item">
                            <Icon icon="vrouw-met-laptop" size="2xl"></Icon>
                            <h3 className="utrecht-heading-3">
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
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
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
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
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
        <Footer
          columns={[
            {
              label: 'RVO',
              items: [
                { content: 'Over ons', link: '#' },
                { content: 'Contact', link: '#' },
                { content: 'Pers', link: '#' },
                { content: 'Zaken regelen bij RVO', link: '#' },
              ],
            },
            {
              label: 'Over deze site',
              items: [
                { content: 'Privacy', link: '#' },
                { content: 'Cookies en anti-spam', link: '#' },
                { content: 'Toegankelijkheid', link: '#' },
                { content: 'Proclaimer', link: '#' },
              ],
            },
            {
              label: 'Snel naar',
              items: [
                { content: 'Onderwerpen A t/m Z', link: '#' },
                { content: 'Klantenpanel', link: '#' },
                { content: 'Documenten en publicaties', link: '#' },
                { content: 'Overheidspublicaties en auteursrecht', link: '#' },
              ],
            },
            {
              label: 'Blijf op de hoogte',
              items: [
                { content: 'Social media', link: '#' },
                { content: 'RSS', link: '#' },
                { content: 'Gratis nieuwsbrief', link: '#' },
              ],
            },
          ]}
        />
      </div>
    </body>
  );
};

export default Home;
