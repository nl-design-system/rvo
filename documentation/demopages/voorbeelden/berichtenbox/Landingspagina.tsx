import { Accordion, Button, Footer, Grid, Header, Heading, Icon, LayoutFlow, MenuBar } from '@nl-rvo/components';

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
            label: 'Overheidsorganisatie?',
            link: '#',
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
        maxWidth="md"
      />
      <LayoutFlow gap="3xl">
        <LayoutFlow gap="xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--md">
            <LayoutFlow gap="2xl">
              <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--none rvo-hero">
                <div className="rvo-hero__image-container">
                  <img
                    src="images/berichtenbox/berichtenbox-bedrijven.jpg"
                    className="rvo-hero__image"
                    alt="Ondernemer bekijkt met collega de berichtenbox op een laptop."
                  />
                </div>
                <div className="rvo-hero__content">
                  <h1 className="utrecht-heading-1 rvo-hero__title rvo-heading--no-margins">
                    Berichtenbox voor bedrijven
                  </h1>
                  <span className="rvo-hero__subtitle rvo-margin-block-end--xs">
                    Alle overheidsberichten op één plek!
                  </span>
                  <Button kind="secondary" size="sm">
                    Inloggen met e-Herkenning
                  </Button>
                </div>
              </div>
              <div className="rvo-max-width-layout rvo-max-width-layout--md">
                <LayoutFlow gap="2xl">
                  <Grid columns="two" gap="xl">
                    <div className="rvo-quote">
                      <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                        <div className="rvo-card__content">
                          <LayoutFlow>
                            <span className="rvo-text--italic rvo-text--subtle rvo-text--xl">
                              "Mijn post van de overheid in de berichtenbox"
                            </span>
                            <LayoutFlow row={true} gap="sm">
                              <div className="rvo-quote__image">
                                <img src="images/berichtenbox/profiel-foto-1.png" width="64px" height="64px" />
                              </div>
                              <div className="rvo-quote__person">
                                <LayoutFlow gap="0">
                                  <span className="rvo-text rvo-text--bold">Pim Hassevoort</span>
                                  <span className="rvo-text rvo-text--sm">Groene energie leverancier</span>
                                </LayoutFlow>
                              </div>
                            </LayoutFlow>
                          </LayoutFlow>
                        </div>
                      </div>
                    </div>
                    <div className="rvo-quote">
                      <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                        <div className="rvo-card__content">
                          <LayoutFlow>
                            <span className="rvo-text--italic rvo-text--subtle rvo-text--xl">
                              "Al mijn overheidsberichten veilig op één plek."
                            </span>
                            <LayoutFlow row={true} gap="sm">
                              <div className="rvo-quote__image">
                                <img src="images/berichtenbox/profiel-foto-2.png" width="64px" height="64px" />
                              </div>
                              <div className="rvo-quote__person">
                                <LayoutFlow gap="0">
                                  <span className="rvo-text rvo-text--bold">Charlotte Verduim</span>
                                  <span className="rvo-text rvo-text--sm">Kinderopvang organisatie</span>
                                </LayoutFlow>
                              </div>
                            </LayoutFlow>
                          </LayoutFlow>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <div className="rvo-card rvo-card--padding-xl rvo-card--with-background-image rvo-card--inverted-colors">
                    <div className="rvo-card__background-image-container">
                      <img src="images/berichtenbox/video.jpg" className="rvo-card__background-image" />
                    </div>
                    <div className="rvo-card__content">
                      <div className="rvo-max-width-layout rvo-max-width-layout--sm">
                        <LayoutFlow>
                          <LayoutFlow wrap={true} alignContent="center">
                            <Icon icon="video" color="wit" size="2xl" />
                          </LayoutFlow>
                          <LayoutFlow wrap={true} alignContent="center">
                            <span className="rvo-text rvo-text--xl">Video: Berichtenbox in 90 seconden</span>
                          </LayoutFlow>
                          <LayoutFlow wrap={true} alignContent="center">
                            <span className="rvo-text rvo-text--sm">
                              Wil je weten hoe de berichtenbox voor bedrijven jouw contact met overheden makkelijker
                              maakt? <br />
                              Bekijk dan deze video en sluit je aan.
                            </span>
                          </LayoutFlow>
                        </LayoutFlow>
                      </div>
                    </div>
                  </div>

                  {/* <LayoutFlow row={true} size="2xl">
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
                  </LayoutFlow> */}
                </LayoutFlow>
              </div>
              <hr className="rvo-hr rvo-max-width-layout rvo-max-width-layout--md"></hr>
              <div className="rvo-max-width-layout rvo-max-width-layout--md">
                <Grid columns="three" gap="2xl">
                  <LayoutFlow alignItems="" gap="sm">
                    <Icon size="2xl" icon="hangslot-dicht" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Veilig en vertrouwd
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Semper curabitur et non dui hac purus. Felis
                      imperdiet nisl eget odio; aptent interdum natoque.
                    </span>
                  </LayoutFlow>
                  <LayoutFlow alignItems="" gap="sm">
                    <Icon size="2xl" icon="vermindering-papier" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Alle berichten op één plek
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Sem ornare condimentum quam non ridiculus. Mollis rhoncus felis ultricies purus vivamus elementum.
                      Class fermentum lobortis nisl netus; egestas magna in magna.
                    </span>
                  </LayoutFlow>
                  <LayoutFlow alignItems="" gap="sm">
                    <Icon size="2xl" icon="tekstballonnen-met-vraagteken" color="grijs-700"></Icon>
                    <Heading type="h3" noMargins={true}>
                      Vraag en antwoord
                    </Heading>
                    <span className="rvo-text rvo-text--subtle rvo-text--sm">
                      Mi magna ornare at ridiculus, cubilia euismod penatibus. Imperdiet porttitor velit pulvinar; sit
                      in quis quam. Vivamus praesent cubilia feugiat eget lacus vulputate auctor sociosqu.
                    </span>
                  </LayoutFlow>
                </Grid>
              </div>
              <hr className="rvo-hr rvo-max-width-layout rvo-max-width-layout--md"></hr>
              <div className="rvo-placeholder--stappenplan">
                <LayoutFlow>
                  <div className="rvo-placeholder--stappenplan-title">
                    <LayoutFlow alignContent="center" wrap={true}>
                      <Heading type="h3" noMargins={true}>
                        Stappenplan
                      </Heading>
                    </LayoutFlow>
                    <LayoutFlow alignContent="center" wrap={true}>
                      <span className="rvo-text rvo-text--subtle">Berichtenbox voor bedrijven gebruiken</span>
                    </LayoutFlow>
                  </div>
                  <Grid columns="four" gap="2xl">
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutFlow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">1.</span>
                          <LayoutFlow gap="0">
                            <span className="rvo-text rvo-text--bold">E-herkenning aanvragen</span>
                            <span className="rvo-text rvo-text--subtle">
                              Voor het aanmaken van een account en inloggen in de berichtenbox heeft u e-herkenning
                              nodig.
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Direct e-herkenning aanvragen
                              </a>
                            </span>
                          </LayoutFlow>
                        </LayoutFlow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutFlow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">2.</span>
                          <LayoutFlow gap="0">
                            <span className="rvo-text rvo-text--bold">Account aanmaken berichtenbox</span>
                            <span className="rvo-text rvo-text--subtle">
                              Vul daarna uw bedrijfgegevens in en maak een account aan voor de berichtenbox.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Account aanmaken
                              </a>
                            </span>
                          </LayoutFlow>
                        </LayoutFlow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutFlow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">3.</span>
                          <LayoutFlow gap="0">
                            <span className="rvo-text rvo-text--bold">Naam registreren Handelregister</span>
                            <span className="rvo-text rvo-text--subtle">
                              Geef toegang tot overheidsorganisaties bij de Kamer van Koophandel.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Inloggen bij de KVK
                              </a>
                            </span>
                          </LayoutFlow>
                        </LayoutFlow>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card__content">
                        <LayoutFlow>
                          <span className="rvo-text--italic rvo-text--bold rvo-text--xl">4.</span>
                          <LayoutFlow gap="0">
                            <span className="rvo-text rvo-text--bold">Inloggen met e-herkenning</span>
                            <span className="rvo-text rvo-text--subtle">
                              Gefeliciteerd! Uw bedrijf kan nu gebruik maken van de berichtenbox voor bedrijven.
                              <br />
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Nu inloggen met e-herkenning
                              </a>
                            </span>
                          </LayoutFlow>
                        </LayoutFlow>
                      </div>
                    </div>
                  </Grid>
                </LayoutFlow>
              </div>
              <div className="rvo-place-holder--faq rvo-max-width-layout rvo-max-width-layout--sm">
                <LayoutFlow wrap={true} alignContent="center">
                  <Heading type="h3">Veelgestelde vragen</Heading>
                </LayoutFlow>
                <Accordion
                  items={[
                    {
                      title: 'Hoe maak ik een berichtenbox account?',
                      teaser: '',
                      content:
                        'Om een Berichtenbox account aan te maken, gaat u naar de website en klikt u op "Account aanmaken". Volg de stappen en gebruik uw eHerkenning om het proces te voltooien.',
                    },
                    {
                      title: 'Is de Berichtenbox voor bedrijven veilig?',
                      teaser: '',
                      content:
                        'Ja, de Berichtenbox maakt gebruik van de nieuwste beveiligingstechnologieën en voldoet aan alle wettelijke eisen voor gegevensbescherming.',
                    },
                    {
                      title: 'Kan ik ook grote bijlagen versturen via de Berichtenbox?',
                      teaser: '',
                      content:
                        'De Berichtenbox ondersteunt bijlagen tot 20 MB. Voor grotere bestanden kunt u gebruik maken van een beveiligde downloadlink.',
                    },
                    {
                      title: 'Hoe kan ik berichten versturen aan meerdere overheidsorganisaties?',
                      teaser: '',
                      content:
                        'In de Berichtenbox kunt u eenvoudig meerdere ontvangers selecteren voordat u uw bericht verstuurt. Kies de relevante organisaties uit de lijst.',
                    },
                    {
                      title: 'Kan een collega toegang krijgen tot mijn account?',
                      teaser: '',
                      content:
                        "Ja, u kunt collega's machtigen om namens u de Berichtenbox te beheren. Gebruik hiervoor de machtigingsfunctie in uw accountinstellingen.",
                    },
                  ]}
                />
              </div>
            </LayoutFlow>
          </main>
        </LayoutFlow>

        <Footer />
      </LayoutFlow>
    </div>
  );
};

export default Landingspagina;
