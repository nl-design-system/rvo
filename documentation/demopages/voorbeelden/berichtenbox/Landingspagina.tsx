import { Button, Footer, Grid, Header, LayoutColumnRow, MenuBar } from '@nl-rvo/components';

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
        maxWidth="md"
      />
      <LayoutColumnRow size="3xl">
        <LayoutColumnRow size="xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--md">
            <LayoutColumnRow>
              <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--none rvo-hero">
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
              <Grid columns="two" gap="2xl">
                <div className="rvo-quote">
                  <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                    <div className="rvo-card__content">
                      <span className="rvo-text--italic rvo-text--subtle rvo-text--xl">
                        "Nu staat al mijn post van de overheid in de berichtenbox voor bedrijven"
                      </span>
                      <Grid columns="two">
                        <div className="rvo-quote__image"></div>
                        <div className="rvo-quote__person"></div>
                      </Grid>
                    </div>
                  </div>
                </div>
                <div className="rvo-quote">
                  "Nu staat al mijn post van de overheid in de berichtenbox voor bedrijven"
                </div>
              </Grid>
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
