import { Footer, Header, Heading, Icon, LayoutColumnRow, MenuBar } from '@nl-rvo/components';
import '../common/filter.scss';

const Project = () => {
  return (
    <body className="rvo-theme">
      <Header link="#" />
      <LayoutColumnRow size="xl">
        <LayoutColumnRow size="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '/iframe.html?id=demo-pagina-s-projects-rvo-nl-home--default&viewMode=story',
              },
              {
                label: 'Programmes',

                link: '#',
              },
              {
                active: true,
                label: 'Projects',
                link: '/iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-filter--default',
              },
              {
                align: 'right',
                icon: 'zoek',
                label: 'Search',
                link: '#',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />

          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading noMargins={true}>Legal Opinion OC DR Congo</Heading>
            <span className="rvo-text rvo-text--subtle">
              <LayoutColumnRow row={true} size="xs">
                <Icon icon="klok" color="grijs-700"></Icon>Published: 2 March 2020 | 11:29
              </LayoutColumnRow>
            </span>
            <LayoutColumnRow row={true} size="xs">
              <Icon icon="bewerken" color="grijs-700"></Icon>Updated: 30 april 2021 | 13:49
            </LayoutColumnRow>

            <LayoutColumnRow size="xl">
              <div className="rvo-content">
                <p className="rvo-text rvo-text--no-margins">
                  The Orange Corners programme has been launched in DRC. This programme includes financial contributions
                  from private partners. The programme also has the ambition to be sustainable. In order to accommodate
                  these dimensions of the Orange Corners programme in DRC, legal advice concerning the Congolese law
                  needs to be obtained on contracts, governance structures and the establishment of legal entities.
                </p>
              </div>
            </LayoutColumnRow>
          </main>
          <div className="rvo-max-width-layout rvo-max-width-layout--md">
            <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--three">
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="digitaal-onderzoek" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project number
                  </Heading>
                  NL-KVK-27378529-POC19CD01A
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="budget" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Total budget
                  </Heading>
                  € 3,066
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="wereldbol" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Countries
                  </Heading>
                  Congo (the Democratic Republic of the)
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="document-met-vinkje" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project status
                  </Heading>
                  Finalized
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="map-vol-documenten" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Budget spent
                  </Heading>
                  100% spent
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="diploma-certificaat" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Programme
                  </Heading>
                  <a href="#" className="rvo-link">
                    PSD Toolkit – Phase 2
                  </a>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="opsomming" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Tied status
                  </Heading>
                  Untied
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="kalender-met-vlakken" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Startdate
                  </Heading>
                  20 February 2020
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="kalender-met-vinkje" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    End date
                  </Heading>
                  11 November 2021
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="envelop" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Contact
                  </Heading>
                  <a href="#" className="rvo-link">
                    iati@rvo.nl
                  </a>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="personen-arm-op-schouder" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project partners
                  </Heading>
                  Netherlands Enterprise Agency, Netherlands embassy in Kinshasa, DR Congo
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="vlag-driehoekig" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Sectors
                  </Heading>
                  Small and medium-sized enterprises (SME) development, Trade education/training
                </div>
              </div>
            </div>
          </div>
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
    </body>
  );
};

export default Project;
