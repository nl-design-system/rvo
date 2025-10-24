import { Button, Header, MaxWidthLayout } from '@nl-rvo/components';

const MenuCTA = () => {
  return (
    <body className="rvo-menu-cta">
      <Header />
      <div className="rvo-menubar__background rvo-menubar__background--horizontal-rule rvo-margin-block-end--4xl">
        <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--none">
          <nav className="rvo-menubar rvo-menubar--lg">
            <ul className="rvo-menubar__ul">
              <li className="rvo-menubar__list">
                <ul className="rvo-menubar__group--flex">
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Home
                    </a>
                  </li>
                  <li className="rvo-menubar__item rvo-menubar__item--submenu-visible">
                    <a
                      href="#"
                      className="rvo-link rvo-menubar__link rvo-menubar__link--active rvo-link--lintblauw"
                      role="button"
                    >
                      Onderwerpen
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--lg rvo-icon--wit"
                        role="img"
                        aria-label="Delta omhoog"
                      ></span>
                    </a>
                    <div className="rvo-menubar--submenu rvo-menubar__grid rvo-menubar--submenu-grid rvo-menubar__horizontal">
                      <ul className="rvo-menubar__list rvo-menubar__list--item rvo-max-width-layout rvo-max-width-layout--lg">
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-milieu rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Milieu"
                            ></span>
                            Klimaat &amp; energie
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-koe-met-tekst-co2 rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Koe met tekst co2"
                            ></span>
                            Landbouw
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-ondernemingsklimaat rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Ondernemingsklimaat"
                            ></span>
                            Ondernemen &amp; Bedrijfsvoering
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-grootstedelijk rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Grootstedelijk"
                            ></span>
                            Bouwen &amp; Wonen
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-vis rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Vis"
                            ></span>
                            Visserij
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-hart-tussen-2-uitgestoken-handen rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Hart tussen 2 uitgestoken handen"
                            ></span>
                            Gezondheid, Zorg &amp; Welzijn
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-eend-zwemmend-bij-riet rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Eend zwemmend bij riet"
                            ></span>
                            Dier &amp; Natuur
                          </a>
                        </li>
                      </ul>
                      <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--md">
                        <Button kind="secondary" size="sm">
                          Onderwerpen A-Z
                        </Button>
                      </div>
                    </div>
                  </li>
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw" role="button">
                      Subsidies en financiering
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--lg rvo-icon--wit"
                        role="img"
                        aria-label="Delta omlaag"
                      ></span>
                    </a>
                  </li>
                </ul>
                <ul className="rvo-menubar__group--flex">
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Zoeken
                    </a>
                  </li>
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Uitloggen
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="rvo-margin-block-start--4xl rvo-padding-block-start--4xl rvo-max-width-layout rvo-max-width-layout--lg"></div>

      <div className="rvo-menubar__background rvo-menubar__background--horizontal-rule rvo-margin-block-start--4xl">
        <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--none">
          <nav className="rvo-menubar rvo-menubar--lg">
            <ul className="rvo-menubar__ul">
              <li className="rvo-menubar__list">
                <ul className="rvo-menubar__group--flex">
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Home
                    </a>
                  </li>
                  <li className="rvo-menubar__item rvo-menubar__item--submenu-visible">
                    <a
                      href="#"
                      className="rvo-link rvo-menubar__link rvo-menubar__link--active rvo-link--lintblauw"
                      role="button"
                    >
                      Onderwerpen
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--lg rvo-icon--wit"
                        role="img"
                        aria-label="Delta omhoog"
                      ></span>
                    </a>
                    <div className="rvo-menubar--submenu rvo-menubar__grid rvo-menubar--submenu-grid rvo-menubar__horizontal">
                      <ul className="rvo-menubar__list rvo-menubar__list--item rvo-max-width-layout rvo-max-width-layout--lg">
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-milieu rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Milieu"
                            ></span>
                            Klimaat &amp; energie
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-koe-met-tekst-co2 rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Koe met tekst co2"
                            ></span>
                            Landbouw
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-ondernemingsklimaat rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Ondernemingsklimaat"
                            ></span>
                            Ondernemen &amp; Bedrijfsvoering
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-grootstedelijk rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Grootstedelijk"
                            ></span>
                            Bouwen &amp; Wonen
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-vis rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Vis"
                            ></span>
                            Visserij
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-hart-tussen-2-uitgestoken-handen rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Hart tussen 2 uitgestoken handen"
                            ></span>
                            Gezondheid, Zorg &amp; Welzijn
                          </a>
                        </li>
                        <li className="rvo-menubar__item rvo-menubar__item--submenu">
                          <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-eend-zwemmend-bij-riet rvo-icon--lg rvo-icon--wit"
                              role="img"
                              aria-label="Eend zwemmend bij riet"
                            ></span>
                            Dier &amp; Natuur
                          </a>
                        </li>
                      </ul>
                      <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--md">
                        <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--lg rvo-icon--wit"
                            role="img"
                            aria-label="Eend zwemmend bij riet"
                          ></span>
                          Onderwerpen A-Z
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw" role="button">
                      Subsidies en financiering
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--lg rvo-icon--wit"
                        role="img"
                        aria-label="Delta omlaag"
                      ></span>
                    </a>
                  </li>
                </ul>
                <ul className="rvo-menubar__group--flex">
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Zoeken
                    </a>
                  </li>
                  <li className="rvo-menubar__item">
                    <a href="#" className="rvo-link rvo-menubar__link rvo-link--lintblauw">
                      Uitloggen
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <MaxWidthLayout size="md">
        <main className="rvo-padding-block-start--md"></main>
      </MaxWidthLayout>
    </body>
  );
};

export default MenuCTA;
