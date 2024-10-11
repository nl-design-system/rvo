import { Button, Icon, LayoutFlow, Link, MenuBar, RadioButtonField } from '@nl-rvo/components';
import '../../common/mijn-percelen.scss';
import '../../common/rhs-update.scss';

const Oplossen = () => {
  return (
    <body className="rvo-theme rvo-mijn-percelen">
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
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-startpagina--default&viewMode=story',
                },
                {
                  label: 'Mijn Percelen',
                  active: true,
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story',
                },
                {
                  label: 'Boer Overveen B.V',
                  link: 'iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-profiel--default&viewMode=story',
                  icon: 'user',
                },
                { label: 'Uitloggen', link: '#', align: 'right' },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
        </div>
        <main className="rvo-main--mijn-percelen">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-percelen--default&viewMode=story"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link"
                >
                  Wijzigen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-oplossen--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-samenvatting--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Samenvatting
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-versturen--default&viewMode=story"
                  id="tab3"
                  className="rvo-tabs-item-link"
                >
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutFlow size="md">
                  {/* <Alert kind="warning" content="U moet de wijzigingen nog versturen. <a href='#'>Nu versturen</a>" /> */}
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <details className="rvo-percelen-filter" open>
                        <summary>
                          Filter conflicterende percelen <Icon icon="delta-omlaag"></Icon>
                          <Icon icon="delta-omhoog"></Icon>
                        </summary>
                        <LayoutFlow size="md">
                          <RadioButtonField
                            label=""
                            options={[
                              { id: 'optionC-cb-warning', label: 'Toon alle conflicterende percelen' },
                              { id: 'optionA-cb-warning', label: 'Toon alleen overlappende percelen' },
                              { id: 'optionB-cb-warning', label: 'Toon alleen niet ingetekende percelen' },
                            ]}
                          ></RadioButtonField>
                        </LayoutFlow>
                      </details>
                    </fieldset>
                  </div>
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <LayoutFlow size="xl">
                        <div
                          role="group"
                          aria-labelledby="fieldId-label"
                          className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                        >
                          <div className="rvo-form-field__label">
                            <label id="fieldId-label" className="utrecht-form-label">
                              Overlappende percelen
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              Selecteer alles
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,007ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,014ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,025ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#41</strong> Sloot buren (0,015ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#40</strong> Sloot buren (0,005ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#12</strong> Hoogweg boomgrens (1,125ha){' '}
                              <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#17</strong> Hoogweg hek (2,025ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="utrecht-button-group">
                            <Button kind="warning" size="xs">
                              -0,044 ha afknippen
                            </Button>
                            <Button kind="secondary" size="xs">
                              -0,044 ha negeren
                            </Button>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-labelledby="fieldId-label"
                          className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                        >
                          <div className="rvo-form-field__label">
                            <label id="fieldId-label" className="utrecht-form-label">
                              Niet ingetekende percelen
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              Selecteer alles
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,007ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,014ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#433</strong> Maisveld (0,025ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#41</strong> Sloot buren (0,015ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#40</strong> Sloot buren (0,005ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#12</strong> Hoogweg boomgrens (1,125ha){' '}
                              <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="rvo-checkbox__group">
                            <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="sf1">
                              <input id="sf1" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                              <strong>#17</strong> Hoogweg hek (2,025ha) <Link content="Bekijk" noUnderline={true} />
                            </label>
                          </div>
                          <div className="utrecht-button-group">
                            <Button kind="primary" size="xs">
                              -0,044 ha toevoegen
                            </Button>
                            <Button kind="secondary" size="xs">
                              -0,044 ha negeren
                            </Button>
                          </div>
                        </div>
                      </LayoutFlow>
                    </fieldset>
                  </div>
                  <div className="utrecht-button-group">
                    <Button kind="primary">Versturen</Button>
                    <Button kind="secondary">Percelen wijzigen</Button>
                  </div>
                </LayoutFlow>
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

export default Oplossen;
