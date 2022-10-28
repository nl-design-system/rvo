import { SelectField } from '@nl-rvo/components/form-field/css/select-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsMijnRVO } from '../common/defaultMenuBarItemsMijnRVO';

const Diensten = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo rvo-demo-page--diensten">
      <div className="rvo-header-content">
        <Header />

        <details className="rvo-responsive-menu">
          <summary>
            <span className="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"></span>
            <span className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"></span>Menu
          </summary>
          <MenuBar
            items={defaultMenuBarItemsMijnRVO}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </details>
        <MenuBar
          items={defaultMenuBarItemsMijnRVO}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="md"
        />

        <div className="rvo-hero rvo-hero--man_vrouw_met_laptop">
          <div className="rvo-hero-bg-img-container">
            <img src="images/hero/hero-bg--man_vrouw_met_laptop.webp" className="rvo-hero-bg-img" />
          </div>
          <MaxWidthLayout size="md">
            <div className="rvo-hero-content">
              <div className="rvo-hero-text">
                <Heading type="h1" textContent="Diensten" />
                <p className="rvo-hero-description">
                  Geef aan wie u bent en wat u zoekt, en u krijgt een overzicht met diensten op maat.
                </p>
              </div>
              <div className="rvo-hero-img-container">
                <img src="images/hero/man_vrouw_met_laptop.webp" className="rvo-hero-img" />
              </div>
            </div>
          </MaxWidthLayout>
        </div>

        <main className="rvo-main--mijn-zaken">
          <div className="rvo-responsive-filter-wrapper">
            <MaxWidthLayout size="md">
              <details className="rvo-responsive-filters">
                <summary className="rvo-responsive-filters-toggle">
                  Diensten filteren
                  <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                  <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                </summary>
                <div className="rvo-tmp-filters">
                  <Fieldset legend="">
                    <TextInputField labelText="Op titel"></TextInputField>
                    <details className="rvo-tmp-filter">
                      <summary>
                        <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            htmlFor="fieldId"
                          >
                            <span className="rvo-form-field__label-text">Ik zoek geld voor</span>
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
                          htmlFor="option1A"
                        >
                          <input type="checkbox" id="option1A" name="group1" className="rvo-checkbox__input" value="" />
                          Compensatie
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="option1B"
                        >
                          <input type="checkbox" id="option1B" name="group1" className="rvo-checkbox__input" value="" />
                          Duurzaam en circulair ondernemen
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="option1C"
                        >
                          <input type="checkbox" id="option1C" name="group1" className="rvo-checkbox__input" value="" />
                          Energie besparen
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
                            <span className="rvo-form-field__label-text">Status openstelling</span>
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
                          Open voor aanvragen
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionB"
                        >
                          <input type="checkbox" id="optionB" name="group" className="rvo-checkbox__input" value="" />
                          Bijna open voor aanvragen
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionC"
                        >
                          <input type="checkbox" id="optionC" name="group" className="rvo-checkbox__input" value="" />
                          Tijdelijk gesloten voor aanvragen
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionD"
                        >
                          <input type="checkbox" id="optionD" name="group" className="rvo-checkbox__input" value="" />
                          Gesloten voor aanvragen
                        </label>
                      </div>
                    </details>
                    <SelectField
                      labelText="Sorteren op"
                      options={[
                        { value: '1', label: 'Aanbevolen' },
                        { value: '2', label: 'Openingsdatum' },
                        { value: '3', label: 'A tot Z' },
                        { value: '4', label: 'Z tot A' },
                      ]}
                    ></SelectField>
                  </Fieldset>
                </div>
              </details>
            </MaxWidthLayout>
          </div>
          <MaxWidthLayout size="md">
            <div className="rvo-item-list rvo-item-list--diensten">
              <div className="rvo-item-list-item rvo-item-list-item--dienst">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      Gemeenschappelijke Marktordening 2023
                    </a>
                    <span className="rvo-item-list-detail rvo-item-list-detail--aanbevolen">
                      <span className="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"></span>Voor
                      u aanbevolen
                    </span>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--edit"></div>
                  <div className="rvo-status-title">Bijna open</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      POP3 Samenwerking Pilots gezonde kalverketen
                    </a>
                    <span className="rvo-item-list-detail rvo-item-list-detail--aanbevolen">
                      <span className="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"></span>Voor
                      u aanbevolen
                    </span>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--success"></div>
                  <div className="rvo-status-title">Open</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      OverheidsOpdrachten NVLG
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--error"></div>
                  <div className="rvo-status-title">Gesloten</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      Borgstelling MKB-kredieten (BMKB)
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--warning"></div>
                  <div className="rvo-status-title">Bijna gesloten</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--dienst">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      Gemeenschappelijke Marktordening 2023
                    </a>
                    <span className="rvo-item-list-detail rvo-item-list-detail--aanbevolen">
                      <span className="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"></span>Voor
                      u aanbevolen
                    </span>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--edit"></div>
                  <div className="rvo-status-title">Bijna open</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      POP3 Samenwerking Pilots gezonde kalverketen
                    </a>
                    <span className="rvo-item-list-detail rvo-item-list-detail--aanbevolen">
                      <span className="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"></span>Voor
                      u aanbevolen
                    </span>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--success"></div>
                  <div className="rvo-status-title">Open</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      OverheidsOpdrachten NVLG
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--error"></div>
                  <div className="rvo-status-title">Gesloten</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      Borgstelling MKB-kredieten (BMKB)
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--warning"></div>
                  <div className="rvo-status-title">Bijna gesloten</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      SBIR innovatie in opdracht
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--warning"></div>
                  <div className="rvo-status-title">Bijna gesloten</div>
                </div>
              </div>
              <div className="rvo-item-list-item rvo-item-list-item--case">
                <div className="rvo-item-list-detail rvo-item-list-detail--description">
                  <h3 className="utrecht-heading-3">
                    <a className="rvo-link" href="#">
                      Borgstelling MKB-kredieten (BMKB)
                    </a>
                  </h3>
                </div>
                <div className="rvo-item-list-detail rvo-item-list-detail--status">
                  <div className="rvo-status-indicator rvo-status-indicator--warning"></div>
                  <div className="rvo-status-title">Bijna gesloten</div>
                </div>
              </div>
            </div>
            <div className="rvo-pagination rvo-pagination--middle-page">
              <div className="rvo-pagination-indicator rvo-pagination-indicator--previous">
                <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-links rvo-icon--sm rvo-icon--zwart"></span>
                <a className="rvo-link" href="#">
                  Vorige
                </a>
              </div>
              <div className="rvo-pagination-page-numbers">
                <div className="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--first">
                  <a className="rvo-link" href="#">
                    1
                  </a>
                </div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator--separator">...</div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator-page-number">
                  <a className="rvo-link" href="#">
                    6
                  </a>
                </div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--current">
                  <a className="rvo-link" href="#">
                    7
                  </a>
                </div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator-page-number">
                  <a className="rvo-link" href="#">
                    8
                  </a>
                </div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator--separator">...</div>
                <div className="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--last">
                  <a className="rvo-link" href="#">
                    42
                  </a>
                </div>
              </div>
              <div className="rvo-pagination-indicator rvo-pagination-indicator--next">
                <a className="rvo-link" href="#">
                  Volgende
                </a>
                <span className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--zwart"></span>
              </div>
            </div>
          </MaxWidthLayout>
        </main>
      </div>
      <footer className="rvo-footer">
        <MaxWidthLayout size="lg">
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Algemeen"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Help"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Toegankelijkheid"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Webservices"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Privacy"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Sitemap"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Hoe werkt"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Machtigingen en TAN-codes"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Zaken regelen bij RVO"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Inschrijven en registreren"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Bedrijfsoverdracht melden"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Overlijden melden"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Naar"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Abonneren op nieuwsbrief"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Klantenpanel"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Berichtenbox voor bedrijven"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="RVO.nl"></Link>
            </li>
          </ul>
          <ul className="rvo-footer-menu">
            <li className="rvo-footer-menu-title">
              <Heading type="h3" textContent="Contact"></Heading>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Contactgegevens"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Contactformulier"></Link>
            </li>
            <li className="rvo-footer-menu-item">
              <Icon icon="delta-naar-rechts" color="wit" size="sm" />
              <Link url="#" content="Aanvraag voorlichting/spreker"></Link>
            </li>
          </ul>
        </MaxWidthLayout>
      </footer>
    </div>
  );
};

export default Diensten;
