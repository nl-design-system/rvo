import {
  ActionGroup,
  Alert,
  Breadcrumbs,
  Button,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  Link,
  MenuBar,
  // MobileMenuBar,
  StatusIcon,
  Tabs,
} from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const ZaakClean = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <LayoutFlow gap="3xl">
        <div>
          <Header />
          {/* <MobileMenuBar
            iconPlacement="before"
            useIcons={true}
            isOpen={false}
            submenuItems={[]}
            size="md"
            items={[
              {
                label: 'Overzicht',
                link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                icon: 'home',

              },
              {
                label: 'Mijn dossier',
                link: '#',
                icon: 'map',
              },
              { label: 'Mijn berichten', link: '#', icon: 'mail' },
              { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
            ]}
          ></MobileMenuBar> */}
          <LayoutFlow gap="sm">
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
                  link: '#',

                  icon: 'user',
                },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />

            <main className="">
              <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
                <LayoutFlow>
                  <Breadcrumbs
                    items={[
                      {
                        label: 'Overzicht',
                        link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                      },
                      { label: 'Mijn dossier', link: '#' },

                      { label: 'Eco-regeling 2023' },
                    ]}
                    size="sm"
                  ></Breadcrumbs>

                  <LayoutFlow gap="xl">
                    <LayoutFlow gap="xs">
                      <Heading type="h1" noMargins={true}>
                        Eco-regeling 2023
                      </Heading>
                      <span className="rvo-text--subtle">Gemeenschappelijk Landbouwbeleid</span>
                    </LayoutFlow>
                    <Alert heading="Actie nodig" kind="warning">
                      <LayoutFlow gap="sm">
                        Voer de actie direct uit of bekijk de actie voor meer informatie over wat u moet doen.
                        <ActionGroup>
                          <Button kind="primary" size="sm">
                            Actie uitvoeren
                          </Button>
                          <Button kind="secondary" size="sm">
                            Bekijk de actie
                          </Button>
                        </ActionGroup>
                      </LayoutFlow>
                    </Alert>
                    <Grid columns="two" gap="2xl" division="2fr 1fr">
                      <div>
                        <LayoutFlow gap="2xl">
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <span className="rvo-text--subtle">Referentienummer</span>
                            <br />
                            <Heading type="h2" noMargins={true}>
                              ERTKV-309483
                            </Heading>
                            <hr className="rvo-hr rvo-margin-block-end--md rvo-margin-block-start--sm"></hr>
                            <LayoutFlow gap="sm">
                              <p className="rvo-text--no-margins">
                                Wilt u uw aanvraagformulier bekijken of iets regelen voor uw aanvraag?
                              </p>
                              <Button>Aanvraag beheren</Button>
                            </LayoutFlow>
                          </div>
                          {/* <hr className="rvo-hr"></hr> */}
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <LayoutFlow>
                              <Heading type="h2" noMargins={true}>
                                Documenten
                              </Heading>
                              <Tabs
                                tabs={[
                                  { label: 'Mijn ontvangen documenten', href: '#' },
                                  { label: 'Mijn verstuurde documenten', href: '#' },
                                ]}
                                activeTab={0}
                              />
                              <div>
                                <LayoutFlow row={true} alignItems="start" justifyContent="space-between">
                                  <LayoutFlow gap="2xs">
                                    <p className="rvo-text--bold rvo-text--no-margins">Verzoek om informatie</p>
                                    <span className="rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                                  </LayoutFlow>
                                  <span className="rvo-text--subtle">14 december 2023</span>
                                  <Link icon="downloaden" showIcon="before" noUnderline={true}>
                                    Downloaden
                                  </Link>
                                </LayoutFlow>
                                <hr className="rvo-hr"></hr>
                                <LayoutFlow row={true} alignItems="start" justifyContent="space-between">
                                  <LayoutFlow gap="2xs">
                                    <p className="rvo-text--bold rvo-text--no-margins">Ontvangstbevestiging</p>
                                    <span className="rvo-text--subtle rvo-text--sm">PDF document | 550.73 KB</span>
                                  </LayoutFlow>
                                  <span className="rvo-text--subtle">9 november 2023</span>
                                  <Link icon="downloaden" showIcon="before" noUnderline={true}>
                                    Downloaden
                                  </Link>
                                </LayoutFlow>
                                <hr className="rvo-hr"></hr>
                                <LayoutFlow row={true} alignItems="start" justifyContent="space-between">
                                  <LayoutFlow gap="2xs">
                                    <p className="rvo-text--bold rvo-text--no-margins">Ontvangstbevestiging</p>
                                    <span className="rvo-text--subtle rvo-text--sm">PDF document | 550.73 KB</span>
                                  </LayoutFlow>
                                  <span className="rvo-text--subtle">9 november 2023</span>
                                  <Link icon="downloaden" showIcon="before" noUnderline={true}>
                                    Downloaden
                                  </Link>
                                </LayoutFlow>
                              </div>
                              <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                                Alle ecoregeling 2023 documenten
                                <span
                                  className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"
                                  role="img"
                                  aria-label="Pijl naar rechts"
                                ></span>
                              </a>
                              <div className="rvo-alert rvo-alert--info rvo-alert--padding-md">
                                <span
                                  className="utrecht-icon rvo-icon rvo-icon-info rvo-icon--xl rvo-status-icon-info"
                                  role="img"
                                  aria-label="Info"
                                ></span>
                                <div className="rvo-alert-text">
                                  <div>
                                    <div>
                                      <strong>Info</strong>
                                      <br />
                                      Ontbreekt er een document en wordt dit niet bijgewerkt binnen [tijd]? Neem dan
                                      contact op met onze{' '}
                                      <a href="#" className="rvo-link rvo-link--logoblauw">
                                        klantenservice
                                      </a>
                                      .
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </LayoutFlow>
                          </div>
                          {/* <hr className="rvo-hr"></hr> */}
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <Heading type="h2">Hulp nodig?</Heading>
                            <LayoutFlow>
                              <LayoutFlow gap="xs">
                                <span className="rvo-text--bold">Alles over over Eco-regeling</span>
                                <Button size="sm" kind="secondary" fullWidth={true}>
                                  Bekijk regeling
                                </Button>
                              </LayoutFlow>
                              <LayoutFlow gap="xs">
                                <span className="rvo-text--bold">Neem contact op</span>

                                <Button size="sm" kind="secondary" fullWidth={true}>
                                  Stel uw vraag via de chat
                                </Button>
                              </LayoutFlow>
                            </LayoutFlow>
                          </div>
                        </LayoutFlow>
                      </div>
                      <div>
                        <LayoutFlow gap="2xl">
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <LayoutFlow row={true} gap="xs">
                              <span className="rvo-text--subtle">Status</span>
                              <Icon icon="info" />
                            </LayoutFlow>

                            <Heading type="h2" noMargins={true}>
                              Actie nodig
                            </Heading>
                            <div className="">
                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                                <LayoutFlow gap="0">
                                  <span className="rvo-text--sm">Aangevraagd</span>
                                  <span className="rvo-text--subtle rvo-text--sm rvo-text--italic">
                                    5 december 2023
                                  </span>
                                </LayoutFlow>
                              </div>
                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                                <LayoutFlow gap="0">
                                  <span className="rvo-text--sm">In behandeling</span>

                                  <span className="rvo-text--subtle rvo-text--sm rvo-text--italic">13 april 2023</span>
                                </LayoutFlow>
                              </div>
                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                                <LayoutFlow row={true} gap="sm">
                                  <StatusIcon type="waarschuwing" size="md"></StatusIcon>
                                  <span className="rvo-text--sm">Actie nodig</span>
                                </LayoutFlow>
                              </div>

                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                                <span className="rvo-text--sm">Ontvang de beslissing</span>
                              </div>
                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                                <span className="rvo-text--sm">Financiële afhandeling</span>
                              </div>
                              <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after">
                                Aanvraag afgerond
                              </div>
                            </div>
                          </div>
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <Heading type="h2" noMargins={true}>
                              Details
                            </Heading>
                            <LayoutFlow>
                              <LayoutFlow gap="0">
                                <span className="rvo-text--subtle rvo-text--sm">Aanvrager</span>
                                Jansen B.V.
                              </LayoutFlow>
                              <LayoutFlow gap="0">
                                <span className="rvo-text--subtle rvo-text--sm">Aanvraagdatum</span>7 november 2023
                              </LayoutFlow>
                              <LayoutFlow gap="0">
                                <span className="rvo-text--subtle rvo-text--sm">Regeling</span>Eco-regeling 2023
                              </LayoutFlow>
                            </LayoutFlow>
                          </div>
                          <div className="rvo-card rvo-card--outline rvo-card--padding-xl">
                            <Heading type="h2">Oneens met de beslissing?</Heading>
                            <LayoutFlow>
                              <LayoutFlow gap="xs">
                                <Button size="sm" kind="secondary" fullWidth={true}>
                                  Maak bezwaar
                                </Button>
                              </LayoutFlow>
                              <LayoutFlow gap="xs">
                                <Button size="sm" kind="secondary" fullWidth={true} icon="externe-link">
                                  Lees alles over bezwaar maken
                                </Button>
                              </LayoutFlow>
                            </LayoutFlow>
                          </div>
                        </LayoutFlow>
                      </div>
                    </Grid>
                  </LayoutFlow>
                </LayoutFlow>
              </div>
            </main>
          </LayoutFlow>
        </div>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
};

export default ZaakClean;
