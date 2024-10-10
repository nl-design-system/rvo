import { Button, Footer, Header, Heading, Icon, LayoutFlow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../../common/rhs-update.scss';
import '../../common/www.scss';

const Landbouw = () => {
  return (
    <body className="rvo-theme rvo-www">
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
          />
        </div>
        <div className="rvo-hero rvo-max-width-layout--lg">
          <div className="rvo-hero-image">
            <img src="images/www/landbouw.jpg" className="rvo-hero-img" />
          </div>
          <h1 className="utrecht-heading-1">
            Landbouw
            <span className="rvo-heading-subtitle">
              Alles over mest, GLB, uw percelen en dieren. Welke regels en subsidies zijn er? We maken u graag wegwijs
              in alle mogelijkheden.
            </span>
          </h1>
        </div>
        <main className="rvo-main--www rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-content--www rvo-content--home">
            <LayoutFlow size="xl">
              <div className="rvo-cards">
                <LayoutFlow size="md">
                  <h2 className="utrecht-heading-2">Onze opties voor u als...</h2>

                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="koe" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Melkvee- en graasdierhouder
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Door duurzame keuzes maakt u uw bedrijf meer toekomstbestendig. Met regelingen en projecten
                          helpen we u om te verduurzamen.
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="flat" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Glastuinbouwer
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Overstappen op duurzame energie? Voldoen aan de energiebesparingsplicht? Minder CO2 uitstoten?
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="boer" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Jonge landbouwer
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Wilt u graag investeren in de toekomst van uw bedrijf? Daar zitten vaak hoge kosten aan vast.
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="jonge-plant-komt-uit-grond" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Akkerbouwer en vollegrondteler
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Wilt u meehelpen om de biodiversiteit te vergroten? Zoekt u naar manieren om water vast te
                          houden bij uw akkers?
                        </p>
                      </div>
                    </div>
                    {/* <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="haan" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Intensieve veehouder
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Wilt u uw bedrijf duurzaam en toekomstbestendig maken? Wij hebben verschillende regelingen en
                          subsidies die u daarbij kunnen helpen.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </LayoutFlow>
              </div>
              <hr className="rvo-divider"></hr>

              <div className="rvo-cards rvo-cards--overzichten">
                <LayoutFlow size="md">
                  <h2 className="utrecht-heading-2">Laat u inspireren over...</h2>
                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                      <div className="rvo-card-img-container">
                        <img src="images/www/biologisch.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Biologisch
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                      <div className="rvo-card-img-container">
                        <img src="images/www/besparen.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Energie besparen
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                      <div className="rvo-card-img-container">
                        <img src="images/www/dierenwelzijn.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Dierenwelzijn
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--full-colour rvo-card--hemelblauw rvo-card--w-img rvo-card--inverted-colours rvo-card--sm">
                      <div className="rvo-card-img-container">
                        <img src="images/www/meer_natuur.webp" className="rvo-card-img" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Meer natuur
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </LayoutFlow>
              </div>

              <hr className="rvo-divider"></hr>

              <div className="rvo-content-items rvo-content-items--w-date">
                <LayoutFlow size="md">
                  <Heading type="h2" textContent="Nieuws" />
                  <div className="rvo-content-items-grid">
                    <div className="rvo-content-item">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-link--no-underline" href="#">
                          Nieuwe ‘met nutriënten verontreinigde gebieden’ aangewezen
                        </a>
                      </h3>
                      <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
                    </div>
                    <div className="rvo-content-item">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-link--no-underline" href="#">
                          Mestproductieplafond vanaf 2024 in lijn met derogatiebeschikking
                        </a>
                      </h3>
                      <span className="rvo-content-item-date rvo-paragraph--subtle">8 december 2023</span>
                    </div>
                    <div className="rvo-content-item">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-link--no-underline" href="#">
                          Geen verschil meer in machtiging voor hoofd- en nevenvestiging
                        </a>
                      </h3>
                      <span className="rvo-content-item-date rvo-paragraph--subtle">5 december 2023</span>
                    </div>
                    <div className="rvo-content-item">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-link--no-underline" href="#">
                          Voorlopige tarieven GLB-subsidies 2023 bekend
                        </a>
                      </h3>
                      <span className="rvo-content-item-date rvo-paragraph--subtle">5 december 2023</span>
                    </div>
                  </div>
                  <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Meer nieuws" noUnderline={true} />
                </LayoutFlow>
              </div>

              <hr className="rvo-divider"></hr>

              <div className="rvo-block-group">
                <div className="rvo-quick-links">
                  <Heading type="h2" textContent="Wegwijzers" />
                  <ul className="rvo-quick-links-list">
                    <li className="rvo-quick-links-list-item">
                      <Link content="Veranderingen vanaf 1 januari 2024" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Dieren houden, verkopen en verzorgen" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Mest" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="In- en uitvoer agrarische producten" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Gemeenschappelijk landbouwbeleid (GLB)" target="#" noUnderline={true} />
                    </li>
                  </ul>
                </div>
                <div className="rvo-quick-links">
                  <Heading type="h2" textContent="Registraties" />
                  <ul className="rvo-quick-links-list">
                    <li className="rvo-quick-links-list-item">
                      <Link content="Wanneer doet u uw meldingen en registraties?" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Doe uw agrarische registratie bij ons" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <a
                        className="rvo-link rvo-link--no-underline"
                        href="iframe.html?args=&id=pagina-s-experimenteel-www-percelenregistreren--default&viewMode=story"
                      >
                        Registreer uw percelen
                      </a>
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Regel een agrarische bedrijfsoverdracht" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Registreer uw dieren (I&R)" target="#" noUnderline={true} />
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="rvo-divider"></hr>
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

export default Landbouw;
