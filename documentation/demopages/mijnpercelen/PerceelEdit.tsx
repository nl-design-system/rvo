import {
  CheckboxField,
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
          <MenuBar
            items={[
              {
                label: 'Mijn Percelen',
                active: true,
                link: '#',
              },
              { label: 'Uitloggen', link: '#', align: 'right' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </div>
        <main className="rvo-main--mijn-percelen">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="#wijzigen"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Wijzigen
                </a>
              </li>
              {/* <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#oplossen" id="tab2" className="rvo-tabs-item-link">
                  Oplossen
                </a>
              </li> */}
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#versturen" id="tab3" className="rvo-tabs-item-link">
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <LayoutColumnRow size="md">
                  <Link content="Terug naar overzicht percelen" showIcon="before" icon="terug" noUnderline={true} />
                  <Heading type="h1" textContent="Wijzig perceelgegevens #433" />
                  <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                    <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                      <LayoutColumnRow size="md">
                        <TextInputField
                          label="Naam"
                          expandableHelperText={true}
                          expandableHelperTextTitle="Meer uitleg"
                          helperText="Geef uw perceel een herkenbare en logische naam. Dat maakt uw lijst met percelen overzichtelijk wanneer u landschapselementen heeft geregistreerd. U ziet dan makkelijk bij welk perceel een landschapselement hoort."
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
                        <CheckboxField
                          label=""
                          options={[
                            { id: 'optionA-cb-warning', label: 'Toon percelen met conflicten' },
                            { id: 'optionB-cb-warning', label: 'Toon percelen met waarschuwingen' },
                          ]}
                        ></CheckboxField>
                        <TextInputField label="Filter op naam perceel"></TextInputField>
                        <SelectField
                          label="Sorteer percelen"
                          options={[
                            { value: 'a', label: 'Op naam' },
                            { value: 'b', label: 'Op nummer' },
                            { value: 'c', label: 'Op aantal hectare' },
                          ]}
                        ></SelectField>
                      </LayoutColumnRow>
                    </fieldset>
                  </div>
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
