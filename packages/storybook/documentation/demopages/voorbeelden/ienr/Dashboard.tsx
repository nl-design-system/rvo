/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Button,
  Card,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  RadioButton,
  StatusIcon,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

export default function DashboardPage(): ReactElement {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MenuBar
        items={[
          {
            label: 'Identificatie en Registratie van uw dieren',
            link: '#',
          },
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
            link: '#',
            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
        horizontalRule={true}
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <nav aria-label="Menu">
              <LayoutFlow gap="sm">
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story"
                  icon="home"
                  iconPlacement="left"
                  color="zwart"
                  noUnderline={true}
                  weight="bold"
                >
                  Dashboard
                </Link>
                <Link href="#" icon="user" iconPlacement="left" color="zwart" noUnderline={true} weight="normal">
                  Houder en UBN
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story"
                  icon="plus"
                  iconPlacement="left"
                  color="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Melden
                </Link>
                <Link href="#" icon="terug" iconPlacement="left" color="zwart" noUnderline={true} weight="normal">
                  Wijzigen & intrekken
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story"
                  icon="oog"
                  iconPlacement="left"
                  color="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Bekijken
                </Link>
                <Link href="#" icon="refund" iconPlacement="left" color="zwart" noUnderline={true} weight="normal">
                  Machtigen
                </Link>
                <Link href="#" icon="opsomming" iconPlacement="left" color="zwart" noUnderline={true} weight="normal">
                  Overzichten
                </Link>
              </LayoutFlow>
            </nav>
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Mijn I&R
              </Heading>
              <LayoutFlow gap="md">
                <LayoutFlow gap="xs">
                  <Heading type="h2" noMargins={true}>
                    Geselecteerde locatie
                  </Heading>
                  <LayoutFlow gap="md">
                    <Grid columns="two">
                      <dl className="rvo-data-list">
                        <dt>UBN</dt>
                        <dd>920056</dd>
                        <dt>Bedrijfsnaam</dt>
                        <dd>Boer Overveen</dd>
                        <dt>Adres</dt>
                        <dd>
                          van Merheimstraat 41
                          <br /> 5282 NE BOXTEL
                        </dd>
                      </dl>
                      <div>
                        <LayoutFlow gap="md">
                          <RadioButton
                            name="ubn"
                            label="Selecteer een andere locatie"
                            helperText=""
                            options={[
                              { id: 'locatieA', label: 'UBN 2309458' },
                              { id: 'locatieB', label: 'UBN 2485594' },
                            ]}
                          ></RadioButton>
                          <Button kind="secondary" size="xs">
                            Zoek een andere UBN
                          </Button>
                        </LayoutFlow>
                      </div>
                    </Grid>
                  </LayoutFlow>
                </LayoutFlow>
              </LayoutFlow>

              <div className="rvo-cards">
                <LayoutFlow gap="md">
                  <div className="rvo-heading-w-tag">
                    <LayoutFlow row={true}>
                      <Heading type="h2" noMargins={true}>
                        Diersoorten
                      </Heading>
                      <Button kind="secondary" size="xs">
                        Diersoorten wijzigen
                      </Button>
                    </LayoutFlow>
                  </div>

                  <Grid gap="md" columns="two">
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutFlow row={true} alignItems="center" gap="sm">
                        <Heading type="h3" noMargins={true}>
                          Schaap
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutFlow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">46</span>
                        &nbsp;schapen{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">0 </span>&nbsp;vrije merken
                      </a>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutFlow row={true} alignItems="center" gap="sm">
                        <Heading type="h3" noMargins={true}>
                          Rund
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutFlow>
                      <a
                        href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story"
                        className="rvo-link rvo-link--no-underline rvo-link--normal"
                      >
                        <span className="rvo-text--bold">6</span>
                        &nbsp;runderen{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">12 </span>&nbsp;vrije merken
                      </a>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutFlow row={true} alignItems="center" gap="sm">
                        <Heading type="h3" noMargins={true}>
                          Geit
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutFlow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">0</span>
                        &nbsp;geiten{' '}
                      </a>{' '}
                      en{' '}
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">12 </span>&nbsp;vrije merken
                      </a>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="bevestiging" size="md" />
                        <span className="rvo-text--sm">Geen openstaande meldingen</span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={false} padding="md" title="">
                      <LayoutFlow row={true} alignItems="center" gap="sm">
                        <Heading type="h3" noMargins={true}>
                          Paardachtige
                        </Heading>

                        <span className="rvo-text--subtle rvo-text--sm">Peildatum: 20-02-2024</span>
                      </LayoutFlow>
                      <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal">
                        <span className="rvo-text--bold">10</span>
                        &nbsp;paardachtige{' '}
                      </a>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <a href="#" className="rvo-link rvo-link--no-underline rvo-link--normal rvo-text--sm">
                          <span className="rvo-text--bold">2</span>&nbsp;openstaande meldingen
                        </a>
                      </LayoutFlow>
                    </Card>
                  </Grid>
                </LayoutFlow>
              </div>
            </LayoutFlow>
          </div>
        </div>
      </main>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
}
