import { Button } from '@nl-rvo/components/button/css/template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';

const Filters = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItems} size="md" menuMaxWidth="md" useIcons={true} iconPlacement="before" />
        <main>
          <div className="rvo-filter">
            <MaxWidthLayout size="sm">
              <LayoutColumnRow size="sm">
                <Heading type="h1" textContent="Milieu- en Energielijst 2022"></Heading>
                <p>
                  De Energielijst van de regeling Energie-investeringsaftrek (EIA) wordt ieder jaar geactualiseerd. Er
                  komen bedrijfsmiddelen bij, er gaan er enkele vanaf. En soms worden technische eisen aangescherpt. De
                  nieuwe Energielijst wordt meestal eind december in de Staatscourant gepubliceerd. De lijst is
                  gebaseerd op de wettelijke uitvoeringsregeling.
                </p>
              </LayoutColumnRow>
            </MaxWidthLayout>
            <LayoutColumnRow size="md">
              <div className="rvo-tmp-filters">
                <Fieldset legend="">
                  <MaxWidthLayout size="lg">
                    <LayoutColumnRow size="xl" row={true}>
                      <TextInputField labelText="Zoek op trefwoord of code"></TextInputField>
                      <details className="rvo-tmp-filter">
                        <summary>
                          <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                            <label
                              className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                              htmlFor="fieldId"
                            >
                              <span className="rvo-form-field__label-text">Ik wil duurzaam investeren in</span>
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
                            Bouw en infrastructuur
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionC"
                          >
                            <input type="checkbox" id="optionC" name="group" className="rvo-checkbox__input" value="" />
                            Groot- en detailhandel
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionD"
                          >
                            <input type="checkbox" id="optionD" name="group" className="rvo-checkbox__input" value="" />
                            Milieusector
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
                              <span className="rvo-form-field__label-text">Mijn milieudoel is</span>
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
                            Afval(water) verwerken
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
                            Bodem beschermen
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
                            Broeikasgassen reduceren
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
                            Circular ondernemen
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
                              <span className="rvo-form-field__label-text">Jaar</span>
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
                            2022
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
                              <span className="rvo-form-field__label-text">Regeling</span>
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
                            htmlFor="optionA3"
                          >
                            <input
                              type="checkbox"
                              id="optionA3"
                              name="group"
                              className="rvo-checkbox__input"
                              value=""
                            />
                            MIA\Vamil
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionB3"
                          >
                            <input
                              type="checkbox"
                              id="optionB3"
                              name="group"
                              className="rvo-checkbox__input"
                              value=""
                            />
                            EIA
                          </label>
                        </div>
                      </details>
                    </LayoutColumnRow>
                  </MaxWidthLayout>
                </Fieldset>
              </div>
              <LayoutColumnRow size="2xl">
                <div className="rvo-active-filters">
                  <MaxWidthLayout size="md">
                    <LayoutColumnRow row={true} size="sm">
                      <span className="rvo-results-count">
                        <strong>54</strong> resultaten voor
                      </span>
                      {/* <strong className="rvo-active-filters-title">met deze filters</strong> */}
                      <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                        Agro en visserij
                        <a href="#">
                          <div className="rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"></div>
                        </a>
                      </span>
                      <span className="rvo-tag rvo-tag--default rvo-tag--sm">
                        Milieusector
                        <a href="#">
                          <div className="rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"></div>
                        </a>
                      </span>
                      <Button
                        kind="warning-subtle"
                        size="sm"
                        textContent="Verwijder filters"
                        showIcon="before"
                        icon="verwijderen"
                      ></Button>
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
                              <Link
                                url="#"
                                content="Energieprestatieverbetering van bestaande bedrijfsgebouwen [W]"
                              ></Link>

                              <span className="rvo-result-description">
                                Het verbeteren van de energieprestatie van bestaande bedrijfsgebouwen, bepaald volgens
                                een energie-indexberekening, zoals vastgelegd in ISSO 75.1 methode 2014 (Handleiding
                                Energieprestatie Advies Utiliteitsgebouwen, Energielabel + Algemeen deel)...
                              </span>
                              <span className="rvo-result-meta-data">
                                <span className="rvo-result-meta-data-item">
                                  Regeling: <strong>EIA</strong>
                                </span>
                                <span className="rvo-result-meta-data-item">
                                  Code: <strong>210206</strong>
                                </span>
                              </span>
                            </LayoutColumnRow>
                          </div>
                          <a href="#">
                            <img
                              className="rvo-result-image"
                              src="https://www.rvo.nl/files/file/styles/content/public/2022-07/8-Augustus%202022%20JPJ%20JIC%20Schiphol30.jpg"
                            ></img>
                          </a>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result">
                        <LayoutColumnRow size="sm">
                          <Link url="#" content="HR-luchtverwarmer [W]"></Link>

                          <span className="rvo-result-description">
                            direct gasgestookte luchtverwarmer, al dan niet voorzien van een tussenmedium, samengebouwd
                            tot één geheel, beoordeeld conform NEN-EN 17082:2019 met een rendement van minimaal 90% op d
                            ebovenwaarde van het toegepaste gas(soort), verbrandingsgasafvoersysteem, (eventueel)
                            luchttoevoersysteem...
                          </span>
                          <span className="rvo-result-meta-data">
                            <span className="rvo-result-meta-data-item">
                              Regeling: <strong>EIA</strong>
                            </span>
                            <span className="rvo-result-meta-data-item">
                              Code: <strong>210102</strong>
                            </span>
                          </span>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result">
                        <LayoutColumnRow size="sm">
                          <Link url="#" content="Direct gasgestookt stralingspaneel [W]"></Link>

                          <span className="rvo-result-description">
                            het verwarmen van gesloten binnenruimten in bedrijfsgebouwen met een gemiddelde hoogtevan
                            meer dan 4 meter, niet zijnde tuinbouwkassen,
                          </span>
                          <span className="rvo-result-meta-data">
                            <span className="rvo-result-meta-data-item">
                              Regeling: <strong>EIA</strong>
                            </span>
                            <span className="rvo-result-meta-data-item">
                              Code: <strong>210106</strong>
                            </span>
                          </span>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result">
                        <LayoutColumnRow size="sm">
                          <Link url="#" content="Warmteterugwinningsysteem uit luchtwassers"></Link>

                          <span className="rvo-result-description">
                            het verwarmen van veestallen door het benutten van de warmte uit de luchtwasser,
                          </span>
                          <span className="rvo-result-meta-data">
                            <span className="rvo-result-meta-data-item">
                              Regeling: <strong>EIA</strong>
                            </span>
                            <span className="rvo-result-meta-data-item">
                              Code: <strong>210109</strong>
                            </span>
                          </span>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-result">
                        <LayoutColumnRow size="sm">
                          <Link url="#" content="Verwarmingssysteem voor bestaande pluimveestallen [W]"></Link>

                          <span className="rvo-result-description">
                            het verwarmen van bestaande pluimveestallen waarbij warme lucht van boven uit de stal wordt
                            gerecirculeerd,
                          </span>
                          <span className="rvo-result-meta-data">
                            <span className="rvo-result-meta-data-item">
                              Regeling: <strong>EIA</strong>
                            </span>
                            <span className="rvo-result-meta-data-item">
                              Code: <strong>210109</strong>
                            </span>
                          </span>
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
                <Heading type="h3" textContent="Footer menu title"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Footer menu title"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Footer menu title"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Footer menu title"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Menu item"></Link>
              </li>
            </ul>
          </MaxWidthLayout>
        </footer>
      </LayoutColumnRow>
    </div>
  );
};

export default Filters;
