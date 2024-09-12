import { Accordion, Button, Footer, Grid, Header, Heading, Icon, LayoutColumnRow, MenuBar } from '@nl-rvo/components';

const Landingspagina = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <MenuBar
        items={[
          {
            label: 'Berichtenbox voor bedrijven',
            link: '#',
            active: true,
          },
          {
            align: 'right',
            label: 'Inloggen',
            icon: 'user',
            link: '#',
          },
          {
            align: 'right',
            label: 'English',
            icon: 'wereldbol',
            link: '#',
          },
        ]}
        size="md"
        useIcons={true}
        horizontalRule={false}
        iconPlacement="before"
        maxWidth="lg"
      />
      <LayoutColumnRow size="3xl">
        <LayoutColumnRow size="xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--lg">
            <LayoutColumnRow size="3xl">
              <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--none rvo-hero">
                <div className="rvo-hero__image-container">
                  <img
                    src="images/berichtenbox/berichtenbox-bedrijven.jpg"
                    className="rvo-hero__image"
                    alt="Ondernemer bekijkt met collega de berichtenbox op een laptop."
                  />
                </div>
                <h1 className="utrecht-heading-1 rvo-hero__title">
                  Berichtenbox voor bedrijven
                  <span className="rvo-hero__subtitle">Alle overheidsberichten op één plek!</span>
                  <Button kind="secondary" size="sm">
                    Inloggen met e-Herkenning
                  </Button>
                </h1>
              </div>
              <div className="rvo-max-width-layout rvo-max-width-layout--md">
                <LayoutColumnRow size="3xl">
                  <Grid columns="two" gap="xl">
                    <div className="rvo-quote">
                      <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                        <div className="rvo-card__content">
                          <LayoutColumnRow>
                            <span className="rvo-text--italic rvo-text--subtle rvo-text--xl">
                              "Mijn post van de overheid in de berichtenbox"
                            </span>
                            <LayoutColumnRow row={true} size="sm">
                              <div className="rvo-quote__image">
                                <img src="images/berichtenbox/profiel-foto-1.png" width="64px" height="64px" />
                              </div>
                              <div className="rvo-quote__person">
                                <LayoutColumnRow size="0">
                                  <span className="rvo-text rvo-text--bold">Pim Hassevoort</span>
                                  <span className="rvo-text rvo-text--sm">Groene energie leverancier</span>
                                </LayoutColumnRow>
                              </div>
                            </LayoutColumnRow>
                          </LayoutColumnRow>
                        </div>
                      </div>
                    </div>
                    <div className="rvo-quote">
                      <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                        <div className="rvo-card__content">
                          <LayoutColumnRow>
                            <span className="rvo-text--italic rvo-text--subtle rvo-text--xl">
                              "Al mijn overheidsberichten veilig op één plek."
                            </span>
                            <LayoutColumnRow row={true} size="sm">
                              <div className="rvo-quote__image">
                                <img src="images/berichtenbox/profiel-foto-2.png" width="64px" height="64px" />
                              </div>
                              <div className="rvo-quote__person">
                                <LayoutColumnRow size="0">
                                  <span className="rvo-text rvo-text--bold">Charlotte Verduim</span>
                                  <span className="rvo-text rvo-text--sm">Kinderopvang organisatie</span>
                                </LayoutColumnRow>
                              </div>
                            </LayoutColumnRow>
                          </LayoutColumnRow>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <LayoutColumnRow row={true} size="2xl">
                    <img src="images/berichtenbox/video.jpg" width="440px"></img>
                    <div>
                      <Heading type="h3" noMargins={true}>
                        Video: Berichtenbox in 90 seconden
                      </Heading>
                      <p className="rvo-text rvo-text--no-margins">
                        Wil je weten hoe de berichtenbox voor bedrijven jouw contact met overheden makkelijker maakt?
                        Bekijk dan deze video en sluit je aan.
                      </p>
                    </div>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </div>
              <hr className="rvo-hr rvo-max-width-layout rvo-max-width-layout--md"></hr>
              <div className="rvo-max-width-layout rvo-max-width-layout--md">
                <Grid columns="three" gap="2xl">
                  <LayoutColumnRow alignItems="" size="sm">
                    <Icon size="2xl" icon="hangslot-dicht" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Veilig en vertrouwd
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Semper curabitur et non dui hac purus. Felis
                      imperdiet nisl eget odio; aptent interdum natoque.
                    </span>
                  </LayoutColumnRow>
                  <LayoutColumnRow alignItems="" size="sm">
                    <Icon size="2xl" icon="vermindering-papier" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Alle berichten op één plek
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Sem ornare condimentum quam non ridiculus. Mollis rhoncus felis ultricies purus vivamus elementum.
                      Class fermentum lobortis nisl netus; egestas magna in magna.
                    </span>
                  </LayoutColumnRow>
                  <LayoutColumnRow alignItems="" size="sm">
                    <Icon size="2xl" icon="tekstballonnen-met-vraagteken" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Vraag en antwoord
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Mi magna ornare at ridiculus, cubilia euismod penatibus. Imperdiet porttitor velit pulvinar; sit
                      in quis quam. Vivamus praesent cubilia feugiat eget lacus vulputate auctor sociosqu.
                    </span>
                  </LayoutColumnRow>
                </Grid>
              </div>
              <hr className="rvo-hr rvo-max-width-layout rvo-max-width-layout--md"></hr>
              <div className="rvo-placeholder--stappenplan">
                <LayoutColumnRow>
                  <div className="rvo-placeholder--stappenplan-title">
                    <LayoutColumnRow alignContent="center" wrap={true}>
                      <Heading type="h3" noMargins={true}>
                        Stappenplan
                      </Heading>
                    </LayoutColumnRow>
                    <LayoutColumnRow alignContent="center" wrap={true}>
                      <span className="rvo-text rvo-text--subtle">Berichtenbox voor bedrijven gebruiken</span>
                    </LayoutColumnRow>
                  </div>
                  <Grid columns="four" gap="2xl">
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutColumnRow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">1.</span>
                          <LayoutColumnRow size="0">
                            <span className="rvo-text rvo-text--bold">E-herkenning aanvragen</span>
                            <span className="rvo-text rvo-text--subtle">
                              Voor het aanmaken van een account en inloggen in de berichtenbox heeft u e-herkenning
                              nodig.
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Direct e-herkenning aanvragen
                              </a>
                            </span>
                          </LayoutColumnRow>
                        </LayoutColumnRow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutColumnRow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">2.</span>
                          <LayoutColumnRow size="0">
                            <span className="rvo-text rvo-text--bold">Account aanmaken berichtenbox</span>
                            <span className="rvo-text rvo-text--subtle">
                              Vul daarna uw bedrijfgegevens in en maak een account aan voor de berichtenbox.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Account aanmaken
                              </a>
                            </span>
                          </LayoutColumnRow>
                        </LayoutColumnRow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutColumnRow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">3.</span>
                          <LayoutColumnRow size="0">
                            <span className="rvo-text rvo-text--bold">Naam registreren Handelregister</span>
                            <span className="rvo-text rvo-text--subtle">
                              Geef toegang tot overheidsorganisaties bij de Kamer van Koophandel.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Inloggen bij de KVK
                              </a>
                            </span>
                          </LayoutColumnRow>
                        </LayoutColumnRow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutColumnRow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">4.</span>
                          <LayoutColumnRow size="0">
                            <span className="rvo-text rvo-text--bold">Inloggen met e-herkenning</span>
                            <span className="rvo-text rvo-text--subtle">
                              Gefeliciteerd! Uw bedrijf kan nu gebruik maken van de berichtenbox voor bedrijven.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Nu inloggen met e-herkenning
                              </a>
                            </span>
                          </LayoutColumnRow>
                        </LayoutColumnRow>
                      </div>
                    </div>
                  </Grid>
                </LayoutColumnRow>
              </div>
              <div className="rvo-place-holder--faq rvo-max-width-layout rvo-max-width-layout--sm">
                <LayoutColumnRow wrap={true} alignContent="center">
                  <Heading type="h3">Veelgestelde vragen</Heading>
                </LayoutColumnRow>
                <Accordion
                  items={[
                    {
                      title: 'Hoe maak ik een account aan voor de berichtenbox?',
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
            </LayoutColumnRow>
          </main>
        </LayoutColumnRow>

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
      </LayoutColumnRow>
    </div>
  );
};

export default Landingspagina;
