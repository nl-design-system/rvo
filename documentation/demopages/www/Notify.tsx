import {
  Button,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  Link,
  MaxWidthLayout,
  MenuBar,
  TextHelpers,
  TextInputField,
} from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/www.scss';

const Notify = () => {
  return (
    <body className="rvo-theme rvo-www">
      <Header />
      <div className="rvo-www rvo-rhs-update">
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

                      link: '#',
                    },
                    {
                      label: 'Onderwerpen',
                      link: '#',
                      active: true,
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
                  maxWidth="lg"
                  horizontalRule={false}
                />
              </div>
            </details>
          </div>

          <MenuBar
            items={[
              {
                label: 'Home',

                link: '#',
              },
              {
                label: 'Onderwerpen',
                link: '#',
                active: true,
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
            maxWidth="lg"
            horizontalRule={true}
          />
        </div>

        <main className="rvo-main--www rvo-max-width-layout rvo-max-width-layout--sm rvo-main--w-line">
          <div className="rvo-content--www rvo-content--notify">
            <h1 className="utrecht-heading-1 rvo-heading--no-margins">ISDE: Stand van zaken budget</h1>

            <p className="rvo-text--xl">
              Wilt u weten hoeveel budget er nog beschikbaar is voor de Investeringssubsidie duurzame energie en
              energiebesparing (ISDE)? Op deze pagina leest u de stand van zaken.
            </p>
            <LayoutColumnRow>
              <LayoutColumnRow row={true} size="sm">
                <Button size="sm">Direct aanvragen</Button>
                <Button size="sm" kind="secondary">
                  Gebruik rekentool
                </Button>
                <Button size="sm" kind="secondary">
                  ISDE voor bedrijven
                </Button>
              </LayoutColumnRow>
              <details className="rvo-details">
                <summary className="rvo-details-summary">
                  <LayoutColumnRow row={true} size="xs">
                    <Icon icon="envelop"></Icon>Ontvang e-mail notificaties <Icon icon="delta-omlaag" size="sm"></Icon>
                    <Icon icon="delta-omhoog" size="sm"></Icon>
                  </LayoutColumnRow>
                </summary>
                <Fieldset legend="">
                  <form className="rvo-form">
                    <LayoutColumnRow row={true} alignItems="end">
                      <TextInputField
                        label="E-mailadres"
                        helperText="Ontvang een e-mail als de inhoud van deze pagina w."
                      ></TextInputField>
                      <Button>Verzenden</Button>
                    </LayoutColumnRow>
                  </form>
                </Fieldset>
              </details>
            </LayoutColumnRow>
            <Heading type="h2" noMargins={true}>
              Op deze pagina:
            </Heading>
            <Grid columns="two" gap="xs">
              <Link showIcon="before" icon="pijl-omlaag" target="#" content="Stand van zaken 2024" noUnderline={true} />
              <Link showIcon="before" icon="pijl-omlaag" target="#" content="ISDE verbreed" noUnderline={true} />
              <Link showIcon="before" icon="pijl-omlaag" target="#" content="Stand van zaken 2024" noUnderline={true} />
              <Link
                showIcon="before"
                icon="pijl-omlaag"
                target="#"
                content="Cijfers per gemeente en provincie"
                noUnderline={true}
              />
            </Grid>
            <p>
              In 2024 is € 600 miljoen beschikbaar voor zonneboilers, (hybride) warmtepompen, isolatiemaatregelen,
              elektrische kookplaten en aansluitingen op een warmtenet. Jaarlijks komt er een nieuw budget beschikbaar.
              De ISDE loopt door tot 2030. Zakelijke gebruikers kunnen tot 31 december 2024 subsidie aanvragen voor
              kleinschalige windturbines. Hiervoor is in 2024 € 5 miljoen beschikbaar.
            </p>
            <p>
              {' '}
              De hoogte van het subsidiebedrag per apparaat of maatregel hangt af van het soort zonneboiler, warmtepomp
              of isolatie. En de energieprestatie daarvan. De indicatieve bedragen staan op de apparatenlijsten. Voor de
              aansluiting op een warmtenet geldt een vast bedrag van € 3.325 (aansluiting gerealiseerd voor 1 januari
              2024) of € 3.775 (aansluiting gerealiseerd op of na 1 januari 2024). Voor een elektrische kookplaat is het
              subsidiebedrag € 400.
            </p>
          </div>
        </main>
        <div className="rvo-section rvo-section--www rvo-section--coloured-bg rvo-section--grijs-3">
          <MaxWidthLayout size="lg">
            <div className="rvo-cards">
              <LayoutColumnRow size="md">
                <h2 className="utrecht-heading-2">Blijf op de hoogte</h2>
                <div className="rvo-cards-grid">
                  <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                    <div className="rvo-card-img-container">
                      <img src="images/www/mobiel.webp" className="rvo-card-img" />
                    </div>
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
                        <a href="#" className="rvo-link rvo-link--full-click">
                          Volg ons op social media
                        </a>
                      </h3>
                      <br />
                      <span className="rvo-rhs-update-component">
                        <Button kind="primary" size="sm">
                          Volg ons
                        </Button>
                      </span>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--w-link  rvo-card--md">
                    <div className="rvo-card-content">
                      <LayoutColumnRow size="sm">
                        <h2 className="utrecht-heading-2">Over ons</h2>
                        <LayoutColumnRow size="md">
                          <div className="rvo-card-content-item">
                            <Icon icon="laptop" size="2xl"></Icon>
                            <h3 className="utrecht-heading-3">
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Zaken regelen bij RVO
                              </a>
                            </h3>
                            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                              Alles over inloggen, machtigen, uw persoonsgegevens en onze rekeningnummers.
                            </p>
                          </div>
                          <div className="rvo-card-content-item">
                            <Icon icon="vrouw-met-laptop" size="2xl"></Icon>
                            <h3 className="utrecht-heading-3">
                              <a href="#" className="rvo-link rvo-link--no-underline">
                                Werken bij RVO
                              </a>
                            </h3>
                            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                              Leer onze organisatie kennen en vind vacatures.
                            </p>
                          </div>
                        </LayoutColumnRow>
                      </LayoutColumnRow>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--w-link rvo-card--md">
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
                        <a href="#" className="rvo-link rvo-link--full-click">
                          Zo kunnen we oneindig recyclen met onze nieuwe persmachine
                        </a>
                      </h3>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                        Financiële steun van MIA\Vamil hielp bij ontwikkeling proces om snijafval met een pers te
                        verwerken tot nieuwe grondstoffen.
                        <br />
                        <br />
                      </p>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing">
                        <strong>Jordy de Jong</strong>
                        <br />
                        <em>Customer success manager Probo</em>
                      </p>
                    </div>
                  </div>

                  <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                    <div className="rvo-card-img-container">
                      <img src="images/www/nieuwsbrief.webp" className="rvo-card-img" />
                    </div>
                    <div className="rvo-card-content">
                      <h3 className="utrecht-heading-3">
                        <a href="#" className="rvo-link rvo-link--full-click">
                          Blijf scherp met onze gratis, wekelijkse nieuwsbrief
                        </a>
                      </h3>
                      <br />
                      <span className="rvo-rhs-update-component">
                        <Button kind="primary" size="sm">
                          Aanmelden
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </LayoutColumnRow>
            </div>
          </MaxWidthLayout>
        </div>
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
      <div className="rvo-hide">
        {/* Slechte manier om texthelpers beschikbaar te maken */}
        <TextHelpers></TextHelpers>
      </div>
    </body>
  );
};

export default Notify;
