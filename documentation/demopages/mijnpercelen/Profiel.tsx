import { Button, CheckboxField, Heading, LayoutColumnRow, MenuBar } from '@nl-rvo/components';
import '../common/mijn-percelen.scss';
import '../common/rhs-update.scss';

const Profiel = () => {
  return (
    <body className="rvo-theme rvo-mijn-percelen rvo-sidebar-menu-active">
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

                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story',
                },
                {
                  label: 'Boer Overveen B.V',
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                  active: true,
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
        <main className="rvo-main--mijn-percelen rvo-main--mijn-percelen-sidebar-active rvo-max-width-layout rvo-max-width-layout--md">
          <div className="rvo-main-mijn-percelen--sidebar-menu">
            <MenuBar
              items={[{ label: 'Instellingen', link: '#', icon: 'user', active: true }]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-main-mijn-percelen--profiel">
            <Heading type="h1" textContent="Instellingen" />
            <LayoutColumnRow size="md">
              <ul role="tablist" className="rvo-tabs">
                <li role="presentation" className="rvo-tabs-item">
                  <a
                    role="tab"
                    href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story"
                    id="tab1"
                    aria-selected="true"
                    className="rvo-tabs-item-link rvo-tabs-item-link--active"
                  >
                    Perceelweergave
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs-item">
                  <a
                    role="tab"
                    href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story"
                    id="tab1"
                    aria-selected="true"
                    className="rvo-tabs-item-link"
                  >
                    Filterweergave
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs-item">
                  <a
                    role="tab"
                    href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story"
                    id="tab1"
                    aria-selected="true"
                    className="rvo-tabs-item-link"
                  >
                    Registreren en intekenen
                  </a>
                </li>
              </ul>
              <div className="rvo-rhs-update-component">
                <div className="utrecht-form-fieldset rvo-form-fieldset rvo-percelen-filter-form">
                  <fieldset className="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">
                    <LayoutColumnRow size="xl">
                      <CheckboxField
                        label="Perceelweergave"
                        helperText="Bepaal welke onderdelen er getoond worden in het perceeloverzicht"
                        options={[
                          { id: 'optionA-cb-warning', label: 'Nummer' },
                          { id: 'optionB-cb-warning', label: 'Naam' },
                          { id: 'optionA-cb-warning', label: 'Hectare' },
                          { id: 'optionB-cb-warning', label: 'Gewas' },
                          { id: 'optionA-cb-warning', label: 'Begindatum' },
                          { id: 'optionB-cb-warning', label: 'Einddatum' },
                        ]}
                      ></CheckboxField>
                    </LayoutColumnRow>
                  </fieldset>
                </div>
              </div>
              <div className="rvo-button-inline rvo-rhs-update-component">
                <Button kind="primary">Voorkeuren opslaan</Button>
              </div>
            </LayoutColumnRow>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Profiel;
