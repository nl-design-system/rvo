import { Button, ExpandableText, Heading, LayoutColumnRow, MenuBar } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/cmor.scss';

const Overzicht = () => {
  return (
    <body className="rvo-theme rvo-cmor rvo-sidebar-menu-active">
      <div className="rvo-cmor rvo-rhs-update">
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
                align: 'right',
                label: 'Hulp & Contact',
                link: '#',
              },
              {
                align: 'right',
                label: 'English',
                icon: 'wereldbol',
                link: '#',
              },
              {
                align: 'right',
                label: 'Boer Overveen B.V',
                link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                active: true,
                icon: 'user',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="lg"
          />
        </div>
        <main className="rvo-main--cmor rvo-main--sidebar-active rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-menu">
            <MenuBar
              items={[
                { label: 'Overzicht', link: '#', icon: 'home', active: true },
                { label: 'Mijn dossier', link: '#', icon: 'map' },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              menuMaxWidth="md"
            />
          </div>
          <div className="rvo-main--cmor rvo-main--overzicht">
            <LayoutColumnRow size="xl">
              <h1 className="utrecht-heading-1">
                <strong>Overzicht</strong> van Boer Overveen B.V.
              </h1>
              <div className="rvo-reminders">
                <Heading type="h2" textContent="Nog te starten"></Heading>
                <div className="rvo-expandable-text--subtle">
                  <ExpandableText
                    title="Wij vragen u onderstaande aanvragen op tijd te regelen"
                    content="Extra uitleg over bovenstaande opmerking."
                  />
                </div>
                <div className="rvo-alert rvo-alert--info rvo-alert--space-lg">
                  <div className="rvo-alert-text">
                    <div>
                      <div>
                        <Heading type="h3" textContent="Mijn percelen" />
                        <p>Uiterlijk 4 september 2024</p>
                        <div className="rvo-rhs-update-component">
                          <Button kind="primary" size="sm">
                            Percelen registreren
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LayoutColumnRow>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Overzicht;
