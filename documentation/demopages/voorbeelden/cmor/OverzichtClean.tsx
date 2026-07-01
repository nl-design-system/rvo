import {
  Accordion,
  ActionGroup,
  Alert,
  Button,
  Card,
  ExpandableContent,
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
  Tag,
} from '@nl-rvo/component-library-react';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const OverzichtClean = () => {
  return (
    <body className="rvo-theme rvo-responsive">
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
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true} fontWeightNormal={true}>
                <strong>Overzicht</strong> van Boer Overveen B.V.
              </Heading>
              <LayoutFlow gap="md">
                <LayoutFlow gap="xs">
                  <Heading type="h2" noMargins={true}>
                    Nog te starten
                  </Heading>
                  <LayoutFlow gap="md">
                    <ExpandableContent title="Wij vragen u onderstaande aanvragen op tijd te regelen" subtle={true}>
                      Extra uitleg over bovenstaande opmerking.
                    </ExpandableContent>
                    <Grid columns="two">
                      <Alert heading="Mijn Percelen" kind="info">
                        <LayoutFlow gap="sm">
                          Uiterlijk 4 september 2024
                          <ActionGroup>
                            <Button kind="primary" size="sm">
                              Percelen registreren
                            </Button>
                            <Button kind="secondary" size="sm">
                              Meer info
                            </Button>
                          </ActionGroup>
                        </LayoutFlow>
                      </Alert>
                    </Grid>
                  </LayoutFlow>
                </LayoutFlow>
              </LayoutFlow>

              <div className="rvo-cards">
                <LayoutFlow gap="md">
                  <div className="rvo-heading-w-tag">
                    <LayoutFlow row={true}>
                      <Heading type="h2" noMargins={true}>
                        Lopende aanvragen
                      </Heading>
                      <Tag type="info">2 openstaande acties</Tag>
                    </LayoutFlow>
                  </div>

                  <Grid gap="md" columns="two">
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-zaak--default&viewMode=story"
                        >
                          BSN Melding WBSO 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Wet Bevordering Speur- en Ontwikkelingswerk</span>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Verzilver uw voucher <strong>uiterlijk 28 aug 2023</strong>
                        </span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-zaak--default&viewMode=story"
                        >
                          ISDE 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">
                        Investeringssubsidie duurzame energie en energiebesparing
                      </span>
                      <LayoutFlow row={true} gap="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                        </span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-zaak--default&viewMode=story"
                        >
                          Gecombineerde opgave 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Gemeenschappelijk Landbouwbeleid</span>
                      <LayoutFlow row={true} gap="xs">
                        <Icon icon="zandloper" size="md" />
                        <span className="rvo-text--sm">In behandeling</span>
                      </LayoutFlow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link
                          fullContainerLink={true}
                          noUnderline={true}
                          href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-zaak--default&viewMode=story"
                        >
                          SVVE 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">
                        Subsidieregeling verduurzaming voor verenigingen van eigenaars
                      </span>
                      <LayoutFlow row={true} gap="xs">
                        <Icon icon="vinkje" size="md" />
                        <span className="rvo-text--sm">Goedgekeurd</span>
                      </LayoutFlow>
                    </Card>
                  </Grid>
                  <LayoutFlow row={true}>
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" noUnderline={true}>
                      Alle lopende aanvragen (13)
                    </Link>
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" noUnderline={true}>
                      Mijn dossier
                    </Link>
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" noUnderline={true}>
                      Concepten
                    </Link>
                  </LayoutFlow>
                </LayoutFlow>
              </div>
              <hr className="rvo-hr"></hr>
              <Grid gap="xl" columns="two">
                <LayoutFlow gap="sm">
                  <Heading type="h2" noMargins={true}>
                    Start een nieuwe aanvraag
                  </Heading>
                  <span>Kies uit uw favorieten</span>
                  <LayoutFlow gap="sm">
                    <div className="rvo-item-list">
                      <div className="rvo-item-list__item">
                        <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutFlow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                            <LayoutFlow row={true} wrap={true} gap="sm">
                              <Link color="zwart" noUnderline={true}>
                                ANLb-Collectieven
                              </Link>
                              Open voor aanvragen
                            </LayoutFlow>
                          </LayoutFlow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutFlow>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutFlow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
                            <LayoutFlow row={true} wrap={true} gap="sm">
                              <Link color="zwart" noUnderline={true}>
                                ISDE
                              </Link>
                              Gesloten voor aanvragen
                            </LayoutFlow>
                          </LayoutFlow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutFlow>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutFlow row={true} justifyContent="space-between" alignItems="start">
                          <LayoutFlow row={true} alignItems="start">
                            <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
                            <LayoutFlow row={true} wrap={true} gap="sm">
                              <Link color="zwart" noUnderline={true}>
                                Gecombineerde Opgave
                              </Link>
                              Tijdelijk gesloten voor aanvragen
                            </LayoutFlow>
                          </LayoutFlow>
                          <div className="rvo-item-list-icon">
                            <Link target="#">
                              <Icon icon="delta-naar-rechts" size="sm" />
                            </Link>
                          </div>
                        </LayoutFlow>
                      </div>
                    </div>
                    <Link showIcon="after" icon="externe-link" target="#" noUnderline={true}>
                      Zoek een andere regeling op rvo.nl
                    </Link>
                  </LayoutFlow>
                </LayoutFlow>
                <LayoutFlow gap="xs">
                  <Heading type="h2" noMargins={true}>
                    Snel naar
                  </Heading>

                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--none">
                    <li>
                      <Link target="#" noUnderline={true}>
                        Wijzig e-mail of telefoonnummer
                      </Link>
                    </li>
                    <li>
                      <Link target="#" noUnderline={true}>
                        Neem contact op
                      </Link>
                    </li>
                    <li>
                      <Link target="#" noUnderline={true}>
                        Voeg favoriet toe
                      </Link>
                    </li>
                    <li>
                      <Link target="#" noUnderline={true}>
                        Machtig iemand anders
                      </Link>
                    </li>
                    <li>
                      <Link target="#" noUnderline={true}>
                        Meld een technisch probleem
                      </Link>
                    </li>
                  </ul>
                </LayoutFlow>
              </Grid>

              <LayoutFlow gap="xs">
                <Heading type="h2" noMargins={true}>
                  Berichten
                </Heading>
                <LayoutFlow gap="sm">
                  <div className="rvo-item-list">
                    <div className="rvo-item-list__item">
                      <LayoutFlow row={true} justifyContent="space-between" wrap={true} gap="sm">
                        <Link noUnderline={true} color="zwart">
                          U moet uw gegevens updaten
                        </Link>
                        <LayoutFlow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">ISDE 2022</span>
                          <span className="rvo-text--sm rvo-text--subtle">7 jun 2023</span>
                        </LayoutFlow>
                      </LayoutFlow>
                    </div>
                    <div className="rvo-item-list__item">
                      <LayoutFlow row={true} justifyContent="space-between" wrap={true} gap="sm">
                        <Link noUnderline={true} color="zwart">
                          Percelenregistratie goedgekeurd
                        </Link>
                        <LayoutFlow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">Mijn Percelen</span>
                          <span className="rvo-text--sm rvo-text--subtle">15 mei 2023</span>
                        </LayoutFlow>
                      </LayoutFlow>
                    </div>
                    <div className="rvo-item-list__item">
                      <LayoutFlow row={true} justifyContent="space-between" wrap={true} gap="sm">
                        <Link noUnderline={true} color="zwart">
                          Aanvullend bewijsmateriaal aanleveren
                        </Link>
                        <LayoutFlow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">WBSO</span>
                          <span className="rvo-text--sm rvo-text--subtle">22 apr 2023</span>
                        </LayoutFlow>
                      </LayoutFlow>
                    </div>
                  </div>
                  <Link showIcon="after" icon="pijl-naar-rechts" noUnderline={true}>
                    Alle berichten
                  </Link>
                </LayoutFlow>
              </LayoutFlow>
              <Grid columns="two" gap="xl">
                <div className="rvo-faq">
                  <Heading type="h2">Veelgestelde vragen</Heading>
                  <LayoutFlow gap="sm">
                    <Accordion
                      items={[
                        {
                          title: 'Mag ik voor deze regeling subsidies stapelen/combineren?',
                          teaser: '',
                          content:
                            'Per 21 april 2021 kunt u als woningeigenaar ISDE combineren met gemeentelijke of provinciale subsidies om bijvoorbeeld uw woning aan te sluiten op een warmtenet. Dit is terug te vinden in de publicatie in de Staatscourant. Het is niet mogelijk om meer dan een keer subsidie te ontvangen vanuit de Rijksoverheid voor dezelfde maatregel.',
                        },
                        {
                          title: 'Wat is een bestaande thermische schil?',
                          teaser: '',
                          content:
                            'De bestaande thermische schil is de isolerende laag aan de buitenzijde van de woning. Wanden, daken, beglazing en deuren, en vloeren grenzend aan de buitenlucht of grond zijn geïsoleerd om kou te weren en warmte binnen te houden. De thermische schil is de jas van de woning.',
                        },
                        {
                          title: 'Wanneer krijg ik bericht over mijn subsidie?',
                          teaser: '',
                          content: 'Zo snel mogelijk.',
                        },
                      ]}
                    />

                    <Link showIcon="after" icon="pijl-naar-rechts" noUnderline={true}>
                      Bekijk alle veelgestelde vragen
                    </Link>
                  </LayoutFlow>
                </div>

                <div className="rvo-contact-options">
                  <Heading type="h2">Neem contact op</Heading>
                  <p className="rvo-paragraph">Staat uw vraag er niet bij? Neem dan contact met ons op.</p>
                  <ActionGroup>
                    <Button kind="secondary" showIcon="after" icon="communicatie">
                      Stel uw vraag via onze chat
                    </Button>
                    <Button kind="secondary">Bekijk alle contactmogelijkheden</Button>
                    <Button kind="secondary" showIcon="after" icon="externe-link">
                      Geef uw mening
                    </Button>
                  </ActionGroup>
                </div>
              </Grid>
            </LayoutFlow>
          </div>
        </div>
      </main>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default OverzichtClean;
