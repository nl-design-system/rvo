import {
  Accordion,
  Alert,
  Button,
  ButtonGroup,
  ExpandableText,
  Footer,
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
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const OverzichtClean = () => {
  return (
    <body className="rvo-theme rvo-cmor rvo-sidebar-menu-active">
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
            link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
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
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--md">
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
              <Heading type="h1" noMargins={true}>
                <strong>Overzicht</strong> van Boer Overveen B.V.
              </Heading>
              <LayoutColumnRow size="md">
                <LayoutColumnRow size="xs">
                  <Heading type="h2" textContent="Nog te starten" noMargins={true}></Heading>
                  <LayoutColumnRow size="md">
                    <ExpandableText
                      title="Wij vragen u onderstaande aanvragen op tijd te regelen"
                      content="Extra uitleg over bovenstaande opmerking."
                      subtle={true}
                    />
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
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>

              <div className="rvo-cards">
                <LayoutColumnRow size="md">
                  <div className="rvo-heading-w-tag">
                    <LayoutColumnRow row={true}>
                      <h2 className="utrecht-heading-2">Lopende aanvragen</h2>
                      <Tag type="info" showIcon="no" content="2 openstaande acties" />
                    </LayoutColumnRow>
                  </div>

                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                      <div className="rvo-card--with-link-indicator">
                        <div className="rvo-card__content">
                          <h3 className="utrecht-heading-3">
                            <a href="#" className="rvo-link rvo-card__link rvo-card__full-card-link">
                              BSN Melding WBSO 2023
                            </a>
                          </h3>
                          Wet Bevordering Speur- en Ontwikkelingswerk
                        </div>
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        <div className="rvo-card-status">
                          <StatusIcon type="waarschuwing" size="md" />
                          <div className="rvo-card-status-text">
                            Verzilver uw voucher <strong>uiterlijk 28 aug 2023</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rvo-card rvo-card--w-link rvo-card--w-link-indicator rvo-card--outline">
                      <div className="rvo-card-content"></div>
                      <div className="rvo-card-link-indicator">
                        <Icon icon="delta-naar-rechts" size="sm" />
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-link-indicator rvo-card--outline">
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            Gecombineerde opgave 2023
                          </a>
                        </h3>
                        <LayoutColumnRow size="xs">
                          <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                            Gemeenschappelijk Landbouwbeleid
                          </p>
                          <div className="rvo-card-status">
                            <Icon icon="zandloper" size="md" />
                            <div className="rvo-card-status-text">In behandeling</div>
                          </div>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-card-link-indicator">
                        <Icon icon="delta-naar-rechts" size="sm" />
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-link-indicator rvo-card--outline">
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                            SVVE 2023
                          </a>
                        </h3>
                        <LayoutColumnRow size="xs">
                          <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                            Subsidieregeling verduurzaming voor verenigingen van eigenaars
                          </p>
                          <div className="rvo-card-status">
                            <Icon icon="vinkje" size="md" />
                            <div className="rvo-card-status-text">Goedgekeurd</div>
                          </div>
                        </LayoutColumnRow>
                      </div>
                      <div className="rvo-card-link-indicator">
                        <Icon icon="delta-naar-rechts" size="sm" />
                      </div>
                    </div>
                  </div>
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
              <div className="rvo-block-group">
                <div className="rvo-item-list">
                  <Heading type="h2" textContent="Start een nieuwe aanvraag" />
                  <span className="rvo-item-list-sub-title">Kies uit uw favorieten</span>
                  <LayoutColumnRow size="sm">
                    <div className="rvo-item-list-items">
                      <div className="rvo-item-list-item rvo-item-list-item--w-icon rvo-item-list-item--w-link">
                        <div className="rvo-item-list-item-content">
                          <div className="rvo-status-indicator rvo-status-indicator--open"></div>
                          <div className="rvo-item-list-item-title">
                            <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                              ANLb-Collectieven
                            </a>
                          </div>
                          <div className="rvo-item-list-item-description">Open voor aanvragen</div>
                        </div>
                        <div className="rvo-item-list-icon">
                          <Icon icon="delta-naar-rechts" size="sm" />
                        </div>
                      </div>
                      <div className="rvo-item-list-item rvo-item-list-item--w-icon rvo-item-list-item--w-link">
                        <div className="rvo-item-list-item-content">
                          <div className="rvo-status-indicator rvo-status-indicator--closed"></div>
                          <div className="rvo-item-list-item-title">
                            <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                              ISDE
                            </a>
                          </div>
                          <div className="rvo-item-list-item-description">Gesloten voor aanvragen</div>
                        </div>
                        <div className="rvo-item-list-icon">
                          <Icon icon="delta-naar-rechts" size="sm" />
                        </div>
                      </div>
                      <div className="rvo-item-list-item rvo-item-list-item--w-icon rvo-item-list-item--w-link">
                        <div className="rvo-item-list-item-content">
                          <div className="rvo-status-indicator rvo-status-indicator--tmp-closed"></div>
                          <div className="rvo-item-list-item-title">
                            <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
                              Gecombineerde Opgave
                            </a>
                          </div>
                          <div className="rvo-item-list-item-description">Tijdelijk gesloten voor aanvragen</div>
                        </div>
                        <div className="rvo-item-list-icon">
                          <Icon icon="delta-naar-rechts" size="sm" />
                        </div>
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
                </div>
                <div className="rvo-quick-links">
                  <Heading type="h2" textContent="Snel naar" />
                  <ul className="rvo-quick-links-list">
                    <li className="rvo-quick-links-list-item">
                      <Link content="Wijzig e-mail of telefoonnummer" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Neem contact op" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Voeg favoriet toe" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Machtig iemand anders" target="#" noUnderline={true} />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link content="Meld een technisch probleem" target="#" noUnderline={true} />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rvo-messages">
                <Heading type="h2" textContent="Berichten" />
                <div className="rvo-messages-list">
                  <div className="rvo-messages-list-item">
                    <div className="rvo-messages-meta-data">
                      <div className="rvo-messages-meta-data-subject">ISDE 2022</div>
                      <div className="rvo-messages-meta-data-date">7 jun 2023</div>
                    </div>
                    <a className="rvo-messages-title rvo-link rvo-link--full-click rvo-link--black" href="#">
                      U moet uw gegevens updaten
                    </a>
                  </div>
                  <div className="rvo-messages-list-item">
                    <div className="rvo-messages-meta-data">
                      <div className="rvo-messages-meta-data-subject">Mijn Percelen</div>
                      <div className="rvo-messages-meta-data-date">15 mei 2023</div>
                    </div>
                    <a className="rvo-messages-title rvo-link rvo-link--full-click rvo-link--black" href="#">
                      Percelenregistratie goedgekeurd
                    </a>
                  </div>
                  <div className="rvo-messages-list-item">
                    <div className="rvo-messages-meta-data">
                      <div className="rvo-messages-meta-data-subject">WBSO</div>
                      <div className="rvo-messages-meta-data-date">22 apr 2023</div>
                    </div>
                    <a className="rvo-messages-title rvo-link rvo-link--full-click rvo-link--black" href="#">
                      Aanvullend bewijsmateriaal aanleveren
                    </a>
                  </div>
                </div>
                <Link content="Alle berichten" showIcon="after" icon="pijl-naar-rechts" noUnderline={true} />
              </div>
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
