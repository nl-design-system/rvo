import { Fieldset, Header, Heading, Icon, LayoutFlow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../../common/style.scss';

const FiltersPersonen = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow gap="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="before"
        />
        <LayoutFlow gap="3xl">
          <main>
            <div className="rvo-filter">
              <LayoutFlow gap="xl">
                <MaxWidthLayout size="sm">
                  <div className="rvo-intro">
                    <Heading type="h1" title="Vind uw adviseur"></Heading>
                    <p>
                      Werkt u bij een innovatief technologisch bedrijf of kennisinstelling met internationale ambities?
                      Onze ervaren adviseurs kennen de mogelijkheden van internationale innovatieprogramma’s en
                      vergroten uw kansen op een succesvolle deelname. Zoek de juiste adviseur voor uw vraag.
                    </p>
                  </div>
                </MaxWidthLayout>
                <LayoutFlow gap="md">
                  <div className="rvo-tmp-filters">
                    <Fieldset legend="">
                      <MaxWidthLayout size="sm">
                        <LayoutFlow gap="xl" row={true}>
                          <details className="rvo-tmp-filter">
                            <summary>
                              <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                                <label className="rvo-label">Thema</label>
                                <div className="rvo-select-wrapper">
                                  <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                                    Maak een keuze
                                  </div>
                                </div>
                              </div>
                            </summary>
                            <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionA"
                              >
                                <input
                                  type="checkbox"
                                  id="optionA"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Agro en visserij
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionB"
                              >
                                <input
                                  type="checkbox"
                                  id="optionB"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Energie
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionC"
                              >
                                <input
                                  type="checkbox"
                                  id="optionC"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                ICT
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionD"
                              >
                                <input
                                  type="checkbox"
                                  id="optionD"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Transport
                              </label>
                            </div>
                          </details>
                          <details className="rvo-tmp-filter">
                            <summary>
                              <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                                <label className="rvo-label">Fase activiteit</label>
                                <div className="rvo-select-wrapper">
                                  <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                                    Maak een keuze
                                  </div>
                                </div>
                              </div>
                            </summary>
                            <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionA1"
                              >
                                <input
                                  type="checkbox"
                                  id="optionA1"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Fundamenteel onderzoek
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionB1"
                              >
                                <input
                                  type="checkbox"
                                  id="optionB1"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Industrieel onderzoek
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionC1"
                              >
                                <input
                                  type="checkbox"
                                  id="optionC1"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Ontwikkeling
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionD1"
                              >
                                <input
                                  type="checkbox"
                                  id="optionD1"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Toepassing
                              </label>
                            </div>
                          </details>
                          <details className="rvo-tmp-filter">
                            <summary>
                              <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                                <label className="rvo-label">Subsidie/onderwerp</label>
                                <div className="rvo-select-wrapper">
                                  <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                                    Maak een keuze
                                  </div>
                                </div>
                              </div>
                            </summary>
                            <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionA2"
                              >
                                <input
                                  type="checkbox"
                                  id="optionA2"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                EU (Horizon, Digital Europe, EDF)
                              </label>
                              <label
                                className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                htmlFor="optionB2"
                              >
                                <input
                                  type="checkbox"
                                  id="optionB2"
                                  name="group"
                                  className="rvo-checkbox__input"
                                  value=""
                                />
                                Eureka/Eurostars
                              </label>
                            </div>
                          </details>
                        </LayoutFlow>
                      </MaxWidthLayout>
                    </Fieldset>
                  </div>
                  <LayoutFlow gap="2xl">
                    <div className="rvo-active-filters">
                      <MaxWidthLayout size="sm">
                        <LayoutFlow row={true} gap="sm">
                          <span className="rvo-results-count">
                            <strong>12</strong> resultaten voor
                          </span>
                          {/* <strong className="rvo-active-filters-title">met deze filters</strong> */}
                          <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                            Agro en visserij
                            <a href="#">
                              <Icon icon="kruis" color="zwart" size="sm" />
                            </a>
                          </span>
                          <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                            Ontwikkeling
                            <a href="#">
                              <Icon icon="kruis" color="zwart" size="sm" />
                            </a>
                          </span>
                          {/* <Button
                        kind="warning-subtle"
                        size="sm"
                        textContent="Verwijder filters"
                        showIcon="before"
                        icon="verwijderen"
                      ></Button> */}
                        </LayoutFlow>
                      </MaxWidthLayout>
                    </div>

                    <MaxWidthLayout size="sm">
                      <div className="rvo-results">
                        <LayoutFlow gap="2xl">
                          <div className="rvo-result rvo-result--w-image">
                            <LayoutFlow row={true} gap="lg">
                              <div className="rvo-result-text">
                                <LayoutFlow gap="sm">
                                  <Link href="#" content="Jelle Knop"></Link>

                                  <span className="rvo-result-description">
                                    Ik ben adviseur innovatieprogramma’s health bij RVO, waar ik me vooral focus op de
                                    subsidieprogramma’s van het Eureka-netwerk zoals Eurostars en Globalstars. Ik help
                                    startende ondernemers in de life sciences & health bij het aanvragen van subsidies
                                    om internationale samenwerking te stimuleren.
                                  </span>
                                  <span className="rvo-result-meta-data rvo-result-meta--column">
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Thema:</strong> Life Sciences & Health
                                    </span>
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Fase activiteit:</strong> Industrieel onderzoek; Ontwikkeling
                                    </span>
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Subsidie/onderwerp:</strong> Eureka/Eurostars
                                    </span>
                                  </span>
                                </LayoutFlow>
                              </div>
                              <a href="#">
                                <img
                                  alt="Jelle Knop"
                                  className="rvo-result-profile-pic"
                                  src="images/profielfotos/jelle-knop.jpg"
                                ></img>
                              </a>
                            </LayoutFlow>
                          </div>
                          <hr className="rvo-hr" />
                          <div className="rvo-result rvo-result--w-image">
                            <LayoutFlow row={true} gap="lg">
                              <div className="rvo-result-text">
                                <LayoutFlow gap="sm">
                                  <Link href="#" content="Bert van der Heide"></Link>

                                  <span className="rvo-result-description">
                                    Als adviseur internationale innovatie binnen RVO werk ik op het agri-food domein.
                                    Dit omvat onder andere land- en tuinbouw, veehouderij en foodtech. Daarbij help ik
                                    bedrijven en onderzoekers om samenwerkingen te verkennen en aan te gaan met
                                    internationale partners.
                                  </span>
                                  <span className="rvo-result-meta-data rvo-result-meta--column">
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Thema:</strong> Agriculture, Food Technology, Water
                                    </span>
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Fase activiteit:</strong> Ontwikkeling; Toepassing
                                    </span>
                                  </span>
                                </LayoutFlow>
                              </div>
                              <a href="#">
                                <img
                                  alt=""
                                  className="rvo-result-profile-pic"
                                  src="https://pbs.twimg.com/profile_images/1275762454895738881/laNLU5lV_400x400.jpg"
                                ></img>
                              </a>
                            </LayoutFlow>
                          </div>
                          <hr className="rvo-hr" />
                          <div className="rvo-result">
                            <LayoutFlow row={true} gap="lg">
                              <div className="rvo-result-text">
                                <LayoutFlow gap="sm">
                                  <Link href="#" content="Roy Paulissen"></Link>

                                  <span className="rvo-result-description">
                                    Samen met de topsector HTSM vorm ik de nieuwe internationale strategie. Ik zit in
                                    het kernteam samen met ministeries Economische Zaken en Klimaat en Buitenlandse
                                    Zaken. Voor de helft van mijn tijd werk ik namens het ministerie van Economische
                                    Zaken en Klimaat voor het innovatieteam (IRIS) van RVO.
                                  </span>
                                  <span className="rvo-result-meta-data rvo-result-meta--column">
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Thema:</strong> Materials, Manufacturing, Chemistry; Transport
                                    </span>
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Fase activiteit:</strong> Ontwikkeling; Toepassing
                                    </span>
                                    <span className="rvo-result-meta-data-item">
                                      <strong>Subsidie/onderwerp:</strong> Innovatiepartner Search
                                    </span>
                                  </span>
                                </LayoutFlow>
                              </div>
                            </LayoutFlow>
                          </div>
                        </LayoutFlow>
                      </div>
                    </MaxWidthLayout>
                  </LayoutFlow>
                </LayoutFlow>
              </LayoutFlow>
            </div>
          </main>

          <footer className="rvo-footer">
            <MaxWidthLayout size="lg">
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" title="RVO"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Over ons"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Contact"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Pers"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Zaken regelen bij RVO"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" title="Over deze site"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Privacy"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Cookies en anti-spam"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Toegankelijkheid"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Proclaimer"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" title="Snel naar"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Onderwerpen A t/m Z"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Klantenpanel"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Documenten en publicaties"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Overheidspublicaties en auteursrecht"></Link>
                </li>
              </ul>
              <ul className="rvo-footer-menu">
                <li className="rvo-footer-menu-title">
                  <Heading type="h3" title="Blijf op de hoogte"></Heading>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Social media"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Higherlevel.nl ondernemersforum"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="RSS"></Link>
                </li>
                <li className="rvo-footer-menu-item">
                  <Icon icon="delta-naar-rechts" color="wit" size="sm" />
                  <Link href="#" content="Gratis nieuwsbrief"></Link>
                </li>
              </ul>
            </MaxWidthLayout>
          </footer>
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default FiltersPersonen;
