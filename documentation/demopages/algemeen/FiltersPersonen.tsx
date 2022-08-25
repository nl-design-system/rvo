// import { Button } from '@nl-rvo/components/button/css/template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';

const FiltersPersonen = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItems} size="md" menuMaxWidth="md" useIcons={true} iconPlacement="before" />
        <main>
          <div className="rvo-filter">
            <MaxWidthLayout size="sm">
              <LayoutColumnRow size="md">
                <Heading type="h1" textContent="Vind uw adviseur"></Heading>
                <p>
                  Werkt u bij een innovatief technologisch bedrijf of kennisinstelling met internationale ambities? Onze
                  ervaren adviseurs kennen de mogelijkheden van internationale innovatieprogramma’s en vergroten uw
                  kansen op een succesvolle deelname. Zoek de juiste adviseur voor uw vraag.
                </p>
              </LayoutColumnRow>
            </MaxWidthLayout>
            <LayoutColumnRow size="md">
              <div className="rvo-tmp-filters">
                <Fieldset legend="">
                  <MaxWidthLayout size="lg">
                    <LayoutColumnRow size="xl" row={true}>
                      <details className="rvo-tmp-filter">
                        <summary>
                          <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                            <label
                              className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                              htmlFor="fieldId"
                            >
                              <span className="rvo-form-field__label-text">Thema</span>
                            </label>
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
                            <input type="checkbox" id="optionA" name="group" className="rvo-checkbox__input" value="" />
                            Agro en visserij
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionB"
                          >
                            <input type="checkbox" id="optionB" name="group" className="rvo-checkbox__input" value="" />
                            Energie
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionC"
                          >
                            <input type="checkbox" id="optionC" name="group" className="rvo-checkbox__input" value="" />
                            ICT
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionD"
                          >
                            <input type="checkbox" id="optionD" name="group" className="rvo-checkbox__input" value="" />
                            Transport
                          </label>
                        </div>
                      </details>
                      <details className="rvo-tmp-filter">
                        <summary>
                          <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                            <label
                              className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                              htmlFor="fieldId"
                            >
                              <span className="rvo-form-field__label-text">Fase activiteit</span>
                            </label>
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
                            <label
                              className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                              htmlFor="fieldId"
                            >
                              <span className="rvo-form-field__label-text">Subsidie/onderwerp</span>
                            </label>
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
                    </LayoutColumnRow>
                  </MaxWidthLayout>
                </Fieldset>
              </div>
              <LayoutColumnRow size="2xl">
                <div className="rvo-active-filters">
                  <MaxWidthLayout size="sm">
                    <LayoutColumnRow row={true} size="sm">
                      <span className="rvo-results-count">
                        <strong>12</strong> resultaten voor
                      </span>
                      {/* <strong className="rvo-active-filters-title">met deze filters</strong> */}
                      <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                        Agro en visserij
                        <a href="#">
                          <div className="rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"></div>
                        </a>
                      </span>
                      <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                        Ontwikkeling
                        <a href="#">
                          <div className="rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"></div>
                        </a>
                      </span>
                      {/* <Button
                        kind="warning-subtle"
                        size="sm"
                        textContent="Verwijder filters"
                        showIcon="before"
                        icon="verwijderen"
                      ></Button> */}
                    </LayoutColumnRow>
                  </MaxWidthLayout>
                </div>

                <MaxWidthLayout size="sm">
                  <div className="rvo-results">
                    <LayoutColumnRow size="2xl">
                      <div className="rvo-result rvo-result--w-image">
                        <LayoutColumnRow row={true} size="lg">
                          <div className="rvo-result-text">
                            <LayoutColumnRow size="sm">
                              <Link url="#" content="Jelle Knop"></Link>

                              <span className="rvo-result-description">
                                Ik ben adviseur innovatieprogramma’s health bij RVO, waar ik me vooral focus op de
                                subsidieprogramma’s van het Eureka-netwerk zoals Eurostars en Globalstars. Ik help
                                startende ondernemers in de life sciences & health bij het aanvragen van subsidies om
                                internationale samenwerking te stimuleren.
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
                            </LayoutColumnRow>
                          </div>
                          <a href="#">
                            <img
                              className="rvo-result-profile-pic"
                              src="https://media-exp1.licdn.com/dms/image/C4E03AQEirwEyMyg2pQ/profile-displayphoto-shrink_200_200/0/1657908152116?e=2147483647&v=beta&t=McXjZqk3FV1ud7n4sE7MzYloKoPc7ZpNoJTtzkHKc4k"
                            ></img>
                          </a>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result rvo-result--w-image">
                        <LayoutColumnRow row={true} size="lg">
                          <div className="rvo-result-text">
                            <LayoutColumnRow size="sm">
                              <Link url="#" content="Bert van der Heide"></Link>

                              <span className="rvo-result-description">
                                Als adviseur internationale innovatie binnen RVO werk ik op het agri-food domein. Dit
                                omvat onder andere land- en tuinbouw, veehouderij en foodtech. Daarbij help ik bedrijven
                                en onderzoekers om samenwerkingen te verkennen en aan te gaan met internationale
                                partners.
                              </span>
                              <span className="rvo-result-meta-data rvo-result-meta--column">
                                <span className="rvo-result-meta-data-item">
                                  <strong>Thema:</strong> Agriculture, Food Technology, Water
                                </span>
                                <span className="rvo-result-meta-data-item">
                                  <strong>Fase activiteit:</strong> Ontwikkeling; Toepassing
                                </span>
                              </span>
                            </LayoutColumnRow>
                          </div>
                          <a href="#">
                            <img
                              className="rvo-result-profile-pic"
                              src="https://pbs.twimg.com/profile_images/1275762454895738881/laNLU5lV_400x400.jpg"
                            ></img>
                          </a>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result">
                        <LayoutColumnRow row={true} size="lg">
                          <div className="rvo-result-text">
                            <LayoutColumnRow size="sm">
                              <Link url="#" content="Roy Paulissen"></Link>

                              <span className="rvo-result-description">
                                Samen met de topsector HTSM vorm ik de nieuwe internationale strategie. Ik zit in het
                                kernteam samen met ministeries Economische Zaken en Klimaat en Buitenlandse Zaken. Voor
                                de helft van mijn tijd werk ik namens het ministerie van Economische Zaken en Klimaat
                                voor het innovatieteam (IRIS) van RVO.
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
                            </LayoutColumnRow>
                          </div>
                        </LayoutColumnRow>
                      </div>
                    </LayoutColumnRow>
                  </div>
                </MaxWidthLayout>
              </LayoutColumnRow>
            </LayoutColumnRow>
          </div>
        </main>

        <footer className="rvo-footer">
          <MaxWidthLayout size="lg">
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="RVO"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Over ons"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Contact"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Pers"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Zaken regelen bij RVO"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Over deze site"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Privacy"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Cookies en anti-spam"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Toegankelijkheid"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Proclaimer"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Snel naar"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Onderwerpen A t/m Z"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Klantenpanel"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Documenten en publicaties"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Overheidspublicaties en auteursrecht"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Blijf op de hoogte"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Social media"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Higherlevel.nl ondernemersforum"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="RSS"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Gratis nieuwsbrief"></Link>
              </li>
            </ul>
          </MaxWidthLayout>
        </footer>
      </LayoutColumnRow>
    </div>
  );
};

export default FiltersPersonen;
