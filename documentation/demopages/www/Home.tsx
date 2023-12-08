import {
  Accordion,
  Button,
  ButtonGroup,
  Footer,
  Heading,
  Icon,
  LayoutColumnRow,
  Link,
  MenuBar,
} from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/www.scss';

const Home = () => {
  return (
    <body className="rvo-theme rvo-www">
      <div className="rvo-www rvo-rhs-update">
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
                    {
                      label: 'Home',
                      active: true,
                      link: '#',
                    },
                    {
                      label: 'Onderwerpen',
                      link: '#',
                    },
                    {
                      label: 'Subsidie- en financieringswijzer',
                      link: '#',
                    },
                    {
                      label: 'Over ons',
                      link: '#',
                    },
                    {
                      label: 'Contact',
                      link: '#',
                    },
                    {
                      label: 'Mijn RVO',
                      link: '#',
                      icon: 'user',
                    },
                    {
                      label: 'English',
                      icon: 'wereldbol',
                      link: '#',
                    },
                    {
                      label: 'Zoeken',
                      icon: 'zoek',
                      link: '#',
                    },
                  ]}
                  size="lg"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="lg"
                />
              </div>
            </details>
          </div>

          <MenuBar
            items={[
              {
                label: 'Home',
                active: true,
                link: '#',
              },
              {
                label: 'Onderwerpen',
                link: '#',
              },
              {
                label: 'Subsidie- en financieringswijzer',
                link: '#',
              },
              {
                label: 'Over ons',
                link: '#',
              },
              {
                label: 'Contact',
                link: '#',
              },
              {
                align: 'right',
                label: 'Mijn RVO',
                link: '#',
                active: true,
                icon: 'user',
              },
              {
                align: 'right',
                label: 'English',
                icon: 'wereldbol',
                link: '#',
              },
              {
                align: 'right',
                label: 'Zoeken',
                icon: 'zoek',
                link: '#',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="lg"
          />
        </div>
        <div className="rvo-hero rvo-max-width-layout--lg">
          <div className="rvo-hero-image">
            <img src="images/home-hero.webp" className="rvo-hero-img" />
          </div>
          <h1 className="utrecht-heading-1">
            Rijksdienst voor Ondernemend Nederland
            <span className="rvo-heading-subtitle">Wij helpen u graag vooruit!</span>
          </h1>
        </div>
        <main className="rvo-main--www rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-content--www rvo-content--overzicht">
            <LayoutColumnRow size="xl">
              <div className="rvo-cards">
                <LayoutColumnRow size="md">
                  <h2 className="utrecht-heading-2">Onderwerpen</h2>

                  <div className="rvo-cards-grid">
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="wereldbol" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Klimaat & Energie
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Energie besparen en opwekken, duurzame mobiliteit, co2-reductie industrie...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="grootstedelijk" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Bouwen & Wonen
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Energielabel, BENG, verduurzamen gebouwen en woningen, gebiedsontwikkeling..
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="buitenlandse-handel" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Internationaal ondernemen
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Landeninformatie, netwerken en contacten, financiering, handelsmissies...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="wereldbol-tussen-2-uitgestoken-handen" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Ont­wikkelings­samen­werking
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Voedselzekerheid, humanitaire hulp, publiek-private partnerschappen...
                        </p>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--w-link rvo-card--w-icon rvo-card--outline">
                      <div className="rvo-card-icon">
                        <Icon icon="tractor" size="xl" />
                      </div>
                      <div className="rvo-card-content">
                        <h3 className="utrecht-heading-3">
                          <a href="#" className="rvo-link--full-click">
                            Landbouw
                          </a>
                        </h3>

                        <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">
                          Grond, mest, marktordening, gemeenschappelijk landbouwbeleid...
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    showIcon="after"
                    icon="pijl-naar-rechts"
                    target="#"
                    content="Naar A-Z overzicht"
                    noUnderline={true}
                  />
                </LayoutColumnRow>
              </div>
              <hr className="rvo-divider"></hr>
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
                            <a href="#" className="rvo-link--full-click">
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
                            <a href="#" className="rvo-link--full-click">
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
                            <a href="#" className="rvo-link--full-click">
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
                    <a className="rvo-messages-title rvo-link--full-click" href="#">
                      U moet uw gegevens updaten
                    </a>
                  </div>
                  <div className="rvo-messages-list-item">
                    <div className="rvo-messages-meta-data">
                      <div className="rvo-messages-meta-data-subject">Mijn Percelen</div>
                      <div className="rvo-messages-meta-data-date">15 mei 2023</div>
                    </div>
                    <a className="rvo-messages-title rvo-link--full-click" href="#">
                      Percelenregistratie goedgekeurd
                    </a>
                  </div>
                  <div className="rvo-messages-list-item">
                    <div className="rvo-messages-meta-data">
                      <div className="rvo-messages-meta-data-subject">WBSO</div>
                      <div className="rvo-messages-meta-data-date">22 apr 2023</div>
                    </div>
                    <a className="rvo-messages-title rvo-link--full-click" href="#">
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
      </div>
    </body>
  );
};

export default Home;
