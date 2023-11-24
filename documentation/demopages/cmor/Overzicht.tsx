import { Button, ExpandableText, Heading, Icon, LayoutColumnRow, MenuBar, Tag } from '@nl-rvo/components';
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
                <img src="images/lint.svg" alt="" />
              </div>
              <div className="rvo-logo-text rvo-logo-text--full">
                Rijksdienst voor Ondernemend <br />
                Nederland
              </div>
              <div className="rvo-logo-text rvo-logo-text--abv">RVO</div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component">
          <div className="rvo-responsive-menu-wrapper">
            <details className="rvo-responsive-menu">
              <summary className="rvo-responsive-menu-toggle">
                <Icon icon="menu" size="lg" /> Menu
              </summary>
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
            </details>
          </div>
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
              <LayoutColumnRow size="xl">
                <div className="rvo-reminders">
                  <Heading type="h2" textContent="Nog te starten"></Heading>
                  <LayoutColumnRow size="md">
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
                              <div className="utrecht-button-group">
                                <Button kind="primary" size="sm">
                                  Percelen registreren
                                </Button>
                                <Button kind="secondary" size="sm" icon="externe-link" showIcon="after">
                                  Meer informatie
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </LayoutColumnRow>
                </div>
              </LayoutColumnRow>
              <div className="rvo-cards rvo-cards--grid">
                <div className="rvo-heading-w-tag">
                  <h2 className="utrecht-heading-2">Lopende aanvragen</h2>
                  <Tag type="info" showIcon="no" content="2 openstaande acties" />
                </div>
                <div className="rvo-card">
                  <Heading type="h3" textContent="ISDE 2023" />
                  <p className="rvo-paragraph--sm rvo-paragraph--subtle">
                    Investeringssubsidie duurzame energie en energiebesparing
                  </p>
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
