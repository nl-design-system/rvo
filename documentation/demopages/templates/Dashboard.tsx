import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  Link,
  MenuBar,
  StatusIcon,
  Tag,
} from '@nl-rvo/components';
import { defaultFooterItems } from '../common/defaultFooterItems';

const Dashboard = () => {
  return (
    <body className="rvo-theme">
      <Header />
      <MenuBar
        items={[
          {
            label: 'Naam app/website',
            link: '#',
            active: true,
          },
          {
            align: 'right',
            label: 'Menu item',
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
            label: 'Klantnaam',
            link: '#',
            icon: 'user',
          },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="zwart"
              horizontalRule={false}
              items={[
                {
                  label: 'Dashboard',
                  link: '#',
                  icon: 'home',
                  active: true,
                },
                {
                  label: 'Menu item',
                  link: '#',
                  icon: 'map',
                },
                { label: 'Menu item', link: '#', icon: 'mail' },
                { label: 'Menu item', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutColumnRow size="xl">
              <Heading type="h1" noMargins={true} mixedBoldAndNormal={true}>
                <strong>Overzicht</strong> van klantnaam
              </Heading>
              <LayoutColumnRow size="md">
                <LayoutColumnRow size="xs">
                  <LayoutColumnRow size="md">
                    <Grid columns="two">
                      <Alert heading="Notificatie titel" kind="info">
                        <LayoutColumnRow size="sm">
                          Notificatie tekst
                          <ButtonGroup>
                            <Button kind="primary" size="sm">
                              Primary button
                            </Button>
                            <Button kind="secondary" size="sm">
                              Secondary button
                            </Button>
                          </ButtonGroup>
                        </LayoutColumnRow>
                      </Alert>
                    </Grid>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>

              <div className="rvo-cards">
                <LayoutColumnRow size="md">
                  <div className="rvo-heading-w-tag">
                    <LayoutColumnRow row={true}>
                      <Heading type="h2" textContent="Overzicht met cards" noMargins={true}></Heading>
                      <Tag type="info" showIcon="no" content="Info tag" />
                    </LayoutColumnRow>
                  </div>

                  <Grid gap="md" columns="two">
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=demo-pagina-s-cmor-zaak--default&viewMode=story"
                        >
                          Card titel
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Subtle text met uitleg</span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Waarschuwing met <strong>dik gedrukte tekst</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=demo-pagina-s-cmor-zaak--default&viewMode=story"
                        >
                          Card titel
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Subtle text met uitleg</span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Waarschuwing met <strong>dik gedrukte tekst</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=demo-pagina-s-cmor-zaak--default&viewMode=story"
                        >
                          Card titel
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Subtle text met uitleg</span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Waarschuwing met <strong>dik gedrukte tekst</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=demo-pagina-s-cmor-zaak--default&viewMode=story"
                        >
                          Card titel
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Subtle text met uitleg</span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Waarschuwing met <strong>dik gedrukte tekst</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                  </Grid>
                  <LayoutColumnRow row={true}>
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Menu item" noUnderline={true} />
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Menu item" noUnderline={true} />
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Menu item" noUnderline={true} />
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </div>
              <hr className="rvo-hr"></hr>
              <Grid gap="xl" columns="two">
                <LayoutColumnRow size="sm">
                  <Heading type="h2" textContent="Item list" noMargins={true} />
                  <span>Intro of uitleg</span>
                  <LayoutColumnRow size="sm">
                    <div className="rvo-item-list">
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutColumnRow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                            <LayoutColumnRow row={true} wrap={true} size="sm">
                              <Link content="Item list title" color="zwart" noUnderline={true} />
                              met groene status indicator
                            </LayoutColumnRow>
                          </LayoutColumnRow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutColumnRow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
                            <LayoutColumnRow row={true} wrap={true} size="sm">
                              <Link content="Item list title" color="zwart" noUnderline={true} />
                              met rode status indicator
                            </LayoutColumnRow>
                          </LayoutColumnRow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutColumnRow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
                            <LayoutColumnRow row={true} wrap={true} size="sm">
                              <Link content="Item list title" color="zwart" noUnderline={true} />
                              met oranje status indicator
                            </LayoutColumnRow>
                          </LayoutColumnRow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutColumnRow>
                      </div>
                    </div>
                    <Link
                      content="Zoek een andere regeling op rvo.nl"
                      showIcon="after"
                      icon="externe-link"
                      target="#"
                      noUnderline={true}
                    />
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </Grid>
            </LayoutColumnRow>
          </div>
        </div>
      </main>
      <Footer columns={defaultFooterItems} />
    </body>
  );
};

export default Dashboard;
