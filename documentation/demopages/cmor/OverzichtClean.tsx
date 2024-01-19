import {
  Accordion,
  Alert,
  Button,
  ButtonGroup,
  Card,
  ExpandableText,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  Link,
  MenuBar,
  MobileMenuBar,
  StatusIcon,
  Tag,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const OverzichtClean = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        submenuItems={[]}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
          },
          {
            label: 'Mijn dossier',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MobileMenuBar>
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
            active: true,
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
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                  active: true,
                },
                {
                  label: 'Mijn dossier',
                  link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
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
            <LayoutColumnRow size="xl">
              <Heading type="h1" noMargins={true} mixedBoldAndNormal={true}>
                <strong>Overzicht</strong> van Boer Overveen B.V.
              </Heading>
              <LayoutColumnRow size="md">
                <LayoutColumnRow size="xs">
                  <Heading type="h2" textContent="Nog te starten" noMargins={true} />
                  <LayoutColumnRow size="md">
                    <ExpandableText
                      title="Wij vragen u onderstaande aanvragen op tijd te regelen"
                      content="Extra uitleg over bovenstaande opmerking."
                      subtle={true}
                    />
                    <Grid columns="two">
                      <Alert heading="Mijn Percelen" kind="info">
                        <LayoutColumnRow size="sm">
                          Uiterlijk 4 september 2024
                          <ButtonGroup>
                            <Button kind="primary" size="sm">
                              Percelen registreren
                            </Button>
                            <Button kind="secondary" size="sm">
                              Meer info
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
                      <Heading type="h2" textContent="Lopende aanvragen" noMargins={true}></Heading>
                      <Tag type="info" showIcon="no" content="2 openstaande acties" />
                    </LayoutColumnRow>
                  </div>

                  <Grid gap="md" columns="two">
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link fullContainerLink={true} noUnderline={true}>
                          BSN Melding WBSO 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Wet Bevordering Speur- en Ontwikkelingswerk</span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Verzilver uw voucher <strong>uiterlijk 28 aug 2023</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link fullContainerLink={true} noUnderline={true}>
                          ISDE 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">
                        Investeringssubsidie duurzame energie en energiebesparing
                      </span>
                      <LayoutColumnRow row={true} size="xs">
                        <StatusIcon type="waarschuwing" size="md" />
                        <span className="rvo-text--sm">
                          Stuur aanvullende informatie <strong>uiterlijk 19 aug 2023</strong>
                        </span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link fullContainerLink={true} noUnderline={true}>
                          Gecombineerde opgave 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">Gemeenschappelijk Landbouwbeleid</span>
                      <LayoutColumnRow row={true} size="xs">
                        <Icon icon="zandloper" size="md" />
                        <span className="rvo-text--sm">In behandeling</span>
                      </LayoutColumnRow>
                    </Card>
                    <Card background="none" outline={true} fullCardLink={true} padding="md" title="">
                      <Heading type="h3" noMargins={true}>
                        <Link fullContainerLink={true} noUnderline={true}>
                          SVVE 2023
                        </Link>
                      </Heading>
                      <span className="rvo-text--subtle rvo-text--sm">
                        Subsidieregeling verduurzaming voor verenigingen van eigenaars
                      </span>
                      <LayoutColumnRow row={true} size="xs">
                        <Icon icon="vinkje" size="md" />
                        <span className="rvo-text--sm">Goedgekeurd</span>
                      </LayoutColumnRow>
                    </Card>
                  </Grid>
                  <LayoutColumnRow row={true}>
                    <Link
                      showIcon="after"
                      icon="pijl-naar-rechts"
                      target="#"
                      content="Alle lopende aanvragen (13)"
                      noUnderline={true}
                    />
                    <Link
                      showIcon="after"
                      icon="pijl-naar-rechts"
                      target="#"
                      content="Mijn dossier"
                      noUnderline={true}
                    />
                    <Link showIcon="after" icon="pijl-naar-rechts" target="#" content="Concepten" noUnderline={true} />
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </div>
              <hr className="rvo-hr"></hr>
              <Grid gap="xl" columns="two">
                <LayoutColumnRow size="sm">
                  <Heading type="h2" textContent="Start een nieuwe aanvraag" noMargins={true} />
                  <span>Kies uit uw favorieten</span>
                  <LayoutColumnRow size="sm">
                    <div className="rvo-item-list">
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true}>
                          <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                          <Link content="ANLb-Collectieven" color="zwart" noUnderline={true} />
                          Open voor aanvragen
                        </LayoutColumnRow>
                        <div className="rvo-item-list-icon">
                          <Link target="#">
                            <Icon icon="delta-naar-rechts" size="sm" />
                          </Link>
                        </div>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true}>
                          <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
                          <Link content="ISDE" color="zwart" noUnderline={true} />
                          Gesloten voor aanvragen
                        </LayoutColumnRow>
                        <div className="rvo-item-list-icon">
                          <Link target="#">
                            <Icon icon="delta-naar-rechts" size="sm" />
                          </Link>
                        </div>
                      </div>
                      <div className="rvo-item-list__item">
                        <LayoutColumnRow row={true}>
                          <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
                          <Link content="Gecombineerde Opgave" color="zwart" noUnderline={true} />
                          Tijdelijk gesloten voor aanvragen
                        </LayoutColumnRow>
                        <Link target="#">
                          <Icon icon="delta-naar-rechts" size="sm" />
                        </Link>
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
                <LayoutColumnRow size="xs">
                  <Heading type="h2" textContent="Snel naar" noMargins={true} />

                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--none">
                    <li>
                      <Link content="Wijzig e-mail of telefoonnummer" target="#" noUnderline={true} />
                    </li>
                    <li>
                      <Link content="Neem contact op" target="#" noUnderline={true} />
                    </li>
                    <li>
                      <Link content="Voeg favoriet toe" target="#" noUnderline={true} />
                    </li>
                    <li>
                      <Link content="Machtig iemand anders" target="#" noUnderline={true} />
                    </li>
                    <li>
                      <Link content="Meld een technisch probleem" target="#" noUnderline={true} />
                    </li>
                  </ul>
                </LayoutColumnRow>
              </Grid>

              <LayoutColumnRow size="xs">
                <Heading type="h2" textContent="Berichten" noMargins={true} />
                <LayoutColumnRow size="sm">
                  <div className="rvo-item-list">
                    <div className="rvo-item-list__item">
                      <LayoutColumnRow row={true} alignContent="space-between">
                        <Link content="U moet uw gegevens updaten" noUnderline={true} color="zwart" />
                        <LayoutColumnRow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">ISDE 2022</span>
                          <span className="rvo-text--sm rvo-text--subtle">7 jun 2023</span>
                        </LayoutColumnRow>
                      </LayoutColumnRow>
                    </div>
                    <div className="rvo-item-list__item">
                      <LayoutColumnRow row={true}>
                        <Link content="Percelenregistratie goedgekeurd" noUnderline={true} color="zwart" />
                        <LayoutColumnRow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">Mijn Percelen</span>
                          <span className="rvo-text--sm rvo-text--subtle">15 mei 2023</span>
                        </LayoutColumnRow>
                      </LayoutColumnRow>
                    </div>
                    <div className="rvo-item-list__item">
                      <LayoutColumnRow row={true}>
                        <Link content="Aanvullend bewijsmateriaal aanleveren" noUnderline={true} color="zwart" />
                        <LayoutColumnRow row={true}>
                          <span className="rvo-text--sm rvo-text--subtle">WBSO</span>
                          <span className="rvo-text--sm rvo-text--subtle">22 apr 2023</span>
                        </LayoutColumnRow>
                      </LayoutColumnRow>
                    </div>
                  </div>
                  <Link content="Alle berichten" showIcon="after" icon="pijl-naar-rechts" noUnderline={true} />
                </LayoutColumnRow>
              </LayoutColumnRow>
              <div className="rvo-block-group">
                <div className="rvo-faq">
                  <Heading type="h2" textContent="Veelgestelde vragen" />
                  <div className="rvo-accordion--compact">
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
                  </div>
                  <Link
                    content="Bekijk alle veelgestelde vragen"
                    showIcon="after"
                    icon="pijl-naar-rechts"
                    noUnderline={true}
                  />
                </div>

                <div className="rvo-contact-options">
                  <Heading type="h2" textContent="Neem contact op" />
                  <p className="rvo-paragraph">Staat uw vraag er niet bij? Neem dan contact met ons op.</p>
                  <ButtonGroup>
                    <Button kind="secondary" showIcon="after" icon="communicatie">
                      Stel uw vraag via onze chat
                    </Button>
                    <Button kind="secondary">Bekijk alle contactmogelijkheden</Button>
                    <Button kind="secondary" showIcon="after" icon="externe-link">
                      Geef uw mening
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </LayoutColumnRow>
          </div>
        </div>
      </main>
      <Footer
        columns={[
          {
            label: 'RVO',
            items: [
              { content: 'Over ons', link: '#' },
              { content: 'Contact', link: '#' },
              { content: 'Pers', link: '#' },
              { content: 'Zaken regelen bij RVO', link: '#' },
            ],
          },
          {
            label: 'Over deze site',
            items: [
              { content: 'Privacy', link: '#' },
              { content: 'Cookies en anti-spam', link: '#' },
              { content: 'Toegankelijkheid', link: '#' },
              { content: 'Proclaimer', link: '#' },
            ],
          },
          {
            label: 'Snel naar',
            items: [
              { content: 'Onderwerpen A t/m Z', link: '#' },
              { content: 'Klantenpanel', link: '#' },
              { content: 'Documenten en publicaties', link: '#' },
              { content: 'Overheidspublicaties en auteursrecht', link: '#' },
            ],
          },
          {
            label: 'Blijf op de hoogte',
            items: [
              { content: 'Social media', link: '#' },
              { content: 'RSS', link: '#' },
              { content: 'Gratis nieuwsbrief', link: '#' },
            ],
          },
        ]}
      />
    </body>
  );
};

export default OverzichtClean;
