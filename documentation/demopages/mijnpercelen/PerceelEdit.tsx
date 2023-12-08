import {
  Alert,
  Button,
  ButtonGroup,
  CheckboxField,
  DateInputField,
  Heading,
  LayoutColumnRow,
  Link,
  MenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/mijn-percelen.scss';

const PerceelEdit = () => {
  return (
    <body className="rvo-theme rvo-mijn-percelen rvo-mijn-percelen-perceel--edit">
      <div className="rvo-mijn-percelen rvo-rhs-update">
        <header className="rvo-header">
          <div className="rvo-rhs-update-component">
            <a className="rvo-logo" href="#">
              <div className="rvo-logo-lint">
                <img src="images/lint.svg" alt=""></img>
              </div>
              <div className="rvo-logo-text">
                Rijksdienst voor Ondernemend
                <br />
                Nederland
              </div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component">
          <div className="rvo-topnav--w-line">
            <MenuBar
              items={[
                {
                  label: 'Home',

                  icon: 'home',
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-startpagina--default&viewMode=story',
                },
                {
                  label: 'Mijn Percelen',
                  active: true,
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story',
                },
                {
                  label: 'Boer Overveen B.V',
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                  icon: 'user',
                },
                { label: 'Uitloggen', link: '#', align: 'right' },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              menuMaxWidth="md"
            />
          </div>
        </div>
        <main className="rvo-main--mijn-percelen">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link  rvo-tabs-item-link--active"
                >
                  Wijzigen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-oplossen--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-samenvatting--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Samenvatting
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-versturen--default&viewMode=story"
                  id="tab3"
                  className="rvo-tabs-item-link"
                >
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutColumnRow size="md">
                  <a
                    className="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story#wijzigen"
                  >
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Terug"
                    ></span>
                    Terug naar overzicht percelen
                  </a>

                  <Heading type="h1" textContent="Wijzig perceelgegevens #433" />
                  <Alert
                    kind="warning"
                    content="Uw intekening is niet overal gelijk aan de topografische grenzen van het perceel. <a className='rvo-link' href='#surfaces'>Aanpassen</a>"
                  />
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <LayoutColumnRow size="md">
                        <TextInputField
                          label="Naam"
                          expandableHelperText={true}
                          expandableHelperTextTitle="Meer uitleg"
                          helperText="Geef uw perceel een herkenbare en logische naam. Dat maakt uw lijst met percelen overzichtelijk wanneer u landschapselementen heeft geregistreerd. U ziet dan makkelijk bij welk perceel een landschapselement hoort."
                          value="Sloot bij de buren"
                        ></TextInputField>
                        <SelectField
                          label="Gewas"
                          options={[
                            { value: '1', label: 'Aardperen' },
                            { value: '2', label: 'Aardappelen, consumptie (2014)' },
                          ]}
                        ></SelectField>
                        <SelectField
                          label="Gebruik"
                          options={[
                            { value: '1', label: 'Eigendom' },
                            { value: '2', label: 'Erfpacht' },
                          ]}
                        ></SelectField>
                        <div className="rvo-surfaces">
                          <a id="surfaces"></a>
                          <Heading type="h2" textContent="Welke oppervlakte wilt u opslaan?"></Heading>
                          <LayoutColumnRow size="sm">
                            <div className="rvo-value-information">
                              <span className="rvo-value-information-label">De door u ingetekende oppervlakte</span>
                              <span className="rvo-value-information-value">1,0813 ha</span>
                            </div>
                            <div
                              role="group"
                              aria-labelledby="fieldId-label"
                              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                            >
                              <div className="rvo-form-field__label">
                                <label id="fieldId-label" className="utrecht-form-label">
                                  Oppervlakte buiten topografische grens
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,007ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,014ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,025ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                            </div>
                            <div className="rvo-button--inline">
                              <Button kind="secondary" size="xs">
                                Geselecteerde -0,044 ha afknippen
                              </Button>
                            </div>
                            <div
                              role="group"
                              aria-labelledby="fieldId-label"
                              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                            >
                              <div className="rvo-form-field__label">
                                <label id="fieldId-label" className="utrecht-form-label">
                                  Niet ingetekende oppervlakte (ruimte)
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,010ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,014ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                              <div className="rvo-checkbox__group">
                                <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                                  <input
                                    id="sf1"
                                    name="group"
                                    className="rvo-checkbox__input"
                                    type="checkbox"
                                    value=""
                                  />
                                  0,015ha <Link content="Bekijk" noUnderline={true} />
                                </label>
                              </div>
                            </div>
                            <div className="rvo-button--inline">
                              <Button kind="secondary" size="xs">
                                Geselecteerde 0,055 ha toevoegen
                              </Button>
                            </div>
                            <div className="rvo-value-information">
                              <span className="rvo-value-information-label">
                                Oppervlakte na bovenstaande bewerkingen
                              </span>
                              <span className="rvo-value-information-value">1,0313 ha</span>
                            </div>
                          </LayoutColumnRow>
                        </div>
                        <DateInputField label="Ingangsdatum"></DateInputField>
                        <details className="rvo-fake-checkbox">
                          <summary>Ik stop met het gebruik van dit perceel</summary>
                          <DateInputField label="Einddatum"></DateInputField>
                        </details>

                        <CheckboxField
                          label=""
                          options={[
                            {
                              id: 'optionA-cb-warning',
                              label: 'De topografische grens van het perceel is gewijzigd of niet juist.',
                            },
                          ]}
                        ></CheckboxField>
                      </LayoutColumnRow>
                    </fieldset>
                  </div>
                  <ButtonGroup>
                    <Button kind="primary">Opslaan</Button>
                  </ButtonGroup>
                </LayoutColumnRow>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--map">
            <img src="images/map.svg" alt="" className="rvo-perceel-kaart" />
          </div>
        </main>
      </div>
    </body>
  );
};

export default PerceelEdit;
